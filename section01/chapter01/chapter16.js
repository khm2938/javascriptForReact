// 1. 상수 객체 
const animal = { 
type: "고양이", 
name: "나비", 
color: "black", 
}; 
//상수인 animal 에 새로운 객체를 대입하면 안됨.  
animal ={ 
name: “호랑이” 
} 
animal.age = 2;          
// 추가가능 
animal.name = "까망이"; // 수정가능 
delete animal.color;      
// 2.메서드 
// 삭제가능 
//값이 함수인 프로퍼티를 말함 
const person = { 
name: "홍길동”, 
// 메서드 선언 
sayHi() { 
console.log("안녕!"); 
}, 
//익명함수 가능 
sayHi2 : function() { 
console.log("안녕2!"); 
}, 
//화살표함수 가능 
sayHi3 : ()=> { 
console.log("안녕3!"); 
}, 
}; 
person.sayHi(); 
person["sayHi"]();  //괄호표기법으로 함수 호출가능하다.