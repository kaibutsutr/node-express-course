const express = require("express");
const app = express();
const port = 5000;
const { people } = require("./data"); // import people array

app.use(express.static("./methods-public")); // use these static files for the app
app.use(express.urlencoded({ extended: false })); // use urlencoder middleware to parse html body for data
app.use(express.json()); // this middleware parses data from JSON file type.

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people }); //send json object with success true and people array
});

app.post("/api/people", (req, res) => {
  const { name } = req.body; // destructure name property from the body.
  if (name) {
    res.status(201).json({ success: true, person: name }); // 201 is successfull post request. Send a Json file with new persons name
  } else {
    res.status(400).json({ success: false, msg: "please provide a name" }); // if form is empty, throw an error message in your req.body file
  }
});

app.post("/login", (req, res) => {
  const { name } = req.body; // destructure name property from the body. If exists then send welcome name, if not then send error.
  if (name) {
    res.status(200).send(`Login successful! Welcome ${name}`);
  } else {
    res.status(401).send("Login failed! Please enter your login info");
  }
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
