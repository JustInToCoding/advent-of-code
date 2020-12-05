import fs from "fs";

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n\r\n")
  .reduce(
    (validCount, passport) =>
      validCount +
      requiredFields.reduce(
        (isValid, field) => isValid * passport.includes(field),
        true
      ),
    0
  );

console.log("result: " + JSON.stringify(result));
