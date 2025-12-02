import fs from "fs";

console.log(
  fs
    .readFileSync("./input.txt", "utf8")
    .split("\r\n")
    .reduce(
      (acc, cur) =>
        acc +
        cur
          .split(" ")
          .reduce(
            ([prev, ascending, safe, skipped], cur2) => {
              const isSafe = safe && prev !== null
              ? +cur2 !== prev &&
                Math.abs(+cur2 - prev) < 4 &&
                (ascending === null || ascending === +cur2 > prev)
              : safe;
              console.log([
                isSafe ? +cur2 : prev,
                isSafe ? (prev !== null ? +cur2 > prev : null) : ascending,
                isSafe || !skipped,
                skipped || !isSafe
              ]);
              return [
                isSafe ? +cur2 : prev,
                isSafe ? (prev !== null ? +cur2 > prev : null) : ascending,
                isSafe || !skipped,
                skipped || !isSafe
              ]
          },
            [null, null, true, false]
          )[2],
      0
    )
);
