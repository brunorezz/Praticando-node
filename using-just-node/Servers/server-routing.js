const { log } = require("console");
const http = require("http");
//* Create a server

const server = http.createServer((req, res) => {
  //* Set the content to plain
  res.setHeader("Content-type", "text/plain");
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Welcome to the homepage");
  } else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Welcome to the About page");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Contact us!");
  } else {
    res.statusCode = 404;
    res.end("404! Page not found");
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop de server");
});
