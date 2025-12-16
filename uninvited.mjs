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

  req.on("end", () => {
    writeFile(join("guests", url + ".json"), data, "utf8")
      //
      .catch((err) => {
        res.statusCode = 500;
        console.log(err);
        res.end(JSON.stringify({ error: "server failed" }));
      });
  });
}
