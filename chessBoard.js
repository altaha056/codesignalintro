function solution(cell1, cell2) {
  let horizontal = cell1.charCodeAt(0) - cell2.charCodeAt(0);
  let vertical = parseInt(cell1[1]) - parseInt(cell2[1]);
  return (horizontal - vertical) % 2 == 0;
}
let cell1 = "A1",
  cell2 = "H3";
console.log(solution(cell1, cell2));
