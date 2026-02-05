/*
- 단어 길이 재기

알파벳으로만 이루어진 단어를 입력받아, 
그 길이를 출력하는 프로그램을 작성

[입력]
pulljima

[출력]
8
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim();

console.log(input.length);