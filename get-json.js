function stringlify(path, params) {
  let entries = Object.entries(params);
  let queryArray = [];

  entries.forEach((ent) => {
    let key = ent[0];
    let value = ent[1];

    key = String(key);
    value = String(value);

    value = value.split(" ").join("+");

    queryArray.push(key + "=" + value);
  });

  return path + "?" + queryArray.join("&");
}

async function getJSON(path, params) {
  path = stringlify(path, params);

  let response = await fetch(path);
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  response = await response.json();

  if (response.data) {
    return response.data;
  } else if (response.error) {
    throw new Error(response.error);
  }
}
