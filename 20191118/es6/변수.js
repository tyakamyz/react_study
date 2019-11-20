/*---------------------------------------------------------------
    // 변수 - 데이터를 저장하고 있는 위치에 접근할 수 있는 키워드
----------------------------------------------------------------*/

a = 1;          // 전역변수 (권장하지 않음)
var b = 2;      // 전역변수 (가급적 사용하지 않는 것이 좋음)
const c = 100;  // 상수 (한번 대입하면 값을 변경 할 수 없음)
let d= 200;     // 일반변수 (ES6부터 사용되는 변수)

function hello(){
    // 블록 밖에서 생성된 변수는 블록 안으로 침투 가능함.
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    var e = 100;
}

hello();
// ES5에서는 블럭안에 있는 변수가 어디서나 사용이 가능했음. ES6부터는 개선되어 사용 불가.
// const 또는 let을 사용함.
//console.log(e);       ES6에서는 에러. node는 기본적으로 ES6 사용

var name;           // 할당 안함
var age = null;     // 나중에 할당하기위해 비워둔 값

console.log(name);      // undefined

if(name == undefined){
    console.log("이름을 입력하세요.");
}

if(age == null){
    console.log("나이를 입력하세요.");
}