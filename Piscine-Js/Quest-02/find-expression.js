const add4 = "+4";
const mul2 = "*2";
function findExpression(num) {
  if (num === 1) {
    return "1";
  }

  if (num < 1) {
    return undefined;
  }

  let res = undefined;
  res = findExpression(num / 2);
  if (res) {
    return res + " " + mul2;
  }

  res = findExpression(num - 4);
  if (res) {
    return res + " " + add4;
  }
}

console.log(findExpression(1960));
