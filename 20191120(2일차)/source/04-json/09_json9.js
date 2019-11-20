var myjson = {
	name: "자바스크립트",
	age: 20
};

console.log(myjson.msg);		// 정의되지않은 것을 출력하려하면 undefined
								// 에러로 인식하지 않기때문에 주의!
myjson.msg = "HelloWorld";		
console.log(myjson.msg);

myjson.aga = 21;
console.log(myjson);
