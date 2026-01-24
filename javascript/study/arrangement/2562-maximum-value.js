/*
- 최댓값

9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고
그 최댓값이 몇 번째 수인지를 구하는 프로그램 작성

[입력]
3
29
38
12
57
74
40
85
61

[출력]
85
8
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);
const arr = input.slice(0).map(Number);

let idx = 0;
let maxValue = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
        maxValue = arr[i];
        idx = i;
    }
}

console.log(`${arr[idx]}\n${idx + 1}`);