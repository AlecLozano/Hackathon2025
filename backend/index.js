// Import the http module
const http = require('http');

// Create a server that responds with 'Hello World' to all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

// The server listens on port 3000
server.listen(4000, () => {
  console.log('Server is running at http://localhost:4000/');
});
