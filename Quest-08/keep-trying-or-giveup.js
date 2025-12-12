function retry(count, callback) {
  return async function (...args) {
    let err;
    while (count >= 0) {
      try {
        return await callback(...args);
      } catch (e) {
        err = e;
        count--;
      }
    }
    throw err;
  };
}

function timeout(delay, callback) {
  return function (...args) {
    const time = () =>
      new Promise((_, reject) => {
        setTimeout(() => reject(new Error("timeout")), delay);
      });

    let value = Promise.race([callback(...args), time()]);
    return value;
  };
}
