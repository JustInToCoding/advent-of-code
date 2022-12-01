import fs from "fs";

console.log(
  fs
    .readFileSync("./input.txt", "utf8")
    .split("\n\n")
    .map((cur) =>
      cur?.split("\n").reduce((acc, cals) => acc + parseInt(cals || 0, 10), 0)
    )
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((acc, cur) => acc + cur, 0)
);
