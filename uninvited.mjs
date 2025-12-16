import { writeFile } from "fs/promises";
import http from "http";
import { join } from "path";

const server = http.createServer(Handler);
server.listen(5000, () => {
  console.log("Listening on port: http://localhost:5000/");
});

function Handler(req, res) {
  let url = req.url.slice(1);

  res.setHeader("Content-Type", "application/json");

  if (req.method != "POST") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
    return;
  }

  res.statusCode = 201;

  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  console.log(data);

  req.on("end", () => {
    writeFile(join("guests", url + ".json"), data, "utf8")
      .then(() => {
        res.end(data);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "server failed" }));
        throw err;
      });
  });
}
