let getJSON = async (url) => url;

async function queryServers(serverName, q) {
  return Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ]);
}

async function gougleSearch(q) {
  let value;
  await queryServers("web", q).then((r) => {
    value = r;
  });
  return value;
  // const delay = async () => {
  //   setTimeout(() => new Error("timeout"), 80);
  // };

  // try {
  //   Promise.race([
  //     Promise.all([
  //       queryServers("web", q),
  //       queryServers("image", q),
  //       queryServers("video", q),
  //     ]),
  //     delay(),
  //   ]).then(console.log);
  //   // let obj = {
  //   //   web: response[0],
  //   //   image: response[1],
  //   //   video: response[2],
  //   // };
  // } catch (err) {
  //   return err;
  // }
}

let r = Math.random().toString(36).slice(2);

console.log(gougleSearch(r));
