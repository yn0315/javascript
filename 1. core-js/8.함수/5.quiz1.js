/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

// function calcNumbersTotalAndAverage(...numbers) {
//     var total = 0;
//    
//     for (var n of numbers) {
//         total += n;
//       

//     }
//     var avg = total / numbers.length;
//     return {
//         total: total,
//         avg: avg
//         //둘다 이름이 같을 때에는 한번씩만 써도 됨 신규문법
//         //total, avg

//     };


// }

function calcNumbersTotalAndAverage(...numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    var avg = total / numbers.length;
    return {
        total: total,
        avg: avg
    };
}



var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);



console.log('=================================================================================');
/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
  약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
   나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/



function calcDivisor(n) {
    //약수들을 저장할 배열
    var total = [];
    // var count = 0;
    for (var begin = 1; begin <= n; begin++) {
        if (n % begin === 0) {
            total.push(begin);
            
            // count++
        }
    }
    console.log(`[${total}]`);
    return total.length;

}

var divCount = calcDivisor(24);
console.log(`약수의 개수: ${divCount}개`);