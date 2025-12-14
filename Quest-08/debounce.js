function debounce(func, delay) {
  let timeout = null;

  return function (...args) {
    //
    if (timeout) clearTimeout(timeout);
    //
    timeout = setTimeout(() => {
      //
      func(...args);
      timeout = null;
      //
    }, delay);
  };
}

function opDebounce(func, delay, obj = {}) {
  //
  let timeout = null;
  //
  return function (...args) {
    //
    if (timeout) clearTimeout(timeout);

    if (obj.leading && !timeout) func(...args);
    //
    timeout = setTimeout(() => {
      //
      if (!obj.leading) func(...args);
      timeout = null;
      //
    }, delay);
  };
}
