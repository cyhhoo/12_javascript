/* 화살표 함수 기본 문법
*
* - ES6에서 도입된 익명 함수 작성법
* - 기존 함수 선언 방법보다 간략하게 작성 가능
* */

/* 기본 함수 표현식 */
var message = function(){
  return 'hello world';
}
console.log(message());

/* 화살표 함수 */
message = () => {
  return 'Arrow Function';
}
console.log(message());

/* {} 내에 한 줄 밖에 없을 경우
* -> {} 생략 가능
* -> return 구문이면 return도 생략 가능
* */
var testFn = function(){
  console.log("기존 함수 선언방법");
};
testFn();

// 화살표 함수로 변경
testFn = () => console.log("화살표 함수 선언방법");
testFn();

// return 생략
var getName = () => "홍길동";
console.log(`getName() : ${getName()}`)

// 매개 변수가 없거나 2개 이상인 경우
// -> () 생략 불가
var calc1 = (a,b) => a + b;
console.log(calc1(10, 30)); // 40

// 매개 변수가 1개인 경우
// -> () 생략 가능
var calc2 = num => num * 2;
console.log(calc2(123)); // 246

