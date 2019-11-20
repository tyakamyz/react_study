var obj = {};		// json을 우선 선언 한 후. 그 뒤에 json 데이터들을 넣어도 생성됨

obj.name = 'Node';
obj.age = 20;

obj.say = function() {
	console.log("이름: " + this.name);
	console.log("나이: " + this.age);
};

obj.say();

obj.getName = function() {
	return this.name;
};

obj.setName = function(name) {
	this.name = name;
};

obj.setName("노드");
console.log("이름: " + obj.getName());
obj.age = 19;
console.log("나이: " + obj.age);