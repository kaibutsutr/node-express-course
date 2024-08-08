//middleware works inbetween req and res
const logger = function (req, res, next) {
  //express.js automatically links req res and next from http api
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  next(); // go to next middleware, last one is res DONT FORGET THIS
};
module.exports = logger; // export this method
