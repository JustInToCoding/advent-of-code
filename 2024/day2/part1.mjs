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
            ([prev, ascending, safe], cur2) => [
              +cur2,
              prev !== null ? +cur2 > prev : null,
              safe && prev !== null
                ? +cur2 !== prev &&
                  Math.abs(+cur2 - prev) < 4 &&
                  (ascending === null || ascending === +cur2 > prev)
                : safe,
            ],
            [null, null, true]
          )[2],
      0
    )
);
