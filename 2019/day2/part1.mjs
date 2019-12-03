import fs from 'fs';

const input = fs.readFileSync('./input.txt').toString().split(',').map(value => +value);

input[1] = 12;
input[2] = 2;

const processOpcode = (input, position) => {
    const output = [...input];
    const opcode = output[position];
    const first = output[output[position + 1]];
    const second = output[output[position + 2]];
    const placementPosition = output[position + 3];
    switch(opcode) {
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
}

console.log(processOpcode(input, 0));