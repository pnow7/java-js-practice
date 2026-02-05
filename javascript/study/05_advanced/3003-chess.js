/*
- 킹, 퀸, 룩, 비숍, 나이트, 폰

체스는 총 16개의 피스를 사용하며, 
킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8로 구성되어 있다.
몇 개를 더하거나 빼야 올바른 세트가 되는지 구하는 프로그램을 작성하시오.

[입력]
0 1 2 2 2 7

2 1 2 1 2 1

[출력]
1 0 0 0 0 1

-1 0 0 1 0 7
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/).map(Number);
const chess = [1, 1, 2, 2, 2, 8];

console.log(input.map((myPiece, i) => {
    return chess[i] - myPiece;
}).join(" "));

/*
forEach vs map
: forEach는 결과값이 undefined임.
forEach문 안에서 더 가공하거나 새로 만들어야 됨.

ex)
input.split('').forEach((ch, i) => {
    const idx = ch.charCodeAt(0) - 97;
    if (result[idx] === -1) {
        result[idx] = i;
    }
})

: map은 배열을 돌면서 새로운 값으로 변환해서 '새로운 배열'을 만듦
*/