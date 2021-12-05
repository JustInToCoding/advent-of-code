import fs from "fs";

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .reduce(
    (position, instruction) => {
      const [direction, units] = instruction.split(" ");
      switch (direction) {
        case "forward":
          position.x += +units;
          break;
        case "down":
          position.y += +units;
          break;
        case "up":
          position.y -= +units;
      }
      return position;
    },
    { x: 0, y: 0 }
  );

console.log("result: ", result.x * result.y);
