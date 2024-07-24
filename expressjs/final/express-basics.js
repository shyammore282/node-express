const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("about page");
});

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

app.listen(5000, () => {
  console.log("server run on localhost:5000");
});

//app.get  --read data
//app.post  --insert data
//app.put  --update data
//app.delete --delete data
//app.all
//app.use
//app.listen
