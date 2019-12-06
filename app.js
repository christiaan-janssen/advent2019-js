const fs = require('fs');

import { calculateFuelForMass, calculateFuelForFuel } from './puzzels/puzzel-01';

// Puzzle 01
let input = fs.readFileSync('./input/puzzel01.txt', {encoding: 'utf8'}).split(/\r?\n/);

console.log("Puzzle 01 - A: " + input
  .map(calculateFuelForMass)
  .reduce((acc, curr) => acc + curr, 0)
);

console.log("Puzzle 01 - B: " + input
  .map(calculateFuelForFuel)
  .reduce((acc, curr) => acc + curr, 0)
);
