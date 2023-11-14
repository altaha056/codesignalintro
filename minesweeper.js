function solution(matrix) {
  let res = new Array(matrix.length).fill([]);
  for (let i = 0; i < res.length; i++) {
    res[i] = new Array(matrix[0].length).fill(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        if (i > 0 && j > 0) {
          res[i - 1][j - 1]++;
        }
        if (i > 0) {
          res[i - 1][j]++;
        }
        if (i > 0 && j < matrix[0].length - 1) {
          res[i - 1][j + 1]++;
        }
        if (j > 0) {
          res[i][j - 1]++;
        }
        if (j < matrix[0].length - 1) {
          res[i][j + 1]++;
        }
        if (i < matrix.length - 1 && j > 0) {
          res[i + 1][j - 1]++;
        }
        if (i < matrix.length - 1) {
          res[i + 1][j]++;
        }
        if (i < matrix.length - 1 && j < matrix[0].length - 1) {
          res[i + 1][j + 1]++;
        }
      }
    }
  }
  return res;
}

let matrix = [
  [true, false, false, true],
  [false, false, true, false],
  [true, true, false, true],
];

console.log(solution(matrix));
