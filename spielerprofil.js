// Einmaliger Neustart der Level; danach bleibt neuer Fortschritt gespeichert.
try {
  if (localStorage.getItem("fortschritt-reset-20261106") !== "fertig") {
    for (const key of Object.keys(localStorage)) {
      if (/^level[123](Sterne|Bestzeit)/.test(key)) localStorage.removeItem(key);
    }
    localStorage.removeItem("raeuberCharakter");
    localStorage.setItem("alteRekordeUebernommen", "ja");
    localStorage.setItem("fortschritt-reset-20261106", "fertig");
  }
} catch {}
// Neue Rangliste: alte Eintraege entfernen, neue Rekorde bleiben gespeichert.
try {
  localStorage.removeItem("endlosRekorde-v1");
  localStorage.removeItem("hallOfFame-geheimwege1");
} catch {}
// Ein lokales Spielerprofil bleibt dasselbe, auch wenn sich der Name aendert.
let spielerProfil;
try { spielerProfil = JSON.parse(localStorage.getItem("spielerprofil-v1")); } catch {}
if (!spielerProfil || typeof spielerProfil.id !== "string") {
  let letzterName = "";
  try { letzterName = localStorage.getItem("letzterSpielername") || ""; } catch {}
  spielerProfil = { id: globalThis.crypto?.randomUUID?.() || "spieler-" + Date.now() + "-" + Math.random(),
    name: letzterName, namen: letzterName ? [letzterName] : [] };
}
if (!Array.isArray(spielerProfil.namen)) spielerProfil.namen = [spielerProfil.name].filter(Boolean);
function profilRekorde(daten) {
  const namen = new Set(spielerProfil.namen.map(n => n.toLocaleLowerCase()));
  const fremde = [], eigene = [];
  for (const eintrag of daten) {
    if (eintrag.spielerId === spielerProfil.id || (!eintrag.spielerId && namen.has(eintrag.name.toLocaleLowerCase()))) eigene.push(eintrag);
    else fremde.push(eintrag);
  }
  eigene.sort((a,b) => b.weite-a.weite || a.zeit-b.zeit);
  if (eigene.length) fremde.push({ ...eigene[0], spielerId: spielerProfil.id, name: spielerProfil.name });
  return fremde;
}
function profilUmbenennen(name) {
  spielerProfil.name = name;
  if (!spielerProfil.namen.includes(name)) spielerProfil.namen.push(name);
  try {
    localStorage.setItem("spielerprofil-v1", JSON.stringify(spielerProfil));
    localStorage.setItem("letzterSpielername", name);
    const daten = JSON.parse(localStorage.getItem("endlosRekorde-v2") || "[]");
    if (Array.isArray(daten)) {
      const gueltig = daten.filter(e => e && typeof e.name === "string" && Number.isFinite(e.weite) && Number.isFinite(e.zeit));
      localStorage.setItem("endlosRekorde-v2", JSON.stringify(profilRekorde(gueltig)));
    }
  } catch { /* Der aktuelle Lauf funktioniert auch ohne Browserspeicher. */ }
}
try { localStorage.setItem("spielerprofil-v1", JSON.stringify(spielerProfil)); } catch {}
