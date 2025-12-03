const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",

  7: "SecondSunday",
  8: "SecondMonday",
  9: "SecondTuesday",
  10: "SecondWednesday",
  11: "SecondThursday",
  12: "SecondFriday",
  13: "SecondSaturday",
};

function addWeek(date) {
  let epoch = new Date("0001-01-01");
  let dif = date - epoch;
  return dif / 1000 / 60 / 60 / 24;
}
// addWeek(new Date("0001-01-07"));
console.log(addWeek(new Date("2001-01-1")));
