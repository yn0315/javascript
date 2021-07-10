

//즉시실행 함수
//함수 정의부와 실제 로직의 실행부를 나누기 위함
//다른 언어의 main함수처럼 사용

(function (name) {
    console.log(`${name}님 안녕안녕`);
})('홍길동');//전체를 괄호로 감싸고 뒤에 소괄호를 다시 붙여서 콜

//재귀함수

console.log('=====================================');

function countdown (n) {
    if(n < 0) return;//리턴 안 만들면 무한루프의 늪
    console.log(n);
    countdown(n -1);
}

//재귀함수 호출
countdown(5);

//중첩함수
console.log('============================================');

function outer() {
    console.log('outer call');
    var x = 1;

    //중첩함수는 바깥쪽함수의 전용함수로서 바깥쪽 함수 내부에서만 호출가능합니다.
    function inner() {
        console.log('inner call');
        var y = 2;
        console.log(x+y); 
    }
    inner();
}


outer();


console.log('====================================================');
function outer1() {
    console.log('outer1 call');
    var x = 1;
    function inner1() {
        console.log('inner1 call');
        var y = 2;
        console.log(x+y);
    }
    inner1();
}
outer1();

console.log('======================================================');


// 함수 리터럴, 화살표 함수(ES6)
var add = function(n1,n2) {
    return n1+n2;
};//함수 리터럴

add(4,8);

//화살표 함수
// var add = (n1,n2) => {
//     return n1+n2;
// };

//위랑 같음
var add = (n1,n2) => n1+n2;
console.log(add(100,200));

// var sayHello = function() {
//     console.log('안뇽');
// };

var sayHello = () => console.log('안뇽');

sayHello();

var isEvenNumber = function(n) {
    if (n % 2 === 0) {
        return true;

    }else {
        return false;
    }
};

var isEvenNumber = function(n) {
  return n % 2 === 0 ? true : false;
};


var isEvenNumber = function(n) {
    return n % 2 === 0;//어차피 논리값이니까 트루펄스 삭제가능
};


var isEvenNumber = n =>  n % 2 === 0;//한 줄이면 리턴, 중괄호 삭제가능


var result = isEvenNumber(60);
console.log(`${result}`);

//정수 n 을 전달하면 n의 제곱값을 리턴하는 화살표 함수
//doubleMultiply를 작성하세요.

var doubleMultiply = n => n**2;

