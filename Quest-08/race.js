function race(proms) {
  return new Promise((resolve, reject) => {
    if (proms.length === 0) return;
    for (const prom of proms) {
      prom.then(resolve).catch(reject);
    }
  });
}

async function some(array, count) {
  if (array.length === 0 || count === 0) {
    return Promise.resolve([]);
  }

  return await new Promise((resolve) => {
    let res = []
    for (const prom of array) {
      prom.then((val) => {
        res.push(val);
        count--;
        if (count === 0) {
          resolve(res.reverse());
        }
      });
    }
  });
}
