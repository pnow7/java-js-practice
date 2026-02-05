/*
- 알파벳 찾기

알파벳 소문자로만 이루어진 단어 S가 주어진다. 
각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 
처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성

[입력]
baekjoon

[출력]
1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim();

const result = Array(26).fill(-1);

input.split('').forEach((ch, i) => {
    const idx = ch.charCodeAt(0) - 97;
    if (result[idx] === -1) {
        result[idx] = i;
    }
})

console.log(result.join(' '));

/*
ch.charCodeAt(0) - 97;
: 여기서 0인 이유

ch가 'b', 'a' ... ~ 이렇게 들어가기때문
*/