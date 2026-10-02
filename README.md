# Karinas Geburtstagswebsite – von Moritz

Die aktuelle, schlichtere Version mit allen neun Fotos, 30 Wünschen und dem persönlichen Brief von Moritz. Ohne Partyinformationen.

## Auf GitHub Pages veröffentlichen

1. Entpacke die ZIP-Datei auf deinem Computer.
2. Erstelle auf GitHub ein neues Repository, zum Beispiel `karina-30`. Mit GitHub Free kannst du GitHub Pages für ein öffentliches Repository nutzen. Die Website und die hochgeladenen Fotos sind dann öffentlich zugänglich.
3. Lade die **entpackten Dateien und den kompletten Ordner `assets`** in das Repository hoch (über **Add file → Upload files**; bei einem leeren Repository über **uploading an existing file**). Lade nicht nur die ZIP-Datei hoch.
4. `index.html`, `style.css`, `app.js` und der Ordner `assets` müssen direkt auf der obersten Ebene des Repositorys liegen. Speichere den Upload mit **Commit changes**.
5. Öffne im Repository **Settings → Pages**.
6. Wähle unter **Build and deployment → Source** die Option **Deploy from a branch**.
7. Wähle als Branch **main** und als Ordner **/ (root)**. Klicke auf **Save**.
8. Sobald GitHub fertig ist, erscheint unter **Settings → Pages** der Link zu deiner Website. Diesen Link kannst du Karina schicken.

Es ist kein Build-Befehl nötig. Die Seite läuft als normale HTML-Website. Die GitHub-Version benötigt keine ChatGPT-Anmeldung.

## Dateien

- `index.html`: Texte und Seitenaufbau
- `style.css`: Gestaltung für Handy und Computer
- `app.js`: Fotogalerie, Wünsche, Brief und Konfetti
- `assets/`: Alle neun Fotos im WebP-Format
- `.nojekyll`: Kennzeichnet die Seite als statische Website

Zum lokalen Anschauen öffne `index.html` im Browser. Für die Google-Schriftarten wird eine Internetverbindung benötigt; andernfalls werden Ersatzschriftarten verwendet.

## Später ändern

Texte und den Geburtstagsbrief kannst du in `index.html` bearbeiten. Die 30 Wünsche stehen in `app.js`. Änderungen auf dem Branch `main` werden nach der Verarbeitung durch GitHub Pages veröffentlicht.

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
