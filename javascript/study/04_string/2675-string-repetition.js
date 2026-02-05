/*
- 문자열 반복

문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 
출력하는 프로그램을 작성하시오. 

즉, 첫 번째 문자를 R번 반복하고, 
두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
S에는 QR Code "alphanumeric" 문자만 들어있다.

[입력]
2
3 ABC
5 /HTP

[출력]
AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const T = Number(input[0]);

let result = "";
for (let i = 1; i <= T; i++) {
    const R = Number(input[2 * (i - 1) + 1]);
    const P = input[2 * (i - 1) + 2];

    for (let j = 0; j < P.length; j++) {
        const s = P.charAt(j);

        for (let k = 0; k < R; k++) {
            result += s;
        }
    }

    result += "\n";
}

console.log(result);