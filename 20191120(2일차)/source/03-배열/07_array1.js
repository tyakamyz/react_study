var arr1 = [1,2,3];
var arr2 = arr1;
console.log("[before] arr1=%s", arr1);
console.log("[before] arr2=%s", arr2);

arr1[0]+=1;
arr1[1]+=2;
arr1[2]+=3;
console.log("[after1] arr1=%s", arr1);  // 배열의 복사는 참조이기 때문에 원본이 변경되면 함께 변경됨
console.log("[after1] arr2=%s", arr2);  // 이 현상을 참조라 부름

arr2[0]+=10;
arr2[1]+=20;
arr2[2]+=30;
console.log("[after2] arr1=%s", arr1);  // 복사본을 변경해도 원본이 함께 변경됨
console.log("[after2] arr2=%s", arr2);



var arr1 = [1,2,3];
var arr2 = new Array(arr1.length);
for(var i=0; i<arr1.length; i++){
    arr2[i] = arr1[i];
}
console.log("[before] arr1=%s", arr1);
console.log("[before] arr2=%s", arr2);

arr2[0]+=10;
arr2[1]+=20;
arr2[2]+=30;
console.log("[after] arr1=%s", arr1);  // for문으로 개별적으로 넣어줄 경우 참조가 되지않음
console.log("[after] arr2=%s", arr2);


var arr1 = [1,2,3];
//var arr2 = arr1.slice(0, arr1.length);
var arr2 = arr1.slice();       // 깊은 복사(원본과 복사본이 각각 존재함). 반댓말 얕은복사
console.log("[before] arr1=%s", arr1);
console.log("[before] arr2=%s", arr2);

arr2[0]+=10;
arr2[1]+=20;
arr2[2]+=30;
console.log("[after] arr1=%s", arr1); 
console.log("[after] arr2=%s", arr2);