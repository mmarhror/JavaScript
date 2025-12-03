function toMonday(date) {
  let weekDay = date.getDay();

  if (weekDay === 0) weekDay = 7;

  let diff = (weekDay + 6) % 7;

  let newDate = new Date(date.getTime() - diff * 24 * 60 * 60 * 1000);

  return newDate;
}

function firstDayWeek(weeks, year) {
  let date = new Date();
  date.setFullYear(year);
  date.setMonth(0);
  date.setDate(1);

  weeks--;

  date = toMonday(date);

  date = new Date(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);

  let y = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth() + 1;

  if (y !== Number(year)) return `01-01-${year}`;

  let time = `${day < 10 ? "0" + day : day}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  return time;
}
