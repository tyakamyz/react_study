var list = ['item1', 'item2', 'item3'];     // 기본 배열 만들기
var k = list.splice(1,2);                   // 인덱스가 1인 항목부터 2인 항목까지 잘라서 리턴
console.log(list);                          // 잘라낸 자리는 삭제됨
console.log(k);                             // 잘라낸 항목

var list = ['item1', 'item2', 'item3'];     // 기본 배열 만들기
list.splice(0, 1, 'new1', 'new2', 'new3');  // 0번째부터 1칸에 항목들을 삽입
console.log(list);

var list = ['item1', 'item2', 'item3'];     // 기본 배열 만들기
list.splice(2, 1, 'new4', 'new5');          // 2번째부터 1칸에 항목들을 삽입
console.log(list);

var list = ['item1', 'item2', 'item3', 'item4', 'item5'];     // 기본 배열 만들기
var copy = list.slice(1, 3);                                  // 1번째부터 3번째 전까지 잘라서 복사
console.log(list);
console.log(copy);