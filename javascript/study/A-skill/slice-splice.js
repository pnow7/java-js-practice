/*
- 바구니 뒤집기

바구니 총 N개 가지고 있고,
각각의 바구니는 1번부터 N번까지 번호가 순서대로 적혀있음.

가장 왼쪽 바구니를 1번째 바구니, 그 다음 바구니를 2번째 바구니, ... N번째 바구니로 순서대로 놓여져 있음.

앞으로 M번 바구니의 순서를 역순으로 만들려고 함.
한 번 순서를 역순으로 바꿀 때,
순서를 역순으로 만들 범위를 정하고,
그 범위에 들어있는 바구니의 순서를 역순으로 만든다.

바구니의 순서를 어떻게 바꿀지 주어졌을 때, 
M번 바구니의 순서를 역순으로 만든 다음, 
바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성.

[입력]
5 4
1 2
3 4
1 4
2 2

[출력]
3 4 1 2 5
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(/\s+/).map(Number);

const [N, M] = input;
const arr = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 0; i < M; i++) {
    let start = Number(input[2 * (i + 1)]) - 1;
    let end = Number(input[2 * (i + 1) + 1]) - 1;

    // const reversedPart = arr.slice(start, end + 1).reverse()
    // arr.splice(start, end - start + 1, ...reversedPart);

    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(arr.join(" "));

/*
- slice(start, end + 1) + reverse()로 보통 같이 씀
- splice(start, count, ...items): 구간 삭제 후 그 자리에 새로운 아이템 삽입
*/