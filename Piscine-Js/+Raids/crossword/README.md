# Crossword Solver

A JavaScript-based solver for small crossword-like puzzles. This project allows you to fill a grid with given words while respecting the constraints of the puzzle.

## Features

- **Automatic Slot Detection:** Finds horizontal and vertical word slots automatically.
- **Word Validation:** Ensures words match slot lengths, are unique, and contain only valid characters.
- **Backtracking Solver:** Uses recursion and backtracking to place words in the puzzle.
- **Conflict Handling:** Validates placements to avoid overwriting existing letters incorrectly.
- **Error Handling:** Detects invalid puzzles, inconsistent words, or unsolvable scenarios.

## Usage

1. Import or include `crosswordSolver.js` in your project.
2. Prepare a puzzle string where each line represents a row. Use:
   - `.` for empty cells
   - `0`, `1`, `2` for constraints/numbered cells
3. Provide an array of words to fill the puzzle.
4. Call the `crosswordSolver(puzzle, words)` function.

```javascript
const puzzle = "2001\n0..0\n1000\n0..0";
const words = ["aaab", "aaac", "aaad", "aaae"];

crosswordSolver(puzzle, words);
```
