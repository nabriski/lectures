const fs = require("fs");

i = 0;
fs.stat("./", () => console.log(`${++i}. IO`));
setTimeout(() => console.log(`${++i}. timeout`), 0);
setImmediate(() => console.log(`${++i}. immediate`));
