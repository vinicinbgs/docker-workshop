const http = require('node:http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log("passei por aqui");
  res.end('okay');
});

// Now that server is running
server.listen(8080, '0.0.0.0', () => {
    console.log('Server running');
}); 