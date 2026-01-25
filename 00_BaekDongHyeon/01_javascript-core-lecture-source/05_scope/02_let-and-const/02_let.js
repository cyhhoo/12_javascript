// ES6에서 var 키워드의 단점을 보완하기 위해 let, const를 도입했다

// let (let x be 5 -> x를 5라고 하자)

// 1. 변수 중복 선언 금지
let msg = '안녕하세요';
console.log(msg);

// SyntaxError: Identifier 'msg' has already been declared
//let msg = '안녕히가세요';
//console.log(msg);


// 2. 블록 레벨 스코프를 가짐
function testFn(){
  if(1 === 1){ // 무조건 true
    let name = "홍길동"; // if문 블럭 레벨
  }

  // name is not defined
  // console.log(name); // if문을 벗어나면 name 변수가 사라짐
}

testFn();


// 3. 변수 호이스팅 불가
// ReferenceError: Cannot access 'test' before initialization
//console.log('--->', test);
let test;