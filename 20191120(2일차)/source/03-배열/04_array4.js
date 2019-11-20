var list = ['item1', 'item2', 'item3'];
console.log(list);

list.push('item4');     // 맨 끝에 원소를 추가.
console.log(list);

var last = list.pop();  // 맨 끝 원소를 꺼내서 리턴하고 그 자리는 삭제
console.log(list);

list.unshift('item0');  // 맨 앞에 원소를 추가하고 원래 있던 항목들은 뒤로 밀어냄
console.log(list);

var first = list.shift();   // 맨 앞에 원소를 꺼내서 리턴하고 그 자리는 삭제
console.log("first: " + first);
console.log(list);

delete list[1];         // 지정된 위치를 삭제하고 undefined로 남겨둠
console.log(list);
console.log(list[1]);


