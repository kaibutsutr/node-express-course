const express = require("express");
const router = express.Router();
const { people } = require("../data"); // import people array to use it here
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people"); // import people controller objects with its functions with destructuring

//people router. We have methods here for people url

router.get("/", getPeople); // imported getpeople function from controller

router.post("/", createPerson);

router.post("/postman", createPersonPostman);

//put
router.put("/:id", updatePerson);
//delete
router.delete("/:id", deletePerson);

//export router to main
module.exports = router;
