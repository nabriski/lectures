const fs = require("fs");

// WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!
function foo(arg, cb) {
  if (!arg) {
    cb("@@@ ERROR - missing arg.");
    return;
  }

  fs.stat("./", function(err, stats) {
    console.log("$$$ IO operation completed.");
  });
}

//This API is hazardous because in the following case:
const maybeTrue = Math.random() > 0.5;

foo(maybeTrue, (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});

console.log("done");
