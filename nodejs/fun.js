//export the module
const myName = (name) => {
  console.log(`my name is ${name}`);
};

module.exports = myName;

module.exports.items = ["item1", "item2", "item3"];
