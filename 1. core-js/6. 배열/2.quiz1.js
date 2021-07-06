

/*
    # scores라는 이름을 가진 배열 변수가 있습니다.
      여기에는 학생들의 수학점수가 8개 저장됩니다.
      점수는 임의로 설정하세요.
    - 요구사항:
    1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
       콘솔에 출력하세요.
    2. 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로
       총점, 평균이 갱신되어야 합니다.
*/

var total= 0;
var average;

var scores = [98, 32, 66, 87, 49, 12, 100, 82, 100];

//조건부 순회할 때 좋음
for (var i=0; i<scores.length; i++) {
    if (i % 2 === 0) {//요소번호 0,2,4,6,8번  

        total +=scores[i];
    }
    
}

average = total / scores.length;
var prettieraverage = Math.round(average*10**2) / 10**2;// 10의 2승이니까 100/소수점 둘째자리까지 나오게 반올림

console.log(`총점: ${total} 평균:${prettieraverage}`);

//전체순회할 때 사용
for (var num of scores) {
    total +=num;
}

