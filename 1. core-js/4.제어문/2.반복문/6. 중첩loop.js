//구구단 2단을 출력해야 함
//단수를 저장할 변수

// for (var table = 2; table <= 9; table++) {
//     console.log('======================================');
//     console.log(`#구구단 ${table}`);
//     console.log('======================================');
//     for (var line = 1; line <= 9; line++) {
//         console.log(`${table} x ${line} = ${table*line}`);

//     }

// }
//프로그램은 기본적으로 0부터 시작. 이상 미만으로 작성
//중첩반복문은 곱하기 개념 
//중첩 남발금지
console.log('=================================');
var count= 1;
for (var i =0; i < 5; i++) {//5번 반복
    for (var j = 0; j <3; j++) {//3번 반복
        for (var k=0; k <4; k++) {//4번 반복
        console.log('안녕' + count++);
        }
    }
}