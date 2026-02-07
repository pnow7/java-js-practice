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
const input = fs.readFileSync("input.txt").toString().trim();
const N = Number(input)

let result = "";
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - i - 1; j++) {
        result += " ";
    }

    for (let k = 0; k < 2 * i + 1; k++) {
        result += "*"
    }

    result += "\n";
}

for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < i + 1; j++) {
        result += " ";
    }

    for (let k = 0; k < 2 * (N - i) - 3; k++) {
        result += "*";
    }

    result += "\n";
}

console.log(result);