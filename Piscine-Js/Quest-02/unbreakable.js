function split(str, sep) {
  let res = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (sep === "") {
      res.push(str[i]);
      continue;
    }
    if (str.slice(i, i + sep.length) === sep) {
      res.push(temp);
      temp = "";
      i += sep.length - 1;
    } else {
      temp += str[i];
    }
  }

  if (sep !== "") res.push(temp);

  return res;
}

function join(arr, sep) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    if (i < arr.length - 1) res += sep;
  }
  return res;
}
