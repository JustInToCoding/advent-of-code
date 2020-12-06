import fs from "fs";

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n\r\n")
  .map(
    (group) =>
      new Set(group.split("\r\n").flatMap((person) => person.split(""))).size
  )
  .reduce((acc, cur) => acc + cur);

console.log(JSON.stringify(result));
