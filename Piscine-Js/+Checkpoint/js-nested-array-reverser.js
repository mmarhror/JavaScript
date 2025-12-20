export function nestedArrayReverser(words) {
  words.reverse();

  words = words.map((arr) => {
    return arr.reverse().join(" ");
  });

  return words.join(" ");
}
