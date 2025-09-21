const express = require("express");

//!Init Express
const app = express();

//! Define Routes
app.get("/", (req, res) => res.send("Store homepage"));

app.get("/products", (req, res) => res.send("Our products"));

// app.get("/product/:id", (req, res) => console.log(req.params));

// SQuery String
app.get("/Products/search", (req, res) => {
    console.log(req.query)
  res.send("Query string demo");
});

app.get("/about", (req, res) => res.send("About us"));

app.get("/contact", (req, res) => res.send("Contact us"));

app.post("/signup", (req, res) => res.send("Register"));

//! Start Server
app.listen(3000, () => [
  console.log("Server running at http://localhost:3000"),
]);
