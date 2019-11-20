function clone(obj) {
    if (obj == undefined || obj == null || typeof obj != "object") {
    	return obj;
    }

    var copy = obj.constructor();

    for (var attr in obj) {
        copy[attr] = obj[attr];
    }
    return copy;
}

var json1 = {a: 100, b: 200};
var json2 = clone(json1);
console.log("[before] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[before] json2={a:%d, b:%d}", json2.a, json2.b);

json1.a+=100;
json1.b+=200;
console.log("[after1] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[after1] json2={a:%d, b:%d}", json2.a, json2.b);

json2.a-=50;
json2.b-=100;
console.log("[after2] json1={a:%d, b:%d}", json1.a, json1.b);
console.log("[after2] json2={a:%d, b:%d}", json2.a, json2.b);



