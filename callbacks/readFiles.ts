import { readFileSync } from "fs";

console.log("1");

const text1 = readFileSync("./a.txt", "UTF-8");
const text2 = readFileSync("./b.txt", "UTF-8");
const text3 = readFileSync("./c.txt", "UTF-8");

console.log(`${text1.trim()} ${text2.trim()} ${text3.trim()}`);

console.log("2");
