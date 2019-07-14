import { readFile } from "fs";

console.log("1");

readFile("./a.txt", "UTF-8", (err, fileText) => {
  console.log("3");
  if (err) {
    console.log(err);
  } else {
    console.log(fileText);
  }
});
console.log("2");
