var Say = function(what) {
	console.log(">> Say 객체가 %s로 생성되었습니다.", what);
	this.lang = what;
	if (this.lang == "kor") {
		this.msg = "안녕하세요. 노드제이에스";
	} else {
		this.msg = "Hello Nodejs";
	}
};

// Say라는 생성자 안에 hello라는 함수를 소속시킴
Say.prototype.hello = function() {
	console.log(this.msg);
}


// Say안에 소속된 모든 기능을 kor이라는 이름으로 부여받음
var kor = new Say("kor");
kor.hello();

// Say안에 소속된 모든 기능을 eng이라는 이름으로 부여받음
var eng = new Say("eng");
eng.hello();

