function solution(text) {
  return text.match(/[A-Za-z]+/g).sort((a, b) => b.length - a.length)[0];
  //   let max = "";
  //   let cur = "";
  //   for (let i = 0; i < text.length; i++) {
  //     if (
  //       (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) ||
  //       (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122)
  //     ) {
  //       cur += text[i];
  //     } else cur = "";
  //     if (cur.length > max.length) {
  //       max = cur;
  //     }
  //   }
  //   return max;
}
let text = "You are the best!!!!!!!!!!!! CodeFighter ever!";
console.log(solution(text));
