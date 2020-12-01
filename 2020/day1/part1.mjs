import fs from "fs";

const input = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .reduce((acc, cur) => {
    const found = acc.find((x) => x === 2020 - cur);
    if (found) {
      console.log(found, cur, found * cur);
    }
    acc.push(+cur);
    return acc;
  }, []);
