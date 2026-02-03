// 스코프 
let a = 1; // 전역 스코프 
 
function funcA() { 
  let b = 2; // 지역 스코프 
console.log(a); 
function funcB(){} 
} 
 
funcA(); 
console.log(b);       //접근할수 없는 메시지가 출력됨. 
 
if (true) { 
  let c = 1;          //블록변수도 지역변수다. 
} 
console.log(c);       //접근할수 없는 메시지가 출력됨. 
 
 
for (let i = 0; i < 10; i++) { 
  let d = 1; 
} 
console.log(d);       //접근할수 없는 메시지가 출력됨. 
 
funcB();            //funcB() 함수도 지역스코프이므로 콜할 수가 없다.  


