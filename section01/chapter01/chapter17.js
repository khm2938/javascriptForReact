// 1. 배열 생성 
let arrA = new Array();  // 배열 생성자 
let arrB = [];           // 배열 리터럴 (대부분 사용) 
//배열에 올수 있는 타입들 
let arrC = [ 
  1, 
  2, 
  3, 
  true, 
  "hello", 
  null, 
  undefined, 
  () => {}, 
  {}, 
  [], 
]; 
 
// 2. 배열 요소 접근 
let item1 = arrC[0]; 
let item2 = arrC[1]; 
console.log(item1, item2); 
  
arrC[0] = "hello"; 
console.log(arrC);


let array2 = new Array();
array2.push("홍길동");
array2.push("20");
console.log(array2);
console.log(array2.length);
