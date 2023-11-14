function solution(deposit, rate, threshold) {
  let i = 0;
  while (deposit < threshold) {
    deposit += (deposit * rate) / 100;
    console.log(deposit);
    i++;
  }
  return i;
}
let deposit = 100,
  rate = 1,
  threshold = 101;
console.log(solution(deposit, rate, threshold));
