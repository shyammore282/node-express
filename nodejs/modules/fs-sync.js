const fs = require("fs");

const first = fs.readFileSync("./textfolder/first.txt", "utf8");
const second = fs.readFileSync("./textfolder/second.txt", "utf8");

console.log(first, "+", second);

const writeFirst = fs.writeFileSync(
  "./textfolder/first.txt",
  "hey this overide first file "
);

console.log(fs.readFileSync("./textfolder/first.txt", "utf8"));

const add = fs.appendFileSync(
  "./textfolder/first.txt",
  "it is the update value after the used append data in the the file"
);
