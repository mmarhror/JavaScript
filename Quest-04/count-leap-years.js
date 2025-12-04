function countLeapYears(date) {
  let year = date.getFullYear();
  let cnt = 0;

  year--
  while (year > 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      cnt++;
    }
    year--;
  }
  return cnt;
}
