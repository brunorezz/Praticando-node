const express = require("express");
//Initialize express
const app = express();

//Basic route
app.get("/", (req, res) => {
  res.send("Hello from express");
});

//Start server
app.listen( 3000, () => [ console.log("Server is running in localhost:3000") ] );
