/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        콘솔에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 2~9단 중 무작위로 구구단이 등장하게 하세요.
2. for문과 while문으로 각각 구현하세요.
힌트) 먼저 2단을 구현해 본 뒤, 성공하면 랜덤 구구단으로 바꿔보기
- 출력 예시
====================
랜덤 구구단 4단
====================
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
*/

// var rn = Math.floor(Math.random() * 8) + 2;

//출력할 문자
// var printText = '';

// printText += '============================\n';

// printText +=`랜덤 구구단 ${rn}단\n`;

// for (num1 = 1; 9 >= num1; num1++) {
//         // alert(`${rn} x ${num1} = ${rn*num1}`);
//         printText +=`${rn} x ${num1} = ${rn*num1}\n`;
// }
// alert(printText);

var rn = Math.floor(Math.random() * 8) + 2;//2 이상 10미만/  (10-2)+2

var gugu = '';//gugu라는 변수에 문자열을 삽입함을 선언

gugu += '============================\n';

gugu +=`랜덤 구구단 ${rn}단\n`;

for (num1 = 1; num1 <= 9; num1++) {
        // alert(`${rn} x ${num1} = ${rn*num1}`);
        gugu +=`${rn} x ${num1} = ${rn*num1}\n`;
}
alert(gugu);
