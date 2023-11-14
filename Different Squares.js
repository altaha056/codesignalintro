function solution(matrix) {
  let ans = [];
  let cur = "";
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      cur += matrix[i][j].toString();
      cur += matrix[i][j + 1].toString();
      cur += matrix[i + 1][j].toString();
      cur += matrix[i + 1][j + 1].toString();
      ans.push(cur);
      cur = "";
    }
  }
  return new Set(ans).size;
}
let matrix = [
  [1, 2, 1],
  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1],
];
console.log(solution(matrix));
