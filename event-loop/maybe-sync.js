const fs = require("fs");

function foo(arg) {
  if (!arg) {
    console.log("ERROR");
    return;
  }

  fs.stat("./", () => console.log("IO"));
}

foo(Math.random() > 0.5);

console.log("done");
