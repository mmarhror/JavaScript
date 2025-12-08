function fillObj(obj, srcObj) {
  for (const ent of Object.entries(srcObj)) {
    let key = ent[0];
    let value = ent[1];

    if (Array.isArray(value)) {
      //
      if (!obj[key]) {
        obj[key] = [];
      }
      obj[key].push(...value);
      //
    } else if (typeof value === "string") {
      //
      if (!obj[key]) {
        obj[key] = "";
      }
      obj[key] += value + " ";
      //
    } else if (typeof value === "number") {
      //
      if (!obj[key]) {
        obj[key] = 0;
      }

      if (typeof obj[key] === "number") {
        obj[key] += value;
      } else {
        obj[key] = value;
      }

      //
    } else if (typeof value === "object") {
      //
      if (!obj[key]) {
        obj[key] = {};
      }

      if (typeof obj[key] === "object") {
        fillObj(obj[key], value);
      } else {
        obj[key] = value;
      }
      //
    }
  }
}

function fusion(obj1, obj2) {
  let res = {};

  fillObj(res, obj1);
  fillObj(res, obj2);

  for (let key in res) {
    if (typeof res[key] === "string") {
      res[key] = res[key].slice(0, res[key].length - 1);
    }
  }

  return res;
}
