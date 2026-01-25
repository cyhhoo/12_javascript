/* 함수 레벨 스코프 */
/*
* - C/Java 등 대부분의 프로그래밍 언어는
*   {} 블럭이 지역으로 설정되는 '블럭 레벨 스코프' 이다
*
* - JS의 var 키워드로 선언된 변수는
*   오로지 함수 코드 블록만을 지역으로 설정한다.
* */

function testFn(){

  if(1 === 1){ // 무조건 true
    var name = "홍길동";
  }

  // var로 선언된 변수 name이
  // if {} 블럭을 벗어나도 
  // testFn 함수 블럭을 벗어나지 않았기 때문에
  // if문 밖에서도 name을 사용할 수 있다
  console.log(name);
}

testFn();