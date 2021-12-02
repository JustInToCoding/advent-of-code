import fs from "fs";

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .reduce(
    ({ prev, count }, cur) => {
      const number = +cur;
      if (prev !== undefined && number > prev) {
        count += 1;
      }
      return { prev: number, count };
    },
    { prev: undefined, count: 0 }
  );

console.log("result: " + result.count);
