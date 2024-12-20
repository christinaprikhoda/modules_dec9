const fs = require("node:fs");

const fd = fs.openSync("task7/message.txt", "w+");

fs.writeSync(fd, "Helllo World!");
const buffer = Buffer.alloc(12);

fs.readSync(fd, buffer, 0, 12, 0);

fs.writeSync(fd, " Awesome", 5);
fs.writeSync(fd, " World!", 12);

const bufferContent = fs.readFileSync("task7/message.txt");

console.log(bufferContent.toString());
