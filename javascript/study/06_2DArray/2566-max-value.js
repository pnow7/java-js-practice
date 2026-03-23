/*
- 최댓값

9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 
이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성

[입력]
3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80

[출력]
90
5 7
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);
const matrix = input.slice(0, 9 * 9);

let index = 0;
let max = 0;
let row = 0;
let col = 0;
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        const val = Number(matrix[index++]);

        if (val >= max) {
            max = val;
            row = i + 1;
            col = j + 1;
        }
    }
}

console.log(max);
console.log(row, col);