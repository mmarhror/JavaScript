function invert(obj) {
  let entries = Object.entries(obj);

  for (const ent of entries) {
    ent.reverse();
  }
  return Object.fromEntries(entries);
}
