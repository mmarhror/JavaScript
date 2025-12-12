function toSnakeCase(str = "") {
  str = str.toLowerCase().trim();
  let words = str.match(/[a-zA-Z]+/g);
  return words.join("_");
}

function parseRequests(obj, type, request) {
  let parts = request.split(" - Response: ");

  let r = toSnakeCase(parts[0]);

  if (!obj[r]) {
    obj[r] = {};
    obj[r][type] = parts[0].trim();
    obj[r].responses = [];
  }
  obj[r].responses.push(parts[1]);
}

function neuron(arr) {
  let all = {};

  for (let elem of arr) {
    let type = parseType(elem);
    elem = elem.slice(type.length + 1);

    if (!all[type]) {
      all[type] = {};
    }

    parseRequests(all[type], type.slice(0, type.length - 1), elem);
  }

  return all;
}

function parseType(msg) {
  let type = msg.match(/[^:]+/)[0];

  return type.toLowerCase();
}
