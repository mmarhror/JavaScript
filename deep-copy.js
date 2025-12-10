function deepCopy(elem) {
  if (!elem || (elem.constructor.name !== "Object" && !Array.isArray(elem))) {
    return elem;
  }

  let clone = Array.isArray(elem) ? [] : {};

  for (const key in elem) {
    if (elem || elem.constructor.name === "Object" || Array.isArray(elem)) {
      clone[key] = deepCopy(elem[key]);
    } else {
      clone[key] = elem[key];
    }
  }

  return clone;
}
