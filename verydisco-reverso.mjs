import { readFile } from "fs/promises";

let content = await readFile(process.argv[2], "utf-8");

let words = content.split(" ");

words = words.map((word) => {
  let first = word.slice(0, Math.floor(word.length / 2));
  let last = word.slice(Math.floor(word.length / 2));

  return last + first;
});

console.log(words.join(""));
