/*
- 입력 테스트

[입력]
10 10
9 25
11 45
10 55

[출력]
9 25
8 40
11 0
10 10
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/).map(Number);

let result = [];

for (let i = 0; i < input.length; i+=2) {
    let hour = input[i];
    let min = input[i + 1];

    if (min < 45) {
        hour = (hour + 23) % 24;
        min += 60;
    }

    min -= 45;

    result.push(hour + " " + min);
}

console.log(result.join('\n'));