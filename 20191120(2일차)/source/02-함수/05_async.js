function hello(msg) {
    console.log("--- start ---");
    setTimeout(function() {         // callback 함수는 비동기식으로 실행됨. 독자적으로 실행
		console.log(msg);
	}, 1000);
    console.log("--- done ---");
}

hello("Hello callback");

console.log("----- 프로그램을 종료합니다 ------");



