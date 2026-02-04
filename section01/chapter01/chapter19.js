//클래스속에 멤버변수 반복문을 이용해서 출력
const person = { 
name: "김동진", 
age: 25, 
tall: 179 
};  

const personKyes = Object.keys(person);
console.log(personKeys);

for (let index = 0; index < personKeys.length; index++) {
  const key = personKeys[index];
  console.log(` ${key} = ${person[key]}`);
}

const valueArray = Object.values(person);
console.log(valueArray);
for (let index = 0; index < valueArray.length; index++) {
  console.log(` ${valueArray[index]}`);
}
