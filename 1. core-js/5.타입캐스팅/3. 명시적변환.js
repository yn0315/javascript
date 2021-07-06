


// 명시적 문자열 변환
var a =10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();
var result = '' + a + b;


console.log(`result ${result}`);


// 명시적 숫자변환
console.log('===================================');

var m = '100', n = '5.11';

// var result2 = Number(m) + Number(n);
// var result2 = parseInt(m) + parseFloat(n);//실수를 정수로 변환하려면 parseint로 쓰면 됨
var result2 = (+m) + (+n);

console.log(`result2 ${result2}`);


//명시적 논리변환
console.log('==================================================');

var ex1 = Boolean (undefined);
console.log(`ex1 : ${ex1}`);

var ex2 = !!'메롱';
console.log(`ex2: ${ex2}`);


