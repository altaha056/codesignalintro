function solution(inputString) {
  let ans = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "z") {
      ans += "a";
    } else ans += String.fromCharCode(inputString.charCodeAt(i) + 1);
  }
  return ans;
}
let inputString = "crazy";
console.log(solution(inputString));
