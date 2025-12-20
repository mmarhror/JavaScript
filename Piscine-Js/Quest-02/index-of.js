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
    console.log(arr[i]);
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

function includes(arr, val, beg) {
  return indexOf(arr, val, beg) !== -1;
}

let t = "b"

console.log(lastIndexOf([0, 0, t, t], t, 3));
