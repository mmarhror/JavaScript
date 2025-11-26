function dogYears(planet, dogAge) {
  const age = (dogAge / 60 / 60 / 24 / 365) * 7;

  switch (planet) {
    case "mercury":
      return age * 0.2408467;
    case "venus":
      return age * 0.61519726;
    case "mars":
      return age * 1.8808158;
    case "jupiter":
      return age * 11.862615;
    case "saturn":
      return age * 29.447498;
    case "uranus":
      return age * 84.016846;
    case "neptune":
      return age * 164.79132;
    default:
      return age;
  }
}

console.log(dogYears("earth", 1000000000));
