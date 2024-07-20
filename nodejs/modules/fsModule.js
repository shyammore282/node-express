const fs = require("fs");

const readFirst = fs.readFile(
  "./textfolder/first.txt",
  "utf8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(result);
    }
  }
);

console.log(readFirst);

const writeFirst = fs.writeFile(
  "./textfolder/first.txt",
  "this is the async write file",
  () => {
    console.log("task is complite");
  }
);
