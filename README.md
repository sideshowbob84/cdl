<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Mr. Berghorn's Cybersecurity Lab</title>
</head>
<body>
    <h1>Mr. Berghorn's Cybersecurity Lab 🧪</h1>
    <p>Willkommen im Cybersecurity Lab! Diese interaktive Umgebung ist darauf ausgelegt, grundlegende Konzepte der IT-Sicherheit zu demonstrieren. Es bietet praktische Übungen zu Themen wie Brute-Force-Angriffen, Phishing, Passwortsicherheit, Social Engineering, Directory Busting und der Notwendigkeit von Updates und Patches.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Interaktive Labs:</strong> Simulierte Szenarien zu verschiedenen Cybersecurity-Themen.</li>
        <li><strong>Realistische Übungen:</strong> Praxisnah gestaltete Aufgaben wie Phishing-Quiz, Brute-Force-Simulationen oder Verzeichnisscans.</li>
        <li><strong>Lernfokus:</strong> Jede Aufgabe enthält Anleitungen, Erklärungen und Feedback.</li>
        <li><strong>Passwortgeschützte Sektionen:</strong> Zugriff auf fortgeschrittene Übungen nur mit Passwort möglich.</li>
    </ul>

    <h2>Voraussetzungen</h2>
    <p>Um dieses Lab lokal auszuführen, benötigst du:</p>
    <ul>
        <li>Node.js (Version 16 oder höher)</li>
        <li>npm (Node Package Manager)</li>
    </ul>
    <p>Optional:</p>
    <ul>
        <li>Einen GitHub-Account, wenn du das Repository klonen möchtest.</li>
        <li>Ein kostenloses Konto bei <a href="https://render.com/" target="_blank">Render</a> zur Veröffentlichung.</li>
    </ul>

    <h2>Lokale Nutzung</h2>
    <ol>
        <li><strong>Repository klonen:</strong>
            <p>Gehe zu deinem GitHub-Repository, klicke auf den grünen Button "Code" und kopiere die URL. Öffne dein Terminal oder deine Eingabeaufforderung und führe den Befehl <code>git clone &lt;repository-url&gt;</code> aus.</p>
        </li>
        <li><strong>In das Projektverzeichnis navigieren:</strong>
            <p>Wechsle in das Verzeichnis, das du gerade geklont hast.</p>
        </li>
        <li><strong>Abhängigkeiten installieren:</strong>
            <p>Führe den Befehl <code>npm install</code> aus, um die erforderlichen Pakete zu installieren.</p>
        </li>
        <li><strong>Server starten:</strong>
            <p>Führe den Befehl <code>node server.js</code> aus, um den lokalen Server zu starten.</p>
        </li>
        <li><strong>Im Browser öffnen:</strong>
            <p>Gehe zu <code>http://localhost:3000</code>, um das Lab aufzurufen.</p>
        </li>
    </ol>

    <h2>Repository herunterladen</h2>
    <p>Falls du das Repository nicht klonen möchtest, kannst du es auch als ZIP-Datei herunterladen:</p>
    <ol>
        <li>Gehe zu deinem Repository auf GitHub.</li>
        <li>Klicke auf den grünen Button "Code" und wähle "Download ZIP" aus.</li>
        <li>Entpacke die ZIP-Datei auf deinem Computer.</li>
        <li>Folge den oben beschriebenen Schritten unter "Lokale Nutzung", um den Server zu starten.</li>
    </ol>

    <h2>Deployment mit Render</h2>
    <ol>
        <li>Erstelle ein kostenloses Konto auf der <a href="https://render.com/" target="_blank">Render-Plattform</a>.</li>
        <li>Gehe zu "New +" und wähle "Web Service" aus.</li>
        <li>Verbinde dein GitHub-Repository mit Render.</li>
        <li>Wähle die <code>main</code>-Branch deines Repositories aus.</li>
        <li>Unter "Build Command" gibst du <code>npm install</code> ein.</li>
        <li>Unter "Start Command" gibst du <code>node server.js</code> ein.</li>
        <li>Klicke auf "Create Web Service" und warte, bis der Build abgeschlossen ist.</li>
        <li>Deine Seite ist nun unter der von Render generierten URL erreichbar.</li>
    </ol>

    <h2>Aufgaben im Lab</h2>
    <ul>
        <li><strong>Phishing-Quiz:</strong> Analysiere verdächtige E-Mails und erkenne Phishing-Versuche.</li>
        <li><strong>Brute-Force-Simulation:</strong> Simuliere Angriffe auf schwache Passwörter.</li>
        <li><strong>Passwortsicherheit:</strong> Teste Passwörter und erfahre, wie lange ein Angriff dauern würde.</li>
        <li><strong>Social-Engineering-Simulation:</strong> Erlebe, wie leicht Angreifer Informationen erlangen können.</li>
        <li><strong>Updates und Patches:</strong> Verstehe die Bedeutung von regelmäßigen Updates und Patches.</li>
        <li><strong>Directory Busting:</strong> Finde versteckte Verzeichnisse mit einem simulierten Gobuster-Tool.</li>
    </ul>


</body>
</html>
