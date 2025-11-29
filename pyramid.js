let depth = 0;

function pyramid(str, n) {
  if (n > depth) {
    depth = n;
  }

  if (n === 1) {
    return " ".repeat((depth - n) * str.length) + str;
  }
  let res = " ".repeat((depth - n) * str.length) + str.repeat(n * 2 - 1);
  return pyramid(str, n - 1) + "\n" + res;
}
