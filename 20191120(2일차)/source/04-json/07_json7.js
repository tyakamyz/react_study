var bbs = {
    title: "게시판",
    count: 4,
    item: [         //json안에 배열을 넣음
        {id: 1, subject: '첫 번째 게시물 제목'},
        {id: 2, subject: '두 번째 게시물 제목'},
        {id: 3, subject: '세 번째 게시물 제목'},
        {id: 4, subject: '네 번째 게시물 제목'}
    ]
};

console.log("[%s]", bbs.title);
console.log("총 게시물 수: %d", bbs.count);

for (var i=0; i<bbs.item.length; i++) {
    console.log("[%d] %s", bbs.item[i].id, bbs.item[i].subject);
}


bss.title = "공지사항";
console.log(bbs.title);

bbs.titel = "자유게시판";
console.log(bbs.title);
console.log(bbs.titel);     // 없는경우 새로 생성함 (에러가 안나기 때문에 버그에 신경써야함!!)