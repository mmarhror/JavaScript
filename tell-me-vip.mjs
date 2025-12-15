import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

let n = process.argv.slice(2)[0] || ".";
let guests = await readdir(n);

let guestsData = guests.map((guest) => readFile(join(n, guest), "utf-8"));

let data = await Promise.all(guestsData);

guests = guests.filter((_, i) => {
  let obj = JSON.parse(data[i]);

  return obj.answer === "yes";
});

guests = guests.map((name, i) => {
  name = name.slice(0, name.length - 5);

  let parts = name.split("_");

  return `${parts[1]} ${parts[0]}`;
});

guests.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

guests = guests.map((guest, i) => {
  return `${i + 1}. ${guest}`;
});

await writeFile("vip.txt", guests.join("\n"));
