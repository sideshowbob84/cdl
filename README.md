Mr. Berghorn's Cybersecurity Lab 🧪
Einführung
Willkommen in Mr. Berghorn's Cybersecurity Lab! Dieses interaktive Lab ist eine Simulation für Lehrer, Schüler und alle Cybersecurity-Interessierten. Es bietet eine sichere und lehrreiche Umgebung, um mehr über gängige Angriffsvektoren und Sicherheitsmaßnahmen zu lernen.

Die Aufgaben beinhalten:

Phishing-Quiz: Lerne, wie man echte von gefälschten E-Mails unterscheidet.
Brute-Force-Simulator: Verstehe die Gefahren schwacher Passwörter.
Social-Engineering-Simulation: Erlebe, wie Angreifer durch Täuschung Informationen sammeln können.
Passwortsicherheit: Analysiere die Stärke verschiedener Passwörter.
Updates und Patches: Verstehe, warum regelmäßige Sicherheitsupdates so wichtig sind.
Gobuster-Simulation: Entdecke versteckte Verzeichnisse wie ein echter Penetration Tester.
Das Lab ist so konzipiert, dass es sowohl für den Unterricht als auch für den Eigengebrauch geeignet ist.

Technische Anforderungen
Frontend: HTML, CSS und JavaScript
Backend: Node.js mit einem einfachen HTTP-Server
Hosting: Lokale Nutzung oder Deployment auf GitHub Pages und Render.
Installation und Lokale Nutzung
1. Voraussetzungen
Installiere Node.js (mindestens v14).
Klone dieses Repository:
bash
Kopieren
Bearbeiten
git clone https://github.com/dein-benutzername/cybersecurity-lab.git
cd cybersecurity-lab
2. Lokale Nutzung
Stelle sicher, dass alle Dateien im Projektverzeichnis vorhanden sind, einschließlich index.html, server.js und der Lab-Dateien.
Installiere erforderliche Abhängigkeiten (falls benötigt):
bash
Kopieren
Bearbeiten
npm install
Starte den Node.js-Server:
bash
Kopieren
Bearbeiten
node server.js
Öffne deinen Browser und rufe http://localhost:3000 auf, um das Lab zu nutzen.
Deployment auf GitHub Pages
Du kannst die statischen Dateien (wie index.html, bruteforce.html, etc.) über GitHub Pages hosten.

Repository erstellen:

Lade das Projekt in ein neues GitHub-Repository hoch:
bash
Kopieren
Bearbeiten
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin https://github.com/dein-benutzername/cybersecurity-lab.git
git push -u origin main
GitHub Pages aktivieren:

Gehe zu deinem Repository auf GitHub.
Klicke auf Settings > Pages.
Wähle den Branch main und speichere die Änderungen.
URL aufrufen:

Nach der Bereitstellung kannst du dein Lab unter der angegebenen GitHub Pages-URL nutzen, z. B. https://dein-benutzername.github.io/cybersecurity-lab.
Deployment auf Render
Wenn du das Lab mit einem echten Server (z. B. für interaktive Backend-Funktionen) bereitstellen möchtest, ist Render eine gute Option.

Repository mit Render verbinden:

Melde dich bei Render an.
Erstelle einen neuen Web Service.
Wähle dein GitHub-Repository aus.
Einstellungen anpassen:

Start-Befehl: node server.js
Build-Einstellungen: Render benötigt keine speziellen Build-Schritte für dieses Projekt.
URL erhalten:

Nach der Bereitstellung erhältst du eine URL wie https://dein-lab.onrender.com, unter der das Lab erreichbar ist.

Projektstruktur:

cybersecurity-lab/
├── index.html              # Startseite mit Aufgabenübersicht
├── bruteforce.html         # Seite für den Brute-Force-Simulator
├── phishingquiz.html       # Seite für das Phishing-Quiz
├── password-simulator.html # Seite zur Analyse von Passwortstärke
├── updates.html            # Seite für das Updates-und-Patches-Lab
├── dirbuster.html          # Gobuster-Simulation
├── secret-flag.html        # Seite für das versteckte Verzeichnis
├── server.js               # Node.js-Server
└── assets/                 # Bilder, Icons und andere statische Dateien


Lizenz
Dieses Projekt steht unter der MIT-Lizenz. Fühle dich frei, es anzupassen und zu erweitern!

