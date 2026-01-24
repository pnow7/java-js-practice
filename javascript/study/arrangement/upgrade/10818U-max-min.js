/*
- 최소, 최대

N개의 정수가 주어진다.
이때 최솟값과 최댓값을 구하라

[입력]
5
20 10 35 30 7

[출력]
7 35
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const N = Number(input[0]);
const arr = input.slice(1).map(Number);

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(`${min} ${max}`)