function solution(a, b) {
  let ac = a.filter((v, i) => v != b[i]);
  let bc = b.filter((v, i) => v != a[i]);
  return ac.length === 0 || ac.join("") == bc.reverse().join("");
}

let a = [1, 2, 1, 2],
  b = [2, 2, 1, 1];
console.log(solution(a, b));
