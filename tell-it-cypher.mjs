import { log } from "console";
import { readFile, writeFile } from "fs/promises";

let args = process.argv.slice(2);

let bytes = await readFile(args[0], "utf-8");
if (args[1] === "encode") {
  writeFile("cypher.txt", Buffer.from(bytes, "utf8").toString("base64"));
} else {
  writeFile("clear.txt", Buffer.from(bytes, "base64").toString("utf8"));
}
