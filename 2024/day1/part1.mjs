import fs from "fs";


const [left, right] = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .reduce(([left, right], cur) => {
    const splitted = cur.split('   ');
    left.push(+splitted[0]);
    right.push(+splitted[1]);
    return [left, right];
  }, [[], []])
  .map((x) => x.sort((a, b) => a - b));

console.log(left.reduce((result, cur, index) => result + Math.abs(cur - right[index]), 0));
