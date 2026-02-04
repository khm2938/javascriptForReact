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

/*
const coffees = [
  "아메리카노",
  "에스프레소",
  "카페라떼",
  "카푸치노",
  "카페모카",
  "바닐라라떼",
  "카라멜마키아또",
  "플랫화이트",
  "콜드브루",
  "아포가토"
];

coffees.forEach((array)=>{console.log(`${array}`)})
*/

/*
//*********** 2. Map ***********
const coffees = [
  { name: "아메리카노", price: 4500 },
  { name: "에스프레소", price: 4000 },
  { name: "카페라떼", price: 5000 },
  { name: "카푸치노", price: 5000 },
  { name: "카페모카", price: 5500 },
  { name: "바닐라라떼", price: 5500 },
  { name: "카라멜마키아또", price: 5800 },
  { name: "플랫화이트", price: 5200 },
  { name: "콜드브루", price: 6000 },
  { name: "아포가토", price: 6500 }
];

let coffeesPricingUp = coffees.map((item)=>({
  ...item,
  price: item.price * 1.1
}));
console.log(coffeesPricingUp);
*/

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
console.log(tennisPeople);    
//[{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" };] 
// 배열이 출력됨. 
*/

/*
const coffees = [
  { name: "아메리카노", price: 4500 },
  { name: "에스프레소", price: 4000 },
  { name: "카페라떼", price: 5000 },
  { name: "카푸치노", price: 5000 },
  { name: "카페모카", price: 5500 },
  { name: "바닐라라떼", price: 5500 },
  { name: "카라멜마키아또", price: 5800 },
  { name: "플랫화이트", price: 5200 },
  { name: "콜드브루", price: 6000 },
  { name: "아포가토", price: 6500 }
];

const expensive = coffees.filter(item=>item.price >= 5500);
console.log(expensive); 
*/

/*
//**************** 4. find **************** 
const coffees = [
  { name: "아메리카노", price: 4500 },
  { name: "에스프레소", price: 4000 },
  { name: "카페라떼", price: 5000 },
  { name: "카푸치노", price: 5000 },
  { name: "카페모카", price: 5500 },
  { name: "바닐라라떼", price: 5500 },
  { name: "카라멜마키아또", price: 5800 },
  { name: "플랫화이트", price: 5200 },
  { name: "콜드브루", price: 6000 },
  { name: "아포가토", price: 6500 }
];

let findItem = coffees.find((item)=>item.name === "카푸치노");
console.log(findItem);

let findIndex = coffees.findIndex((item)=>item.name === "카푸치노");
console.log(findIndex);
*/

/*
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



const coffees = [
  { name: "아메리카노", price: 4500 },
  { name: "에스프레소", price: 4000 },
  { name: "카페라떼", price: 5000 },
  { name: "카푸치노", price: 5000 },
  { name: "카페모카", price: 5500 },
  { name: "바닐라라떼", price: 5500 },
  { name: "카라멜마키아또", price: 5800 },
  { name: "플랫화이트", price: 5200 },
  { name: "콜드브루", price: 6000 },
  { name: "아포가토", price: 6500 }
];

let coffeesSliced1 = coffees.slice(0,5);
console.log(coffeesSliced1);

let coffeesSliced2 = coffees.slice(5);
console.log(coffeesSliced2);
*/

/*
//**************** 6. concat **************** 
const coffees1 = [
  { name: "아메리카노", price: 4500 },
  { name: "에스프레소", price: 4000 },
  { name: "카페라떼", price: 5000 },
  { name: "카푸치노", price: 5000 },
  { name: "카페모카", price: 5500 }
];

const coffees2 = [
  { name: "바닐라라떼", price: 5500 },
  { name: "카라멜마키아또", price: 5800 },
  { name: "플랫화이트", price: 5200 },
  { name: "콜드브루", price: 6000 },
  { name: "아포가토", price: 6500 }
];

let coffees3 = coffees1.concat(coffees2);
console.log(coffees3);
*/

/*
//**************** 7. sort **************** 
const coffees = [
  { name: "아메리카노", price: 4500 },
  { name: "에스프레소", price: 4000 },
  { name: "카페라떼", price: 5000 },
  { name: "카푸치노", price: 5000 },
  { name: "카페모카", price: 5500 },
  { name: "바닐라라떼", price: 5500 },
  { name: "카라멜마키아또", price: 5800 },
  { name: "플랫화이트", price: 5200 },
  { name: "콜드브루", price: 6000 },
  { name: "아포가토", price: 6500 }
];

coffees.sort((a,b)=>a.name.localeCompare(b.name)); // 원본수정
console.log(coffees);

coffees.toSorted((a,b)=>a.name.localeCompare(b.name)); // 원본보존
console.log(coffees);

coffees.toSorted((a,b)=>a.price-b.price); // 가격순 정렬
*/



//**************** 8. join **************** 
const array = ["오늘","하루도","수고했어!"];
const joined = array.join(" ");
console.log(joined); 













