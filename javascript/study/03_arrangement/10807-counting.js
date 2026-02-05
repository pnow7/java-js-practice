/*
- 개수 세기

총 N개의 정수가 주어졌을 때,
정수 v가 몇 개인지 구하는 프로그램을 작성.

[입력]
11
1 4 1 2 4 2 4 2 3 4 4
2

[출력]
3
*/

const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);

const arr = [];
for (let i = 0; i < N; i++) {
    arr.push(Number(input[idx++]));
}

let count = 0;
const target = Number(input[idx++]);
for (let i = 0; i < N; i++) {
    if (arr[i] === target) count++;
}

console.log(count);