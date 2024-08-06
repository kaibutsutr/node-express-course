const express = require("express"); // bring express
const app = express(); //server

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
app.get("/", (req, res) => {
  res.send("Homepage");
});
