function diagonalCheck(grid, row, col) {
  if (grid[row + 1] !== undefined) {
    if (
      grid[row + 1][col + 1] === 1 &&
      grid[row + 1][col] != 1 &&
      grid[row][col + 1] != 1
    ) {
      return false;
    }

    if (
      grid[row + 1][col - 1] === 1 &&
      grid[row][col - 1] != 1 &&
      grid[row + 1][col] != 1
    ) {
      return false;
    }
    return true;
  }

  if (grid[row - 1] !== undefined) {
    if (
      grid[row - 1][col + 1] === 1 &&
      grid[row - 1][col] != 1 &&
      grid[row][col + 1] != 1
    ) {
      return false;
    }

    if (
      grid[row - 1][col - 1] === 1 &&
      grid[row][col - 1] != 1 &&
      grid[row - 1][col] != 1
    ) {
      return false;
    }
  }
  return true;
}

function scanNext(grid, row, col) {
  if (grid[row][col + 1] === 1) {
    return [row, col + 1];
  }
  if (grid[row][col - 1] === 1) {
    return [row, col - 1];
  }
  if (grid[row + 1] && grid[row + 1][col] === 1) {
    return [row + 1, col];
  }
  if (grid[row - 1] && grid[row - 1][col] === 1) {
    return [row - 1, col];
  }
}

function scanStart(grid, row = 0, col = 0) {
  if (col === grid[row].length) {
    row++;
    col = 0;
  }

  if (row === grid.length) {
    return;
  }

  if (grid[row][col] === 1) {
    return [row, col];
  }

  return scanStart(grid, row, col + 1);
}

function getPath(grid, row, col) {
  grid[row][col] = 2;

  let next = scanNext(grid, row, col);
  if (!diagonalCheck(grid, row, col)) {
    return false;
  }
  if (next) {
    return getPath(grid, next[0], next[1]);
  }

  return true;
}

export function isSnakePath(grid) {
  let start = scanStart(grid);

  if (!start || !getPath(grid, start[0], start[1])) {
    return false;
  }

  grid.forEach((r) => {
    console.log(r);
  });

  return scanStart(grid) ? false : true;
}

const grid1 = [
  [1, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
];

console.log(isSnakePath(grid1)); // true
