function citiesOnly(arr) {
  return arr.map((obj) => obj.city);
}

function capitalize(str) {
  let words = str.split(" ");

  let cap = words.map((word) => {
    word = word.toLowerCase();
    word = word[0].toUpperCase() + word.slice(1);
    return word;
  });
  return cap.join(" ");
}

function upperCasingStates(arr) {
  return arr.map((name) => capitalize(name));
}

function toCelsius(f) {
  let value = f.split("°")[0];

  let celsius = (Number(value) - 32) * (5 / 9);

  return `${Math.floor(celsius)}°C`;
}

function fahrenheitToCelsius(arr) {
  return arr.map((f) => toCelsius(f));
}

function trimTemp(arr) {
  return arr.map((obj) => {
    obj.temperature = obj.temperature.replace(/ /g, "");
    return obj;
  });
}

function formater(obj) {
  let res = "";

  res += fahrenheitToCelsius([obj.temperature])[0] + "elsius ";
  res += "in " + capitalize(obj.city);
  res += ", " + capitalize(obj.state);

  return res;
}

function tempForecasts(arr) {
  return arr.map((obj) => formater(obj));
}
