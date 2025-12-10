function replica(trgt, ...objs) {
  for (const elem of objs) {
    for (const key in elem) {
      let val = elem[key];
      if (val || val.constructor.name === "Object" || Array.isArray(val)) {
      }
      trgt[key] = elem[key];
    }
  }
  return trgt;
}

console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));
