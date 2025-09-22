const express = require("express");
const app = express();

const data = {
  "name": "Atomic Habits",
  "author": "James Clear",
  "pages": 320,
  "available": true
};

//!Start the server

app.listen(3000, () => {
  console.log("Server is up and running!");
});
