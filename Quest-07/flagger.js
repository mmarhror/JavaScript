function parseDescription(key, txt) {
  let short = `-${key[0]}`;
  let long = `--${key}`;

  return `${short}, ${long}: ${txt}`;
}

function flags(obj) {
  let keys = obj.help || Object.keys(obj);

  let all = {};

  console.log(keys);

  all.alias = { h: "help" };

  for (const key in obj) {
    all.alias[key[0]] = key;
  }

  all.description = [];

  keys.forEach((key) => {
    all.description.push(parseDescription(key, obj[key]));
  });

  all.description = all.description.join("\n");

  return all;
}
