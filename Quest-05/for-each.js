function forEach(arr, func) {
  let index = 0;
  while (index < arr.length) {
    func(arr[index], index, arr);
    index++;
  }
}
