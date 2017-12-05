const { input } = require('./input.js');

const inputArray = input.split('\n');

const calculateJumpsToExit = (input, modifyAfter) => {
    let index = 0;
    let steps = 0;
    while(index < input.length) {
        let currentIndex = index;
        let jump = +input[index];
        index += jump;
        input[currentIndex] = modifyAfter(jump);
        steps++;
    }
    return steps;
}

// console.log(calculateJumpsToExit(inputArray, (value) => ++value));
console.log(calculateJumpsToExit(inputArray, (value) => value > 2 ? --value : ++value));