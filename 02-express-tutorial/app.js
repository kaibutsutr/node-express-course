const express = require("express");
const app = express();
const path = require("path"); //node path for files
const port = 3000;
const { products } = require("./data"); //export data.js as products object

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//middleware works inbetween req and res
const logger = function (req, res, next) {
  //express.js automatically links req res and next from http api
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  next(); // go to next middleware, last one is res DONT FORGET THIS
};

app.get("/", logger, (req, res) => {
  res.send("Homepage v2");
});
app.get("/about", logger, (req, res) => {
  res.send("About v2");
});
