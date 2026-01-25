/*
- 곱셈

세자리 수의 곱셈을
일의 자리, 십의 자리, 백의 자리 등등 값을 
순서대로 나타낸 후 각각의 값을 모두 더하여 출력한다.

[입력]
472
385

[출력]
2360
3776
1416
181720
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const A = input[0];
const B = input[1];

const total = Number(A) * Number(B);

for (let i = 2; i >= 0; i--) {
    console.log(A * Number(B[i]));
}

console.log(total);
