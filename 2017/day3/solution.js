//                            91
// 65 64 63 62 61 60 59 58 57 90
// 66 37 36 35 34 33 32 31 56 89
// 67 38 17 16 15 14 13 30 55 88
// 68 39 18 5  4  3  12 29 54 87
// 69 40 19 6  1  2  11 28 53 86
// 70 41 20 7  8  9  10 27 52 85
// 71 42 21 22 23 24 25 26 51 84
// 72 43 44 45 46 47 48 49 50 83
// 73 74 75 76 77 78 79 80 81 82

const input = 265149;
const squareStartingPoint = (x) => 4*Math.pow(x,2)-10*x+7;
const distance = (x1, x2) => Math.abs(x1 - x2);

let i = 1;
for (;squareStartingPoint(i+1) <= input;i++) {}

let startingPoint = squareStartingPoint(i);

i--;

let distanceToClosestCenterBorder = -1;
middle = startingPoint + i;
for (let z = 0; z < 4; z++) {
	let distanceToCenterBorder = distance(middle, input);
	if(distanceToClosestCenterBorder === -1 || distanceToCenterBorder < distanceToClosestCenterBorder) {
		distanceToClosestCenterBorder = distanceToCenterBorder;
	}
	middle = middle + i * 2;
	if(z === 2) {
		middle++;
	}
	if(z === 3 && distanceToCenterBorder <= i) {
		i++;
	}
}

const output = i + distanceToClosestCenterBorder;

console.log(output);

