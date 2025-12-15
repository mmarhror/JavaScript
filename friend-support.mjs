import { readdir, readFile } from "fs/promises";
import http from "http";
import { join } from "path";

let e = {};

let files = await readdir("guests", (err) => {
  e.error = "server failed";
  console.log(err);
  res.end(JSON.stringify(e));
});

function Handler(req, res) {
  let url = req.url.slice(1);

  if (!files.includes(url + ".json")) {
    res.statusCode = 404;
    e.error = "guest not found";
    res.end(JSON.stringify(e));
    return;
  }

  let read = readFile(join("guests", url + ".json"), "utf8");

  read.then((content) => {
    res.end(content);
  });
}

const server = http.createServer(Handler);

server.listen(5000, () => {
  console.log("Listening on port: http://localhost:5000/");
});
