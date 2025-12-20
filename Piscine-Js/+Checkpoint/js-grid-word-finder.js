function horMatch(grid, word, row, col) {
  for (let i = 0; i < word.length; i++) {
    if (!grid[row] || grid[row][col + i] != word[i]) {
      return false;
    }
  }
  return true;
}

function verMatch(grid, word, row, col) {
  for (let i = 0; i < word.length; i++) {
    if (!grid[row + i] || grid[row + i][col] !== word[i]) {
      return false;
    }
  }
  return true;
}

export function gridWordsFinder(grid, words) {
  let res = [];
  words.forEach((word) => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        let char = grid[row][col];
        if (char === word[0]) {
          if (
            horMatch(grid, word, row, col) ||
            verMatch(grid, word, row, col)
          ) {
            res.push(word);
          }
        }
      }
    }
  });
  return res;
}
