const express = require("express");
const app = express();
const port = 5000;
const people = require("./routes/people"); // import router from given folder
const auth = require("./routes/auth"); // import router from given folder

app.use(express.static("./methods-public")); // use these static files for the app
app.use(express.urlencoded({ extended: false })); // use urlencoder middleware to parse html body for data
app.use(express.json()); // this middleware parses data from JSON file type.

//controllers
app.use("/api/people", people); // set people router for /api/people url
app.use("/login", auth); //set login router for /login

//listen
app.listen(port, () => {
  console.log(`listening on port ${port}`); // listen on predefined port
});
