const fs = require("node:fs");

const fd = fs.openSync("task4/example.txt", "w+");

fs.writeSync(fd, "0123456789");

const buffer = Buffer.alloc(10);

fs.readSync(fd, buffer, 0, 5, 0);
fs.writeSync(fd, "AB", 5, 2);

const contentBuffer = Buffer.alloc(10);

fs.readSync(fd, contentBuffer, 0, 10, 0);
console.log(contentBuffer.toString("utf-8"));

fs.closeSync(fd);
