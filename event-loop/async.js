const fs = require("fs");

function foo(arg) {
  if (!arg) {
    setTimeout(() => console.log("ERROR"), 0);
    return;
  }
  fs.readFile(__filename, () => console.log("I/O"));
}

foo(Math.random() > 0.5);

console.log("done");
