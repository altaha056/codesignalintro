function solution(code) {
  let ans = "";
  let i = 0;
  while (i < code.length) {
    ans += String.fromCharCode(parseInt(code.substring(i, i + 8), 2));
    i += 8;
  }
  return ans;
}

let code = "010010000110010101101100011011000110111100100001";
console.log(solution(code));
