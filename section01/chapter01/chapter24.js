// 1. Date 객체를 생성하는 방법 
let date1 = new Date(); // 생성자 
let timeValue = date1.getTime();
console.log(timeValue);
console.log(date1);      

// 2. 사용자가 날짜를 설정하는 방법
let date2 = new Date(1997, 0, 7, 23, 59, 59); 
let timeValue2 = date2.getTime();
console.log(date2);   
console.log(timeValue2);  

// 3. 상대방에게 getTime()주게되면, 날짜로 복구가능한가?
let date3 = new Date(timeValue2);
console.log(`date3 = ${date3}`);

// 4. 날짜 : 추출(년도, 월, 일, 시간, 분, 초, 밀리초)
// 5. 날짜 : 수정(년도, 월, 일, 시간, 분, 초, 밀리초)
let date4 = new Date();
date4.setFullYear(2025);
date4.setMonth(2-1);
date4.setDate(4);
date4.setHours(17);
date4.setMinutes(26);
date4.setSeconds(1);


let year = date4.getFullYear();
let month = date4.getMonth() + 1;
let date = date4.getDate();
let hour = date4.getHours();
let minutes = date4.getMinutes();
let seconds = date4.getSeconds();
let miliseconds = date4.getMilliseconds();
console.log(year);
console.log(month);
console.log(date);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(miliseconds);


// 6. 시간은 제외하고, 날짜만 출력하기
let date5 = new Date();
console.log(date5.toDateString());

// 7. 현재지역의 시간 출력하기
console.log(date5.toLocaleDateString());


