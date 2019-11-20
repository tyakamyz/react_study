function say_hello(msg) {
	console.log("say_hello(%s)", msg);
}

say_hello("Hello Node!!!");

var say = say_hello;
say("안녕하세요. 노드!!!");

var hello = function(msg) {
	console.log("hello(%s)", msg);
};

hello("안녕하세요. 노드!!!");



