function flow(arr) {
  return function (...nbr) {
    let func = arr[0];
    let res = func(...nbr);
    for (let i = 1; i < arr.length; i++) {
      func = arr[i];
      res = func(res);
    }
    return res;
  };
}
