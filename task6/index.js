const fs = require("node:fs");

fs.writeFileSync("task5/file1.txt", "Content of the first file.\n");
fs.writeFileSync("task5/file2.txt", "Content of the second file.\n");

const mergedFd = fs.openSync("task6/merged.txt", "w");

const buffer1 = fs.readFileSync("task6/file1.txt")
const buffer2 = fs.readFileSync("task6/file2.txt")

const concatedBuffer = Buffer.concat([buffer1, buffer2])
fs.writeSync(mergedFd, concatedBuffer)

console.log("Files merged successfully!")

fs.closeSync(mergedFd)