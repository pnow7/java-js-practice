/*
- 상수

상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 
예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 
따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

[입력]
734 893

[출력]
437
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const [A, B] = input.map(str => 
    Number(str.split("").reverse().join(""))
);

const [C, D] = input.map(str => [...str].reverse().join(""));

console.log(`${Math.max(A, B)}, ${Math.max(C, D)}`);