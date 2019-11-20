String.prototype.elipsis = function(length) {
	var value = this;

	if (value.length > length) {
		value = value.substring(0, length);
		value += "...";
	}

	return value;
}

var msg = "안녕하세요. Nodejs 프로그래밍 입니다.";
console.log(msg.elipsis(20));





