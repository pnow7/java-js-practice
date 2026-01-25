/*
- 평균

점수 중에 최댓값을 고르고 이 값을 M이라고 함.
그리고 나서 모든 점수를 점수/M * 100으로 고쳤다.

예를 들어, 최고점이 70이고, 수학점수가 50이면 수학점수는 50/70 * 100이 되어
71.45점이 된다.

위의 방법대로 새로 계산했을 때, 새로운 평균을 구하라.

[입력]
3
40 80 60

[출력]
75.0
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/).map(Number);

const N = Number(input[0]);
const arr = input.slice(1);
const maxVal = Math.max(...arr);

const sum = arr.reduce((acc, cur) => acc + cur);
const result = (sum / maxVal * 100) / N;

console.log(`${result}`);

/*
 ... 해야지만 maxVal값이 나오는 이유? -> 배열 [] 을 뿌셔야하기때문

배열.reduce((누적값, 현재값) => {
    return 다음_누적값;
}, 초기값);


- ex
1) 1부터 4까지 더하기
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

2) 배열에서 최댓값 찾기
// 더 큰 값을 다음 acc로 계속 넘기면 결국 가장 큰 값만 남음
const max = [10, 50, 20].reduce((acc, cur) => (cur > acc ? cur : acc), 0);
*/