import { readFile } from "fs";
import { promisify } from "util";

console.log("1");
const readFilePromise = promisify(readFile);

(async () => {
  try {
    const text1: string = await readFilePromise("./a.txt", "utf-8");
    const text2: string = await readFilePromise("./b.txt", "utf-8");
    const text3: string = await readFilePromise("./c.txt", "utf-8");
    console.log(`${text1.trim()} ${text2.trim()} ${text3.trim()}`);
  } catch (err) {
    console.log(err);
  }
})();

console.log("2");
