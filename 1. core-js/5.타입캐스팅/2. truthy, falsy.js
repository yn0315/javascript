

//false   -> ( undefined, null, 0, NaN, '' )
//이외에는 다 true


if ('') console.log('ok1'); //빈문자열 (empty srting)
if (' ') console.log('ok2');//공백문자열 (space string)

if (undefined) console.log('ok3');
if (null) console.log('ok4');
if (567) console.log('ok5');
if (0) console.log('ok6');

if (NaN) console.log('ok7');
if ([1,2,3]) console.log('ok8');
if ([]) console.log('ok9');
if ({}) console.log('ok10');

console.log('======================================');
var orangeJuice = 10;
//true니까 조건식까지(부등호) 안쓰고 조건만 써도 됨 
if(orangeJuice) {
    console.log('오렌지쥬스가 있습니다.');
}else {
    console.log('오렌지쥬스가 없습니다.');
}

