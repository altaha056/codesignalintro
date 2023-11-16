function solution(grid) {
  let asd = [];
  // check horizontal and vertical
  for (let i = 0; i < 9; i++) {
    if (new Set(grid[i]).size != 9) return false;
    let qq = [];
    for (let j = 0; j < 9; j++) {
      qq.push(grid[j][i]);
    }
    asd.push(qq);
  }
  for (let i = 0; i < 9; i++) {
    if (new Set(asd[i]).size != 9) return false;
  }

  //check 9x9 square
  let qwe = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      qwe.push(...grid[i].slice(j, j + 3));
      qwe.push(...grid[i + 1].slice(j, j + 3));
      qwe.push(...grid[i + 2].slice(j, j + 3));
      if (new Set(qwe).size != 9) return false;
      qwe = [];
    }
  }

  return true;
}

let grid = [
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5],
];
console.log(solution(grid));
