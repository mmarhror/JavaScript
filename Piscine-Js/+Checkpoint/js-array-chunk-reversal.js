export function reverseChunks(arr, chunkSize) {
  let res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    let chunk = arr.slice(i, i + chunkSize);
    res.push(...chunk.reverse());
  }
  return res;
}
