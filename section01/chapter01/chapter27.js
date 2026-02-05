//27장. JSON.Stringify
let object1 = {name : "홍길동", age: 30}
let object2 = {...object1};
object2["age"] = 10;
console.log(object2);

console.log(JSON.stringify(object1) === JSON.stringify(object2)); // 문자열 비교
