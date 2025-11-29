function getPart(base, depth) {
  if (base === 1) {
    return [[1]];
  }

  res = [];
  let sub = base - 1;
  while (sub > 0) {
    res.push(pushOnes([sub, base - sub], depth));
    sub--;
  }

  return res;
}

function sums(num) {
  if (num === 1) {
    return [1];
  }

  let parts = [];
  let cnt = 0;
  while (num > 1) {
    parts.push(getPart(num, cnt));
    cnt++;
    num--;
  }

  parts = parts.flat();

  parts.map((elem) => elem.sort((a, b) => a - b));
  parts = removeDup(parts);

  return parts;
}

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

function pushOnes(arr, cnt) {
  while (cnt > 0) {
    arr.push(1);
    cnt--;
  }
  return arr;
}

function normaliser(arr) {
  for (let i = 0; i < arr.length; i++) {
    pushOnes(arr[i], i);
  }
  return arr;
}

console.log(sums(7));

const a = [
  [1, 6],
  [2, 5],
  [3, 4],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 2],
  [1, 1, 1, 1, 3],
  [1, 1, 1, 2, 2],
  [1, 1, 1, 4],
  [1, 1, 2, 3],
  [1, 1, 5],
  [1, 2, 2, 2],
  [1, 2, 4],
  [1, 3, 3],
  [2, 2, 3],
];
