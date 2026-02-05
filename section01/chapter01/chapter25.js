//구조분해할당 (배열, 분해, 변수저장)
let array = [1,2,3];
let one = array[0];
let two = array[1];
let three = array[2];

let [_one, _two, _three = 10, _four = 4] = array; // 디폴트값 설정 가능
console.log(_one);
console.log(_two);
console.log(_three);
console.log(_four);

//객체 구조분해할당
let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
}; 

let person3 = person;
console.log(person3 === person);

let {
  age : myAge,
  name : myName,
  hobby : myHobby,
  extra = "hello"
} = person;
let _myAge2 = person.age;
let _myName = person.name;
let _myHobby = person.hobby;

console.log(myAge, myName, myHobby, extra);


//3. 함수(람다식 = 화살표함수)
//각 프로퍼티를 변수로 저장하고, 그리고 출력
function printPerson({name, age, hobby, extra = "default"}) {
  console.log(`name = ${name+"님"}`);
  console.log(`age = ${age + 1}`);
  console.log(`hobby = ${hobby}`);
  console.log(`extra = ${extra}`);
}
printPerson(person);