/*
- 크로아티아 알파벳

크로아티아 알파벳	변경
        č	        c=
        ć	        c-
        dž	        dz=
        đ	        d-
        lj	        lj
        nj	        nj
        š	        s=
        ž	        z=

예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 
몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
위 목록에 없는 알파벳은 한 글자씩 센다.

[입력]
ljes=njak

ddz=z=

nljj

[출력]
6

3

3
*/


const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim();
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// for (const ch of croatia) {
//     input = input.replaceAll(ch, "X");
// }

const result = croatia.reduce((acc, ch) => {
    return acc.replaceAll(ch, "X");
}, input);

console.log(result);