const { input } = require('./input.js');

const lines = input.split('\n');

const instructions = lines.map((line) => line.split(' '));

const registers = new Map();

const addRegister = (register) => !registers.has(register) ? registers.set(register, 0) : registers;

const getRegisterValue = (register) => addRegister(register).get(register);

let biggestValue = 0;

const trackBiggestValue = (value) => {
	if(biggestValue < value) {
		biggestValue = value;
	}
	return value;
}

const modifyRegisterValue = (register, mod) => registers.set(register, trackBiggestValue(mod(getRegisterValue(register))));

const conditionalModification = (conditional, mod) => (value) => conditional ? mod(value) : value;

const modifications = {
	'inc': (amount) => (value) => value + amount,
	'dec': (amount) => (value) => value - amount
}

const conditionals = {
	'==': (value, compareTo) => value == compareTo,
	'!=': (value, compareTo) => value != compareTo,
	'>': (value, compareTo) => value > compareTo,
	'<': (value, compareTo) => value < compareTo,
	'<=': (value, compareTo) => value <= compareTo,
	'>=': (value, compareTo) => value >= compareTo,
}

instructions.forEach((instruction) => //console.log(instruction[6]));
	modifyRegisterValue(
		instruction[0],
		conditionalModification(
			conditionals[instruction[5]](getRegisterValue(instruction[4]), instruction[6]),
			modifications[instruction[1]](+instruction[2]))));

const biggest = Math.max(...registers.values());

console.log(biggest);
console.log(biggestValue);
