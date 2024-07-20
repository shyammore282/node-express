const os = require("os");

const user = os.userInfo();
console.log(user);

// cheaking the up time of the system
console.log(`the uptime of system is : ${os.uptime()} seconds`);
