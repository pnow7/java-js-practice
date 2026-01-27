/*
- 숫자의 합

N개의 숫자가 공백 없이 쓰여있다. 
이 숫자를 모두 합해서 출력하는 프로그램을 작성

[입력]
25
7000000000000000000000000

[출력]
7
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/)

// 배열로 쳐만들기
const num = input[1].split("");
const result = num.map(Number).reduce((acc, cur) => acc + cur, 0);
const result2 = num.reduce((acc, cur) => acc + Number(cur), 0);

console.log(result);
console.log(result2);