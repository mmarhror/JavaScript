function defaultCurry(obj1) {
  return function (obj2) {
    return { ...obj1, ...obj2 };
  };
}

function mapCurry(func) {
  return function (obj) {
    let entries = Object.entries(obj);

    entries = entries.map((ent) => func(ent));

    return Object.fromEntries(entries);
  };
}

function reduceCurry(func) {
  return function (obj, val) {
    let entries = Object.entries(obj);

    return entries.reduce((acc, ent) => func(acc, ent), val);
  };
}

function filterCurry(func) {
  return function (obj) {
    let entries = Object.entries(obj);

    entries = entries.filter((ent) => func(ent));

    return Object.fromEntries(entries);
  };
}

function reduceScore(obj, val) {
  let values = Object.values(obj);

  return values.reduce((acc, pers) => {
    if (pers.isForceUser) {
      return acc + pers.shootingScore + pers.pilotingScore;
    } else {
      return acc;
    }
  }, val);
}

function filterForce(obj) {
  let entries = Object.entries(obj);

  entries = entries.filter((ent) => {
    return ent[1].shootingScore >= 80 && ent[1].isForceUser;
  });

  return Object.fromEntries(entries);
}

function mapAverage(obj) {
  let entries = Object.entries(obj);

  entries = entries.map((ent) => {
    let k = ent[0];
    let val = ent[1];

    val["averageScore"] = (val.shootingScore + val.pilotingScore) / 2;
    return [k, val];
  });

  return Object.fromEntries(entries);
}
