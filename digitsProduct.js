function solution(product) {
  if (product == 1) {
    return product;
  }
  if (product < 10) {
    return parseInt("1" + product.toString());
  }
  let ans = "";
  let len = 0;
  let con = true;
  while (con == true) {
    for (let i = 9; i > 1; i--) {
      if (product % i == 0) {
        ans += i;
        product /= i;
        break;
      }
    }
    if (ans.length > len) {
      len = ans.length;
    } else con = false;
  }
  return product == 1 ? parseInt(ans.split("").sort().join("")) : -1;
}
let product = 12;
console.log(solution(product));
