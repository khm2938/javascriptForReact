//콜백함수
//함수선언문
function repeat(count, callback){
  for (let index = 0; index < count; index++) {
    //콜백함수를 진행한다
    callback(index, index+5);
  }
}

//함수표현식
let funcA = function (index){
  console.log(index);
}
let funcB = function (index){
  console.log(index*10);
}

//화살표함수
let funcC = (index) => console.log(index+1);
//let callback = funcA;

//임시객체 (한번 쓰고 버림)
repeat(5, (index) => console.log(index+1));
//repeat(5, (index1, index2)=>console.log(index1*10 + index2))
//callback(20);




