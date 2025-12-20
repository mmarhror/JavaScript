function verSearch(grid, row, col, word, index) {
  if (!word[index]) {
    return true;
  }
  if (row === grid.length) {
    return false;
  }
  if (word[index] !== grid[row][col]) {
    return false;
  }

  return verSearch(grid, row + 1, col, word, index + 1);
}

function horSearch(grid, row, col, word, index) {
  if (!word[index]) {
    return true;
  }
  if (!grid[row][col]) {
    return false;
  }
  if (word[index] !== grid[row][col]) {
    return false;
  }

  return horSearch(grid, row, col + 1, word, index + 1);
}

function gridWordScan(grid, row, col, word, finds) {
  if (col === grid[row].length) {
    row++;
    col = 0;
  }

  if (!grid[row]) {
    return;
  }

  if (grid[row][col] === word[0]) {
    if (horSearch(grid, row, col, word, 0)) {
      let find = {
        x: col,
        y: row,
        direction: "horizontal",
      };
      finds.push(find);
    }
    if (verSearch(grid, row, col, word, 0)) {
      let find = {
        x: col,
        y: row,
        direction: "vertical",
      };
      finds.push(find);
    }
  }

  gridWordScan(grid, row, col + 1, word, finds);
}

export function gridWordFinder2(grid, word) {
  let finds = [];
  gridWordScan(grid, 0, 0, word, finds);
  return finds;
}
