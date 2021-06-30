
//식별자: 데이터를 구분하기 위한 고유의 이름 (변수이름, 함수이름...)

//1. 대소문자를 구분할 것
var banana = '바나나';
var BANANA = '뻐네이너';
var Banana = '빠나아나';

//2. 숫자로 시작하면 안된다.
// var 7 =99; (x)
// var 99haha = 100; (x)
var number 3 = 3;
var haha66haha = 100;

//3. 특수문자는 _, $ 외 사용금지
// var my-name = '홍길동';(x)
// var hello! = '안녕'; (x)
var my_name = '홍길동';
var $grape = '포도';

//띄어쓰기 불가능
// var user phone number = '010-1234-1234'; (x)
var userphonenumber ='11';

//관례: convention
var user_phone_number = 1; //snake case : 파이썬이나 sql
var userPhoneNumber = 1; //camel case: js, java 추천
var UserPhoneNumber = 1; //pascal case : 클래스(대주제, 대제목) 이름, 변수이름으로는 안씀

//Hungarian case: 변수명 앞에 데이터의 모양을 표기
var strName = '홍길동';
var numPoint = 78;

//변수이름은 구체적이고 명확하며 일관되게 지어라.
//ex: 회원정보 저장
var a = '홍길동'; //var userName;
var z = 'ade13454';//var userPassword;
var xu = 'adf1344@gmail.com';//var userEmail;

//5. 키워드는 식별자 이름으로 사용 불가능
// var var;(x)
// var for;(x)

























