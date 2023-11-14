function solution(image) {
  let ans = new Array(image.length-2)
  for (let i = 0; i < image.length-2; i++) {
    ans[i] = new Array(image[0].length - 2).fill(0)
  }
  for (let y = 0; y <= image.length-3; y++) {
    for (let x = 0; x <= image[0].length-3; x++) {
      let sum = Math.floor(
        (
          image[y + 0][x + 0] + image[y + 0][x + 1] + image[y + 0][x + 2] +
          image[y + 1][x + 0] + image[y + 1][x + 1] + image[y + 1][x + 2] +
          image[y + 2][x + 0] + image[y + 2][x + 1] + image[y + 2][x + 2]
        ) / 9
      );
      ans[y][x] = sum
    }
  }
  return ans;
}

image = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0],
];
console.log(solution(image));
