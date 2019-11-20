var User = function() {
    console.log("User 클래스의 객체가 생성됨");
    this.name = null;
    this.age = null;
};

User.prototype.view = function() {
    console.log(">> 이름: %s, 나이: %d", this.name, this.age);
};

User.prototype.join = function(name, age) {
    this.name = name;
    this.age = age;
    console.log("가입되었습니다.");
    this.view();
};

User.prototype.edit = function(name, age) {
    this.name = name;
    this.age = age;
    console.log("회원정보가 수정되었습니다.");
    this.view();
};

User.prototype.out = function() {
    this.name = null;
    this.age = null;
    console.log("탈퇴되었습니다.");
    this.view();
};

var user1 = new User();
user1.join("학생1", 20);
user1.edit("학생1(수정)", 21);
user1.out();


var user2 = new User();
user2.join("학생2", 23);
user2.edit("학생2(수정)", 24);
user2.out();
