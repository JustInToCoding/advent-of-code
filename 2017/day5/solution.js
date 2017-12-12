console.time("Day 5b");
const { input } = require('./input.js');

const inputArray = input.split('\n');

const calculateJumpsToExit = (input, steps, index, modifyJump) => {
    while(index < input.length) {
        let currentIndex = index;
        let jump = +input[index];
        index += jump;
        input[currentIndex] = modifyJump(jump);
        steps++;
    }
    return steps;
}

const recursiveCalculateJumpsToExit = (input, steps, index, modifyJump) => {
    let jump = +input[index];
    input[index] = modifyJump(jump);
    steps++;
    return (index < input.length) ? recursiveCalculateJumpsToExit(input, steps, index + jump, modifyJump) : steps;
}


const output = calculateJumpsToExit(inputArray, 0, 0, (value) => value > 2 ? --value : ++value);
console.timeEnd("Day 5b");

//console.log(calculateJumpsToExit(inputArray, 0, 0, (value) => ++value)); // Day 5a
console.log(output);