// 1. 함수 선언식 
function funcA() { 
  console.log("funcA"); 
} 

let varA = funcA; 
varA(); 

namefunc("병합null");
let namefunc2 = namefunc;
namefunc2("삼항연산자");
console.log(namefunc2);

function funcA() { 
  console.log("funcA"); 
} 
 
// 2. 함수 표현식
let nameFunc3 = function (name){
  console.log(name);
}
nameFunc3("함수표현식");

let varA = funcA; 
varA(); 
 
// 3. 화살표함수
let nameFunc4 = (name) => console.log(name);
nameFunc4("함수표현식");

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