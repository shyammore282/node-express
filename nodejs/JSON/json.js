const fs = require("fs");
const myBioData = {
  name: "shyam more",
  age: "21",
  roll: "0201it211095",
  dob: "02-08-2002",
};

// convert the object into json formet
const jsonData = JSON.stringify(myBioData);
console.log(jsonData);

// convert json to object
const obj = JSON.parse(jsonData);
console.log(obj);

// 1:convert to json
// 2:add to another File
// 3:readFile
// 4:again convert to obj

//add or create new file
fs.writeFile("./json1.json", jsonData, (err) => {
  console.log("done");
});

fs.readFile("./json1.json", "utf8", (error, data) => {
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
