/*
- AxB

[입력]
3 4

[출력]
12
*/

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');
// const input = fs.readFileSync("input.txt").toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A * B);