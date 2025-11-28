function slice(elem, beg, end) {
  if (end === undefined) {
    end = elem.length;
  }

  if (end < 0) {
    end = elem.length + end;
  }
  if (beg < 0) {
    beg = elem.length + beg;
  }
  let res = [];

  while (beg < end) {
    res.push(elem[beg]);
    beg++;
  }

  return typeof elem === "string" ? res.join("") : res;
}
