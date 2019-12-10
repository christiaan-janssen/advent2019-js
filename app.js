const fs = require('fs');

import { calculateFuelForMass, calculateFuelForFuel } from './puzzels/puzzel-01';
import { runProgram } from './puzzels/puzzle-02';

// Puzzle 01
let input = fs.readFileSync('./input/puzzel01.txt', {encoding: 'utf8'}).split(/\r?\n/);

console.log("Puzzle 01 - A: " + input
	.map(calculateFuelForMass)
	.reduce((acc, curr) => acc + curr, 0)
);

console.log("Puzzle 01 - B: " + input
	.map(fuel => calculateFuelForFuel(fuel, 0))
	.reduce((acc, curr) => acc + curr, 0)
);

// Puzzle 02
let program = fs.readFileSync('./input/puzzle02.txt', {encoding: 'utf8'})
					.split(",").map(x => parseInt(x, 10));
program[1] = 12;
program[2] = 2;

console.log("Puzzle 02 - A: " + runProgram(program)[0]);
