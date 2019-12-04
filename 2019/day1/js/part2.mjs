import fs from "fs";
import path from "path";

let input = fs.readFileSync("./input.txt", "utf8");

const inputList = input.split("\r\n");

const calcFuel = mass => {
  const devidedByThree = Math.floor(mass / 3);

  if (devidedByThree <= 2) return 0;

  const fuel = devidedByThree - 2;
  return fuel + calcFuel(fuel);
};

const fuelList = inputList.map(calcFuel);

const sumFuelRequirement = fuelList.reduce((acc, cur) => acc + cur);

console.log(sumFuelRequirement);
