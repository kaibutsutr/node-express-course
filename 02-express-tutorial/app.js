const express = require("express");
const app = express();
const port = 5000;
const { people } = require("./data"); // import people array

app.use(express.static("./methods-public")); // use these static files for the app
app.use(express.urlencoded({ extended: false })); // use urlencoder middleware to parse html body for data
app.use(express.json()); // this middleware parses data from JSON file type.

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people }); //send json object with success true and people array
});

app.post("/api/people", (req, res) => {
  const { name } = req.body; // destructure name property from the body.
  if (name) {
    res.status(201).json({ success: true, person: name }); // 201 is successfull post request. Send a Json file with new persons name
  } else {
    res.status(400).json({ success: false, msg: "please provide a name" }); // if form is empty, throw an error message in your req.body file.Bad request
  }
});

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body; // destructure name property from the body.
  if (name) {
    res.status(201).json({ success: true, data: [...people, { name: name }] }); // add name data to at the end of people array  ... add to the end
  } else {
    res.status(400).json({ success: false, msg: "please provide a name" }); // if form is empty, throw an error message in your req.body file.Bad request
  }
});

app.post("/login", (req, res) => {
  const { name } = req.body; // destructure name property from the body. If exists then send welcome name, if not then send error.
  if (name) {
    res.status(200).send(`Login successful! Welcome ${name}`);
  } else {
    res.status(401).send("Login failed! Please enter your login info");
  }
});
//put
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params; //destruct id param from params
  const { name } = req.body; //destruct name from body
  const person = people.find((person) => person.id === Number(id)); //reference a person object from people array with given id

  if (!person) {
    //if a person with given id doesnt exist, throw an error
    return res
      .status(400)
      .json({ success: false, msg: "please provide a valid id" }); // if id cant be found give error
  }
  const newPeople = people.map((person) => {
    // if id exists, create a new people array since you cant edit them in js.
    if (person.id === Number(id)) {
      //Find person with given id in the array and change its name value to new one
      person.name = name;
    }

    return person; // return new object with edited name
  });
  res.status(201).json({ success: true, data: newPeople }); // send newPeople instead of people since we changed the array
});
//delete
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params; //destruct id param from params
  const person = people.find((person) => person.id === Number(id)); //reference a person object from people array with given id

  if (!person) {
    //if a person with given id doesnt exist, throw an error
    return res
      .status(400)
      .json({ success: false, msg: "Such id doesnt exist" }); // if id cant be found give error
  }
  const newPeople = people.filter((person) => person.id !== Number(id)); // filter a new array with elements not matching the given id
  // how to delete array elements in js
  res.status(201).json({ success: true, data: newPeople }); // send newPeople array with deleted element
});

//listen
app.listen(port, () => {
  console.log(`listening on port ${port}`); // listen on predefined port
});
