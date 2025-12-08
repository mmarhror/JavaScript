function filterValues(food, func) {
  let entries = Object.entries(food);

  let res = entries.filter((ent) => func(ent[1]));

  return Object.fromEntries(res);
}

function mapValues(food, func) {
  let entries = Object.entries(food);

  let res = entries.map((ent) => [ent[0], func(ent[1])]);

  return Object.fromEntries(res);
}

function reduceValues(food, func, acc = 0) {
  let values = Object.values(food);

  acc = values.reduce((ac, val) => func(ac, val), acc);

  return acc;
}
