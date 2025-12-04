function adder(arr, acc = 0) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, elem) => acc + elem, acc);
}

function sumOrMul(arr, acc) {
  return arr.reduce(
    (acc, elem) => (elem % 2 === 0 ? acc * elem : acc + elem),
    acc
  );
}

function funcExec(arr, acc = 0) {
  return arr.reduce((acc, func) => func(acc), acc);
}

console.log(sumOrMul([29, 23, 3, 2, 25]));
