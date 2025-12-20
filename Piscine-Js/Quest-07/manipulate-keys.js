function filterKeys(food, func) {
  let entries = Object.entries(food);

  let res = entries.filter((ent) => func(ent[0]));

  return Object.fromEntries(res);
}

function mapKeys(food, func) {
  let entries = Object.entries(food);

  let res = entries.map((ent) => [func(ent[0]), ent[1]]);

  return Object.fromEntries(res);
}

function reduceKeys(food, func, acc) {
  let keys = Object.keys(food);

  if (acc === undefined) {
    acc = keys[0];
    keys = keys.slice(1);
  }

  acc = keys.reduce((ac, key) => func(ac, key), acc);

  return acc;
}
