const fs = require("fs");

function foo(arg) {
  if (!arg) {
    console.log("ERROR");
    return;
  }

  fs.readFile(__filename, () => console.log("I/O"));
}

foo(Math.random() > 0.5);

console.log("done");
