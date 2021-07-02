//1~ 10까지의 누적 총합
// var total = 0;


// //횟수가 필요한 식에 사용
// //실행순서 1 2 4 3 n++이 맨 나중에 
// for (var n = 1; n <= 10 n++) {
//     total += n;

// }
// console.log(`총합:${total}`);

//1~100사이의 정수 중 13의 배수 모두 출력하기
console.log('=======================================');


for (var num = 1; num <= 100; num++) {
    if (num % 13 === 0) {
        console.log(num);
    }
   
}


//1~4000사이의 정수 중 9의 배수의 개수를 출력하기

var count =0;
for (var num2 = 1; num2 <= 4000; num2++) {
    if (num2 % 9 ===0) {
        count++;
    }
        
}
console.log(`범위 내의 9의 배수의 개수: ${count}개`);