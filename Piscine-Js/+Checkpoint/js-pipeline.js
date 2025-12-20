export function pipeline(initialValue, functions) {
  let steps = [];
  let res;
  if (functions.length === 0) {
    return { finalValue: initialValue, steps: [] };
  }
  functions.reduce((acc, func, i) => {
    steps.push({ index: i, input: acc, output: func(acc) });
    res = func(acc);
    return res;
  }, initialValue);
  return {
    finalValue: res,
    steps: steps,
  };
}
