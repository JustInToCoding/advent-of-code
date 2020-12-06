import fs from "fs";

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .reduce(
    (highest, seat) =>
      Math.max(
        highest,
        parseInt(seat.replaceAll(/[B|R]/g, "1").replaceAll(/[F|L]/g, "0"), 2)
      ),
    0
  );

console.log(result);
