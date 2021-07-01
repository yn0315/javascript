

var greeting;

// 변수 = 값//
greeting = 'hello';
greeting = "안녕 ㅎㅎ";
greeting = `hi`;
console.log(typeof greeting);

var exStr ='그는 나에게 "위험해" 라고 말했다! ';
exStr = "Let's go!";

//자바에서 사용할 때 백슬래시처리
var exStr ="그는 나에게 \"위험해\" 라고 말했다! ";
console.log(exStr);

//경로 저장할 때는 두개씩
var filePath = 'D:\\temp\\new.jpg';
console.log(filePath);

//템플릿 리터럴 (ES6+)-줄개행 표현 ->``

console.log("==================");

//줄바꿈 안됨
// var template = '<ul>
//                     <li>
//                             <a href="home">home</a>
//                     <\li>
//                 <\ul>';
// console.log(template);

//백틱 쓰면 줄개행 됨
var template = `<ul>
        <li>
            <a href="#">home</a>
        </li>
        </ul>`
console.log(template);        

var month =8;
var day = 15;
var anni = '광복절';

// console.log(month + '월 ' +day + '일은 ' + anni + '입니다.');
//${}는 백틱으로만 인식할 수 있음!
console.log(`${month}월 ${day}일은 ${anni}입니다.`);

// 문자결합
var x = '100';
var y = '200';
console.log(x + y);


