function solution(symbol) {
  return symbol.charCodeAt(0) >= 48 && symbol.charCodeAt(0) <= 57;
}
let symbol = "-";
console.log(solution(symbol));
