
//어떤 수의 총합을 저장해서 사용하고 싶다.

//변수의 선언 (공간을 만든다)
var total;//처음에 만들 때만 var 사용

//변수의 초기화 (값 대입)/할당
total =500;//=은 저장의 의미!500을 토탈에 저장

console.log(total);//출력명령

//한줄로 바로 결과필요할 때 
var result =10 + 20;

console.log(result);


//변수의 재할당 
result = 60;
console.log(result);

//변수의 값 복사
var copyResult = result;

result = 100;
console.log(copyResult);//100으로 바꿔도 60이 결과로 나옴

//공간의 total / 값의 total
total = total + 10;
console.log(total);



