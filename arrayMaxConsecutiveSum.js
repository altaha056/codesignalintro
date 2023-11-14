function solution(inputArray, k) {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    cur += inputArray[i];
    if (i >= k) {
      cur -= inputArray[i - k];
    }
    if (cur > max) {
      max = cur;
    }
  }
  return max;
}
let inputArray = [2, 3, 5, 1, 6],
  k = 2;

console.log(solution(inputArray, k));
