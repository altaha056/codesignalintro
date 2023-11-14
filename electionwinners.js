function electionsWinners(votes, k) {
  var max = Math.max(...votes);
  var numOfMax = votes.filter((v) => v === max).length;
  console.log(numOfMax);
  return votes.reduce(
    (acc, v) => acc + ((v === max && numOfMax === 1) || v + k > max ? 1 : 0),
    0
  );
}
let votes = [5, 1, 3, 4, 1],
  k = 0;
console.log(electionsWinners(votes, k));
