//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100
};

//함수 정의부

//기존 아이콘 전체삭제 함수
function clearAllicons($numbers) {
    for (let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
}

//숫자 아이콘 생성함수
function makeNumberIcons(isClear = false) {

    const $numbers = document.getElementById('numbers');

    if (isClear) {
        clearAllicons($numbers);
    }

    // 가상 돔 만들기
    const $frag = document.createDocumentFragment();

    // 아이콘 i개 만들기
    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div'); //요소노드추출
        $icon.classList.add('icon'); //아이콘 클래스 추가하고
        $icon.textContent = i; //텍스트 추가해서
        $frag.appendChild($icon); //가상 돔에 푸시
    }
    $numbers.appendChild($frag); //가상 돔에 모아둔 아이콘들 numbers에 한번에 푸시
}


//updown 애니메이션 클래스 처리 함수
function executeUpDownAnimation(isUp) {
    const ANI_CLASS_NAME = 'selected';
   const [$up, $down]= [...document.querySelector('.result').children];
   if (isUp) {
       $down.classList.remove(ANI_CLASS_NAME);
       $up.classList.add(ANI_CLASS_NAME);
   } else {
    $up.classList.remove(ANI_CLASS_NAME);
    $down.classList.add(ANI_CLASS_NAME);
   }
}

//UpDown인 경우 처리할 내용을 정의하는 함수

function processUpDownCase(isUp) {

    if (isUp) {
        gameDatas.min = gameDatas.answer + 1;
        document.getElementById('begin').textContent = gameDatas.min;
        // document.getElementById('up').classList.add('selected');
        // document.getElementById('down').classList.remove('selected');
    } else {
        //최대값 갱신
        gameDatas.max = gameDatas.answer - 1;
        //html에 숫자텍스트 #end에 최대값 넣기
        document.getElementById('end').textContent = gameDatas.max;
        // document.getElementById('down').classList.add('selected');
        // document.getElementById('up').classList.remove('selected');
    }
    executeUpDownAnimation(isUp);
    //아이콘 갱신
    makeNumberIcons(true);
}

//정답을 맞췄을 때 처리함수
function processCorrect($target) {
    //축하박스 애니메이션 처리
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');
    $target.setAttribute('id', 'move');//정답아이콘에 아이디 부여

}



// function processUpCase() {
//     gameDatas.max = gameDatas.answer +1;
//     document.getElementById('begin').textContent = gameDatas.max;
// }

//클릭된 숫자를 판별해 결과를 알려주는 함수
function checkAnswer($target) {
    const {secret,answer} = gameDatas;//객체 분해할당

    if (secret === answer) { //정답인 경우
        processCorrect($target);
    } else if (secret < answer) { //down인 경우
        processUpDownCase(false);
    } else { //up인 경우
        processUpDownCase(true);
    }
}

//메인 실행부
(function () {

    //아이콘 배치 함수 호출
    makeNumberIcons();

    //아이콘 클릭 이벤트//버블링 효과를 이용해서 부모에게 이벤트 걸음
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e => {

        //클릭이벤트 아이콘만으로 제한하기
        if (!e.target.matches('#numbers .icon')) return;

        // console.log(e.target.textContent);//클릭한 아이콘의 번호가 나오는지..
        gameDatas.answer = +e.target.textContent; //answer에 문자열로 저장되어 secret과 타입이 달라 숫자로 바꿔줌(+)
        console.log(gameDatas);

        //정답 체크 함수 호출
        checkAnswer(e.target);
    });


})();