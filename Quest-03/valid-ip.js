function validPart(part) {
  if (part !== "0" && part.startsWith("0")) {
    return false;
  }

  let nPart = Number(part);

  return nPart !== NaN && nPart <= 255;
}

function validIP(ip) {
  let parts = ip.split(":");

  let port = Number(parts[1]);
  if (port === NaN || port > 65535) {
    return false;
  }

  let ipParts = parts[0].split(".");
  return ipParts.every(validPart);
}

function findIP(str) {
  let query = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:[\d]+)?/g;
  let matches = str.match(query);

  if (matches === null) {
    return [];
  }

  return matches.filter(validIP);
}
