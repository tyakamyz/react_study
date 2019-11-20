var arr1 = [1,2,3];
var arr2 = arr1;
console.log("[before] arr1=%s", arr1);
console.log("[before] arr2=%s", arr2);

arr1[0]+=1;
arr1[1]+=2;
arr1[2]+=3;
console.log("[after1] arr1=%s", arr1);
console.log("[after1] arr2=%s", arr2);

arr2[0]+=10;
arr2[1]+=20;
arr2[2]+=30;
console.log("[after2] arr1=%s", arr1);
console.log("[after2] arr2=%s", arr2);


