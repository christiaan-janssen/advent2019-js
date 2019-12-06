export const calculateFuelForMass = (mass) => {
  return Math.floor(mass / 3) - 2;
}

export const calculateFuelForFuel = (mass, fuel=0) => {
  if (mass <= 0)
    return fuel;

  let f = calculateFuelForMass(mass);
  if (f > 0)
    fuel += f;
  return calculateFuelForFuel(f, fuel);
}
