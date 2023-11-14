function solution(n, firstNumber) {
  return firstNumber + n / 2 >= n ? firstNumber - n / 2 : firstNumber + n / 2;
}

let n = 10,
  firstNumber = 2;
console.log(solution(n, firstNumber));
