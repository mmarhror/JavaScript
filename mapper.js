function map(arr, func) {
  let res = [];

  while (index < arr.length) {
    res.push(func(arr[index], index, arr));
  }
  return res;
}

const add1 = (el) => el + 1;
const sub3 = (el) => el - 3;
const mult2 = (el) => el * 2;

