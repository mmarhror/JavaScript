function retry(count, callback) {
  return async function (...args) {
    while (true) {
      try {
        let value = await callback(...args);
        return value;
      } catch (err) {
        if (count === 0) {
          throw err;
        }
        count--;
      }
    }
  };
}

function timeout(delay, callback) {
  const to = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("timeout")), delay);
  });
  return async function (...args) {
    let value = await Promise.race([callback(...args), to]);
    return value;
  };
}
