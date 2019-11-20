var list = ['item1', 'item2', 'item3'];
console.log(list);

list.push('item4');
console.log(list);

var last = list.pop();
console.log(list);

list.unshift('item0');
console.log(list);

var first = list.shift();
console.log("first: " + first);
console.log(list);

delete list[1];
console.log(list);
console.log(list[1]);


