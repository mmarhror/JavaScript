export function createCurriedFilterAndMap(criteria, mapper) {
  return function (obj) {
    let entries = Object.entries(obj);

    let filtered = entries.filter((ent) => criteria(...ent));

    filtered = filtered.map((ent) => [ent[0], mapper(ent[1])]);

    let res = Object.fromEntries(filtered);

    return {
      filteredObject: res,
      keysKept: filtered.length,
      keysFilteredOut: entries.length - filtered.length,
    };
  };
}
