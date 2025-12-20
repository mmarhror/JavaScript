export function divisors(n) {
  n = Math.abs(n);
  let res = [];
  let div = 1;
  while (div < n) {
    if (n % div === 0) {
      res.push(div);
    }
    div++;
  }
  return res;
}
