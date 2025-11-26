const words = (str) => str.split(" ");
const sentence = (arr) => arr.join(" ");
const yell = (str) => str.toUpperCase();
const whisper = (str) => "*" + str.toLowerCase() + "*";
const capitalize = (str) => yell(str[0]) + str.slice(1).toLowerCase();
