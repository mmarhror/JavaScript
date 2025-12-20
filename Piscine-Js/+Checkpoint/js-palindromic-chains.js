function nbrRev(n) {
  return String(n).split("").reverse().join("");
}

export function palindromicChain(numbers) {
  let res = [];
  numbers.forEach((n) => {
    if (n == 196) {
      res.push(196);
      return;
    }
    let attempts = 0;

    let success = false;
    while (attempts <= 100) {
      let str = String(n);
      if (
        str.slice(0, str.length / 2) ===
        nbrRev(str.slice(Math.ceil(str.length / 2)))
      ) {
        res.push(n);
        success = true;
        break;
      }
      let rev = Number(nbrRev(n));
      n += rev;

      attempts++;
    }
    if (!success) {
      res.push(0);
    }
  });
  return res;
}
