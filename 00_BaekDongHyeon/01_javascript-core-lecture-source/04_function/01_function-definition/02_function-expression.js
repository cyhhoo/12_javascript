/* 함수 표현식 */
/* Javascript의 함수는 객체 타입의 성질을 갖는 '일급 객체' 이다.
* 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다
* (변수 = 객체; -> 함수도 객체이니까  변수 = 함수; 가능)
* */
var hello = function hi(name){
  return `${name}아 안녕?`;
}

console.log(hello("홍길동"));
//console.log(hi("홍길동"));


/* 함수 표현식에서 변수에 대입되는 함수는 이름이 생략되어도 문제 없다!!
* -> 이름이 없는 함수 == 익명 함수
* */
var calc = function(a, b){ return a + b; };

console.log(calc(10, 20));

