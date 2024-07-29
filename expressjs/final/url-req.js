const express = require("express");
const app = express();
const { products } = require("./public/data.js");

app.get("/", (req, res) => {
  res.send("<p>home page</p> <a href='/api/product'>products</a>");
});

app.get("/api/product", (req, res) => {
  const newProducts = products.map((items) => {
    const { id, title, price, category } = items;
    return { id, title, price, category };
  });
  res.json(newProducts);
});

app.get("/api/product/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (items) => items.id === Number(productId)
  );
  if (!singleProduct) {
    res.status(404).send("product does not exist");
  } else {
    res.json(singleProduct);
  }
});

app.listen(5000, () => {
  console.log("server listen on localhost:5000");
});
