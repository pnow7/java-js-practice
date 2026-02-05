/*
- 문자와 문자열

단어 
S와 정수 i가 주어졌을 때, 
S의 i번째 글자를 출력하는 프로그램을 작성

[입력]
Sprout
3

[출력]
r
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const S = input[0];
const i = Number(input[1]);

console.log(`${S[i - 1]}`);