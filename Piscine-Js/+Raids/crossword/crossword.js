function getHorSlot(puzzle, row, colStart) {
  let slot = {
    direction: "H",
    startCol: 0,
    length: 0,
    coords: [],
    holders: [],
  };

  slot.startCol = colStart;

  let slotLen = 0;

  let col = colStart;
  while (col < puzzle[row].length && puzzle[row][col] != ".") {
    let coord = [row, col];
    slot.coords.push(coord);
    slot.holders.push(puzzle[row][col]);
    slotLen++;
    col++;
  }

  if (slotLen < 2) {
    return null;
  }

  slot.length = slotLen;

  col = colStart;
  while (col < puzzle[row].length && puzzle[row][col] != ".") {
    if (col != colStart) {
      used[row][col].H = true;
    }
    col++;
  }

  return slot;
}

function getVerSlot(puzzle, rowStart, col) {
  let slot = {
    direction: "V",
    startRow: 0,
    length: 0,
    coords: [],
    holders: [],
  };

  slot.startRow = rowStart;

  let slotLen = 0;

  let row = rowStart;
  while (row < rows && puzzle[row][col] != ".") {
    let coord = [row, col];
    slot.coords.push(coord);
    slot.holders.push(puzzle[row][col]);
    slotLen++;
    row++;
  }

  if (slotLen < 2) {
    return null;
  }

  slot.length = slotLen;

  row = rowStart;
  while (row < rows && puzzle[row][col] != ".") {
    if (row != rowStart) {
      used[row][col].V = true;
    }
    row++;
  }

  return slot;
}

function parseSlots(puzzle) {
  let slots = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (puzzle[row][col] != "." && puzzle[row][col] != "0") {
        let cnt = 0;
        let horSlot = getHorSlot(puzzle, row, col);
        if (horSlot !== null && !used[row][col].H) {
          slots.push(horSlot);
          cnt++;
        }

        let verSlot = getVerSlot(puzzle, row, col);
        if (verSlot !== null && !used[row][col].V) {
          slots.push(verSlot);
          cnt++;
        }

        if (cnt != +puzzle[row][col]) {
          return null;
        }
      }
    }
  }

  return slots;
}

var used = [];
var rows = 0;
var cols = 0;

function validCell(cell) {
  return [".", "0", "1", "2"].some((c) => c === cell);
}

function parsePuzzle(emptyPuzzle) {
  let matrix = [];

  let puzzle = emptyPuzzle.split("\n");
  rows = puzzle.length;

  let maxLen = 0;

  for (let row = 0; row < rows; row++) {
    puzzle[row] = puzzle[row].trim();
    if (maxLen > 0 && puzzle[row].length != maxLen) {
      return null;
    } else if (maxLen == 0) {
      maxLen = puzzle[row].length;
      cols = maxLen;
    }
    matrix.push(puzzle[row].split(""));

    let useArr = [];
    for (let col = 0; col < cols; col++) {
      useArr.push({ H: false, V: false });
      if (!validCell(puzzle[row][col])) {
        return null;
      }
    }
    used.push(useArr);
  }
  return matrix;
}

function validWords(words, slots) {
  if (!Array.isArray(words) || words.length != slots.length) return false;

  let wordQuery = /\W/;

  if (words.some((w) => w.length < 2 || w.match(wordQuery) != null))
    return false;

  let unique = [...new Set(words)];
  if (unique.length != words.length) {
    return false;
  }

  words.sort((a, b) => a.length - b.length);
  slots.sort((a, b) => a.length - b.length);

  while (words.length > 0) {
    let found = false;
    for (let i = 0; i < slots.length; i++) {
      if (words[0].length === slots[i].length) {
        words.shift();
        slots.splice(i, 1);
        found = true;
      }
    }
    if (!found) {
      return false;
    }
  }
  return slots.length === 0;
}

function validPlace(puzzle, word, coords) {
  for (let i = 0; i < coords.length; i++) {
    let row = coords[i][0];
    let col = coords[i][1];
    if (!validCell(puzzle[row][col]) && !(puzzle[row][col] === word[i])) {
      return false;
    }
  }
  return true;
}

function placeWord(puzzle, word, slot) {
  let coords = slot.coords;
  for (let i = 0; i < coords.length; i++) {
    let row = coords[i][0];
    let col = coords[i][1];
    slot.holders[i] = puzzle[row][col];
    puzzle[row][col] = word[i];
  }
}

function removeWord(puzzle, holders, coords) {
  for (let i = 0; i < coords.length; i++) {
    let row = coords[i][0];
    let col = coords[i][1];
    puzzle[row][col] = holders[i];
  }
}

var solutionsCnt = 0;
var solution = [];

function solver(puzzle, words, slots, slotIdx) {
  if (slotIdx == slots.length) {
    solutionsCnt++;
    if (solutionsCnt == 1) {
      solution = puzzle.map((row) => row.join(""));
    }
    return;
  }
  for (let i = 0; i < words.length; i++) {
    let coords = slots[slotIdx].coords;
    if (words[i].length == coords.length) {
      if (validPlace(puzzle, words[i], coords)) {
        placeWord(puzzle, words[i], slots[slotIdx]);

        let remainingWords = words.slice(0, i).concat(words.slice(i + 1));
        solver(puzzle, remainingWords, slots, slotIdx + 1);

        removeWord(puzzle, slots[slotIdx].holders, coords);
      }
    }
  }
  return false;
}

function crosswordSolver(emptyPuzzle, words) {
  if (typeof emptyPuzzle !== "string" || emptyPuzzle.length == 0) {
    console.log("Error");
    return;
  }

  let puzzle = parsePuzzle(emptyPuzzle);

  if (puzzle === null) {
    console.log("Error");
    return;
  }

  let slots = parseSlots(puzzle);

  if (slots === null || slots.length === 0) {
    console.log("Error");
    return;
  }

  if (!validWords([...words], [...slots])) {
    console.log("Error");
    return;
  }

  solver(puzzle, words, slots, 0);
  if (solutionsCnt == 1) {
    console.log(solution.join("\n"));
  } else {
    console.log("Error");
  }
}
