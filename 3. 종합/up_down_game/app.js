//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100
};

//함수 정의부

//숫자 아이콘 생성함수
function makeNumberIcons() {


    const $numbers = document.getElementById('numbers');
    // 가상 돔 만들기
    const $frag = document.createDocumentFragment();

    // 아이콘 i개 만들기
    for (let i = 1; i <= 100; i++) {
        const $icon = document.createElement('div');//요소노드추출
        $icon.classList.add('icon');//아이콘 클래스 추가하고
        $icon.textContent = i;//텍스트 추가해서
        $frag.appendChild($icon);//가상 돔에 푸시
    }
    $numbers.appendChild($frag);//가상 돔에 모아둔 아이콘들 numbers에 한번에 푸시
}

//메인 실행부
(function () {

    //아이콘 배치 함수 호출
    makeNumberIcons();
})();