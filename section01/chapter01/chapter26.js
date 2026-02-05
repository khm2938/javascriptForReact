// 26장. spread 연산자
/*
let array1 = [1, 2, 3, 4, 5]
let array2 = [10, ...array1, 20, 30]
let array3 = array1; // 얕은복사(객체참조 주소를 공유)
let arrayForeach = [];
array1.forEach((value) => {arrayForeach.push(value);});
let arrayMap = array1.map((value)=>{`${value}`})
let arraySpread = [...array1] // 깊은복사


console.log(array2);
console.log(array3);
console.log(array1 === array3);
console.log(arrayForeach);
console.log(array1 === arrayForeach);
console.log(arrayMap);
console.log(array1 === arrayMap);
console.log(arraySpread);
console.log(array1 === arraySpread);


// 2. 객체 spread 연산자 활용 깊은복사
let obj1 = { 
  a: 1, 
  b: 2, 
}; 
/*
let obj2 = obj1
console.log(obj2 === obj1); 

let obj3 = {
  ...obj1
}
console.log(obj3); 
console.log(obj3 === obj1); 


//3. 구조분해할당, 스프레드 연산자
function funcA([p1,p2,p3]){
  console.log(p1,p2,p3);
}

const array11 = [1,2,3]
funcA(array11);

function funcB(p1,p2,p3){
  console.log(p1+10,p2*10,p3/10);
}

const array12 = [1,2,3]
funcB(...array12);
*/

//rest 매개변수
const array13 = [11,12,13,14,15,16,17]
function funcC(p1,p2,p3, ...rest){
  console.log(p1, p2)
  console.log(rest)
}




















































