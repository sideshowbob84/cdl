const http = require('http');

const hostname = '0.0.0.0'; // Erforderlich für Render
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hallo, deine Node.js-App läuft auf Render!');
});

server.listen(port, hostname, () => {
    console.log(`Server läuft auf http://${hostname}:${port}/`);
});
