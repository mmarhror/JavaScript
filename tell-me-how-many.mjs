import { log } from "console";
import { readdir } from "fs/promises";

let name = process.argv.slice(2)[0];

if (!name) name = ".";

let res = await readdir(name);

log(res.length);
