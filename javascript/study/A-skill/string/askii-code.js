/*
- 아스키 코드

알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 
주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성

[입력]
A

0

[출력]
65

48
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim();

console.log(input.charCodeAt(0));

/*
- 문자 -> 아스키코드
: charCodeAt(index)

- 아스키코드 -> 문자
: String.fromCharCode(값 - 보통 숫자)


- 타입 확인 기본
: typeof

- 정수 확인
: Number.isInteger(값)
*/