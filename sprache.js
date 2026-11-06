// Deutsche Originaltexte werden je nach gewählter Sprache übersetzt.
let sprache = "de";
const spielSprachen = ["de", "en", "es", "fr"];
try { const gespeichert = localStorage.getItem("sprache"); if (spielSprachen.includes(gespeichert)) sprache = gespeichert; } catch {}
const englischeTexte = {
  "Namen speichern": "Save name",
  "Du kannst deinen Namen alle 14 Tage ändern.": "You can change your name every 14 days.",
  "Nächste Namensänderung ab {datum}.": "Next name change available from {datum}.",
  "Dein Name kann noch nicht geändert werden.": "You cannot change your name yet.",
  "Coins": "Coins", "Level": "Level", "Cafeteria": "Cafeteria", "Hall of Fame": "Hall of Fame",
  "Einstellungen": "Settings", "Sprache": "Language", "Tastenbelegung": "Keybinds",
  "Stadtgroove · Disco": "City Groove · Disco", "Skyline · House": "Skyline · House", "Fluchtplan · Synthwave": "Escape Plan · Synthwave",
  "Nacht im Menü": "Night in the menu", "Menü-Song": "Menu song", "Musik": "Music", "Geräusche": "Sound effects",
  "Stadtlichter · Lo-Fi": "City Lights · Lo-Fi", "Nachtfahrt · Synthpop": "Night Drive · Synthpop",
  "Mondschein · Walzer": "Moonlight · Waltz", "Hinterhof · Funk": "Backyard · Funk",
  "Pixel-Flucht · Arcade": "Pixel Escape · Arcade", "Hafenruhe · Ambient": "Quiet Harbour · Ambient",
  "Letzte Bahn · Indie-Pop": "Last Train · Indie Pop", "Morgenrot · Pop-R&B": "Sunrise · Pop R&B",
  "Dein Coin-Guthaben": "Your coin balance", "Zellentrakt / Hauptmenü": "Cell block / Main menu",
  "Level auswählen": "Choose a level", "Fähigkeit auswählen": "Choose an ability", "Aussehen bearbeiten": "Edit appearance",
  "Coin-Shop": "Coin Shop", "Coin-Shop schließen": "Close Coin Shop", "Schließen (Escape)": "Close (Escape)",
  "Deine gesammelten Münzen": "Your collected coins",
  "Ein Vorteil pro Runde. Dein Kauf gilt für den nächsten gewerteten Lauf und wird beim Start verbraucht. Bei einem Neustart brauchst du einen neuen Kauf.": "One perk per run. Your purchase applies to your next scored run and is used when you start. Restarting requires a new purchase.",
  "Von kleinen Hilfen bis zu starken Vorteilen für Rekordversuche:": "From small boosts to powerful perks for record attempts:",
  "Zusätzliches Herz · Nur Level 1–3": "Extra heart · Levels 1–3 only",
  "Sprungschuhe · Alle Sprünge etwas höher": "Jump shoes · Jump a little higher every time",
  "Rettungsuhr · Einmal zusätzlich 3 Sekunden zurückspulen ({rewind})": "Rescue watch · One extra 3-second rewind ({rewind})",
  "Reserve-Rakete · Einmal mit {rocket} für 3 Sekunden zünden": "Spare rocket · Press {rocket} once for a 3-second boost",
  "Rakete hält eine Sekunde länger": "Rockets last one second longer",
  "Kauf zurücknehmen · Coins zurück": "Cancel purchase · Refund coins", "Nächste Runde ✓": "Next run ✓",
  "Gekauft! Genau dieser Vorteil gilt für deinen nächsten Lauf.": "Purchased! This perk applies to your next run.",
  "Dein Browser konnte den Kauf nicht speichern.": "Your browser could not save the purchase.",
  "Kauf zurückgenommen. Deine Coins sind wieder da.": "Purchase cancelled. Your coins have been refunded.",
  "Dein nächster Lauf": "Your next run", "Wer spielt?": "Who is playing?", "Spielername": "Player name", "Dein Name": "Your name",
  "Mit diesem Namen starten": "Start with this name", "Neuen Namen eingeben": "Change your name", "Zurück": "Back",
  "Hall of Fame schließen": "Close Hall of Fame", "Bestzeiten / Auf diesem Browser": "Records / In this browser",
  "Distanzrekorde / Auf diesem Browser": "Distance records / In this browser",
  "Top 10 der endlosen Flucht. Die größte Entfernung steht auf Platz 1. Dein Name gehört zu deinem Spielerprofil. Ein neuer Name benennt deinen Eintrag um.": "Endless Escape top 10. The longest distance takes first place. Your name belongs to your player profile. Changing it renames your existing entry.",
  "Platz": "Rank", "Spieler": "Player", "Entfernung": "Distance", "Platz frei": "Empty place",
  "Fluchtplan / Welt 01": "Escape plan / World 01", "Gefängnis · Levelauswahl": "Prison · Level selection",
  "∞ · Endlose Flucht · Distanzrekord": "∞ · Endless Escape · Distance record",
  "Jede geschaffte Schwierigkeit bringt einen Levelstern.": "Completing each difficulty earns one level star.",
  "1 · Der Ausbruch": "1 · The Breakout", "2 · Die Stadt": "2 · The City",
  "3 · Dachstrecke ausprobieren": "3 · Try the rooftops", "3 · Dachstrecke ausprobieren (Proberunde)": "3 · Try the rooftops (practice run)",
  "3 · Über die Dächer": "3 · Over the Rooftops", "Zurück zum Hauptmenü": "Back to the main menu",
  "Level 01 / Verfolgung": "Level 01 / Chase", "Schwierigkeit wählen": "Choose difficulty",
  "Wie schwierig soll die Verfolgung sein?": "How challenging should the chase be?",
  "Leicht · 30 Sekunden": "Easy · 30 seconds", "Mittel · 20 Sekunden": "Medium · 20 seconds", "Schwer · 10 Sekunden": "Hard · 10 seconds",
  "Zurück zur Levelauswahl": "Back to level selection", "Zur Levelauswahl": "Level selection",
  "Häftlingsakte / Fähigkeiten": "Inmate file / Abilities", "Räuber": "Robber", "Hochspringer": "High jumper", "Ausdauerräuber": "Tough robber", "Zeitläufer": "Time runner",
  "Startet mit drei Herzen und springt normal hoch.": "Starts with three hearts and a normal jump.",
  "Springt höher. Mit der Sprungfeder kommst du noch höher.": "Jumps higher. The spring power-up adds even more height.",
  "Startet mit vier Herzen. Du kannst einen Treffer mehr einstecken.": "Starts with four hearts. You can take one extra hit.",
  "Drücke {rewind}, um zweimal pro Level je drei Sekunden zurückzuspulen.": "Press {rewind} to rewind three seconds, twice per level.",
  "Mit welchem Skin möchtest du spielen?": "Which appearance would you like to use?",
  "Vorgegebener Skin der Figur": "Character's default appearance", "Mein eigener Skin": "My custom appearance",
  "Auswahl übernehmen und zurück": "Apply selection and go back", "Von Anfang an verfügbar": "Available from the start",
  "Schaffe Level": "Complete level", "Freigeschaltet nach Level": "Unlocked after level",
  "Häftlingsakte / Profil": "Inmate file / Profile", "Dein Räuber in seiner Gefängniszelle": "Your robber in their prison cell",
  "Hautfarbe": "Skin colour", "Frisur": "Hairstyle", "Kurz": "Short", "Lang": "Long", "Locken": "Curly", "Irokesenschnitt": "Mohawk",
  "Pferdeschwanz": "Ponytail", "Glatze": "Bald", "Haarfarbe": "Hair colour", "Bart": "Beard", "Ohne Bart": "No beard", "Schnauzbart": "Moustache", "Vollbart": "Full beard",
  "Augenfarbe": "Eye colour", "Gesichtsausdruck": "Expression", "Neutral": "Neutral", "Grinsend": "Grinning", "Entschlossen": "Determined", "Überrascht": "Surprised",
  "Halskette": "Necklace", "Keine Kette": "No necklace", "Feine Goldkette": "Fine gold chain", "Feine Silberkette": "Fine silver chain",
  "Dicke goldene Panzerkette": "Thick gold chain", "Silberkette mit Blitzanhänger": "Silver chain with lightning pendant",
  "Anzugfarbe": "Outfit colour", "Schuhfarbe": "Shoe colour", "Häftlingsnummer": "Inmate number", "Eine bis drei Ziffern": "One to three digits",
  "Speichern und zurück": "Save and go back", "Ein Herz verloren": "Heart lost", "Keine Herzen mehr": "No hearts left",
  "Vom letzten Checkpoint weiter": "Continue from the last checkpoint", "Vom Levelanfang weiter": "Continue from the start", "Hier weiterfliehen": "Continue escaping here",
  "Pause": "Paused", "Kurz durchatmen": "Take a breather", "Deine Zeit bleibt stehen.": "Your timer is paused.",
  "Weiterspielen · {pause}": "Resume · {pause}", "Runde verlassen · Levelauswahl": "Leave run · Level selection",
  "Der Versuch ist vorbei.": "The run is over.", "Proberunde ohne Münzgutschrift.": "Practice run: no coins awarded.",
  "Coins gutgeschrieben.": "coins credited.", "Coins konnten nicht gespeichert werden.": "Coins could not be saved.",
  "Du hast noch ein Herz.": "You have one heart left.", "Du hast noch": "You have", "Herzen.": "hearts left.", "Strecke:": "Distance:",
  "Zusätzliches Herz · automatisch beim Start": "Extra heart · Applied at the start", "Längere Raketen · automatisch beim Einsammeln": "Longer rockets · Applied when collected",
  "Sprungschuhe · Springen mit {jump}": "Jump shoes · Jump with {jump}", "Reserve-Rakete · {rocket} zum Zünden": "Spare rocket · Press {rocket} to activate",
  "Reserve-Rakete · bereits verbraucht": "Spare rocket · Already used", "Rettungsuhr · {rewind} zum Zurückspulen": "Rescue watch · Press {rewind} to rewind",
  "Deine Zelle": "Your cell", "Ausgang →": "Exit →", "Zum Schloss →": "To the lock →", "Daneben – versuch es erneut": "Missed – try again",
  "{interact} drücken, wenn der Zeiger im Grün ist": "Press {interact} when the pointer is in the green",
  "Wäscherei": "Laundry", "Bücherei": "Library", "Wachbereich": "Guard station", "Zellentrakt": "Cell block", "Innenhof →": "Prison yard →",
  "POLIZEI": "POLICE", "PARKHAUS · EINFAHRT": "CAR PARK · ENTRANCE", "Hier landen ↓": "Land here ↓",
  "Durch den Geheimgang …": "Through the secret passage…", "Beste Weite:": "Best distance:", "Noch keine Bestzeit": "No best time yet", "Bestzeit": "Best time",
  "Stufe": "Stage", "{rocket}: Reserve-Rakete": "{rocket}: Spare rocket", "{rewind}: 3 s zurück ({n}×)": "{rewind}: Rewind 3 s ({n}×)",
  "Rakete:": "Rocket:", "Federsprünge:": "Spring jumps:", "Rekordzeit:": "Record time:", "Neuer Rekord!": "New record!",
  "Level {n} geschafft!": "Level {n} complete!", "Proberunde ohne Münzgutschrift": "Practice run: no coins awarded", "Coins · Guthaben:": "coins · Balance:",
  "Coins konnten nicht gespeichert werden": "Coins could not be saved", "Laufzeit": "Run time",
  "Endlose Flucht · normaler Räuber · nur ein Leben · zunehmende Schwierigkeit.": "Endless Escape · Normal robber · One life · Increasing difficulty.",
  "Name beibehalten oder deinen bisherigen Eintrag umbenennen?": "Keep your name or rename your existing entry?",
  "Gib einen Namen für deine Rekorde ein.": "Enter a name for your records.", "Bitte gib einen Spielernamen ein.": "Please enter a player name.",
  "/ Proberunde ohne Wertung": "/ Unscored practice run", "/ Verfolgung": "/ Chase",
  "Nach links": "Move left", "Nach rechts": "Move right", "Springen": "Jump", "Ducken": "Crouch", "Schloss": "Lock",
  "Zurückspulen": "Rewind", "Reserve-Rakete": "Spare rocket", "Spiel pausieren": "Pause game",
  "Klicke auf eine Taste und drücke die gewünschte neue Taste. Escape bricht die Änderung ab.": "Click a binding and press the new key. Escape cancels the change.",
  "Standardtasten wiederherstellen": "Restore default keys", "Fertig": "Done", "Taste drücken …": "Press a key…",
  "Diese Taste wird bereits für {aktion} benutzt.": "This key is already used for {aktion}.", "Diese Taste ist für die Menübedienung reserviert.": "This key is reserved for menus.",
  "Taste {n} für {aktion}": "Key {n} for {aktion}", "Leertaste": "Space", "Links-Umschalt": "Left Shift", "Rechts-Umschalt": "Right Shift",
  "Links-Strg": "Left Ctrl", "Rechts-Strg": "Right Ctrl", "Nicht belegt": "Unassigned", "Taste entfernen": "Remove binding",
  "Mindestens eine Taste muss belegt bleiben.": "At least one key must remain assigned.", "Tasten gespeichert.": "Key bindings saved.",
  "Tasten konnten nicht gespeichert werden.": "Could not save key bindings.", "Standardtasten wiederhergestellt.": "Default keys restored."
};
const uebersetzungen = { en: englischeTexte, ...weitereUebersetzungen };
const rueckwaerts = new Map(Object.values(uebersetzungen).flatMap(texte => Object.entries(texte).map(([de,wert]) => [wert,de])));
const sprachQuellen = new WeakMap();
function t(text, werte = {}) {
  const roh = String(text), key = roh.trim();
  const vor = roh.match(/^\s*/)[0], nach = roh.match(/\s*$/)[0];
  const format = uebersetzungen[sprache]?.[key] ?? key;
  if (!format.includes("{")) return vor + format + nach;
  const parameter = { ...(globalThis.tastenHinweise?.() || {}), ...werte };
  return vor + format.replace(/\{(\w+)\}/g, (alle,k) => parameter[k] ?? alle) + nach;
}
function uebersetzeOberflaeche() {
  document.documentElement.lang = sprache;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode, parent = node.parentElement;
    if (!parent || parent.closest('script,style,[data-spielername],#tastenListe,[data-i18n-dynamisch]')) continue;
    const text = node.nodeValue, key = text.trim();
    let quelle = sprachQuellen.get(node);
    if (!quelle) {
      const de = Object.hasOwn(englischeTexte,key) ? key : rueckwaerts.get(key);
      if (!de) continue;
      quelle = text.replace(key,de); sprachQuellen.set(node,quelle);
    }
    node.nodeValue = t(quelle);
  }
  for (const el of document.querySelectorAll('[title],[aria-label],[placeholder]')) {
    for (const attr of ['title','aria-label','placeholder']) {
      if (!el.hasAttribute(attr)) continue;
      const data = 'i18n'+attr.replace(/-/g,'');
      const quelle = el.dataset[data] || rueckwaerts.get(el.getAttribute(attr)) || el.getAttribute(attr);
      el.dataset[data] = quelle; el.setAttribute(attr,t(quelle));
    }
  }
}
let panoramaDatei = "menue-rundfahrt.svg?v=20261106-neustart";
let endlosDatei = "endloswelt.svg?v=20261106-navigation";
let spielhofDatei = "spielhof.svg?v=20261106-neustart";
function panoramaAdresse(ansicht = "menue") {
  const ziel = sprache !== "de" ? ansicht + "-" + sprache : ansicht === "menue" ? "" : ansicht;
  return (ansicht === "spielhof" ? spielhofDatei : ansicht === "endloswelt" ? endlosDatei : panoramaDatei) + (ziel ? "#"+ziel : "");
}
