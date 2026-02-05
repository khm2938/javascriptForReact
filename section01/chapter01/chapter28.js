//28장. 동기 비동기
/*
console.log(1); 
//비동기로 처리한 방식(Web APIs 에서 실행된다) 
setTimeout(() => { console.log(2); }, 3000); 
//setInterval(()=>{console.log(2)}, 1000)

console.log(3); 
*/

//비동기 작업 처리하기(콜백함수) 
/*
function task() { 
  setTimeout(() => { 
    console.log('hello'); 
  }, 3000); 
} 
task(); 
 
 
function add(a,b) { 
  setTimeout(() => { 
    const sum = a + b;  
    console.log(sum); 
  }, 3000); 
} 
add(1,2);
*/

/*
let callbackA = (sum) => {
    console.log(`a + b = ${sum}`)
}

function task(a, b, callbackA) {
    setTimeout(() => {
        let sum = a + b;
        callbackA(sum) //console.log(`a + b = ${sum}`)
    }, 3000);
}

task(10, 20, (sum)=> console.log(sum))
*/

//2번 방식
/*
// 이벤트처리할 작업을 함수화 시키자
let callback = (a,b)=>{
  let sum = a + b;
  console.log(`a+b = ${sum + 100}`);
}

function task1(a,b) { 
  setTimeout(() => { 
    callback(a,b); 
  }, 3000); 
} 
task1(10, 20);



//3번 방식
function task2(a,b, callback2) { 
  setTimeout(() => { 
   callback2(a,b);
  }, 3000); 
} 


task2(10, 20, (a,b)=>{
  let sum = a + b;
  console.log(sum*10)
});
task2(10, 20, (a, b) => console.log(`a+b = ${a+b+1000}`))
*/


// 1단계: 주문 받기
orderFood("떡볶이", (food) => {
    console.log(`${food} 주문 완료!`);

    // 2단계: 요리 하기 (주문이 끝나야 시작)
    cookFood(food, (cookedFood) => {
        console.log(`${cookedFood} 요리 완료!`);

        // 3단계: 배달 하기 (요리가 끝나야 시작)
        deliverFood(cookedFood, (deliveredFood) => {
            console.log(`${deliveredFood} 배달 완료! 🚀`);
        });
    });
});