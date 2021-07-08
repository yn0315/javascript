

//객체의 중첩구조
//게시글 데이터

var articleList = {//프로퍼티 3개
    totalCount: 3670,
    adamin: 'admin123',
    articles: [
    {
        bno: 3,
        title: '하하호호',
        writer: '둘리',
        view: 15
    }, 
    {    
        bno: 2,
        title: '안녕안녕',
        writer: '도우너',
        view: 3

    }, 
    {    
        bno: 1,
        title: '바이',
        writer: '고길동',
        view: 4

    }
]};


console.log(articleList.articles[0]);
console.log(articleList.articles[1].title);
