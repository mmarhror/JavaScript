export function evenSum(nums) {
  let sum = 0;
  while (nums >= 0) {
    if (nums % 2 === 0) {
      sum += nums;
    }
    nums--;
  }
  return sum;
}
