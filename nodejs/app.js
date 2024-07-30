// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async () => {
//   try {
//     const first = await getText("./modules/textfolder/first.txt");
//     console.log(first);
//   } catch {
//     console.log("error");
//   }
// };

// start();
// getText("../modules/textfolder/first.txt")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//const { readFile, writeFile } = require("fs");
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise(
//       "./modules/textfolder/first.txt",
//       "utf8"
//     );
//     const second = await readFilePromise(
//       "./modules/textfolder/second.txt",
//       "utf8"
//     );
//     console.log(first, second);
//   } catch {}
// };

// start();

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home");
  } else if (req.url === "/api") {
    fs.readFile(`${__dirname}/userAPI/userAPI.json`, "utf8", (error, data) => {
      res.end(data);
    });
  } else res.end("hello");
});

server.listen(5000, () => {
  console.log("server listenong at localhost:5000");
});
