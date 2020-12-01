import fs from "fs";

const input = fs
  .readFileSync("./input.txt", "utf8")
  .split(",")
  .map(value => +value);

const program = (input, noun, verb) => {
  const memory = [...input];
  memory[1] = noun;
  memory[2] = verb;

  const processOpcode = (input, position) => {
    const output = [...input];
    const opcode = output[position];
    const first = output[output[position + 1]];
    const second = output[output[position + 2]];
    const placementPosition = output[position + 3];
    switch (opcode) {
      case 1: {
        const result = first + second;
        output[placementPosition] = result;
        return processOpcode(output, position + 4);
      }
      case 2: {
        const result = first * second;
        output[placementPosition] = result;
        return processOpcode(output, position + 4);
      }
      case 99:
      default:
        return input;
    }
  };

  const result = processOpcode(memory, 0);
  return result[0];
};

for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    const output = program(input, noun, verb);
    if (output === 19690720) {
      console.log(100 * noun + verb);
    }
  }
}
