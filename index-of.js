function indexOf(arr, val, beg) {
  if (beg === undefined) {
    beg = 0;
  }
  for (let i = beg; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(arr, val, beg) {
  if (beg === undefined) {
    beg = arr.length - 1;
  }
  for (let i = beg; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

function includes(arr, val, beg) {
  return indexOf(arr, val, beg) !== -1;
}
