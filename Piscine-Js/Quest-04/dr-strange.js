const days = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",

  7: "secondMonday",
  8: "secondTuesday",
  9: "secondWednesday",
  10: "secondThursday",
  11: "secondFriday",
  12: "secondSaturday",
  13: "secondSunday",
};

function addWeek(date) {
  let epoch = new Date("0001-01-01");
  let dif = date - epoch;
  dif = dif / 1000 / 60 / 60 / 24;

  return days[dif % 14];
}

function timeTravel(time) {
  let date = time.date;
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return new Date(year, month, day, time.hour, time.minute, time.second);
}
