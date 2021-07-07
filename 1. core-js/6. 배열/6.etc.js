

var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

//indexOf() : 배열 요소의 인덱스를 알려줌, 배열전용함수
//매서드 - 전용함수
//탐색 실패시 -1을 반환

var idx =foods.indexOf('치킨');
console.log(`찾은 인덱스: ${idx}`);

//includes() : 배열 요소의 존재유무 확인
var result = foods.includes('오뎅');
console.log(`탐색결과: ${result}`);

//slice() : 배열을 잘라내어 복사함
console.log('====================================');

var arr = [0,1,2,3,4,5,6,7,8,9];
var slicedArr = arr.slice(3,7);//3이상 7미만으로 잘라라.
console.log(slicedArr);

//원본배열은 변하지 않음
console.log(arr);

//6번부터 끝까지 추출
slicedArr = arr.slice(6);
console.log(slicedArr);

//reverse() : 배열을 역순으로 배치함, 단 원본이 변화함
console.log('=========================================');

// arr.reverse();
// console.log(arr);

//원본을 변화시키지 않고 역순 정렬화려면 복사본을 이용
var copyArr = arr.slice(0);
copyArr.reverse();

//join() : 배열의 요소들을 연결된 문자열로 변환
var foodStr = foods.join();//구분자 기본값은 콤마(,)
console.log(foodStr);


//concat(): 배열을 연결하여 복사배열을 리턴 
var concatedArr = arr.concat([100,200,300]);
console.log(concatedArr);

console.log(arr);


