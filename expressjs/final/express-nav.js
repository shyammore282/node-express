const express = require("express");
const path = require("path");

const app = express();

// public folder contain all the img and logo
app.use(express.static("./public"));

app.get("/", (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "./browser-navbar/index.html"));
});

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./browser-navbar/index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

app.listen(5000, () => {
  console.log("server listen on localhost:5000");
});
