function solution(address) {
  return address.split("@").pop();
}
let address = "prettyandsimple@example.com";
console.log(solution(address));
