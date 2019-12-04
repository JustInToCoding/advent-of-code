import fs from "fs";
import path from "path";

let input = fs.readFileSync("./input.txt", "utf8");

const inputList = input.split("\r\n");

const sumFuelRequirement = inputList.reduce((acc, cur) => {
  return acc + (Math.floor(cur / 3) - 2);
}, 0);

console.log(sumFuelRequirement);
