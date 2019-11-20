var obj = {
	name: 'Node',
	age : 20,
	say : function() {
		console.log("이름: " + this.name);
		console.log("나이: " + this.age);
	},
	getName: function() {
		return this.name;
	},
	setName: function(name) {
		this.name = name;
	}
};

obj.say();
obj.setName("노드");
console.log("이름: " + obj.getName());

obj.age = 19;
console.log("나이: " + obj.age);
