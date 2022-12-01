import fs from "fs";

console.log(
  fs
    .readFileSync("./input.txt", "utf8")
    .split("\n\n")
    .reduce(
      (highest, cur) =>
        Math.max(
          cur
            ?.split("\n")
            .reduce((acc, cals) => acc + parseInt(cals || 0, 10), 0),
          highest
        ),
      -Infinity
    )
);
