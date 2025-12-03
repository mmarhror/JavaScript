function removeDup(arr) {
  let seen = {};

  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => a - b);
    if (!seen[JSON.stringify(arr[i])]) {
      unique.push(arr[i]);
      seen[JSON.stringify(arr[i])] = true;
    }
  }
  return unique;
}

function getParts(src, res, f = "") {
  if (src.length === 2) {
    return res;
  }

  if (f === "") {
    src.sort((a, b) => a - b);
  }

  //
  let begPart = [src[0] + src[1], ...src.slice(2)];
  //
  let endPart = [
    ...src.slice(0, src.length - 2),
    src[src.length - 1] + src[src.length - 2],
  ];

  res.push(begPart, endPart);

  getParts(begPart, res);
  getParts(endPart, res);

  return res;
}

function sums(num) {
  let src = Array(num).fill(1);

  if (src.length <= 2) {
    return src;
  }

  let res = [];
  res.push(src);

  src = [
    ...src.slice(0, src.length - 2),
    src[src.length - 1] + src[src.length - 2],
  ];
  res.push(src);

  getParts(src, res);

  return removeDup(res);
}

console.log(sums(7));

//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 2],
//   [1, 1, 1, 1, 3],
//   [1, 1, 1, 2, 2],
//   [1, 1, 1, 4],
//   [1, 1, 2, 3],
//   [1, 1, 5],
//   [1, 2, 2, 2],
//   [1, 2, 4],
//   [1, 3, 3],
//   [1, 6],
//   [2, 2, 3],
//   [2, 5],
//   [3, 4],
