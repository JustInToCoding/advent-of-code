import fs from "fs";

console.log('The result is: ', fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .reduce(({countPart1, countPart2, dial}, cur) => {
    const move = cur.startsWith("L") ? -Number(cur.substring(1)) : Number(cur.substring(1));
    const newDial = dial + move;
    const correctedNewDial = ((newDial % 100) + 100) % 100;

    let timesPastOrOnZero = 0;
    if (newDial === 0) {
      timesPastOrOnZero = 1;
    }
    else if (correctedNewDial === 0) {
      timesPastOrOnZero = 1 + Math.floor(Math.abs(move) / 100);
    }
    else if (move >= 0) {
      timesPastOrOnZero = Math.floor((dial + move) / 100);
    } 
    else {
      timesPastOrOnZero = (dial != 0 ? 1 : 0) + Math.floor((move >= 0 ? dial + move : -move - dial) / 100);
    }
    
    return { countPart1: countPart1 + (!correctedNewDial), countPart2: countPart2 + timesPastOrOnZero, dial: correctedNewDial };
  }, { countPart1: 0, countPart2: 0, dial: 50 }));