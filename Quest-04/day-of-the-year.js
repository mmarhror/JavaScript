function dayOfTheYear(date) {
  let year = date.getUTCFullYear();

  if (year === 0) year = 1;
  let first = new Date("0001-01-01");

  first.setUTCFullYear(year);

  let diff = date - first;

  return diff / 1000 / 60 / 60 / 24 + 1;
}
