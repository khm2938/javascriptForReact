//단락평가

let returnFalse = ()=>{
  console.log("false function");
  return false;
}
let returnTrue = ()=>{
  console.log("true function");
  return true;
}

console.log(returnTrue() || returnFalse());
console.log(returnFalse() && returnTrue());

//0,"",false,null, undefined,NaN
let test = false;
if(test){
  console.log(`${test} = true 취급한다`)
}else{
  console.log(`${test} = false 취급한다`)
}
//단락평가테스트
//함수선언문(호이스팅)
function printName(person) {
  const name = person && person.name;
  console.log(name || "person 객체가 없음");
}

printName({name:"홍길동"});
