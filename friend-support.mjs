import { readdir, readFile } from "fs/promises";
import http, { get } from "http";
import { join } from "path";

let e = {};
let status = true;

let files;

try {
  files = await readdir("guests");
} catch (err) {
  status = false;
  e.error = "server failed";
  console.log(err);
}

function Handler(req, res) {
  let url = req.url.slice(1);

  if (req.method != "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end("method not allowed");
    return;
  }

  if (!status) {
    res.statusCode = 500;
    e.error = "internal server error";
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(e));
    return;
  }

  if (!files.includes(url + ".json")) {
    res.statusCode = 404;
    e.error = "guest not found";
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(e));
    return;
  }

  let read = readFile(join("guests", url + ".json"), "utf8");

  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  read.then((content) => {
    res.end(content);
  });
}

const server = http.createServer(Handler);

server.listen(5000, () => {
  console.log("Listening on port: http://localhost:5000/");
});
