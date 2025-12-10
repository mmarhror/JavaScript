function filterEntries(food, func) {
  let entries = Object.entries(food);

  let res = entries.filter((ent) => func(ent));

  return Object.fromEntries(res);
}

function mapEntries(food, func) {
  let entries = Object.entries(food);

  let res = entries.map((ent) => func([ent[0], ent[1]]));

  return Object.fromEntries(res);
}

function reduceEntries(food, func, acc = 0) {
  let entries = Object.entries(food);

  acc = entries.reduce((ac, ent) => func(ac, ent), acc);

  return acc;
}

function cartTotal(food) {
  let entries = Object.entries(food);

  entries = entries.map((ent) => {
    let k = ent[0];
    let v = ent[1];

    let asp = nutritionDB[k];
    let times = (v / 100).toFixed(2);

    let values = {
      calories: Number((times * asp.calories).toFixed(3)),
      protein: Number((times * asp.protein).toFixed(3)),
      carbs: Number((times * asp.carbs).toFixed(3)),
      sugar: Number((times * asp.sugar).toFixed(3)),
      fiber: Number((times * asp.fiber).toFixed(3)),
      fat: Number((times * asp.fat).toFixed(3)),
    };

    return [k, values];
  });

  return Object.fromEntries(entries);
}

function totalCalories(food) {
  let values = Object.values(cartTotal(food));

  let total = values.reduce((acc, curr) => {
    return acc + curr.calories;
  }, 0);

  return Number(total.toFixed(1));
}

function lowCarbs(food) {
  let total = cartTotal(food);
  let entries = Object.entries(food);

  entries = entries.filter((ent) => {
    let carbs = total[ent[0]].carbs;
    return carbs < 50;
  });

  return Object.fromEntries(entries);
}
