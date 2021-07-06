''; // 빈문자열, 논리값false
' '; //문자열 글자수1, 논리값 true



var ex = 10 + '20';

console.log(ex);

// 문자열과 숫자를 더하면 숫자를 문자열로 처리
ex = 100 + '';

var logical = true + '';
console.log(typeof logical);


//더하기가 아닌 연산에서 숫자가 문자형태로 써져 있으면 숫자로 처리
var x = 100 - '30';
console.log(x);

var y = 100 - '30hello';//NaN으로 나옴
console.log(y);

