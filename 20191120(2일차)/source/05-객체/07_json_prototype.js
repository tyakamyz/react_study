var Member = function(name, age) {
	console.log("---- Member의 객체가 생성되었습니다. ----");
	this.name = name;
	this.age = age;
};

Member.prototype = {		// prototype을 json으로 한번에 묶어서 생성함
	setName: function(name) {
		this.name = name;
	},
	setAge: function(age) {
		this.age = age
	},
	say: function() {
		console.log("이름: " + this.name);
		console.log("나이: " + this.age);
	}
};

var obj = new Member('헬로노드', 19);
obj.say();
obj.setName('노드학생');
obj.setAge(20);
obj.say();