import { readdir, readFile } from "fs/promises";
import http from "http";
import { join } from "path";

let status = true;

let files;

try {
  files = await readdir("guests");
} catch (err) {
  status = false;
  console.log(err);
}

function Handler(req, res) {
  let url = req.url.slice(1);

  if (!status) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "internal server error" }));
    return;
  }

  if (req.method != "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
    return;
  }

  if (!files.includes(url + ".json")) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "guest not found" }));
    return;
  }
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  readFile(join("guests", url + ".json"), "utf8")
    .then((content) => res.end(content))
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 500;
      console.log(err);
      res.end(JSON.stringify({ error: "internal server error" }));
      return;
    });
}

const server = http.createServer(Handler);

server.listen(5000, () => {
  console.log("Listening on port: http://localhost:5000/");
});
