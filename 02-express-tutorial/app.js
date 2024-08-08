const express = require("express");
const app = express();
const path = require("path"); //node path for files
const port = 3000;
const { products } = require("./data"); //export data.js as products object

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//how to initiate express js

// app.use(express.static("./public"));
// put your static files here in this folder. static means server wont change it. Like css,image,logo and js files.

// app.get("/", (req, res) => {
//   //res.status(200).send("Homepage");
//   res.sendFile(path.resolve(__dirname, "./public/index.html")); //mainpage brings a file and its css js files are held in public folder
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About");
// });

//working with json data
app.get("/", (req, res) => {
  // send homepage data
  res.send('<h1>Homepage</h1> <a href="/api/products">Products</a>');
});
app.get("/api/products", (req, res) => {
  // res.json(products); // send products object as json data
  // res.json(products);
  const newProducts = products.map((product) => {
    const { id, name, image } = product; // get the desired values from array
    return { id, name, image };
  });
  res.json(newProducts); // send new mapped json file
});

//get a single product
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params; // requested params objesinden productID degerini string olarak productID degiskenine ata
  const newProduct = products.find(
    (product) => product.id === Number(productID) // string oldugu icin Number(stringName) ile string numaraya cevrildi.
    //(product) => product.id === parseInt(productID)                also works
  );
  //if we cant find it send an errror
  if (!newProduct) {
    // if (!objectName) returns true if undefined
    // if undefined send error     (newProduct === undefined) also works
    res.status(404).send("Page not found here");
  }
  res.json(newProduct);
});

// query strings
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query; // take search and limit values from query string and save it in search and limit
  let sortedProducts = [...products]; // take all products into sortedproducts with ... destructor
  if (search) {
    // if not undefined do this
    sortedProducts = products.filter((products) => {
      return products.name.startsWith(search);
    });
  }
  if (limit) {
    // if limit exists get the first limit numbers of array
    sortedProducts = sortedProducts.slice(0, Number(limit)); // convert limit string into a number
  }
  if (sortedProducts < 1) {
    // if array is empty send a empty array message with succhess status
    return res.status(200).send("Results not found!");
  }

  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("Page not Found!!!"); //200 success 404 failure
});
