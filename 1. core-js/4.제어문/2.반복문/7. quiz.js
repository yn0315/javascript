


//1부터 10까지의 정수 중 4x+5y = 60을 만족시키는 x,y의 값을 구하라.


for(x = 1; x <= 10; x++) {
    for(y = 1; y <= 10; y++) {
        if(4*x + 5*y === 60) {
            console.log(`${x},${y}`);
        }
        
    }
}


