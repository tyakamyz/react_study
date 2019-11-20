var student = [{
	studno: 10101,
	grade: 1,
	name: "학생1"
}, {
	studno: 20202,
	grade: 2,
	name: "학생2"
}];

for (var i=0; i<student.length; i++) {
	console.log("[%d번째 학생]", i + 1);
	console.log(" >> 학번: %d", student[i].studno);
	console.log(" >> 학년: %d", student[i].grade);
	console.log(" >> 이름: %s", student[i].name);
	console.log();
}


