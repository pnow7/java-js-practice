/*
- 별 찍기 - 7

[입력]
5

[출력]
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

const fs = require('fs');
const N = Number(fs.readFileSync("input.txt").toString().trim());

let result = "";

for (let i = 1; i <= N; i++) {
    const space = " ".repeat(N - i);
    const stars = "*".repeat(2 * i - 1);
    result += space + stars + "\n";
}

for (let i = 1; i <= N - 1; i++) {
    const space = " ".repeat(i);
    const stars = "*".repeat(2 * (N - i) - 1);
    result += space + stars + "\n";
}

console.log(result);