

function foo(x) {
    var y = 10;
    console.log(x);
    console.log(y);
}
console.log('================================================');
// console.log(x);함수 밖에서는 못 씀

foo(5);

console.log('=====================================================');

var z = 'global';//전역변수
function bar() {
    var z = 'local';//지역변수
    console.log(`함수내부: ${z}`);
}

bar();
//함수호출이 끝나면 지역변수 사라짐, 일회용//
console.log(`함수외부: ${z}`);

//메모리에는 전역변수와 지역변수 영역이 따로 있음
//전역변수 함수 바깥에서 선언
//지역변수는 함수 내부에서 선언