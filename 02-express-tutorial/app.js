const http = require("http"); //create http obj
const server = http.createServer((req, res) => {
  //create a server
  console.log("user hit the server");
  //   res.end("Home Page"); // every server must have a response end point
  const url = req.url; // get url
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" }); //metadata
    res.write("<h1>This is Homepage</h1>"); //body
    res.end(); //endpoint
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" }); //metadata
    res.write("<h1>This is About</h1>"); //body
    res.end(); //endpoint
  }

  //404 page
  else {
    res.writeHead(404, { "content-type": "text/html" }); //metadata error code
    res.write("<h1>Page not Found</h1>"); //body
    res.end(); //endpoint
  }
});
server.listen(5000); // work on port 5000 its not taken
