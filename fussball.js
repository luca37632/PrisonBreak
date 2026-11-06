// Neue Spielzuege bei jedem Laden; die SVG-Animation selbst laeuft ohne JavaScript-Timer.
function mischeFussball(svg) {
  const ns = "http://www.w3.org/2000/svg";
  const feld = svg.querySelector('#fussballplatz');
  if (!feld) return;
  const kinder = [...feld.querySelectorAll('.fussballkind')];
  const start = [[24,100],[115,80],[210,145],[335,90],[476,100],[385,150],[290,70],[165,110]];
  const frames = [{zeit:0, pos:start, ball:[250,95], tor:false}];
  const zufall = (a,b) => Math.round(a + Math.random() * (b-a));
  const begrenze = (n,a,b) => Math.max(a,Math.min(b,n));
  let pos = start.map(p=>[...p]);
  for(let runde=0;runde<12;runde++) {
    const team = runde%2 ? [5,6,7] : [1,2,3];
    // Fisher-Yates mischt die Passreihenfolge.
    for(let i=team.length-1;i>0;i--){const j=zufall(0,i);[team[i],team[j]]=[team[j],team[i]];}
    let ball = frames.at(-1).ball;
    const frame = (zeit,tor=false) => frames.push({zeit:runde*24+zeit,pos:pos.map(p=>[...p]),ball:[...ball],tor});
    for(let pass=0;pass<3;pass++) {
      pos=pos.map(([x,y],i)=>i===0||i===4 ? [x,zufall(80,112)] :
        Math.random()<.25 ? [x,y] : [begrenze(x+zufall(-100,100),65,435),begrenze(y+zufall(-45,45),45,165)]);
      ball=[pos[team[pass]][0]+5,pos[team[pass]][1]-2];
      frame(3+pass*5);frame(5+pass*5);
    }
    ball=[runde%2?-8:508,96];frame(16.2,true);frame(18,true);
    ball=[250,95];frame(18.05);
    pos=pos.map(([x,y],i)=>i===0||i===4?[x,100]:[begrenze(x+zufall(-65,65),65,435),zufall(50,160)]);
    pos[team[0]]=[245,97];frame(21);frame(24);
  }
  // Ein sanfter Rueckweg verbindet das Ende mit dem Anfang.
  frames.push({zeit:292,pos:start,ball:[250,95],tor:false});
  const zeiten=frames.map(f=>(f.zeit/292).toFixed(6)).join(';');
  function animation(parent,tag,attr,werte,discrete=false) {
    const a=document.createElementNS(ns,tag);
    for(const [k,v] of Object.entries({attributeName:attr,values:werte.join(';'),keyTimes:zeiten,dur:'292s',repeatCount:'indefinite',...(discrete?{calcMode:'discrete'}:{})}))a.setAttribute(k,v);
    if(tag==='animateTransform')a.setAttribute('type','translate');
    parent.append(a);return a;
  }
  kinder.forEach((kind,i)=>{
    kind.querySelector(':scope > animateTransform')?.remove();
    animation(kind,'animateTransform','transform',frames.map(f=>f.pos[i].join(' ')));
    const koerper=kind.querySelector(':scope > g');
    koerper.querySelector('.fussball-steht')?.remove();
    const laufen=koerper.querySelector(':scope > g');
    laufen.querySelectorAll(':scope > animate').forEach(a=>a.remove());
    // Vorhandene Rutschpose bleibt erhalten, wird nur waehrend kurzer Wege gezeigt.
    const rutschen=[...koerper.children].find(e=>e!==laufen);
    rutschen?.querySelectorAll(':scope > animate').forEach(a=>a.remove());
    const stehen=laufen.cloneNode(true);stehen.classList.add('fussball-steht');
    for(const use of stehen.querySelectorAll('use')) {
      const arme=(use.getAttribute('href')||use.getAttribute('xlink:href')||'').includes('arme');
      const p=document.createElementNS(ns,'path');
      p.setAttribute('d',arme?'M-5-34l-2 8 3 6M5-34l2 8-3 6':'M-4-18v17M4-18v17');
      p.setAttribute('stroke',use.getAttribute('stroke'));p.setAttribute('stroke-width',arme?'4.5':'5.5');p.setAttribute('stroke-linecap','round');p.setAttribute('fill','none');use.replaceWith(p);
    }
    koerper.append(stehen);
    const zustand=frames.map((f,n)=>{
      const next=frames[n+1];if(!next)return 'steht';
      const bewegt=f.pos[i].some((v,j)=>v!==next.pos[i][j]);
      return !bewegt?'steht':rutschen&&Math.random()<.08?'rutscht':'laeuft';
    });
    for(const [gruppe,art] of [[laufen,'laeuft'],[stehen,'steht'],[rutschen,'rutscht']])if(gruppe){
      gruppe.setAttribute('visibility','hidden');animation(gruppe,'animate','visibility',zustand.map(z=>z===art?'visible':'hidden'),true);
    }
  });
  const ball=feld.querySelector('#fussball');ball.querySelector('animateTransform')?.remove();
  animation(ball,'animateTransform','transform',frames.map(f=>f.ball.join(' ')));
  for(const text of feld.querySelectorAll(':scope > text')) {
    text.querySelectorAll('animate').forEach(a=>a.remove());
    animation(text,'animate','visibility',frames.map(f=>f.tor?'visible':'hidden'),true);
  }
}

async function ladeZufaelligenFussball() {
  try {
    // Beim direkten Oeffnen einer lokalen HTML-Datei nutzt das Spiel die vorbereiteten Wege.
    if(location.protocol==='file:')return;
    const antwort=await fetch('menue-rundfahrt.svg?v=20261106-neustart');
    if(!antwort.ok)return;
    const svg=new DOMParser().parseFromString(await antwort.text(),'image/svg+xml');
    mischeFussball(svg);
    panoramaDatei=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)],{type:'image/svg+xml'}));
    const hofAntwort=await fetch('spielhof.svg?v=20261106-neustart');
    if(hofAntwort.ok){
      const hof=new DOMParser().parseFromString(await hofAntwort.text(),'image/svg+xml');
      mischeFussball(hof);
      spielhofDatei=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(hof)],{type:'image/svg+xml'}));
    }
    zeigeTageszeit();
    document.querySelector('#spielhof image')?.setAttribute('href',panoramaAdresse(endlos?'endloswelt':'spielhof'));
  } catch { /* Die vorbereitete SVG bleibt bei einem Ladefehler sichtbar. */ }
}
