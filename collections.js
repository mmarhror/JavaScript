const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join("");
const setToArr = (set) => [...set];
const setToStr = (set) => setToArr(set).join("");
const strToArr = (str) => str.split("");
const strToSet = (str) => new Set(setToArr(str));
const mapToObj = (map) => Object.fromEntries(map);

// object to array :
// array of keys: Object.keys(object).
// array of entries(key values): Object.entries.
// array of values:
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => {
  return { ...arr };
};
const strToObj = (str) => {
  return { ...str };
};

function superTypeOf(elem) {
    if (elem === null) {
        return "null"
    }else if (elem === undefined) {
        return "undefined"
    }
    return elem.constructor.name
}
