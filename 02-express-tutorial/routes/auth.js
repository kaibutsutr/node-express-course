const express = require("express"); // boilerplate code for router
const router = express.Router();

//login
router.post("/", (req, res) => {
  const { name } = req.body; // destructure name property from the body. If exists then send welcome name, if not then send error.
  if (name) {
    res.status(200).send(`Login successful! Welcome ${name}`);
  } else {
    res.status(401).send("Login failed! Please enter your login info");
  }
});

module.exports = router;
