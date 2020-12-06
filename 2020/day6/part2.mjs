import fs from "fs";

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n\r\n")
  .map(
    (group) =>
      group
        .split("\r\n")
        .map((person) => person.split(""))
        .reduce((acc, cur) => acc.filter((x) => cur.includes(x))).length
  )
  .reduce((acc, cur) => acc + cur);

console.log(JSON.stringify(result));
