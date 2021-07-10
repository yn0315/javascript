

//2개의 정수의 합을 수하는 함수
function add2(n1,n2) {
    return n1 +n2;
}

//3개의 정수의 합을 구하는
// function add3(n1,n2,n3) {
//     return n1+ n2 + n3;
// }

//n개의 정수의 합을 구하는 함수
function addAll(numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

var result1 = addAll([10, 20, 50]);
console.log(`${result1}`);

console.log('===============================================================');

//스프레드 문법(ES6)

function addAll2(...numbers) {//...쓰면 인수를 배열처리'[]' 안하고 입력가능
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}
var result2 = addAll2(10,20,30,100);
console.log(`${result2}`);

console.log('=================================================================');

