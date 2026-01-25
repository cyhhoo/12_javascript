// parameter(매개 변수)와 argument(전달 인자)
function hello(name){
  // arguments
  // 함수 호출 시 전달된 인수를 참조할 수 있다
  console.log('arguments', arguments);
  console.log(arguments[1]);
  return `${name}님 안녕하세요`;
}

/* JS는 매개 변수의 개수와 관계 없이 전달 인자의 수를 임의로 지정할 수 있다.*/
hello();
hello("유관순");
hello("유관순", "홍길동");
hello("유관순", "홍길동", "이순신");


var result1 = hello();
var result2 = hello('유관순');
var result3 = hello('유관순', "홍길동");

console.log("result : ", result1, result2, result3);


/* 매개 변수 기본 값 설정
* - 매개 변수에 값이 전달되지 않거나 undefined인 경우
*   설정한 기본 값이 대입되도록 할 수 있다.
*  */
function hi(name = '아무개'){
  return `${name} 안녕?`;
}

console.log(hi('병진이'));
console.log(hi());
console.log(hi(undefined));
