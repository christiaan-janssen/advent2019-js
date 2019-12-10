/*
    Program flow:
    1. Start at position 0 and check the opcode there.
    2. Apply the operation against position 1 and 2
    3. Store the result in the position given in position 3
    4. step forward 4 positions (so go form 0 to 4)

    Opcodes:
    1  - add 2 positions together
    2  - multiply 2 positions
    99 - terminate program
 */

export const runProgram = (program) => {
    let stck = 0;
    
    while(program[stck] != 99) {
        let [operation, op1, op2, output] = [program[stck],program[stck+1], program[stck+2], program[stck+3]];
        
        if (operation === 1){
            program[output] = program[op1] + program[op2];
        } else if (operation === 2) {
            program[output] = program[op1] * program[op2];
        }

        stck +=4;
    }
    
    return program;
};
