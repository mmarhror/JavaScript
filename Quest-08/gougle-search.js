async function queryServers(serverName, q) {
  return Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ]);
}

async function gougleSearch(q) {
  let p = Promise.all([
    queryServers("web", q),
    queryServers("image", q),
    queryServers("video", q),
  ]);

  let timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("timeout")), 80);
  });

  try {
    let values = await Promise.race([p, timeout]);
    let all = {};

    all.web = values[0];
    all.image = values[1];
    all.video = values[2];

    return all;
  } catch (err) {
    throw err;
  }
}
// 