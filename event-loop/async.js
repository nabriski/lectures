const fs = require("fs");

function foo(arg) {
  if (!arg) {
    setTimeout(() => console.log("ERROR"), 0);
    return;
  }
  fs.stat("./", () => console.log("IO"));
}

foo(Math.random() > 0.5);

console.log("done");
