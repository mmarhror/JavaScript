function hasCity(country, arr) {
  return (city) =>
    arr.includes(city)
      ? `${city} is a city from ${country}`
      : `${city} is not a city from ${country}`;
}
