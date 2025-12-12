function retry(count, callback) {
  return async function (...args) {
    let err;
    while (count >= 0) {
      try {
        let value = await callback(...args);
        return value;
      } catch (e) {
        err = e;
        count--;
      }
    }
    throw err;
  };
}
