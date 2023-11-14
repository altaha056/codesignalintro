function solution(s) {
  let ans = [1, s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] == ans[ans.length - 1]) {
      ans[ans.length - 2] += 1;
    } else {
      ans.push(1, s[i]);
    }
  }
  return ans.filter((x) => x != 1).join("");
}
let s = "0000";
console.log(solution(s));
