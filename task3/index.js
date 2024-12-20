const fs = require("node:fs");

const sourceFd = fs.openSync("task1/data.txt", "r");
const destFd = fs.openSync("task3/copy.txt", "w");

const buffer = Buffer.alloc(16);

let bytesRead 


while((bytesRead = fs.readSync(sourceFd, buffer, 0)) > 0){
    fs.writeSync(destFd, buffer, 0, bytesRead)
}

fs.closeSync(sourceFd)
fs.closeSync(destFd)