//전역변수
const todos = [{
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }

];



//함수정의부


//추가될 새로운 할 일의 신규 아이디를 만들어서 리턴하는 함수

function makeNewId() {
    //마지막 배열 찾기

    // const lastObject = todos[todos.length - 1];
    // console.log(lastObject.id);//마지막 배열의 id값찾기
    if (todos.length > 0) {
        return todos[todos.length - 1].id + 1; //todos[인덱스번호자리].id +1;
    } else { //기존데이터가 한개도 없는 경우
        return 1;
    }
}


//새 할 일을 화면에 렌더링하는 함수
function renderNewToDo(newTodo) {
    const $li = document.createElement('li');
    $li.dataset.id = newTodo.id;
    $li.classList.add('todo-list-item');

    // console.log($li);

    const newElement = `
    
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">${newTodo.text}</span>
    </label>
    <div class="modify">
        <span class="lnr lnr-undo"></span>
    </div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>

    `;
    $li.innerHTML = newElement;
    const $toDoList = document.querySelector('.todo-list'); //요소노드추출

    // $todoList.innerhtmml += newElement;
    //태그포함한 노드추가//기존것을 뽑아내서 마지막을 붙이고 통째로 다시 가져오는 방식

    //appenchild로 넣어줘야 함
    $toDoList.appendChild($li);

}



//할 일의 내용이 잘 입력되었는지 검사하는 함수
function validateInputText($targetInput) { //매개변수$targetInput의 인수는 $todoText<3>!

    //trim(): 문자열의 앞 뒤 공백을 모두 제거
    //스페이스바 잔뜩 써도 0으로 바뀜
    if ($targetInput.value.trim() === '') { //$todoText의 value가 공백일 경우<4>!
        $targetInput.style.background = 'orangered';
        $targetInput.setAttribute('placeholder', '필수입력사항입니다.');
        $targetInput.value = '';
        return false;

    } else { //$todoText의 value가 공백이 아닐 경우<5>!
        $targetInput.style.background = '';
        $targetInput.setAttribute('placeholder', '할 일을 입력하세요.');
        return true;
    };
}

//할 일 추가기능처리 함수
function insertTodoData() {

    const $todoText = document.getElementById('todo-text'); //todo-text를 요소노드로 추출하여 <1>!

    // 밑에 즉시실행함수에서는 인풋데이터가 없으니 검사 함수 여기서 사용
    // 입력값 검증

    //const flag= deData($todoText);
    // if (flag === false) return;

    //입력값 검증 함수가 false를 리턴할 경우 끝내야 하니까!
    //조건문(함수호출) 리턴(더 실행하지 않고 끝내기)
    if (!validateInputText($todoText)) return; //입력값 검증함수의 인수로 씀<2>! 


    //1. 데이터 처리 : 필요한 데이터를 생성하여 todos배열에 추가
    const newTodo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newTodo); //배열에 추가              
    // console.log(todos);

    //2.추가된 데이터를 화면에 렌더링
    renderNewToDo(newTodo);

    //3. 입력완료 후 input창 텍스트 지우기
    $todoText.value = '';

}

//data-id값으로 배열을 탐색하여 아이디가 일치하는 객체의 인덱스를 반환
function findIndexByDataId(dataId) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === dataId) {
            return i; //break역할까지 함 찾으면 자동으로 종료
        }
    }
    return null; //탐색실패시 증거로 null을 반환
}

//할 일 완료 처리 함수 정의

function changeCheckState($label) {
    // 1. 체크가 된 label태그에 checked클래스를 추가해야 함
    // 2. 이 함수에는 체크가 된 label태그의 정보가 필요함
    // 3. 이 태그는 이벤트핸들러가 알고 있음
    $label.classList.toggle('checked'); //한 번 더 누르면 지워져야 하니까 

    // 4. 문제상황: css만 변했지 실제 데이터(done)는 변하지 않았음
    // 5. 만약 서버가 있었다면 서버에 완료상태를 반영해줘야 함
    // 6. todos배열의 객체에 접근해서 done값을 변경해줘야함
    // 7. 만약에 두번째 체크박스를 선택했다면 todos배열의 1번 인덱스의 done값을 수정해야함
    // 8. label태그의 정보를 알고 있다면 그 부모태그 li에 접근할 수 있고 그 태그의 data-id속성을
    //    조회하면 객체의 id 값을 얻을 수 있다.
    console.log($label.parentNode.dataset.id);
    const dataId = +$label.parentNode.dataset.id; //html에서 문자열로 저장되어있어 숫자로 바꿔줌

    // 9. id값을 기반으로 배열을 탐색하여 data-id와 일치하는 id프로퍼티를 가진 객체가 있는 인덱스를 찾아야 함.

    // id는 늘어나기만 하지 줄어들지 않음!! 그래서 인덱스번호 찾기 위해 id -1로 찾으면 안됨
    const idx = findIndexByDataId(dataId); //id값을 보내줘야 반복문으로 돌릴 수 있으니까 
    // console.log(`idx: ${idx}번`);

    //10. 찾은 인덱스로 해당 객체에 접근해서 done값을 수정
    if (idx !== null) { //이거 안해놓으면 null들어왔을 때 서버터짐
        todos[idx].done = !todos[idx].done; //누를 때마다 바뀌어야 하니까 done을 반전시킨 값을 대입함
    }
    // console.log(todos);

}


//할 일 삭제 처리 함수
function removeToDoData($delTarget) {
    //1. 삭제 대상 li 태그를 ul에서 제거해야 함
    const $ul = document.querySelector('.todo-list');
    $ul.removeChild($delTarget);

    //2. todos배열에서 해당 객체 삭제
    const delIdx = findIndexByDataId(+$delTarget.dataset.id);
    todos.splice(delIdx, 1);

    console.log(todos); //사라졌는지 확인
}

//할 일 수정 처리 함수

function modifyToDoData($modTarget) {
       
    const $input= document.createElement('input');
    const $text = document.querySelector('.text')
    $input.classList.add('mod-input');   

    // $modTarget.removeChild($modTarget.firstElementChild);
    $modTarget.replaceChild($input, $modTarget.  );
    console.log($modTarget);
}


//메인실행부
(function () {

    //할 일 추가 이벤트
    //$안써도 되는데 태그가 들어있다는 걸 알려주기 위해 쓰는 관례
    const $addBtn = document.getElementById('add');

    $addBtn.addEventListener('click', e => {
        e.preventDefault(); //submit 전송기능 중단//새로고침중단
        console.log('추가버튼 클릭!');

        //여기다 입력값 검증함수를 안쓰는 이유는 input이 없기 때문
        insertTodoData();
    });


    //할 일 완료(체크박스)이벤트
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.addEventListener('change', e => {
        // console.log('체크박스 체인지 이벤트 발생!');
        //ul에 걸어도 위에 이벤트는 클릭이벤트라 버튼 눌러도 아무 일도 발생하지 않음

        // console.log(e.target.nextElementSibling);

        //체크박스에 변화가 생겼을 때 css변동 처리함수 호출
        // console.log(e.target.parentNode); //항상 먼저 체크해보고 하기
        changeCheckState(e.target.parentNode);

    })

    //할 일 삭제버튼 클릭 이벤트
    $toDoList.addEventListener('click', e => {

        if (!e.target.matches('.remove span')) return; //클릭이벤트 범위제한

        // console.log('삭제버튼 클릭됨', e.target);
        // console.log(e.target.parentNode.parentNode);
        removeToDoData(e.target.parentNode.parentNode);

    })

    //할 일 수정버튼 클릭 이벤트
    $toDoList.addEventListener('click', e => {

        if (!e.target.matches('.modify span')) return; //클릭이벤트 범위제한

        // console.log('삭제버튼 클릭됨', e.target);
        // console.log(e.target.parentNode.parentNode);
        modifyToDoData(e.target.parentNode);


    })


})();