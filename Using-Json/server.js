const express = require("express");
const app = express();

app.use(express.json());

//! Sending JSON data as response
app.post("/", (req, res) => {
  res.json({ message: "Welcome to Express", author: "Bruno" });
});

// Making post request
app.post("/books", (req, res) => {
  console.log(req.body);
});

//!Start the server

app.listen(3000, () => {
  console.log("Server is up and running!");
});
