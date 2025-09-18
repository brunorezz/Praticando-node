const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Store homepage"));

app.get("/products", (req, res) => res.send("Our products"));

app.get("/about", (req, res) => res.send("About us"));

app.get("/contact", (req, res) => res.send("Contact us"));

app.post("/signup", (req, res) => res.send("Register"))

app.listen(3000, () => [ console.log("Server running at http://localhost:3000") ])
