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

app.get("/api/products/about", (req, res) => {
  res.send("About page is here");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not Found!!!"); //200 success 404 failure
});
