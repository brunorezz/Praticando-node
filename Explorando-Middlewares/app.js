const express = require("express");
const app = express();
const PORT = 3000;
//!Middleware
app.use((req, res, next) => {
  const error = new Error("Algo deu errado");
  next(error);
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/About", (req, res) => {
  res.send("About us");
});

//! Error handling Middleware
app.use((error, req, res, next) => {
    console.log('Error', error.message)
    res.send("Algo deu errado!")
})

app.listen(PORT, console.log("Server is up and running!"));
