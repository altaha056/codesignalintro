function solution(n) {
  let degree = 0;

  let countDegree = (sum, degree) => {
    let cur = 0;
    if (sum.toString().length > 1) {
      for (let i = 0; i < sum.toString().length; i++) {
        cur += parseInt(sum.toString()[i]);
      }
      degree++;
    }
    if (cur.toString().length > 1) {
      return countDegree(cur, degree);
    }
    return degree;
  };

  return countDegree(n, degree);
}
n = 91;
console.log(solution(n));
