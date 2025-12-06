function map(arr, func) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i, arr));
  }
  return res;
}

function flatMap(arr, func) {
  let m = map(arr);

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr.length; j++) {
        res.push(arr[i][j]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
