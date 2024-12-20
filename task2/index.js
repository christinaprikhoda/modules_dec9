const fs = require("node:fs");

const fd = fs.openSync("task1/data.txt", "r");
const buffer = Buffer.alloc(64);

const bytesRead = fs.readSync(fd, buffer, 0);

console.log(buffer.toString("utf-8", 0, bytesRead));

fs.closeSync(fd);
