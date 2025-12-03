const isValid = (date) => {
  if (!date || date === null) {
    return false;
  }

  let d = undefined;
  if (date.constructor.name === "Date") {
    d = date.getTime();
  } else {
    d = date;
  }

  return !isNaN(d);
};

const isAfter = (d1, d2) => d1 > d2;
const isBefore = (d1, d2) => d1 < d2;
const isFuture = (date) => isValid(date) && isAfter(date, new Date());
const isPast = (date) => isValid(date) && isBefore(date, new Date());
