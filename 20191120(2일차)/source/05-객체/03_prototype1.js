var Say = function(what) {
	console.log(">> Say 객체가 %s로 생성되었습니다.", what);
	this.lang = what;

	if (this.lang == "kor") {
		this.msg = "안녕하세요. 노드제이에스";
	} else {
		this.msg = "Hello Nodejs";
	}
};

var kor = new Say("kor");
console.log(kor.msg);
var eng = new Say("eng");
console.log(eng.msg);
