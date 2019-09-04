const fs = require("fs");

let i = 0;

fs.readFile(__filename, () => {
  console.log(`${++i}. I/O`);
  setTimeout(() => console.log(`${++i}. inside I/O - timeout`), 0);
  setImmediate(() => console.log(`${++i}. inside I/O - immediate`));
});
