import fs from "fs";

const list = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .map(x => +x)

  console.log(list);
let count = 0;
for(let i = 0; i+3 < list.length; i++) {
  console.log(list[i], list[i+1],  list[i+2], list[i+3])
  if((list[i] + list[i+1] + list[i+2]) < (list[i+1] + list[i+2] + list[i+3]) ) {
    count++;
  }
}

console.log("result: " + count);
