function isObject(elem) {
  return elem && elem.constructor.name === "Object";
}

function replica(trgt, ...objs) {
  if (objs.length === 0) {
    return trgt;
  }
  let obj = objs[0];
  for (const key in obj) {
    if (isObject(trgt[key]) && isObject(obj[key])) {
      trgt[key] = { ...trgt[key], ...obj[key] };
    } else {
      trgt[key] = obj[key];
    }
  }
  return replica(trgt, ...objs.slice(1));
}
