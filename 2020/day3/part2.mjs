import fs from "fs";

const getTreesForSlope = (trees, xSlope, ySlope) => {
  let x = 0;
  let y = 0;

  return trees.reduce((count, line, index) => {
    if (y !== index) return count;

    const hasTree = line[x] === "#";
    x = (x + xSlope) % line.length;
    y += ySlope;
    return count + hasTree;
  }, 0);
};

const trees = fs.readFileSync("./input.txt", "utf8").split("\r\n");

console.log(
  "result: " +
    getTreesForSlope(trees, 1, 1) *
      getTreesForSlope(trees, 3, 1) *
      getTreesForSlope(trees, 5, 1) *
      getTreesForSlope(trees, 7, 1) *
      getTreesForSlope(trees, 1, 2)
);
