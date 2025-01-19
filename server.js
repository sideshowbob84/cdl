const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const hostname = '0.0.0.0';
const port = 3000;

// Dummy-Daten für Logins
const users = {
    admin: "admin123", // Passwort für Admin
    user: "user123"    // Passwort für normalen User
};

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // HTML-Login-Seite ausliefern
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('login.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Fehler beim Laden der Seite!');
            } else {
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/login') {
        // Login-Daten verarbeiten
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { username, password } = querystring.parse(body);

            // Login prüfen
            if (users[username] && users[username] === password) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`Erfolgreich eingeloggt als ${username}`);
            } else {
                res.statusCode = 401;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Login fehlgeschlagen: Benutzername oder Passwort falsch!');
            }
        });
    } else {
        // 404-Seite
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Seite nicht gefunden!');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server läuft auf http://${hostname}:${port}/`);
});
