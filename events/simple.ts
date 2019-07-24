const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter: MyEmitter = new MyEmitter();
myEmitter.on("event", (p1: String, p2: String) => {
  console.log(`an event occurred! p1:${p1}, p2:${p2}`);
});
myEmitter.emit("event", "param1", "param2");

process.nextTick(() => {});
