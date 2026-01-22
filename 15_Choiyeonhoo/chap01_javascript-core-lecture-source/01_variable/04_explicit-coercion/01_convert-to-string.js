/* 문자열(string) 타입으로 명시적 변환 */

// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(10), typeof String(10));
console.log(String(NaN), typeof String(NaN));
console.log(String(Infinity), typeof String(Infinity));
console.log(String(true), typeof String(true));

// 2. toString() 메서드 사용
console.log(typeof (10).toString());
console.log(typeof (NaN).toString());
console.log(typeof (Infinity).toString());
console.log(typeof (true).toString());
console.log(typeof (false).toString());
