import fs from "fs";

const input = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .reduce((acc, cur) => {
    acc.forEach((x) => {
      const leftover = 2020 - cur - x;
      const found = acc.find((y) => y === leftover);
      if (found) {
        console.log(found * cur * x);
      }
    });
    acc.push(+cur);
    return acc;
  }, []);
