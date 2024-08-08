const express = require("express");
const app = express();
const port = 5000;
const { people } = require("./data"); // import people array

app.use(express.static("./methods-public")); // use these static files for the app
app.use(express.urlencoded({ extended: false })); // use urlencoder middleware to parse html body for data
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people }); //send json object with success true and people array
});
app.post("/login", (req, res) => {
  const { name } = req.body; // parse name value from body
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please enter your login info");
  }
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
