const isFriday = (date) => date.getDay() === 5;
const isWeekend = (date) => date.getDay() === 6;
function isLeapYear(date) {
  let year = date.getFullYear();

  return year % 4 === 0;
}

function isLastDayOfMonth(date) {
  let day = date.getDate();

  date.setDate(day + 1);

  let nextDay = date.getDate();

  return nextDay === 1;
}
