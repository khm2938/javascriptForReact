//함수호이스팅(함수선언, 함수표현식, 화살표함수)
// 함수 
let area1 = getArea(10, 20); 
console.log(area1); 
let area2 = getArea(30, 20); 
console.log(area2); 
getArea(120, 200); 
// 호이스팅이란 끌어올리다 라는 뜻 


// 1. 함수 선언식 
function funcA() { 
  console.log("funcA"); 
} 
 
let varA = funcA; 
varA(); 
 
//2. 함수표현식(익명함수) 
let varB = function () { 
  console.log("funcB"); 
}; 
varB(); 
 
let varD = function funD() { 
   console.log("funcD"); 
}; 
varD();   // ok 
funD();   // x 함수명으로 콜을 해도 에러발생, 그래서 함수표현식에서는 함수명이 필요없다.  
 
// 3. 화살표 함수 
let varC = (value) => { 
  console.log(value); 
  return value + 1; 
}; 
 
console.log(varC(10)); 


//예제
//함수선언식 - 함수호이스팅 (함수를 먼저 메모리에 올려놓음)
getArea(10,20);
function getArea(width,height){
  let area = width * height;

  console.log(`width = ${width} height = ${height} area = ${area}`);
}

//함수표현식(함수호이스팅 불가)
let getArea = function(width,height){
  let area = width * height;

  console.log(`width = ${width} height = ${height} area = ${area}`);
}
getArea(10,20);


//화살표함수(함수호이스팅 불가)
let getArea = (width,height)=>{
  let area = width * height;

  console.log(`width = ${width} height = ${height} area = ${area}`);
}
getArea(10,20);