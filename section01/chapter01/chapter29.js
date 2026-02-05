// promise pending 상태 
let task = function(){
  setTimeout(()=>{
    console.log("안녕");
    if(true){
      //resolve 상태
    }else{
      //reject 상태
    }
  }, 3000);
}
//task();

//pending 상태
/*
let promise = new Promise(()=>{
  setTimeout(()=>{
    console.log("안녕");
    if(true){
      //resolve 상태
    }else{
      //reject 상태
    }
  }, 3000);
});
//console.log(promise);
*/
/*
// resolve상태
let promise2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("안녕");
    if(true){
      resolve("promise 안녕")
    }else{
      //reject 상태
    }
  }, 2000);
});
setTimeout(()=>{
  console.log(promise2);
},3000);
*/

/*
// reject상태
let promise3 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("안녕");
    if(false){
      resolve("promise 안녕")
    }else{
      reject("promise 실패")
    }
  }, 2000);
});
setTimeout(()=>{
  console.log(promise3);
},3000);
*/

/*
// promise 활용
const promise4 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = 10; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
 
setTimeout(() => { 
      console.log(promise4); 
}, 3000); 
*/

/*
// promise 성공 후 그 결과값을 출력
const promise5 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = 10; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
// promise5가 성공하면 작업실행
promise5.then((value)=>console.log(`성공한결과 ${value}`));
setTimeout(() => { 
      console.log(promise5); 
}, 3000); 
*/

/*
// promise 실패 후 그 결과값을 출력
const promise5 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = "10"; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
// promise5가 성공하면 작업실행
promise5.then((value)=>console.log(`성공한결과 ${value}`));
// promise5가 실패하면 작업실행
promise5.catch((value)=>console.log(`성공한결과 ${value}`));

setTimeout(() => { 
      console.log(promise5); 
}, 3000); 
*/


// promise chain 방식
const promise6 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = 10; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
promise6
  .then((value)=>console.log(`성공한결과 ${value}`))
  .catch((value)=>console.log(`성공한결과 ${value}`));

setTimeout(() => { 
      console.log(promise6); 
}, 3000); 



//promise를 함수를 통해서 실행하기
function add10(num){
  const promise = new Promise((resolve, reject) => { 
    // 비동기 작업 실행하는 함수 
    // executor 
    setTimeout(() => { 
      if (typeof num === 'number') { 
        resolve(num + 10); 
      } else { 
        reject('num이 숫자가 아닙니다'); 
      } 
    }, 2000); 
  }); 
  return promise
}
/*
// 1단계
let promise = add10("100");
promise
  .then((value)=>console.log(`성공한결과 ${value}`))
  .catch((value)=>console.log(`실패 ${value}`));
*/

/*
// 2단계
let promise = add10(100);
promise
  .then((value)=> {
    console.log(`성공한결과 ${value}`)
    let _promise = add10(value);
    _promise.then((value)=>{
      console.log(`성공한결과 ${value}`)
    })
  })
  .catch((value)=>console.log(`실패 ${value}`));
*/

/*
// 2단계 수정
let promise = add10(100);
promise
  .then((value)=> {
    console.log(`성공한결과 ${value}`)
    //promise리턴
    return add10(value);
    })
  .then((value)=>console.log(`성공한결과 ${value}`))
  .catch((value)=>console.log(`실패한결과 ${value}`));
*/

/*
// 3단계
add10(100)
  .then((value)=> {
    console.log(`성공한결과 ${value}`)
    //promise리턴
    return add10(value);
    })
  .then((value2)=>{ 
    console.log(`성공한결과 ${value2}`) 
    return add10(value2)
})
  .then((value3)=>{console.log(`성공한결과 ${value3}`)})
  .catch((value)=>console.log(`실패한결과 ${value}`));
*/


// 음식주문사항을 promise(1단계, 2단계, 3단계) 활용하여 해결해보기
function orderFood(food, callback){
  console.log(`${food} 주문`);
  setTimeout(()=>{
    callback(food);
  }, 3000);
}

function orderFood2(food){
  const promise = new Promise((resove, reject)=>{
    console.log(`${food} 주문`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + '완료')
      }else{
        reject(food + '실패')
      }
    }, 2000);
  })
  return promise;
}
/*
orderFood2("떡볶이")
.then((value)=> console.log(value))
.catch((error)=> console.log(error))
*/


function coolFood2(food){
  const promise = new Promise((resolve, reject)=>{
    console.log(`${food} 차갑게 주문`);
    setTimeout(()=>{
      let flag = true;
      if(flag){
        resolve(food + ' 차갑게 완료')
      }else{
        reject(food + ' 차갑게 실패')
      }
    }, 2000);
  });

  return promise;
}
/*
coolFood2("떡볶이")
.then((value)=> console.log(value))
.catch((error)=> console.log(error))
*/



function freezeFood(food){
  const promise = new Promise((resolve, reject)=>{
    console.log(`${food} 냉동 주문`);
    setTimeout(()=>{
      let flag = true;
      if(flag){
        resolve(food + ' 냉동 완료')
      }else{
        reject(food + ' 냉동 실패')
      }
    }, 2000);
  });

  return promise;
}
/*
freezeFood("떡볶이")
.then((value)=> console.log(value))
.catch((error)=> console.log(error))
*/

//2단계 처리방식
/*
orderFood2("떡볶이")
.then((value)=> {
  console.log(value)
  return coolFood2(value)
})
.then((value)=> console.log(value))
.catch((error)=> console.log(error))
*/

//3단계 처리방식
orderFood2("떡볶이")
.then((value)=> {
  console.log(value)
  return coolFood2(value)
})
.then((value)=> {
  console.log(value)
  return freezeFood("떡볶이")
})
.then((value)=>console.log(value))
.catch((error)=> console.log(error))




















