var x = 'global x';

function outer(x) {//매개변수도 지역변수
    var y = 'outer local y';
    console.log(x);
    console.log(y);

    function inner() {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
    // console.log(z); inner가 끝나면 사라져서 안 뜸
}
outer('outer local x');