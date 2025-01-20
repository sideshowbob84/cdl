Mr. Berghorn's Cybersecurity Lab
Willkommen im Cybersecurity Lab! Diese interaktive Umgebung ist darauf ausgelegt, grundlegende Konzepte der IT-Sicherheit zu demonstrieren. Es bietet praktische Übungen zu Themen wie Brute-Force-Angriffen, Phishing, Passwortsicherheit, Social Engineering, Directory Busting und der Notwendigkeit von Updates und Patches.

Features
Interaktive Labs: Simulierte Szenarien zu verschiedenen Cybersecurity-Themen.
Realistische Übungen: Praxisnah gestaltete Aufgaben wie Phishing-Quiz, Brute-Force-Simulationen oder Verzeichnisscans.
Lernfokus: Jede Aufgabe enthält Anleitungen, Erklärungen und Feedback.
Passwortgeschützte Sektionen: Zugriff auf fortgeschrittene Übungen nur mit Passwort möglich.
Voraussetzungen

Um dieses Lab lokal auszuführen, benötigst du:

Node.js (Version 16 oder höher)
npm (Node Package Manager)
Optional:

Einen GitHub-Account, wenn du das Repository klonen möchtest.
Ein kostenloses Konto bei Render zur Veröffentlichung.
Lokale Nutzung
Repository klonen:
Gehe zu deinem GitHub-Repository.
Klicke auf den grünen Button "Code" und kopiere die URL.
Öffne dein Terminal oder deine Eingabeaufforderung und führe git clone <repository-url> aus.
Navigiere in das Projektverzeichnis:
Gehe in das Verzeichnis, das du gerade geklont hast.
Installiere die Abhängigkeiten:
Führe npm install aus, um die erforderlichen Pakete zu installieren.
Starte den Server:
Führe node server.js aus, um den lokalen Server zu starten.
Öffne die Seite im Browser:
Gehe zu http://localhost:3000, um das Lab aufzurufen.
Repository herunterladen
Falls du das Repository nicht klonen möchtest, kannst du es auch als ZIP-Datei herunterladen:

Gehe zu deinem Repository auf GitHub.
Klicke auf den grünen Button "Code" und wähle "Download ZIP" aus.
Entpacke die ZIP-Datei auf deinem Computer.
Navigiere in das entpackte Verzeichnis.
Folge den oben beschriebenen Schritten unter "Lokale Nutzung", um den Server zu starten.
Deployment mit Render
Um das Lab online zu hosten, kannst du Render verwenden:

Erstelle ein kostenloses Konto auf der Render-Plattform.
Gehe zu "New +" und wähle "Web Service" aus.
Verbinde dein GitHub-Repository mit Render.
Wähle die main-Branch deines Repositories aus.
Unter "Build Command" gibst du npm install ein.
Unter "Start Command" gibst du node server.js ein.
Klicke auf "Create Web Service" und warte, bis der Build abgeschlossen ist.
Deine Seite ist nun unter der von Render generierten URL erreichbar.

Aufgaben im Lab
Phishing-Quiz: Analysiere verdächtige E-Mails und erkenne Phishing-Versuche.
Brute-Force-Simulation: Simuliere Angriffe auf schwache Passwörter.
Passwortsicherheit: Teste Passwörter und erfahre, wie lange ein Angriff dauern würde.
Social-Engineering-Simulation: Erlebe, wie leicht Angreifer Informationen erlangen können.
Updates und Patches: Verstehe die Bedeutung von regelmäßigen Updates und Patches.
Directory Busting: Finde versteckte Verzeichnisse mit einem simulierten Gobuster-Tool.
