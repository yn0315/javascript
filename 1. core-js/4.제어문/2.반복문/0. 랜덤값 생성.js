

//랜덤값 생성하기
//Math.random() -> 0.0 이상 1.0 미만의 랜덤 실수값을 생성

var randomNumber = Math.random();
console.log(`랜덤값: ${randomNumber}`);

if (randomNumber > 0.66) {
    console.log('짜장면');
}else if (randomNumber > 0.33) {
    console.log('칼국수');
}else {
    console.log('보쌈정식');
}

//Math.floor() : 내림값, Math.ceil() :올림값, Math.round(): 반올림값
console.log(Math.floor(3.3));
console.log(Math.ceil(3.3));
console.log(Math.round(3.3));

//0~10 사이의 랜덤 정수
Math.random() //0.0부터 1.0미만
Math.random()*11; //0.0~11.0 미만
var rn = Math.floor(Math.random()*11); //0~11 미만/10까지
console.log(`랜덤정수: ${rn}`);

//1~ 45 사이의 랜덤 정수
var rn = Math.floor(Math.random()*45) +1; //1~ 46미만/45까지

// x~y (이상 미만 개념)의 랜덤 정수 구하는 공식
//공식> Math.floor(Math.random()*(y - x)) + x;