function solution(inputString) {
  for (var i = 0; i < inputString.length; i++) {
    if (!/\d/.test(inputString[i])) break;
  }
  console.log(i);
  return inputString.substring(0, i);
}
inputString = "aa 1456234234";

console.log(solution(inputString));
