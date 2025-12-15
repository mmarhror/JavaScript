import fs from "fs/promises";

let content = await fs.readFile("verydisco.txt", "utf-8", (err) => {
  if (err) {
    console.log(err);
  }
});

let words = content.split(" ");

words = words.map((word) => {
  let first = word.slice(0, Math.ceil(word.length / 2));
  let last = word.slice(Math.ceil(word.length / 2));

  return last + first;
});

console.log(words.join(" "));
