var list = ['item1', 'item2', 'item3'];

list.splice(1,2);
console.log(list);

list.splice(0, 0, 'new1', 'new2', 'new3');
console.log(list);

list.splice(3, 1, 'new4', 'new5');
console.log(list);

var copy = list.slice(1, 3);
console.log(copy);
console.log(list);


