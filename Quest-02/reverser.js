function reverse(elem) {
  let res = [];

  for (let i = elem.length - 1; i >= 0; i--) {
    res.push(elem[i]);
  }

  return typeof elem === "string" ? res.join("") : res;
}
