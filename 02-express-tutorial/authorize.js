const authorize = (req, res, next) => {
  const { user } = req.query; // read the user value from query
  if (user) {
    // if it has user data, set it as req.user so we can record and use it
    req.user = user;
    console.log(user);
    next(); // dont forget this since it needs to read next function
  } else {
    // if user value is empty then give 401 unauthorized error
    res.status(401).send("unauthorized entry"); // dont put next here since we dont want to send more data
    // next();  // we are sending two res. sends in one request which gives error
  }
};
module.exports = authorize;
