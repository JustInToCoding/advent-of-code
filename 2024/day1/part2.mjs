import fs from "fs";


const [leftArray, rightObject] = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .reduce(([leftArray, rightObject], cur) => {
    const [left, right] = cur.split('   ');
    leftArray.push(+left);
    rightObject[+right] = ++(rightObject[+right]) || 1;
    return [leftArray, rightObject];
  }, [[], {}])

console.log(leftArray.reduce((result, left) => result + left * (rightObject[left] || 0), 0));
