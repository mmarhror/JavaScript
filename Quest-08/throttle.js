function throttle(func, delay) {
  let timeout = null;

  return function (...args) {
    //
    if (timeout) return;
    func(...args);
    //
    timeout = setTimeout(() => {
      //
      timeout = null;
      //
    }, delay);
  };
}

function opThrottle(func, delay, ops = { trailing: false }) {
  let timeout = null;

  return function (...args) {
    //
    if (timeout) return;
    if (ops.leading) func(...args);
    //
    timeout = setTimeout(() => {
      //
      if (!ops.leading) func(...args);
      timeout = null;
      //
    }, delay);
  };
}
