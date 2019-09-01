const EventEmitter3 = require("events");

class MyEmitter3 extends EventEmitter3 {}

const myEmitter3 = new MyEmitter3();
myEmitter3.on("event", () => {
  setImmediate(() => {
    console.log("async");
  });
});
myEmitter3.on("event", () => {
  console.log("sync");
});
myEmitter3.emit("event");
