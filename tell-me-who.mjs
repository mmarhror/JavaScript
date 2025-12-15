import { log } from "console";
import { readdir } from "fs/promises";

let name = process.argv.slice(2)[0] || ".";

let guests = await readdir(name);

guests.forEach((name, i) => {
  name = name.slice(0, name.length - 5);

  let parts = name.split("_");

  console.log(`${i+1}. ${parts[1]} ${parts[0]}`);
});
