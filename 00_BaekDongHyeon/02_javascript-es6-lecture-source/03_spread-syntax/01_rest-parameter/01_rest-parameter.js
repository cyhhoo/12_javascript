/* 01_rest-parameter */
// 나머지 매개 변수 (== java의 가변 인자)

function merge(msg1, msg2){
  return msg1 + msg2;
}

console.log(merge("안녕하세요"));
console.log(merge("안녕하세요", "반갑습니다"));
console.log(merge("안녕하세요", "반갑습니다", "식사하실래요?"));
// -> 미만인 매개 변수는 undefined, 초과된 인자는 매개 변수 저장 X

// ... 전개 연산자
// ... 매개 변수 === 가변 인자
// -> 모든 전달 인자를 저장한 배열의 형태
function mergeAll(...args){
  let msg = '';
  for(let arg of args){
    msg += arg;
  }
  return msg;
}


console.log(mergeAll("안녕하세요"));
console.log(mergeAll("안녕하세요", "반갑습니다"));
console.log(mergeAll("안녕하세요", "반갑습니다", "식사하실래요?"));

