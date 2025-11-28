function nasa(N) {
  let res = "";

  let cnt = 1;
  while (cnt <= N) {
    if (cnt % 5 == 0 && cnt % 3 == 0) {
      res += "NASA";
    } else if (cnt % 3 == 0) {
      res += "NA";
    } else if (cnt % 5 == 0) {
      res += "SA";
    } else {
      res += String(cnt);
    }
    res += " ";
    cnt++;
  }
  return res.slice(0, res.length - 1);
}
