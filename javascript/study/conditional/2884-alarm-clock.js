/*
- 알람 시계

45분 일찍 알람 설정하기
원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸기

[입력]
10 10

9 25

[출력]
9 25

23 45
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().split(' ');

let hour = Number(input[0]);
let min = Number(input[1]);

if (min < 45) {
    if (hour == 0) {
        hour = 23;
    } else {
        hour -= 1;
    }

    min = (min - 45) + 60;
} else {
    min -= 45;
}

console.log(hour + " " + min);
