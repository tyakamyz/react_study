var Say = function(what) {
	console.log(">> Say 객체가 %s로 생성되었습니다.", what);
	this.lang = what;

	if (this.lang == "kor") {
		this.msg = "안녕하세요. 노드제이에스";
	} else {
		this.msg = "Hello Nodejs";
	}
};

// 함수를 new 키워드로 호출하면 객체를 생성함.
// 이때 호출한 함수는 함수가 아닌 생성자 라고 부름.
// 독립적인 객체가 만들어짐.
var kor = new Say("kor");
console.log(kor.msg);

var eng = new Say("eng");
console.log(eng.msg);