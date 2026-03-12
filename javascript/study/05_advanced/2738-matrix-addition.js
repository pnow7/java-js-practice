/*
- 행렬 덧셈

NxM 크기의 두 행렬 A와 B가 주어졌을 때
두 행렬을 더하는 프로그램 작성

첫째 줄에 행렬 크기 N, M이 주어짐
둘째 줄 부터 N개의 줄에 행렬 A의 원소 M개가 차례로 주어짐
이어서 N개의 줄에 행렬 B의 원소 M개가 차례로 주어짐

[입력]
3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100

[출력]
4 4 4
6 6 6
5 6 100
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);
const N = Number(input.shift());
const M = Number(input.shift());
const A = input.slice(0, N * M);
const B = input.slice(N * M, 2 * N * M);

for (let i = 0; i < N; i++) {
    let result = [];
    for (let j = 0; j < M; j++) {
        const index = i * M + j;
        const sum = Number(A[index]) + Number(B[index]);
        result.push(sum);
    }
    console.log(result.join(' '))
}