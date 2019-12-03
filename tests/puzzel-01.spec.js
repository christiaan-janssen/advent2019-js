import { calculateMass, calculateFuelForFuel } from '../puzzels/puzzel-01.js';

describe('Calculate a modules mass', () => {
  test('mass of 12', () => {
    expect(calculateMass(12)).toEqual(2);
  });
  test('mass of 14', () => {
    expect(calculateMass(14)).toEqual(2);
  });
  test('mass of 1969', () => {
    expect(calculateMass(1969)).toEqual(654);
  });
  test('mass of 100756', () => {
    expect(calculateMass(100756)).toEqual(33583);
  });
});

describe('Calculate fuel for fuel', () => {
  test('Fuel for fuel for a mass of 14', () => {
    expect(calculateFuelForFuel(14)).toEqual(0);
  })
  test('Fuel for fuel for a mass of 1969', () => {
    expect(calculateFuelForFuel(1969)).toEqual(966);
  })
  test('Fuel for fuel for a mass of 100756', () => {
    expect(calculateFuelForFuel(100756)).toEqual(50346);
  })
})
