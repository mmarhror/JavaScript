export function bubbleSortAnalyzer(arr, comparator) {
  let swaps = 0;
  let its = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swaps++;
        swaped = true;
      }
      its++;
    }
    if (!swaped) break;
  }
  return {
    sortedArray: arr,
    iterations: its,
    swaps: swaps,
  };
}
