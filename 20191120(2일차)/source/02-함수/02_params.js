function foo(x, y) {
	console.log("x=%s, y=%s", x, y);

	var result = 0;
	if (x != undefined) { result += x; }
	if (y != undefined) { result += y; }
	console.log(" >> result=%d", result);
}

foo(100, 200);	 // var x=100,y=200
foo(1000);		 // var x=1000,y=undefined
foo();			 // var x=undefined,y=undefined


// ES6부터 파라미터 기본값 설정 가능
function bar(a=1, b=2){
	let result = a + b;

	console.log(result);
}

bar();


// ------------------------------------------------

function myfunc1(){						// ES5 문법
	return "Hello World";
}

console.log(myfunc1());

// ------------------------------------------------

let myfunc2 = function (){				// ES5 문법
	return "Hello World";
};

console.log(myfunc2());

// ------------------------------------------------

let myfunc3 = () => "hello";			// ES6 문법
console.log(myfunc3());


// ------------------------------------------------

// 파라미터를 갖는 함수
let myfunc4 = function(a, b){	// ES5
	return a + b;
}

let myfunc5 = (a, b) => {a+b};	// ES6. 한줄일 경우 {} 생략 가능. a+b

/*
function을 생략해도 됨
함수에 매개변수가 단 하나 뿐이라면 괄호도 생략할 수 있음
함수 바디가 표현식 하나라면 중괄호와 return문도 생략할 수 있음
*/
let myfunc6 = a => a+100;