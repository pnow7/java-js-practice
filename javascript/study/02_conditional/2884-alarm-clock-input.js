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
    const [hour, min] = [input[i], input[i + 1]];

    let h = hour;
    let m = min;

    if (m < 45) {
        h = (h + 23) % 24;
        m += 60;
    }

    m -= 45;
    result.push(h + " " + m);
}

console.log(result.join('\n'));