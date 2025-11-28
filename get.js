function get(src, path) {
  let elems = path.split(".");
  let current = elems[0];
  if (!src[current]) {
    return undefined;
  }
  if (elems.length == 1) {
    return src[elems[0]];
  }

  path = elems.slice(1).join(".");
  let v = get(src[current], path);
  if (v) {
    return v;
  }
}
