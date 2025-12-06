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

// const sub32 = (el) => el - 32;
// const mult5 = (el) => el * 5;
// const div9 = (el) => el / 9;
// const roundDown = (el) => Math.floor(el);

// const farenheitToCelsius = flow([sub32, mult5, div9, roundDown]);

// console.log(farenheitToCelsius(0));
