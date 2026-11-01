# Doom Player für iPad (PWA)

Webapp auf Basis von js-dos (DOSBox als WebAssembly, GPL-2.0). Das Repo enthält **kein** Doom-Material.
Beim Deploy lädt der Workflow `.github/workflows/pages.yml` die frei weitergebbare Shareware (id Software, v1.9)
vom idgames-Mirror, prüft den SHA-1 der `DOOM1.WAD` und legt sie als `doom-shareware.zip` in die Seite.

## Einmalig einrichten
1. Branch `doom-ipad-pwa` nach `master` mergen (der Workflow läuft nur auf `master`).
2. GitHub: Repo -> Settings -> Pages -> Source: **GitHub Actions**.
3. Unter Actions den Lauf "Deploy Doom Player to GitHub Pages" abwarten (ggf. manuell per "Run workflow" starten).
4. Auf dem iPad `https://silscheder.github.io/Claude/` (die URL steht auch im Deploy-Lauf) in Safari öffnen,
   dann Teilen -> "Zum Home-Bildschirm".

Hinweis: GitHub Pages ist bei kostenlosen Konten nur für öffentliche Repos verfügbar.

## Steuerung
js-dos blendet auf dem iPad eine Bildschirmtastatur und Touch-Steuerung ein. Externe Tastatur funktioniert ebenfalls.
Die Vollversion nur mit deiner eigenen, legal erworbenen Kopie über "Eigene Doom-Datei wählen".
