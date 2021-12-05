import fs from "fs";

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .reduce(
    (position, instruction) => {
      const [direction, units] = instruction.split(" ");
      const numberOfUnits = +units;
      switch (direction) {
        case "forward":
          position.x += numberOfUnits;
          position.y += position.aim * numberOfUnits;
          break;
        case "down":
          position.aim += numberOfUnits;
          break;
        case "up":
          position.aim -= numberOfUnits;
      }
      return position;
    },
    { x: 0, y: 0, aim: 0 }
  );

console.log("result: ", result.x * result.y);
