import { runProgram } from '../puzzels/puzzle-02.js'

describe('Run the intcode program', () => {
    // let program = [1,9,10,70,2,3,11,0,99,30,40,50];
    test('Test for program [1,0,0,0,99]', () => {
        let program = [1,0,0,0,99];
        expect(runProgram(program)).toEqual([2,0,0,0,99]);
    });
    test('Test for program [2,3,0,3,99]', () => {
        let program = [2,3,0,3,99];
        expect(runProgram(program)).toEqual([2,3,0,6,99]);
    });
    test('Test for program [2,4,4,5,99,0]', () => {
        let program = [2,4,4,5,99,0];
        expect(runProgram(program)).toEqual([2,4,4,5,99,9801]);
    });
    test('Test for program [1,1,1,4,99,5,6,0,99]', () => {
        let program = [1,1,1,4,99,5,6,0,99];
        expect(runProgram(program)).toEqual([30,1,1,4,2,5,6,0,99]);
    });
});
