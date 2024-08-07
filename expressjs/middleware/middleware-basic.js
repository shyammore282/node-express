const express = require("express");
const app = express();

// req => middleware =>res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("home");
});
app.get("/about", logger, (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server listen on localhost:5000");
});
