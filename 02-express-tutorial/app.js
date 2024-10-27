const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("./methods-public")); // use these static files for the app
app.use(express.urlencoded({ extended: false })); // use urlencoder middleware to parse html body for data
app.use(express.json()); // this middleware parses data from JSON file type.
app.use("/api/people", people); // use people router for /api/people url

//login
app.post("/login", (req, res) => {
  const { name } = req.body; // destructure name property from the body. If exists then send welcome name, if not then send error.
  if (name) {
    res.status(200).send(`Login successful! Welcome ${name}`);
  } else {
    res.status(401).send("Login failed! Please enter your login info");
  }
});

//listen
app.listen(port, () => {
  console.log(`listening on port ${port}`); // listen on predefined port
});
