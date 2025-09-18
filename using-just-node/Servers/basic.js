const { log } = require("console");
const http = require("http");
//* Create a server

const server = http.createServer((req, res) => {
  console.log(`Received ${req.method} request for: ${req.url}`);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello world from Node.JS server");
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop de server");
});
