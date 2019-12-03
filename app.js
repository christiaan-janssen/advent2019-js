const fs = require('fs');

import { calculateMass } from './puzzels/puzzel-01';

// Puzzle 01 - A
let input = fs.readFileSync('./input/puzzel01.txt', {encoding: 'utf8'}).split(/\r?\n/);

console.log("Puzzle 01 - A: " + input.map(calculateMass).reduce((acc, curr) => {
  return acc + curr;
}));

