function solution(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.charCodeAt(i) >= 48 && inputString.charCodeAt(i) <= 57) {
      return inputString[i];
    }
  }
}

let inputString = "var_1__Int";
console.log(solution(inputString));
