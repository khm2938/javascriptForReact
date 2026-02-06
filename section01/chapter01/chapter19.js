//클래스속에 멤버변수 반복문을 이용해서 출력
const person = { 
name: "김동진", 
age: 25, 
tall: 179 
};  

const personKeys = Object.keys(person);
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


const book = {
  title : "어린왕자",
  author : "색텍쥐페리 앙투안 드",
  publishYear : 2018,
  publisher : "열린책들",
  price : 19000 + " 원"
}

const bookKeys = Object.keys(book);
console.log(bookKeys);

for (let i = 0; i < bookKeys.length; i++) {
  const key = bookKeys[i];
  console.log(`${key} = ${book[key]}`);  
}

/*
const valueArray2 = Object.values(book);
console.log(valueArray2);
for (let i = 0; i < valueArray2.length; i++) {
  console.log(`${valueArray2[i]}`);
}
  */