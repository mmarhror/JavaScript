function filterShortStateName(arr) {
  return arr.filter((elem) => elem.length < 7);
}

function filterStartVowel(arr) {
  return arr.filter((elem) => /^[aeiouAEIOU]/.test(elem));
}

function filter5Vowels(arr) {
  return arr.filter((elem) => elem.match(/[aeiouAEIOU]/g).length >= 5);
}

function distinctVowel(str) {
  str = str.toLowerCase();

  let matches = new Set(str.match(/[aeiou]/g));

  return matches.size === 1;
}

function filter1DistinctVowel(arr) {
  return arr.filter((elem) => distinctVowel(elem));
}

function valid(obj) {
  if (obj.capital.length < 8) {
    return false;
  }
  if (/^[aeiouAEIOU]/.test(obj.name)) {
    return false;
  }
  if (obj.tag.match(/[aeiouAEIOU]/g) === null) {
    return false;
  }
  return obj.region !== "South";
}

function multiFilter(arr) {
  return arr.filter((obj) => valid(obj));
}
