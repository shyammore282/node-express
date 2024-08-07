const express = require("express");
const app = express();
const logger = require("./logger.js");

// req => middleware =>res

app.use(logger);

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/api/products", (req, res) => {
  res.send("products");
});
app.get("/api/item", (req, res) => {
  res.send("item");
});

app.listen(5000, () => {
  console.log("server listen on localhost:5000");
});
