/*
- X보다 작은 수

정수 N개로 이루어진 수열 A와 정수 X가 주어짐.
이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성.

[입력]
10 5
1 10 4 9 2 3 8 5 7 6

[출력]
1 4 2 3
*/

const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
const X = Number(input[idx++]);

const arr = [];
for (let i = 0; i < N; i++) {
    arr.push(Number(input[idx++]));
}

const arrRtn = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < X) {
        arrRtn.push(arr[i]);
    }
}

let result = "";
for (let i = 0; i < arrRtn.length; i++) {
    result += arrRtn[i] + " ";
}

console.log(result);