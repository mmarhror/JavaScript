function map(arr, func) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i, arr));
  }
  return res;
}

function flatMap(arr, func) {
  arr = map(arr,func);

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        res.push(arr[i][j]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(flatMap([1, 2, 3], (n) => [n, n]));
