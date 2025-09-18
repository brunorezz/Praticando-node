const { log } = require("console");
const http = require("http");
//* Create a server

const server = http.createServer((req, res) => {
  //* Set the content to plain
  res.setHeader("Content-type", "application/json");
  if (req.url === "/" && req.method === "GET") {
    res.end(JSON.stringify({ message: "Welcome to the API!" }));
    res.statusCode = 200;
  } else if (req.url === "/users" && req.method === "GET") {
    const users = [{ id: 1, name: "Bruno" }];
    res.statusCode = 200;
    res.end(JSON.stringify({ users }));
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
