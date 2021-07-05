
//continue는 skip 으로 이해하면 됨

for (var i =1; i <=10; i++) {
    if (i % 2 ===0) continue;
    console.log(i);
}

console.log('반복문 종료');

while (true) {
    //계속 입력해야 하니까 반복문 안에 배치
    var n = +prompt('숫자를 입력하세요.');
    if (n ===0) {
        break;
    }else if (n===1) { 
        continue;
    }
    alert('안녕안녕');
}
alert('반복문 끝');