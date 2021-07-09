

//원의 넒이 : pi*r**2

//반지름이 5인 넒이를 구해야 함
var cicle1 = 3.14159265*5**2;

//반지름이 10인 원의 넓이를 구하기
var circle2 = 3.14159*10**2;

//반지름 20
var circle3 = 3.14159*20**2;


///////////////////다른작업 3만줄/////////////

//반지름이 100
var circle4 = 31.4159*100*2;

//함수로 바꾸기
//함수의 정의//동사형으로 지음
function calcAreaCircle(r) {
    var areaCircle = 3.14159265 * r **2;
    return areaCircle;//areaCircle값을 반환하라.
}

//함수의 호출
//반지름 5인 원의 넓이
var result1 = calcAreaCircle(5);
console.log(`result1: ${result1}`);

//반지름 10인 원의 넓이
var result2 = calcAreaCircle(10);
console.log(`result2: ${result2}`);

//////////////////코드 삼만줄
var result3 = calcAreaCircle(20);
console.log(`result3: ${result3}`);

//함수의 정의 2 : 함수 리터럴
function add1(n1,n2) {
    return n1+n2;
}

add1(10,20);

// var add2 = 
// function() {};-> 함수 리터럴
var add2 = function(n1,n2) {
    return n1+n2;
};

add2(30,50);

//함수를 변수에 할당
var cac = calcAreaCircle;
cac(5);