function multiply(a, b) {
  if (b == 0 || a == 0) {
    return 0;
  }

  let sign = a < 0 === b < 0 ? 1 : -1;

  a = Math.abs(a);
  b = Math.abs(b);

  let num = a;
  while (b > 1) {
    a += num;
    b--;
  }

  return sign == 1 ? a : -a;
}
function divide(a, b) {
  let sign = a < 0 === b < 0 ? 1 : -1;

  a = Math.abs(a);
  b = Math.abs(b);

  let cnt = 0;
  let devisor = b;
  while (devisor <= a) {
    devisor += b;
    cnt++;
  }
  return sign == 1 ? cnt : -cnt;
}

function modulo(a, b) {
  let sign = a > 0 ? 1 : -1;

  a = Math.abs(a);
  b = Math.abs(b);

  let fit = 0;
  while (fit + b <= a) {
    fit += b;
  }

  return sign == 1 ? a - fit : -(a - fit);
}

console.log(modulo(123, -22));
