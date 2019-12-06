import { calculateFuelForMass, calculateFuelForFuel } from '../puzzels/puzzel-01.js';

describe('Calculate a modules mass', () => {
  test('mass of 12', () => {
    expect(calculateFuelForMass(12)).toEqual(2);
  });
  test('mass of 14', () => {
    expect(calculateFuelForMass(14)).toEqual(2);
  });
  test('mass of 1969', () => {
    expect(calculateFuelForMass(1969)).toEqual(654);
  });
  test('mass of 100756', () => {
    expect(calculateFuelForMass(100756)).toEqual(33583);
  });
});

describe('Calculate fuel for fuel', () => {
  test('Fuel for fuel for a mass of 14', () => {
    expect(calculateFuelForFuel(14)).toEqual(2);
  });
  test('Fuel for fuel for a mass of 1969', () => {
    expect(calculateFuelForFuel(1969)).toEqual(966);
  });
  test('Fuel for fuel for a mass of 100756', () => {
    expect(calculateFuelForFuel(100756)).toEqual(50346);
  });
  test('Total is correct', () => {
    expect([
      calculateFuelForFuel(14),
      calculateFuelForFuel(1969),
      calculateFuelForFuel(100756)
    ].reduce((acc, curr) => acc + curr, 0)).toEqual(2+966+50346);
  });

})
