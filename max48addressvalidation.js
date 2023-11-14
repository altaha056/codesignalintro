function solution(inputString) {
  return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(inputString);
}
let inputString = "00-1B-63-84-45-E6";
console.log(solution(inputString));
