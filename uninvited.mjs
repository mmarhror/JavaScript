import { readFile } from "fs/promises";
import http from "http";
import { join } from "path";

const server = http.createServer(Handler);
server.listen(5000, () => {
  console.log("Listening on port: http://localhost:5000/");
});

function Handler(req, res) {
  let url = req.url.slice(1);

  res.setHeader("Content-Type", "application/json");

  if (req.method != "GET") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
    return;
  }

  res.statusCode = 200;
  readFile(join("guests", url + ".json"), "utf8")
    .then((content) => res.end(content))
    .catch((err) => {
      if (err.code === "ENOENT") {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "guest not found" }));
        return;
      } else {
        res.statusCode = 500;
        console.log(err);
        res.end(JSON.stringify({ error: "server failed" }));
      }
    });
}
