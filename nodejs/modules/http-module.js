const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hey welcome to my home page");
  } else if (req.url === "/about") {
    res.end("it is about page");
  } else {
    res.end(`<h1>Oops!</h1>
    <p>we cant find anything</p>
    <a href="/">back to home</a>`);
  }
});

server.listen(8080, () => {
  console.log("listen the server in port in localhost:8080");
});
