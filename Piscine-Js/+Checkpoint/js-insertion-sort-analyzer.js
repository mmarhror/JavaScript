export function insertionSortAnalyzer(arr, comparator) {
  let its = 0;
  let swaps = 0;

  let curr = 1;
  while (curr < arr.length) {
    let elem = arr[curr];
    let i = curr;
    while (i >= 0) {
      its++;
      if (comparator(arr[i - 1], elem) > 0) {
        arr[i] = arr[i - 1];
        swaps++;
      } else {
        break;
      }
      i--;
    }
    arr[i] = elem;
    curr++;
  }
  return {
    sortedArray: arr,
    iterations: its,
    swaps: swaps,
  };
}
