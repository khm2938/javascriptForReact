//내장함수(라이브러리) (반복문 => 자기스타일로 변경 반복문)

/*
//*********** 1. forEach ***********
 const array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  
}
array.forEach((value, index, array)=>{
  console.log(`value = ${value}`)
  console.log(`index = ${index}`)
  console.log(`array = ${array}`)
  console.log(`*********************************`)
});

array.forEach((value)=>{
  console.log(`${value}`)
});
*/




//*********** 2. Map ***********
const array = [1,2,3,4];
const newArray = [];

for (let i = 0; i < array.length; i++) {
  let value = array[i];  
  value = value * 10;
  newArray.push(value);
}
console.log(array);
console.log(newArray);


let _newArray = array.map((value)=> value * 10);
console.log(_newArray);


/*
//*********** 3. filter ***********
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 

let newArray1 = [];
for (let i = 0; i < array1.length; i++) {
  let item = array1[i];
  if(item.hobby === "테니스"){
  newArray1.push(item);
  }
}
console.log(array1);
console.log(newArray1);

let newArray2 = array1.filter((value)=> value.hobby === "테니스")
console.log(newArray2);

const tennisPeople = arr1.filter( 
(item) => item.hobby === "테니스" 
); 
Console.log(tennisPeople);    
//[{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" };] 
// 배열이 출력됨. 


//*********** find ***********



//**************** 4. find **************** 
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 

let findItem = null;
for (let i = 0; i < array1.length; i++) {
  let item = array1[i];
  if(item.hobby === "테니스")
    findItem = item;
  break;
}
console.log(findItem);
array1.
let findItem2 = array1.find((value)=> value.hobby === "독서");
console.log(findItem2);

let findIndex = array1.findIndex((value)=> value.hobby === "독서");
console.log(findIndex);



//**************** 5. slice(start, end) **************** 
let array = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
{ name: "최유진", hobby: "러브" }, 
{ name: "고애신", hobby: "독립" }, 
{ name: "구동매", hobby: "검도" }, 
]; 

let newArray = array.slice(0,3);
console.log(newArray);



//**************** 6. concat **************** 
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" },  
]; 

let array2 = [  
{ name: "최유진", hobby: "러브" }, 
{ name: "고애신", hobby: "독립" }, 
{ name: "구동매", hobby: "검도" }, 
]; 

let array3 = array1.concat(array2);
console.log(array3);


//**************** 7. sort **************** 
// 배열을 @사전순@으로 내림차순 정렬하는 메서드 
let arr3 = [0,1,3,2,10,30,20]; 
console.log(arr3) // 문자열 기준으로 정렬

//숫자를 정렬 
arr3.sort((num1, num2)=> num1 - num2 ); //오름차순
arr2.sort((num1, num2)=> num2 - num1 ); //내림차순
console.log(arr3);

//문자 정렬
let arr4 = ["acd","dfe","hre","kwi","meu"];
console.log(arr4)
arr4.sort()

//문자 역정렬
let arr5 = ["acd","dfe","hre","kwi","meu"];
let arr6 = arr5.sort().toReversed();
console.log(arr6);


//**************** 8. join, split **************** 
const arr8 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr8.join("=="); 
console.log(joined); 

const array9 = joined.split("==");
console.log(array9);
***********************************************/
















































