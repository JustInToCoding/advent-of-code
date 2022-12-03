import fs from "fs";

console.log(
  fs
    .readFileSync("./input.txt", "utf8")
    .split("\n")
    .reduce(
      (acc, game) => {
        const match = game.split(' ').map(x => parseInt(x, 36) % 9 % 5);
        return acc + match[1] + (match[1] === match[0] ? 3 : match[0] % 3 + 1 === match[1] ? 6 :  0);
      },
      0
    )
);