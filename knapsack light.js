function solution(value1, weight1, value2, weight2, maxW) {
  return Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2,
    maxW >= weight1 + weight2 && value1 + value2
  );
}
let value1 = 10,
  weight1 = 5,
  value2 = 6,
  weight2 = 4,
  maxW = 8;
console.log(solution(value1, weight1, value2, weight2, maxW));
