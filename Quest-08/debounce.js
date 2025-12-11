function debounce(func, gap) {
  let time = null;

  return function (...args) {
    if (time !== null) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      func(...args);
      time = null;
    }, gap);
  };
}

function opDebounce(func, gap, ops = {}) {
  let time = null;
  let called = false;

  return function (...args) {
    if (time !== null) {
      clearTimeout(time);
    }
    if (ops.leading && time === null) {
      if (!called) {
        func(...args);
      }
      called = true;
    }
    time = setTimeout(() => {
      called = false;
      time = null;
    }, gap);
  };
}
