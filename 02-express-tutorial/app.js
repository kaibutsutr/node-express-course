const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//how to initiate express js

app.use(express.static("./public"));
// put your static files here in this folder. static means server wont change it. Like css,image,logo and js files.

app.get("/", (req, res) => {
  res.status(200).send("Homepage");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});
app.all("*", (req, res) => {
  res.status(404).send("Page not Found!!!"); //200 success 404 failure
});
