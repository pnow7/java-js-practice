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

const N = Number(input[0]);

let sum = 0;
for (let i = 1; i <= N; i++) {
    const num = Number(input[1].slice(i - 1, i));
    sum += num;
}

console.log(sum);