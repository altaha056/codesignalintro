function solution(inputArray, k) {
  let ans = [];
  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % k === 0) {
      continue;
    } else ans.push(inputArray[i]);
  }
  return ans;
}
let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  k = 3;

console.log(solution(inputArray, k));
