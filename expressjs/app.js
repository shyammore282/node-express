const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.write(homePage);
  res.end();
});

server.listen(5000, () => {
  console.log("server listen at localhost:5000");
});
