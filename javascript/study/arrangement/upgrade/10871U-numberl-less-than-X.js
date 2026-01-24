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
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const N = Number(input[0]);
const X = Number(input[1]);
const arr = input.slice(2).map(Number);
const result = arr.filter(val => val < X).join(" ");

console.log(result);