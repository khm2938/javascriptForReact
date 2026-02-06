const Main = ()=>{
  let number = 9;
  const obj = {name : "kdj", age : 30};
  const array = new Array();
  let test;

  return <>
    <main>
      <h1>MAIN 영역</h1>
      <h1>number = {number % 2 === 0 ? '짝수' : '홀수'}</h1>
      <h1>상수 = { 10 }</h1>
      <h1>number = { number }</h1>
      <h1>[1,2,3] = { [1,2,3] }</h1>
      <h1>array = { array }</h1>
      <h1>obj.name = { obj.name }</h1>
      <h1>undefined = { undefined }</h1>
      <h1>null = { null }</h1>
      <h1>null 병합연산자 test = { test ?? 10 }</h1>
      <h1>true = { true }</h1>
      <h1>false = { false }</h1>
    </main>
  </>
};
export default Main;


