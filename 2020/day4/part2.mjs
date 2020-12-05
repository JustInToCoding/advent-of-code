import fs from "fs";

const isBetween = (min, max) => (value) => value >= min && value <= max;

const fieldValidations = {
  byr: isBetween(1920, 2002),
  iyr: isBetween(2010, 2020),
  eyr: isBetween(2020, 2030),
  hgt: (value) => {
    const cmValue = value.split("cm")[0];
    const inValue = value.split("in")[0];
    return (
      (cmValue.length === value.length - 2 &&
        +cmValue >= 150 &&
        +cmValue <= 193) ||
      (inValue.length === value.length - 2 && +inValue >= 59 && +inValue <= 76)
    );
  },
  hcl: (value) => /^#([a-fA-F0-9]{6})$/.test(value),
  ecl: (value) => /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value),
  pid: (value) => value.length === 9 && Number.isInteger(+value),
};

const result = fs
  .readFileSync("./input.txt", "utf8")
  .split("\r\n\r\n")
  .reduce(
    (validCount, passport) =>
      validCount +
      (Object.keys(fieldValidations).reduce(
        (isValid, fieldName) => isValid * passport.includes(fieldName),
        true
      ) &&
        passport
          .split("\r\n")
          .flatMap((line) => line.split(" "))
          .reduce((isValid, field) => {
            const [fieldName, value] = field.split(":");
            return (
              isValid *
              (fieldValidations[fieldName]
                ? fieldValidations[fieldName](value)
                : true)
            );
          }, true)),
    0
  );

console.log("result: " + JSON.stringify(result));
