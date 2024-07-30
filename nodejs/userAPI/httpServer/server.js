const http = require("http");

const server = http.createServer((req, res) => {});

server.listen(5000, () => {
  console.log("server listenong at localhost:5000");
});
