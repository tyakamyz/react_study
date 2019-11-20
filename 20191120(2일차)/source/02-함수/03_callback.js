
function add(a, b, callback) {
	var result = a + b;
	callback(result);
}

function my_callback(z) {
	console.log("콜백함수 실행됨");
	console.log("더하기(20,30)의 결과 >> " + z);
}

var num1 = 20;
var num2 = 30;
add(num1, num2, my_callback);

add(100, 200, function(result) {
	console.log("200 + 100의 결과는 %d 입니다.", result);
});


// ES6 문법
add(100, 200, (result) => {			// =>는 함수를 생성하겠다는 뜻
	console.log("200 + 100의 결과는 %d 입니다.", result);
})
