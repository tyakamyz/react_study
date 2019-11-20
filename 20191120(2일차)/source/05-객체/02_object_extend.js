var obj = {};

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


