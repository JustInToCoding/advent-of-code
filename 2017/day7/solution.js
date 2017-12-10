const { input } = require('./input.js');

const inputArray = input.split('\n');

const findProgramInLine = (line) => /([a-z]+)\s\((\d+)\)(?:(?:\s->\s)(.+))?/.exec(line);

const foundPrograms = inputArray.map(findProgramInLine);

const createProgram = (foundProgram) => [foundProgram[1], {name: foundProgram[1], weight: +foundProgram[2]}];

const programs = new Map(foundPrograms.map(createProgram));

// Give each program clidren and a parent if available
foundPrograms.forEach(foundProgram => {
	const program = programs.get(foundProgram[1]);
	if(foundProgram[3]) {
		const childrenNames = foundProgram[3].split(', ');
		const programChildren = childrenNames.map((name) => programs.get(name));
		program.children = programChildren;
		programChildren.forEach((child) => { child.parent = program });
	}
});

const traverseToRoot = (program) => program.parent ? traverseToRoot(program.parent) : program;

const root = traverseToRoot(programs.values().next().value); // Traverse to root from first program found.

const getTotalWeight = (program) => program.children ? program.weight + program.children.reduce((acc, child) => acc + getTotalWeight(child), 0) : program.weight;

programs.forEach((program) => { program.totalWeight = getTotalWeight(program) });

const occurances = (array, value) => array.reduce((acc, curr) => acc + (curr === value), 0);

const getWrongWeighingProgram = (programs) => {
	let wrongWeighingProgram;

	programs.forEach((program) => {
		if(programs.length < 3) {
			if(!wrongWeighingProgram) {
				wrongWeighingProgram = getWrongWeighingProgram(program.children);
			}
		} else if(occurances(programs.map((program) => program.totalWeight), program.totalWeight) === 1) {
			wrongWeighingProgram = getWrongWeighingProgram(program.children);
			if(!wrongWeighingProgram) {
				wrongWeighingProgram = program;
			}
		}
	});

	return wrongWeighingProgram;
}

const wrongWeighingProgram = getWrongWeighingProgram(root.children);

const getSibling = (program) => program.parent.children.find((item) => item !== program);

const weightShouldBe = wrongWeighingProgram.weight + getSibling(wrongWeighingProgram).totalWeight - wrongWeighingProgram.totalWeight;

console.log(`Root name: ${root.name}`);
console.log(`Wrong weighingProgramName: ${wrongWeighingProgram.name}`);
console.log(`Weight should be: ${weightShouldBe}`);

