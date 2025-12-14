async function all(obj) {
  let res = {};
  for (const key in obj) {
    res[key] = await Promise.resolve(obj[key]);
  }
  return res;
}
