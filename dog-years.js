function dogYears(planet, dogAge) {
  const age = (dogAge / 31557600) * 7;

  switch (planet) {
    case "mercury":
      age *= 0.2408467;
    case "venus":
      age *= 0.61519726;
    case "mars":
      age *= 1.8808158;
    case "jupiter":
      age *= 11.862615;
    case "saturn":
      age *= 29.447498;
    case "uranus":
      age *= 84.016846;
    case "neptune":
      age *= 164.79132;
  }
  return Math.round(age * 100) / 100;
}
