const express = require("express");
//Initialize express
const app = express();

//Basic route
app.get("/", (req, res) => {
  res.send("Hello from express");
});

// About route
app.get("/about", (req, res) => {
  res.send("About us page");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact us page");
});

//Sign up route
app.post('/register', (req, res) => {
    res.send('Register route')
})

app.get('/register', (req, res) => {
    res.send('Register route')
})

//Start server
app.listen(3000, () => [
  console.log("Server is running in http://localhost:3000"),
]);
