import { writeFile } from "fs/promises";
import http from "http";
import { join } from "path";

const server = http.createServer(Handler);
server.listen(5000, () => {
  console.log("Listening on port: http://localhost:5000/");
});

function unauthorized(res) {
  res.statusCode = 401;
  res.end("Authorization Required");
}

function Handler(req, res) {
  let url = req.url.slice(1);

  res.setHeader("Content-Type", "application/json");

  if (req.method != "POST") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
    return;
  }

  let auths = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];

  let credentials = req.headers.authorization;

  if (!credentials) {
    unauthorized(res);
    return;
  }

  credentials = credentials.split(" ")[1];
  credentials = Buffer.from(credentials, "base64").toString("utf-8");

  console.log(credentials);

  const [username, password] = credentials.split(":");

  if (!auths.includes(username) || password !== "abracadabra") {
    unauthorized(res);
    return;
  }

  res.statusCode = 200;
  res.statusMessage = "OK";

  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    writeFile(join("guests", url + ".json"), data, "utf8")
      .then(() => {
        data = JSON.parse(data);

        res.end(JSON.stringify(data));
      })
      .catch(() => {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "server failed" }));
        throw err;
      });
  });
}
