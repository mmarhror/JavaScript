const cutFirst = (elem) => elem.slice(2);
const cutLast = (elem) => elem.slice(0, elem.length - 2);
const cutFirstLast = (elem) => cutFirst(cutLast(elem));
const keepFirst = (elem) => elem.slice(0, 2);
const keepLast = (elem) => elem.slice(elem.length - 2);
const keepFirstLast = (elem) => {
  return elem.length >= 4 ? keepFirst(elem) + keepLast(elem) : elem;
};
