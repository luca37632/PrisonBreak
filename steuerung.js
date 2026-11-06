const standardTasten = {
  links: ["ArrowLeft", "KeyA"], rechts: ["ArrowRight", "KeyD"], springen: ["Space", "ArrowUp", "KeyW"],
  ducken: ["ArrowDown", "KeyS"], interagieren: ["KeyE"], rueckspulen: ["KeyR"], rakete: ["KeyQ"], pause: ["Escape"]
};
const aktionsNamen = { links: "Nach links", rechts: "Nach rechts", springen: "Springen", ducken: "Ducken",
  interagieren: "Schloss / Geheimgang", rueckspulen: "Zurückspulen", rakete: "Reserve-Rakete", pause: "Spiel pausieren" };
let tasten = structuredClone(standardTasten);
try {
  const alt = JSON.parse(localStorage.getItem("tastenbelegung-v1"));
  const belegt = new Set();
  if (alt && Object.keys(standardTasten).every(a => Array.isArray(alt[a]) && alt[a].length && alt[a].length <= 3 &&
    alt[a].every(code => typeof code === "string" && /^(Key[A-Z]|Digit[0-9]|Arrow(Left|Right|Up|Down)|Space|Shift(Left|Right)|Escape)$/.test(code) &&
      !belegt.has(code) && (belegt.add(code),true)))) tasten = alt;
} catch {}
function aktionZuTaste(code) { return Object.keys(tasten).find(aktion => tasten[aktion].includes(code)); }
function tastenName(code) {
  const namen = { Space:"Leertaste", ArrowLeft:"←", ArrowRight:"→", ArrowUp:"↑", ArrowDown:"↓", Escape:"Esc",
    ShiftLeft:"Links-Umschalt", ShiftRight:"Rechts-Umschalt" };
  return t(namen[code] || code?.replace(/^Key|^Digit/, "") || "Nicht belegt");
}
function tastenHinweise() {
  return { jump: tasten.springen.map(tastenName).join(" / "), rewind:tastenName(tasten.rueckspulen[0]),
    rocket:tastenName(tasten.rakete[0]), interact:tastenName(tasten.interagieren[0]), pause:tastenName(tasten.pause[0]) };
}
let wartendeTaste = null;
function tastenMeldung(text,werte) { document.getElementById("tastenMeldung").textContent = t(text,werte); }
function speichereTasten() {
  try { localStorage.setItem("tastenbelegung-v1",JSON.stringify(tasten)); tastenMeldung("Tasten gespeichert."); }
  catch { tastenMeldung("Tasten konnten nicht gespeichert werden."); }
  if (typeof leereSpielTasten === "function") leereSpielTasten();
  uebersetzeOberflaeche();
  if (typeof aktualisiereShop === "function") aktualisiereShop();
}
function zeichneTasten() {
  const liste = document.getElementById("tastenListe"); liste.replaceChildren();
  for (const [aktion,codes] of Object.entries(tasten)) {
    const zeile = document.createElement("div"); zeile.className="tastenZeile";
    const name = document.createElement("strong"); name.textContent=t(aktionsNamen[aktion]); zeile.append(name);
    const knoepfe=document.createElement("div"); knoepfe.className="tastenKnoepfe";
    for (let i=0;i<Math.max(standardTasten[aktion].length,codes.length);i++) {
      const gruppe=document.createElement("span");
      const b=document.createElement("button"); b.type="button"; b.dataset.aktion=aktion; b.dataset.platz=i;
      b.textContent=wartendeTaste?.aktion===aktion && wartendeTaste.index===i ? t("Taste drücken …") : tastenName(codes[i]);
      b.setAttribute("aria-label",t("Taste {n} für {aktion}",{n:i+1,aktion:t(aktionsNamen[aktion])}));
      b.onclick=()=>{wartendeTaste={aktion,index:i};tastenMeldung("Taste drücken …");zeichneTasten();liste.querySelector(`[data-aktion="${aktion}"][data-platz="${i}"]`).focus();};
      gruppe.append(b);
      if (codes[i] && codes.length>1) {
        const weg=document.createElement("button"); weg.type="button"; weg.className="tasteEntfernen"; weg.textContent="×";weg.title=t("Taste entfernen");
        weg.onclick=()=>{codes.splice(i,1);wartendeTaste=null;speichereTasten();zeichneTasten();};gruppe.append(weg);
      }
      knoepfe.append(gruppe);
    }
    zeile.append(knoepfe);liste.append(zeile);
  }
}
document.addEventListener("keydown",event=>{
  const dialog=document.getElementById("tastenDialog");
  if (!dialog?.open) return;
  if (!wartendeTaste) { if(event.key!=="Tab")event.stopPropagation();return; }
  event.preventDefault();event.stopImmediatePropagation();
  if(event.repeat)return;
  if(event.code==="Escape"){wartendeTaste=null;tastenMeldung("");zeichneTasten();return;}
  if(event.ctrlKey||event.altKey||event.metaKey||!/^(Key[A-Z]|Digit[0-9]|Arrow(Left|Right|Up|Down)|Space|Shift(Left|Right))$/.test(event.code)){
    tastenMeldung("Diese Taste ist für die Menübedienung reserviert.");return;
  }
  const {aktion,index}=wartendeTaste, andere=aktionZuTaste(event.code);
  if(andere && !(andere===aktion && tasten[aktion][index]===event.code)){
    tastenMeldung("Diese Taste wird bereits für {aktion} benutzt.",{aktion:t(aktionsNamen[andere])});return;
  }
  tasten[aktion][index]=event.code;wartendeTaste=null;speichereTasten();zeichneTasten();
},true);
document.getElementById("tastenOeffnen").onclick=()=>{
  if(spielt)pausiereSpiel();
  document.getElementById("einstellungen").open=false;wartendeTaste=null;zeichneTasten();tastenMeldung("");
  document.getElementById("tastenDialog").showModal();
};
document.getElementById("tastenFertig").onclick=()=>document.getElementById("tastenDialog").close();
document.getElementById("tastenDialog").addEventListener("close",()=>{wartendeTaste=null;leereSpielTasten();});
document.getElementById("tastenReset").onclick=()=>{
  tasten=structuredClone(standardTasten);wartendeTaste=null;speichereTasten();zeichneTasten();tastenMeldung("Standardtasten wiederhergestellt.");
};
