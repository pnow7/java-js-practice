/*
- 그룹 단어 체커

그룹 단어란 단어에 존재하는 모든 문자에 대해서, 
각 문자가 연속해서 나타나는 경우만을 말한다. 

예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, 
kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, 
aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

[입력]
9
aaa
aaazbz
babb
aazz
azbz
aabbaa
abacc
aba
zzaz

5
ab
aa
aca
ba
bb

[출력]
2

4
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/);

const N = Number(input[0]);
let count = N;

input.slice(1, N + 1).forEach((word) => {
    let check = true;

    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] == word[i + 1]) {
            continue;
        } else {
            for (let j = i + 2; j < word.length; j++) {
                if (word[i] == word[j]) {
                    check = false;
                    break;
                }
            }
        }
    }

    if (!check) {
        count--;
    }
}); 

console.log(count);