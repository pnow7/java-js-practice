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

let idx = 0;
const N = Number(input[idx++]);

let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(Number(input[idx++]));
}

let min = arr[0];
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }

    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(min + " " + max);