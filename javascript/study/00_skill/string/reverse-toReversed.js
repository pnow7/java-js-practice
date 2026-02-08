/*
- 팰린드롬인지 확인하기

알파벳 소문자로만 이루어진 단어가 주어진다. 
이때, 이 단어가 팰린드롬인지 아닌지 확인하는 프로그램을 작성하시오.

팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다. 
level, noon은 팰린드롬이고, baekjoon, online, judge는 팰린드롬이 아니다.

[입력]
level

baekjoon

[출력]
1

0
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim();
const input2 = [...input].reverse().join("");
const input3 = input.split("").toReversed().join("");
const input4 = [...input].toReversed().join("");

console.log(input === input2 ? 1 : 0);
console.log(input === input3 ? 1 : 0);
console.log(input === input4 ? 1 : 0);


/*
- ...: 복사, 배열 벗겨버리기

- toReversed: 배열상태에서만 뒤집기 가능
*/