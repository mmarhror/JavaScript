function parseCron(str) {
  let parts = str.split(" ");

  parts = parts.map((elem) => Number(elem));

  return parts;
}

function matchCron(str, date) {
  let cron = parseCron(str);

  let time = [
    date.getMinutes(),
    date.getHours(),
    date.getDate(),
    date.getMonth() + 1,
    date.getDay(),
  ];

  for (let i = 0; i < cron.length; i++) {
    if (cron[i] !== time[i] && !isNaN(cron[i])) {
      return false;
    }
  }

  return true;
}
