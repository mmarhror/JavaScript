import { readFile } from "node:fs/promises";

let content = await readFile(process.argv[2], "utf-8");

let words = content.split(" ");

words = words.map((word) => {
  let first = word.slice(0, Math.ceil(word.length / 2));
  let last = word.slice(Math.ceil(word.length / 2));

  return last + first;
});

console.log(words.join(" "));
