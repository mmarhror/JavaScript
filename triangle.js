function triangle(str, n) {
  if (n === 1) {
    return str;
  }
  let res = str.repeat(n);
  return triangle(str, n - 1) + "\n" + res;
}
