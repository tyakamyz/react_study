String.prototype.elipsis = function(length) {		// 기존 String에도 추가 가능함
	var value = this;

	if (value.length > length) {
		value = value.substring(0, length);
		value += "...";
	}

	return value;
}

var msg = "안녕하세요. Nodejs 프로그래밍 입니다.";
console.log(msg.elipsis(5));