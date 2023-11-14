function solution(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }
  return inputArray;
}

let inputArray = [1, 2, 1],
  elemToReplace = 1,
  substitutionElem = 3;
console.log(solution(inputArray, elemToReplace, substitutionElem));
