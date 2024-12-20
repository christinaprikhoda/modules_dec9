const fs = require("node:fs");

const fd = fs.openSync("task1/data.txt", "r");
const stats = fs.statSync("task1/data.txt");

console.log(stats.size);

const buffer = Buffer.alloc(56);
const middlePosition = Math.floor(stats.size / 2)

fs.readSync(fd, buffer, 0, 10,  middlePosition,);
console.log(buffer.toString("utf-8", 0, 10))


fs.closeSync(fd)