var list = ['item1', 'item2', 'item3'];

for (var i=0; i<list.length; i++) {
	console.log("%d번째 요소 >> %s", i, list[i]);
}

console.log("-----------------");

list.forEach(function(item, index) {		// callback 함수. 비동기식 처리
	console.log("%d번째 요소 >> %s", index, item);
});



//////////// 여기부턴 ES6 문법/////////////
console.log("-----------------");

list.forEach((item,index) => {			// function 생략 가능. => 사용
	console.log("Hello");
	console.log("%d번째 요소 >> %s", index, item);
});


console.log("-----------------");

list.forEach( item => {					// 필요 없는 파라미터 생략 가능 (index가 생략됨). 파라미터가 한개일 경우 () 생략 가능
	console.log("Hello");
	console.log("%s", item);
});

console.log("-----------------");

list.forEach(() => {					// 파라미터가 하나도 없는 경우 () 필수
	console.log("Hello");
});