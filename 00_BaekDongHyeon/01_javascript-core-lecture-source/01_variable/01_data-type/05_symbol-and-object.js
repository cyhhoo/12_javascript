
/* Symbol 타입
* - ES6에서 추가된 7번째 타입
* - 다른 값과 중복되지 않는 유일무이한 값 지정 시 사용
*   (이름 충동 위험이 없는 객체의 유일한 프로퍼티 키값 생성 시 사용)
* */
var key = 'key';
console.log(key, typeof key); // typeof 변수명/값 -> 타입 출력

key = Symbol('key');
console.log(key, typeof key);

/* Object(객체) 타입 */
/*
* - JS의 데이터 타입은 크게 원시타입과 객체타입으로 분류된다
*   - 원시타입 : number, string, boolean, undefined, null, Symbol
*   - 객체 타입 : object(array, function, ...)
*
* - JS 객체는 { K:V } 형태를 띄고 있음
* */
var obj = {};
console.log(obj, typeof obj);

obj.name = "홍길동";
console.log(obj, typeof obj, obj.name);