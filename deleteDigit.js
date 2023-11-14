function solution(n) {
  let maxx = 0;
  for (let i = 0; i < n.toString().length; i++) {
    let cur = n.toString().split("");
    cur.splice(i, 1);
    if (parseInt(cur.join("")) > maxx) maxx = parseInt(cur.join(""));
  }
  return maxx;
}
let n = 152;
console.log(solution(n));
