// 일급 객체
// - 함수는 특별한 존재가 아니라 일반적인 데이터와 동일 취급 함

/* 객체 등급 분류
* 1급 : 변수 할당 O, 인자 O, 반환값 O
* 2급 : 변수 할당 X, 인자 O, 반환값 X
* 3급 : 변수 할당 X, 인자 X, 반환값 X
*
* */

// 1급 객체는 변수(+배열, 객체)에 저장할 수 있다.
var hello  = () => "안녕"

var obj = {hello};
console.log(obj)

// 1급 객체는 매개 변수로 인자를 전달할 수 있다.
// 1급 객체는 결과값을 반환할 수 있다.

var repeat = (callback, count) => {
    for(var i = 0; i < count; i++){
        console.log(callback());
    }
    return () => console.log(`${count}번 반복 완료`);
}

// - 고차 함수 repeat에 callback 함수 obj.hello를 전달
// - 고차함수 repeat겨ㅑㄹ과로 함수가 반환 됨
var resultFn = repeat(obj.hello,7);
resultFn();