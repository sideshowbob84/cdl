const fs = require('fs');
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Fehler beim Laden der Seite!');
        } else {
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server läuft auf http://${hostname}:${port}/`);
});
