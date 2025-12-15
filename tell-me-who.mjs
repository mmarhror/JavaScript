import { log } from "console";
import { readdir } from "fs/promises";

let n = process.argv.slice(2)[0] || ".";

let guests = await readdir(n);

guests = guests.map((name, i) => {
  name = name.slice(0, name.length - 5);

  let parts = name.split("_");

  return `${parts[1]} ${parts[0]}`;
});

guests.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

guests.forEach((guest, i) => {
  log(`${i+1}. ${guest}`);
});
