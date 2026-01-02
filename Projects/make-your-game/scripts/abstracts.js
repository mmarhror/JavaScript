function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export function initWood(map) {
  let candidates = [];
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (!(row <= 2 && col <= 2) && map[row][col] !== 1) {
        candidates.push([row, col]);
      }
    }
  }

  shuffle(candidates);

  for (let i = 0; i < 37; i++) {
    let row = candidates[i][0];
    let col = candidates[i][1];
    map[row][col] = 3;
  }
}

export function initEnemies(map) {
  let candidates = [];
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (
        !(row <= 2 && col <= 2) &&
        map[row][col] !== 1 &&
        map[row][col] !== 3
      ) {
        candidates.push([row, col]);
      }
    }
  }

  shuffle(candidates);

  for (let i = 0; i < 4; i++) {
    let row = candidates[i][0];
    let col = candidates[i][1];
    map[row][col] = 4;
  }
}
