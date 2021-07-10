
//두 수의 덧셈 결과를 호출부로 전달하는 함수
function add(n1,n2) {
    
    return n1+ n2;//return은 break와 같아서 이후에 코드 쓴것은 작동하지 않음
    console.log('hello');
}

// 두 수의 곱셈의 결과를 콘솔창에 출력하는 함수
function showMultiply(n1,n2) {
    console.log(`${n1} x ${n2} = ${n1*n2}`);

}

function infLooping () {
    var n = 1;
    while (true) {
        console.log(n);
        if (n === 5) 
            break;//여기에 리턴 써도 됨, 무한루프 끝낼 수 있음 탈출문역할
            n++
        
    }
}
 
//함수가 반환할 수 있는 값은 단 하나입니다.
//그런데 2개의 정수를 전달받아 덧셈뺄셈곱셈나눗셈 값을 모두 리턴하고 싶다.

function oprateAll (n1,n2) {
    
    // return [
    //     n1+n2,
    //     n1-n2,
    //     n1*n2,
    //     n1/n2
    // ]    호출할 때 인덱스번호로 
    
    return {
        plus: n1+n2,
        minus: n1-n2,
        multi: n1*n2,
        divide: n1/n2
    };
}


//리턴값이 없는 함수는 변수에 저장하거나 다른 함수의 인수로 전달하지 않고
//단독호출로 사용합니다.

showMultiply(5,4);



var result = add(10,20);

console.log(add(5,10));// =console.log(15); /////hello, 15

//           add(add(10,10), add(20,20)
          // add(20,40)
var result2 = add(add(10,10), add(add(15,5),20));
// 제일 안쪽부터 시작하고 같은 라인이면 왼쪽 먼저

var rn = Math.floor(Math.random()*0);

console.log('====================================================');
console.log(rn);
console.log('========================================================');


//리턴값이 없으니 단독호출
infLooping();


var results = oprateAll(20,5);
console.log(`덧셈결과: ${results.plus}`);
console.log(`곱셈결과: ${results.multi}`);

