function parseDescription(key, txt) {
  let short = `-${key[0]}`;
  let long = `--${key}`;

  return `${short}, ${long}: ${txt}`;
}

function flags(obj) {
  let keys = Object.keys(obj);
  let all = {};

  all.alias = { h: "help" };

  keys.forEach((key) => {
    all.alias[key[0]] = key;
  });

  let entries = Object.entries(obj);
  all.description = [];

  entries.forEach((ent) => {
    all.description.push(parseDescription(ent[0], ent[1]));
  });

  all.description = all.description.join("\n");

  return all;
}

// console.log(
//   flags({
//     invert: "inverts and object",
//     "convert-map": "converts the object to an array",
//     assign: "uses the function assign - assign to target object",
//   })
// );
