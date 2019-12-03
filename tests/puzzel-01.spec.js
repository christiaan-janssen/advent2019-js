import { calculateMass } from '../puzzels/puzzel-01.js';

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
