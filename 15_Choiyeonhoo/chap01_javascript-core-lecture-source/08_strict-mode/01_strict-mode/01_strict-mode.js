// strict mode 미 적용

function test(){
    x = 10; // 암묵적으로 전역 변수로 설정 됨
}

test();

// 개발자의 의도와 관계 없이 암묵적으로 선언된 전역 변수는
// 잠재적 오류 발생의 원이이 될 수 있음.
// -> ES5 부터 strict mode가 추가
console.log("x : ", x);