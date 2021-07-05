/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

var count1 = 0;
var count2 = 0;
var n2;
if (mark === '+') {
    n2 = x + y;
} else {
    n2 = x - y;
}

while (true) {
    var x = Math.floor(Math.random() * 101);
    var y = Math.floor(Math.random() * 101);
    //0과 1이 랜덤으로 등장하게 한 후 0이면 +로 1이면 -로 처리
    var rn = Math.floor(Math.random() * 2);
    var mark = rn === 0 ? '+' : '-';
    //n => 사용자가 입력하는 값/ n2 실제 정답
    var n = +prompt(`${x} ${mark} ${y} = ??`)

    if (n === n2) {
        alert('정답입니다.')
        count1++
    } else if (n !== n2 && n !== 0) {
        alert('오답입니다.')
        count2++
    }
    if (n === 0) {
        break;
    }

} //end while true
alert(`프로그램이 종료되었습니다. 정답횟수 ${count1}, 오답횟수 ${count2}`)