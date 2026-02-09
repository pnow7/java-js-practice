/*
- 단어 공부

알파벳 대소문자로 된 단어가 주어지면, 
이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
단, 대문자와 소문자를 구분하지 않는다.

[입력]
Mississipi

zZa

[출력]
? 

Z
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().toUpperCase().split("");
const check = Array(26).fill(0);

input.forEach((alpha) => {
    const alphaIdx = alpha.charCodeAt(0) - 65;
    check[alphaIdx]++;
});

/*
check.forEach(val => {
    const maxCount = Math.max(...check);
    const maxCountIdx = (check.indexOf(maxCount) + 65).toString();
    const maxCountAlpha = String.fromCharCode(maxCountIdx);
    
    if (maxCount === val) {
        return console.log("?");
    } else {
        return console.log(maxCountAlpha);
    }
});
*/

const maxCount = Math.max(...check);
const maxCountIdx = check.indexOf(maxCount) + 65;
const maxCountAlpha = String.fromCharCode(maxCountIdx);
const alphaCheck = check.filter(val => val === maxCount);

console.log(alphaCheck.length > 1 ? "?" : maxCountAlpha);