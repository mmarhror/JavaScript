function isPronoun(str) {
  const pronouns = ["i", "you", "he", "she", "it", "they", "we"];
  return pronouns.includes(str);
}

function pronoun(str) {
  let words = str.split(/[\s\W]+/);
  let res = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (isPronoun(word)) {
      if (!res[word]) {
        res[word] = {};
        res[word].word = [];
        res[word].count = 0;
      }

      if (words[i + 1] && !isPronoun(words[i + 1])) {
        res[word].word.push(words[i + 1]);
      }

      res[word].count++;
    }
  }

  return res;
}
