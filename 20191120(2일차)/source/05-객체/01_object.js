var obj = {
	name: 'Node',
	age : 20,
	say : function() {	// json은 형태의 제한이 없기때문에 함수 역시 가능
		// 함수 안에서 프로퍼티는 this를 통해 접근 가능
		console.log("이름: " + this.name);
		console.log("나이: " + this.age);
	},
	getName: function() {		// getName: () => { 로 변경 가능
		return this.name;		// let name = obj.getName();
	},
	setName: function(name) {	// setName: name => { 로 변경 가능
		this.name = name;
	}
};

obj.say();
obj.setName("노드");
console.log("이름: " + obj.getName());

obj.age = 19;
console.log("나이: " + obj.age);
