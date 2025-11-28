function get

function trunc(num) {
  if (num === 0) return 0;

  let sign = 1;
  if (num < 0) {
    sign = -1;
    num = -num;
  }

  let deg = 0;

  while (num > 1) {
    deg++;
    num--;
  }

  return deg * sign;
}

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

// const nums = [4, -3, 3, -2, 0];
// console.log(nums.map(round));
// console.log(nums.map(floor));
// console.log(nums.map(trunc));
// console.log(nums.map(ceil));
