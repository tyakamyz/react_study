var list = ['item1', 'item2', 'item3'];
console.log(list);

list[3] = 'item4';      // 없는칸이 있다면 생성하고 값을 넣음.
list[5] = 'item5';      // 건너띈 칸인 4번째칸은 undefined. 5번째칸에 값을 넣음

console.log("배열 요소의 수: %d", list.length);
console.log("list[4]: " + list[4]);