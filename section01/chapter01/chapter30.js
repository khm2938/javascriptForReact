// async, await 방식
async function getData(){
  return {name: 'kdj', age: 30}
}

function getData2(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let flag = true;
      if(flag){
        resolve({name: 'kdj', age: 30});
      }else{
        reject("비동기처리요청 실패");
      }
    }, 1000)
  })
}

//setTimeout(() => {console.log(getData2());}, 2000);


async function printData(){
  getData2().then((value) => console.log(value))
}

async function printData2(){
  const data = await getData2()
  console.log(data);
}
printData2();