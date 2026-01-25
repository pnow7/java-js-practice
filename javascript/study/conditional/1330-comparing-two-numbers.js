/*
- 두 수 비교하기

두 정수 A와 B가 주어졌을 때, 
A와 B를 비교하는 프로그램을 작성하시오.

[입력]
1 2

5 5

[출력]
<

==
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(/\s+/);

const A = Number(input[0]);
const B = Number(input[1]);

if (A > B) {
    console.log(">");
} else if (A === B) {
    console.log("==");
} else {
    console.log("<");
}
