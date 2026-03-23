/*
- 세로읽기

총 다섯줄의 입력이 주어짐.
각 줄에는 최소 1개, 최대 15개의 글자들이 빈칸 없이 연속으로 주어짐.

주어지는 글자는 영어 대문자 'A'부터 'Z', 영어 소문자 'a', 'z', 숫자 '0'부터 '9'중 하나

각 줄의 시작과 마지막에는 빈칸 없음.

[입력]
ABCDE
abcde
01234
FGHIJ
fghij

AABCDD
afzz
09121
a8EWg6
P5h3kx

[출력]
Aa0FfBb1GgCc2HhDd3IiEe4Jj

Aa0aPAf985Bz1EhCz2W3D1gkD6x
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

let maxLength = Math.max(...input.map(str => str.length));
let result = Array.from( {length: maxLength}, (_, i) => 
    input.map(str => str[i] || "").join("")
).join("");

console.log(result);