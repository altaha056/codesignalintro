function solution(bishop, pawn) {return (Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) === Math.abs(bishop[1] - pawn[1]));}
let bishop = "a1",
  pawn = "c3";
console.log(solution(bishop, pawn));
