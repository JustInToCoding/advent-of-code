import fs from "fs";

let x = 0;
const xSlope = 3;

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .reduce((count, line) => {
    const hasTree = line[x] === "#";
    x = (x + xSlope) % line.length;
    return count + hasTree;
  }, 0);

console.log("result: " + result);
