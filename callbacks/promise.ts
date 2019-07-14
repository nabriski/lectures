import { readFile, promises } from "fs";

console.log("1");

const readFilePromise = (fileName: string, encoding: string) => {
  return new Promise((resolve, reject) => {
    readFile(fileName, encoding, (err, fileText) => {
      console.log("3");
      if (err) {
        reject(err);
      } else {
        resolve(fileText);
      }
    });
  });
};

readFilePromise("./a.txt", "UTF-8")
  .then(fileText => {
    console.log(fileText);
  })
  .catch(err => {
    console.log(err);
  });

console.log("2");
