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
        return todos[todos.length - 1].id + 1;//todos[인덱스번호자리].id +1;
    } else { //기존데이터가 한개도 없는 경우
        return 1;
    }
}


//새 할 일을 화면에 렌더링하는 함수
function renderNewToDo(newTodo) {
    const newElement = `
    <li data-id="${newTodo.id}" class="todo-list-item">
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">${newTodo.text}</span>
    </label>
    <div class="modify">
        <span class="lnr lnr-undo"></span>
    </div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
</li>
    `;
    const $toDoList = document.querySelector('.todo-list');//요소노드추출
    $toDoList.innerHTML += newElement;//태그포함한 노드추가

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

})();