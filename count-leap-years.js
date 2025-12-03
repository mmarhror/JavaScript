function countLeapYears(date) {
  let time = date.getTime();

  return Math.abs(time);
}

console.log(countLeapYears(new Date("0001-12-01")));
