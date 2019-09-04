const fs = require("fs");

let i = 0;

fs.readFile(__filename, () => {
  console.log(`${++i}. I/O`);

  setTimeout(() => console.log(`${++i}. in I/O - timeout`), 0);

  setImmediate(() => console.log(`${++i}. in I/O - immediate`));

  process.nextTick(() => console.log(`${++i}. in I/O - nextTick`));

  Promise.resolve()
    .then(() => console.log(`${++i}. in I/O - promise`))
    .then(() => console.log(`${++i}. in I/O - promise`))
    .then(() => console.log(`${++i}. in I/O - promise`));
});
