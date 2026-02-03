//함수호이스팅(함수선언, 함수표현식, 화살표함수)
// 함수 
let area1 = getArea(10, 20); 
console.log(area1); 
let area2 = getArea(30, 20); 
console.log(area2); 
getArea(120, 200); 
// 호이스팅이란 끌어올리다 라는 뜻 


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