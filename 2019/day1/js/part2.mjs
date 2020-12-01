import fs from "fs";
import path from "path";

let input = fs.readFileSync("./input.txt", "utf8");

const inputList = input.split("\r\n");

const sum = list => list.reduce((acc, cur) => acc + cur);

const calculateFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2;
  return fuel > 0 ? fuel + calculateFuel(fuel) : 0;
};

const fuelList = inputList.map(calculateFuel);

const sumFuelRequirement = sum(fuelList);

console.log(sumFuelRequirement);
