const isValid = (date) => !Number.isNaN(date.getTime());
const isAfter = (d1, d2) => d1.getTime() > d2.getTime();
const isBefore = (d1, d2) => d1.getTime() < d2.getTime();
const isFuture = (date) => isValid(date) && isAfter(date, new Date());
const isPast = (date) => isValid(date) && isBefore(date, new Date());


