import fs from "fs";

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .reduce((acc, cur) => {
    const [, min, max, char, pass] = cur.match(/(?:(\d+)-(\d+)) (\w): (.*)/);
    const occurences = pass
      .split("")
      .reduce((count, x) => count + (x === char), 0);
    return acc + (occurences >= min && occurences <= max);
  }, 0);

console.log("result: " + result);
