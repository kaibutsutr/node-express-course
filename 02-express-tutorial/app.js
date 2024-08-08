const express = require("express");
const app = express();
const path = require("path"); //node path for files
const port = 3000;
const { products } = require("./data"); //export data.js as products object
const logger = require("./logger"); // import logger function
app.use(logger); // .middleware function. use logger function on every call

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Homepage v2");
});
app.get("/about", (req, res) => {
  res.send("About v2");
});
