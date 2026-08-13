// console.log(process);
console.log(process.version);
console.log(process.platform);
console.log(process.cwd());
// console.log(globalThis)

//File System 
import fs, { readFileSync } from "node:fs";
import path from "node:path";

fs.writeFileSync(
    "mission.txt",
    "Developer os day 15"
);

const content = fs.readFileSync(
    "mission.txt",
    "utf-8"
);

console.log(content);


//Path
const filePath = path.join(
    "server",
    "mission.txt"
);

console.log(filePath);

