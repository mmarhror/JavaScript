function throttle(func, gap) {
  let allowed = true;

  return function (...args) {
    if (allowed) {
      func(...args);
      allowed = false;
    }
    setTimeout(() => {
      allowed = true;
    }, gap);
  };
}

function opThrottle(func, gap, ops = {}) {
  let time = null;

  return function (...args) {
    if (!time) {
      if (ops.leading) func(...args);

      time = setTimeout(() => {
        if (!ops.leading) func(...args);
        time = null;
      }, gap);
    }
  };
}
