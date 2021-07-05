

for (var i =1; i <= 10; i++) {
    if (i>5) {
        break;
    }
    console.log(i);
    
}


console.log('반복문 종료');
//break는 가까운 바깥쪽 반복문만 탈출

console.log('====================================');
for (var i = 0; i <3; i++) {
    for (var j = 0; j<2; j++) {
        if (i===j) break;//분홍 괄호 탈출
        
        console.log(`${i}, ${j}`);
    }
}
