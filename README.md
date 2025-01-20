# Mr. Berghorn's Cybersecurity Lab 🧪

Willkommen im Cybersecurity Lab! Diese interaktive Umgebung ist darauf ausgelegt, grundlegende Konzepte der IT-Sicherheit zu demonstrieren. Es bietet praktische Übungen zu Themen wie Brute-Force-Angriffen, Phishing, Passwortsicherheit, Social Engineering, Directory Busting und der Notwendigkeit von Updates und Patches.

## Features
- **Interaktive Labs:** Simulierte Szenarien zu verschiedenen Cybersecurity-Themen.
- **Realistische Übungen:** Praxisnah gestaltete Aufgaben wie Phishing-Quiz, Brute-Force-Simulationen oder Verzeichnisscans.
- **Lernfokus:** Jede Aufgabe enthält Anleitungen, Erklärungen und Feedback.
- **Passwortgeschützte Sektionen:** Zugriff auf fortgeschrittene Übungen nur mit Passwort möglich.

## Voraussetzungen
Um dieses Lab lokal auszuführen, benötigst du:
- Node.js (Version 16 oder höher)
- npm (Node Package Manager)

Optional:
- Einen GitHub-Account, wenn du das Repository klonen möchtest.
- Ein kostenloses Konto bei [Render](https://render.com/) zur Veröffentlichung.

## Lokale Nutzung
1. **Repository klonen:**
   - Gehe zu deinem GitHub-Repository, klicke auf den grünen Button "Code" und kopiere die URL.
   - Öffne dein Terminal oder deine Eingabeaufforderung und führe den Befehl `git clone <repository-url>` aus.

2. **In das Projektverzeichnis navigieren:**
   - Wechsle in das Verzeichnis, das du gerade geklont hast.

3. **Abhängigkeiten installieren:**
   - Führe den Befehl `npm install` aus, um die erforderlichen Pakete zu installieren.

4. **Server starten:**
   - Führe den Befehl `node server.js` aus, um den lokalen Server zu starten.

5. **Im Browser öffnen:**
   - Gehe zu `http://localhost:3000`, um das Lab aufzurufen.

## Repository herunterladen
Falls du das Repository nicht klonen möchtest, kannst du es auch als ZIP-Datei herunterladen:
1. Gehe zu deinem Repository auf GitHub.
2. Klicke auf den grünen Button "Code" und wähle "Download ZIP" aus.
3. Entpacke die ZIP-Datei auf deinem Computer.
4. Folge den oben beschriebenen Schritten unter "Lokale Nutzung", um den Server zu starten.

## Deployment mit Render
1. Erstelle ein kostenloses Konto auf der [Render-Plattform](https://render.com/).
2. Gehe zu "New +" und wähle "Web Service" aus.
3. Verbinde dein GitHub-Repository mit Render.
4. Wähle die `main`-Branch deines Repositories aus.
5. Unter "Build Command" gibst du `npm install` ein.
6. Unter "Start Command" gibst du `node server.js` ein.
7. Klicke auf "Create Web Service" und warte, bis der Build abgeschlossen ist.
8. Deine Seite ist nun unter der von Render generierten URL erreichbar.

## Aufgaben im Lab
- **Phishing-Quiz:** Analysiere verdächtige E-Mails und erkenne Phishing-Versuche.
- **Brute-Force-Simulation:** Simuliere Angriffe auf schwache Passwörter.
- **Passwortsicherheit:** Teste Passwörter und erfahre, wie lange ein Angriff dauern würde.
- **Social-Engineering-Simulation:** Erlebe, wie leicht Angreifer Informationen erlangen können.
- **Updates und Patches:** Verstehe die Bedeutung von regelmäßigen Updates und Patches.
- **Directory Busting:** Finde versteckte Verzeichnisse mit einem simulierten Gobuster-Tool.



