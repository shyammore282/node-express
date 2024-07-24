const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./browser-navbar/index.html");
const style = readFileSync("./browser-navbar/style.css");
const logic = readFileSync("./browser-navbar/nav.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //style
  else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style);
    res.end();
  }
  // logic
  else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(logic);
    res.end();
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`<h1>page not found 404 error</h1>`);
  }
});

server.listen(5000, () => {
  console.log("server listen at localhost:5000");
});
