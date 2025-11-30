function getURL(str) {
  const query = /https?:\/\/[\w]+.[\S]+/g;
  return str.match(query);
}

function greedyQuery(str) {
  let urls = getURL(str);
  const query = /[^/?&]+=[^/?&]+/g;

  let greedy = [];
  for (let i = 0; i < urls.length; i++) {
    let matches = urls[i].match(query);
    if (matches !== null && matches.length >= 3) {
      greedy.push(urls[i]);
    }
  }
  return greedy;
}

function notSoGreedy(str) {
  let urls = getURL(str);
  const query = /[^/?&]+=[^/?&]+/g;

  let greedy = [];
  for (let i = 0; i < urls.length; i++) {
    let matches = urls[i].match(query);
    if (matches !== null && (matches.length === 2 || matches.length === 3)) {
      greedy.push(urls[i]);
    }
  }
  return greedy;
}
