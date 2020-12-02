import fs from "fs";

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .reduce((acc, cur) => {
    const [, pos1, pos2, char, pass] = cur.match(/(?:(\d+)-(\d+)) (\w): (.*)/);
    const result = pass
      .split("")
      .filter((_, index) => index === pos1 - 1 || index === pos2 - 1);

    return acc + (result.includes(char) && result[0] !== result[1]);
  }, 0);

console.log("result: " + result);
