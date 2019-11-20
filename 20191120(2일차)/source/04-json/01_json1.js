var student = {
	studno: 10101,			// json은 원래 항상 이름에 ""를 붙여야함. ex) "studno" : 10101
	grade: 1,
	name: "학생1",
	phoneno: "010-1231-2342"
};

console.log("학번: %d", student.studno);
console.log("학년: %d", student.grade);
console.log("이름: %s", student.name);
console.log("연락처: %s", student.phoneno);

console.log("학번: %d", student['studno']);
console.log("학년: %d", student['grade']);
console.log("이름: %s", student['name']);
console.log("연락처: %s", student['phoneno']);


