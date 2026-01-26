/*
- 문자열

문자열을 입력으로 주면 
문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성

[입력]
3
ACDKJFOWIEGHE
O
AB

[출력]
AE
OO
AB
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const T = Number(input[0]);
const result = input.slice(1, T + 1).map(s => s[0] + s[s.length - 1]).join('\n');

console.log(result);