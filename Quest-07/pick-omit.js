function pick(obj, inn) {
  let arr = "";
  if (!Array.isArray(inn)) {
    arr = [inn];
  } else {
    arr = inn;
  }

  let res = {};

  for (const key of Object.keys(obj)) {
    if (arr.includes(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}

function omit(obj, inn) {
  let arr = "";
  if (!Array.isArray(inn)) {
    arr = [inn];
  } else {
    arr = inn;
  }

  let res = {};

  for (const key of Object.keys(obj)) {
    if (!arr.includes(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}
