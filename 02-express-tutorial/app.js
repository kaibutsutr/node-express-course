const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.status(200).send("Homepage");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});
app.all("*", (req, res) => {
  res.status(404).send("Page not Found!!!");
});
