function sameAmount(str, r1, r2) {
  r1 = new RegExp(r1, "g");
  r2 = new RegExp(r2, "g");

  let match1 = str.match(r1);
  let match2 = str.match(r2);

  if (match1 === null || match2 === null) {
    return false;
  }

  return match1.length == match2.length;
}
