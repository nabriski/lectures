import { readFile } from "fs";
import { promisify } from "util";

console.log("1");

const readFilePromise = promisify(readFile);

readFilePromise("./a.txt", "utf-8")
  .then(fileText => {
    console.log(fileText);
  })
  .catch(err => {
    console.log(err);
  });

console.log("2");
