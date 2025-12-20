function adder(arr, num = 0) {
  return arr.reduce((acc, elem) => acc + elem, num);
}

function sumOrMul(arr, num = 0) {
  return arr.reduce(
    (acc, elem) => (elem % 2 === 0 ? acc * elem : acc + elem),
    num
  );
}

function funcExec(arr, num = 0) {
  return arr.reduce((acc, func) => func(acc), num);
}

console.log(sumOrMul([8, 16, 7, 0, 32]));
