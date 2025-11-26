function sign(num) {
  if (num == 0) {
    return num;
  }
  return num > 0 ? 1 : -1;
}

function sameSign(n1, n2) {
  if (n1 == 0 && n2 == 0) {
    return true;
  }
  if (n1 > 0 && n2 > 0) {
    return true;
  }
  if (n1 < 0 && n2 < 0) {
    return true;
  }
  return false;
}
