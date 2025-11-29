function flat(arr, depth = 1) {
  if (depth === Infinity) {
    depth = 50;
  }

  let temp = [];
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flag = true;
      for (let j = 0; j < arr[i].length; j++) {
        temp.push(arr[i][j]);
      }
    } else {
      temp.push(arr[i]);
    }
  }
  if (depth === 1) {
    return temp;
  }

  if (!flag) {
    return temp;
  }
  return flat(temp, depth - 1);
}
