const fs = require("fs");

let i = 0;

fs.readFile(__filename, () => {
  console.log(`${++i}. I/O`);
});

setTimeout(() => console.log(`${++i}. timeout`), 0);
setImmediate(() => console.log(`${++i}. immediate`));
