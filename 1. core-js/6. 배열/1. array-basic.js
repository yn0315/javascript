

//  배열생성
var fruits = ['딸기', '포도', '복숭아','사과'];//요소번호 0부터 시작 0~3번, length는 4

//배열의 길이//

console.log(`배열 요소 수: ${fruits.length}`);

//배열 요소 참조
console.log(`배열의 3번째 요소: ${fruits[2]}`);

var apple = fruits[3];
console.log(`apple: ${apple}`);


//배열 요소 수정

fruits[1] = '수박';
console.log(fruits);

//배열 요소 추가
fruits[4] = '파인애플'; //자바스크립트에서만 가능, 하지만 쓰지 않는 게 좋음
fruits[5] = '망고';
console.log(fruits);

console.log('======================================================');
//배열 요소 순회 (전체 참조)
for (var i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

