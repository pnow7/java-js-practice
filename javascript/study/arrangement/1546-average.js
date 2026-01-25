/*
- 평균

점수 중에 최댓값을 고르고 이 값을 M이라고 함.
그리고 나서 모든 점수를 점수/M * 100으로 고쳤다.

예를 들어, 최고점이 70이고, 수학점수가 50이면 수학점수는 50/70 * 100이 되어
71.45점이 된다.

위의 방법대로 새로 계산했을 때, 새로운 평균을 구하라.

[입력]
3
40 80 60

[출력]
75.0
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/).map(Number);

const N = Number(input[0]);
const arr = input.slice(1);
const maxVal = Math.max(...arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] / maxVal * 100;
    sum += arr[i];
}

console.log(`${sum / N}`);