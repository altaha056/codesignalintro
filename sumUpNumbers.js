function solution(inputString) {
  let numbersArray = inputString.match(/\d+/g);

  if (numbersArray) {
    numbersArray = numbersArray.map(Number);
    return numbersArray.reduce((acc, v) => acc + v, 0);
  }
  return 0;
}
let inputString = "12Your payment12 method is invalid";
console.log(solution(inputString));
