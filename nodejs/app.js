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

const { writeFileSync } = require("fs");
const { createReadStream } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("./modules/textfolder/big.txt", `hello world ${i}\n`, {
    flag: "a",
  });
}

const stream = createReadStream("./modules/textfolder/big.txt", "utf8");

stream.on("data", (result) => {
  console.log(result);
});
