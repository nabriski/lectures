import { readFile } from "fs";

console.log("1");

readFile("./a.txt", "UTF-8", (err, fileText1) => {
  console.log("3");
  if (err) {
    console.log(err);
  } else {
    readFile("./b.txt", "UTF-8", (err, fileText2) => {
      if (err) {
        console.log(err);
      } else {
        readFile("./c.txt", "UTF-8", (err, fileText3) => {
          if (err) {
            console.log(err);
          } else {
            console.log(
              `${fileText1.trim()} ${fileText2.trim()} ${fileText3.trim()}`
            );
          }
        });
      }
    });
  }
});
console.log("2");
