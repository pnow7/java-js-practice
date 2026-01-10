/*
- A+B

첫째 줄에 A + B를 출력한다.

[입력]
1 2

[출력]
3
*/

const fs = require('fs');
// 정답 제출 시
const input = fs.readFileSync("/dev/stdin").toString().split(' ');

// 입출력 테스트 시
// const input = fs.readFileSync("input.txt").toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);