const http = require("http"); //create http obj
const server = http.createServer((req, res) => {
  //create a server
  console.log("user hit the server");
  res.end("Home Page"); // every server must have a response end point
});
server.listen(5000); // work on port 5000 its not taken
