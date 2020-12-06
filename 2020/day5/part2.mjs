import fs from "fs";

const getSeatId = (seat) =>
  parseInt(seat.replaceAll(/[B|R]/g, "1").replaceAll(/[F|L]/g, "0"), 2);

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .map(getSeatId)
  .sort((a, b) => {
    if (a < b) return -1;
    if (a === b) return 0;
    return 1;
  })
  .reduce(
    ({ prev, missing }, seatId) => ({
      prev: seatId,
      missing: [...missing, ...(prev && seatId - prev > 1 ? [seatId - 1] : [])],
    }),
    { prev: undefined, missing: [] }
  ).missing;

console.log(JSON.stringify(result));
