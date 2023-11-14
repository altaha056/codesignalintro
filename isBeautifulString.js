function solution(inputString) {
  let alp = new Array(26).fill(0);
  for (let i = 0; i < inputString.length; i++) {
    alp[inputString.charCodeAt(i) - 97]++;
  }
  for (let i = 1; i < alp.length; i++) {
    if (alp[i - 1] < alp[i]) {
      return false;
    }
  }
  return true;
}

let inputString = "fyudhrygiuhdfeis";
console.log(solution(inputString));
