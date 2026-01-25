/*
- A+B

첫째 줄에 A + B를 출력한다.

[입력]
1 2

[출력]
3
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);