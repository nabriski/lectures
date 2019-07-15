import { readFile, promises } from "fs";
import { promisify } from "util";

console.log("1");

const readFilePromise = promisify(readFile);

let text1: string, text2: string, text3: string;

readFilePromise("./a.txt", "utf-8")
  .then(fileText1 => {
    text1 = fileText1.trim();
    return readFilePromise("./b.txt", "UTF-8");
  })
  .then(fileText2 => {
    text2 = fileText2.trim();
    return readFilePromise("./c.txt", "UTF-8");
  })
  .then(fileText3 => {
    text3 = fileText3.trim();
    console.log(`${text1} ${text2} ${text3}`);
  })
  .catch(err => {
    console.log(err);
  });

console.log("2");
