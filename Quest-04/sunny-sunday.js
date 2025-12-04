let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function sunnySunday(date) {
  let epoch = new Date("0001-01-01");

  let mill = date.getTime() - epoch;

  let n = mill / 1000 / 60 / 60 / 24;
  
  return days[n % 6];
}
