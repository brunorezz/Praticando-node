const express = require("express");
const app = express();
const PORT = 3000;
//!Middleware
app.use((req, res, next) => {
  console.log("Middleware called");
  next();
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/About", (req, res) => {
  res.send("About us");
});

app.listen(PORT, console.log("Server is up and running!"));
