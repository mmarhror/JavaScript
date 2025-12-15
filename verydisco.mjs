let args = process.argv.slice(2);

let words = args[0].split(" ");

words = words.map((word) => {
  let first = word.slice(0, Math.ceil(word.length / 2));
  let last = word.slice(Math.ceil(word.length / 2));

  return last + first;
});
console.log(words.join(" "));
