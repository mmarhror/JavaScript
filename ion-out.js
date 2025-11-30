function ionOut(str) {
  let query = /[\w]+t(?=ion)/g;

  let match = str.match(query);
  return match === null ? [] : match;
}
