async function series(funcs) {
  let res = [];
  for (const func of funcs) {
    let value = await func();
    res.push(value);
  }
  return res;
}
