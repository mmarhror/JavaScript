function map(arr, func) {
  let res = [];

  while (index < arr.length) {
    res.push(func(arr[index], index, arr));
  }
  return res;
}

const add = (el) => el + 1;
const sub = (el) => el - 3;
const mult = (el) => el * 2;

