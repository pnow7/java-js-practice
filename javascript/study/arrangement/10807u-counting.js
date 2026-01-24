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
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const v = Number(input[input.length - 1]);
const arr = input.slice(1, input.length - 1).map(Number);
const count = arr.filter(val => val === v).length;

const result = arr.filter(function(val) {
    return val === v;
}).length;

function checkValue(val, target) {
    return val === target;
}
const result2 = arr.filter(val => checkValue(val, v)).length;

console.log(count);
console.log(result);
console.log(result2);