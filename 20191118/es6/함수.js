/*---------------------------------------------------------------
    // 함수 = 변수
----------------------------------------------------------------*/

function message(){
    console.log("Hello");
    console.log("World");
}

// 함수 호출
message();

// 변수와 함수는 동급
let say = message;
say();

// 변수에 함수를 직접 담을 수 있음
let said = function(){
    console.log("Hello");
    console.log("World");
};      // 세미콜론 붙여줘야함.

said();


function add(a, b, callback){
    var result = a+b;

    callback(result);
}

function my_callback(z){
    console.log("콜백함수 실행됨");
    console.log("a + b = " + z);
}

add(10, 20, my_callback(result));

add(10, 20, function(result){
    console.log("a + b = " + result);
});