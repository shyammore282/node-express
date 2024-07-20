const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", () => {
  console.log("data receive");
});

customEmitter.on("response", () => {
  console.log("next data receive");
});

customEmitter.emit("response");
