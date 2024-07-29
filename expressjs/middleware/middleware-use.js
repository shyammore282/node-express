const express = require("express");
const app = express();
const logger = require("../logger.js");

// req => middleware-use =>res

//app.use("/api", logger); , app.use([logger,authorize]) - it is used for multiple middleware it access by all the path
// app.use(express.static("./public"))

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/api/products", (req, res) => {
  res.send("products");
});
app.get("/api/item", logger, (req, res) => {
  // here only access  the logger middleware not all
  res.send("item");
});

app.listen(5000, () => {
  console.log("server listen on localhost:5000");
});
