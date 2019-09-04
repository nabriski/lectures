const fs = require("fs");

let i = 0;

fs.readFile(__filename, () => {
  console.log(`${++i}. I/O`);
});

for (let j = 0; j < Math.pow(10, 5); j++) {
  Promise.resolve().then(() => console.log(`${++i}. promise`));
}
