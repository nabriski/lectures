const fs = require("fs");

i = 0;
fs.readFile(__filename, () => console.log(`${++i}. I/O`));

Promise.resolve()
  //  .then(() => console.log(`${++i}. promise`))
  //  .then(() => console.log(`${++i}. promise`))
  .then(() => console.log(`${++i}. promise`));

setImmediate(() => console.log(`${++i}. immediate`));
