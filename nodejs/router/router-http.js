const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.end("home page");
  } else if (url === "/about") {
    res.end("about page");
  } else if (url === "contact") {
    res.end("contact page");
  } else {
    res.end("page is not found 404 error");
  }
});
