const express = require("express");
const app = express();
const { products } = require("../public/data.js");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("server listen on localhost:5000");
});
