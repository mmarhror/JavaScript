function ceil(num) {
  if (num === 0) return 0;

  let tr = trunc(num);
  return num >= 0 ? tr + 1 : tr;
}

function floor(num) {
  if (num === 0) return 0;
  let tr = trunc(num);
  return num >= 0 ? tr : tr - 1;
}

function round(num) {
  if (num === 0) return 0;
  let abs = Math.abs(num);
  let tr = Math.abs(trunc(abs));

  let fract = abs - tr;

  if (fract >= 0.5) {
    return num >= 0 ? tr + 1 : -(tr + 1);
  }
  return num >= 0 ? tr : -tr;
}

function getSub(num) {
  let sub = 1;

  while (num > 10) {
    num /= 10;
    sub *= 10;
  }
  return sub;
}

function trunc(num) {
  if (num === 0) return 0;

  let sign = 1;
  if (num < 0) {
    sign = -1;
    num = -num;
  }

  let res = 0;
  let sub = getSub(num);

  while (num > 1) {
    while (num >= sub) {
      res += sub;
      num -= sub;
    }
    sub /= 10;
  }

  return res * sign;
}
