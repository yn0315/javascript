// 1~10 까지의 등차수열 누적합

//총합을 저장할 변수
var total = 0;

//더할 값들을 저장할 변수
var n = 1; // 1.제어변수: 반복문의 횟수를 제어할 변수 (begin)

while (n <= 10) { //2. 조건식: 반복문의 종료시점을 결정 (end)
    total += n;
    n++; //3. 증감식: 반복문의 종료를 위한 식 (step)
}

console.log(`총합:${total}`);

//1~100사이의 정수 중 13의 배수 모두 출력하기
console.log('=======================================');
var num = 1;

while (num <= 100) {
    if (num % 13 === 0) {
        console.log(num);
    }
    num++;
}

console.log('===================================================');
//1~ 100 사이의 정수 중 6의 배수이면서 12의 배수가 아닌 수 출력하기
var number =1;

while(number <= 100) {
    if (number % 6 === 0 && number % 12 !== 0) {
        console.log(number);
    }
    number++;
}

console.log('=============================================================');

//1~4000사이의 정수 중 9의 배수의 개수를 출력하기
var num2 = 1;
var count =0;
while (num2 <= 4000) {
    if (num2 % 9 ===0) {
        count++;
    }
    num2++;    
}
console.log(`범위 내의 9의 배수의 개수: ${count}개`);