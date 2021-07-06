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


while (true) {
    var x = Math.floor(Math.random() * 100)+1;//1부터 101 미만까지의 정수
    var y = Math.floor(Math.random() * 100)+1;

    //0과 1이 랜덤으로 등장하게 한 후 0이면 +로 1이면 -로 처리
    var rn = Math.floor(Math.random() * 2);//0 부터 2 미만
    var realanswer;
    var mark = rn === 0 ? '+' : '-';
    if (mark === '+') {
        realanswer = x + y;
    } else {
        realanswer = x - y;
    }

    //answer => 사용자가 입력하는 값/ realanswer 실제 정답
    var answer = +prompt(`${x} ${mark} ${y} = ??`)
   
   
    //여기서부터 본문 시작
    if (answer === realanswer) {
        alert('정답입니다.')
        count1++
    } else if (answer !== realanswer && answer !== 0) {
        alert('오답입니다.')
        count2++
    }
    if (answer === 0) {
        break;
    }

} //end while true
alert(`프로그램이 종료되었습니다. 정답횟수 ${count1}, 오답횟수 ${count2}`)