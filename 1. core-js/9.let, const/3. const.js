const pi = 3.14159265
// pi = 6.666;
// 변경 안됨, 상수는 항상 같은 수라고 생각하기

//세율
const TAX_RATE = 0.1;//상수이름은 대문자로!

let preTaxPrice = 100; //세전가격

//세후가격

let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

//const와 객체 (배열, 객체)//

const person = {
    name: 'park'
};


// person = {
//     name: 'lee'
// }; //객체 자체를 변경할 수는 없음

person.name = 'kim'; //프로퍼티는 바꿀 수 있음
person.age = 20;

const arr = [1, 2, 3];
// arr = ['a', 'b', 'c']; 이렇게 전체교체 못함

arr[1] = 20;

console.log(arr);

//처음에 const로 써놓고 변경해야하면 let으로 바꾸기
//배열 객체는 그냥 const로 사용하기


//========================================================================//
//전역변수
const x = 10;
const y = 20;

//함수
function foo() {

}

function bar() {

}

//즉시실행함수      z를 전역변수로 쓰기 싫을 때 즉시실행함수 속에 넣기
(function () {
    //실제 실행코드
    foo();
    const z = 10;
    bar();
})();
