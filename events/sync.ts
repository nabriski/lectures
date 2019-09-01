const EventEmitter2 = require("events");

class MyEmitter2 extends EventEmitter2 {}

const myEmitter2: MyEmitter2 = new MyEmitter2();

myEmitter2.on("event", () => {
  console.log("registered first!");
});

myEmitter2.on("event", () => {
  console.log("registered second!");
});

myEmitter2.emit("event");
