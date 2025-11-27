function blockChain(data, prev) {
  let block = {};
  if (!prev) {
    prev = { index: 0, hash: "0" };
  }
  block.index = prev.index + 1;
  block.hash = hashCode(block.index + prev.hash + JSON.stringify(data));
  block.data = data;
  block.prev = prev;
  block.chain = (data) => blockChain(data, block);

  return block;
}
