const fs = require("fs");

fs.stat("./", (err, stats) => {
  console.log("IO Operation - stat");
});

Promise.resolve().then(() => console.log("promise1 resolved"));

Promise.resolve().then(() => {
  console.log("promise2 resolved");
  process.nextTick(() =>
    console.log("next tick inside promise2 resolve handler")
  );
});
setImmediate(() => console.log("set immediate"));

process.nextTick(() => console.log("next tick"));

setTimeout(() => console.log("set timeout 0"), 0);
setTimeout(() => console.log("set timeout 100"), 100);
