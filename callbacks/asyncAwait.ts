import { readFile, promises } from "fs";
import { promisify } from "util";

console.log("1");

const readFilePromise = promisify(readFile);

const myAsyncFunc = async () => {
  try {
    const fileText = await readFilePromise("./a.txt", "UTF-8");
    console.log(fileText);
  } catch (err) {
    console.log(err);
  }
};

myAsyncFunc();

console.log("2");
