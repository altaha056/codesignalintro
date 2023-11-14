function solution(st) {
  let ts = st.split("").reverse().join("");
  let y = 0;
  for (let i = 0; i < st.length; i++) {
    if (st[i] == ts[y]) {
      y++;
    } else if (st[i] == ts[0]) {
      y = 1;
    } else {
      y = 0;
    }
  }
  return st + ts.slice(y, ts.length);
}

let st = "aaaaba";
console.log(solution(st));
