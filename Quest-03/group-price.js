function getPrice(str) {
  let query = /[\S]+[\d]+.[\d]+/g;
  return str.match(query);
}

function groupPrice(str) {
  let prices = getPrice(str);
  if (prices === null) {
    return [];
  }

  let query = /[\d]+/g;

  let res = [];
  for (let i = 0; i < prices.length; i++) {
    let parts = prices[i].match(query);
    let priceSet = [prices[i], parts[0], parts[1]];
    res.push(priceSet);
  }
  return res;
}
