import fs from "fs";

console.log(
  fs
    .readFileSync("./input.txt", "utf8")
    .split("\n")
    .reduce(
      (acc, game) => {
        const match = game.split(' ').map(x => parseInt(x, 36) % 9 % 5);
        match[1] = match[1] === 2 ? match[0] : match[1] === 3 ? match[0] % 3 + 1 : (match[0] + 1) % 3 + 1;
        return acc + match[1] + (match[1] === match[0] ? 3 : match[0] % 3 + 1 === match[1] ? 6 :  0);
      },
      0
    )
);