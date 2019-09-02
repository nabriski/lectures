const fs = require("fs");

fs.stat("./", (err, stats) => {
  console.log("IO Operation - stat");
  process.nextTick(() => console.log("next tick inside IO Operation"));
});

Promise.resolve().then(() => console.log("promise1 resolved"));

Promise.resolve().then(() => {
  console.log("promise2 resolved");
  process.nextTick(() =>
    console.log("next tick inside promise2 resolve handler")
  );
});
Promise.resolve().then(() => {
  console.log("promise3 resolved");
  Promise.resolve().then(() =>
    console.log("promise4 inside promise 3 resolved")
  );
});
setImmediate(() => console.log("set immediate"));

process.nextTick(() => console.log("next tick"));

setTimeout(() => {
  console.log("set timeout 0");
  Promise.resolve().then(() => console.log("promise inside timeout"));
}, 0);
setTimeout(() => console.log("set timeout 100"), 100);
