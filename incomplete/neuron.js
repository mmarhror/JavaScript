function toSnakeCase(str = "") {
  str = str.toLowerCase();
  let words = str.split(/\s+/);
  return words.join("_");
}

function getQuestions(str, all) {
  let parts = str.split(" - ");
  let request = parts[0];
  let responses = parts[1];

  console.log(toSnakeCase(request));
  console.log(responses);
}

function neuron(arr) {
  let all = {};

  arr.forEach((elem) => {
    let type = elem.match(/[^:]+/)[0].toLowerCase();

    if (!all[type]) {
      all[type] = [];
    }

    all[type].push(elem);
  });

  console.log(all);
}

neuron([
  "Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system",
  "Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)",
  "Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps",
  "Orders: shutdown! - Response: Yes Sr!",
  "Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.",
]);
