const fs = require("fs");

i = 0;
fs.stat("./", () => console.log(`${++i}. IO`));

Promise.resolve()
  //  .then(() => console.log(`${++i}. promise`))
  //  .then(() => console.log(`${++i}. promise`))
  .then(() => console.log(`${++i}. promise`));

setImmediate(() => console.log(`${++i}. immediate`));
