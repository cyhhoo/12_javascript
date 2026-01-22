/* 숫자 타입으로 암묵적 변환 */

// 1. 산술 연산자
// - 산술 연산자의 피연산자는 모두 숫자(number) 이여야만 한다
//  -> 암묵적으로 피연산자를 number로 변환 (단, +는 X)
console.log(10 - '3');
console.log(10 * '3');
console.log(10 / '3');
console.log(10 % '3');

console.log(10 % '삼'); // NaN
// -> '삼'을 number로 변경할 수 없기 때문에 NaN 출력

// 2. 비교 연산자 (>, <, >=, <=)
// - 비교 연산자는 크기를 비교하기 위해 수치화가 필수이다.
//  -> 암묵적으로 숫자(number)로 변환
console.log(10 > '5'); // true
console.log(10 < '5'); // false

// 문자('a')는 숫자로 변환 시 'NaN'이 되기 때문에
// NaN은 어떠한 비교 연산자를 이용해 비교 불가다!
console.log(`10 > 'a' : ${10 > 'a'}`); // 'a'가 큰게 아니라 비교 실패해서 false
console.log(`10000 > 'a' : ${10000 > 'a'}`);
console.log(`100000000 > 'a' : ${100000000 > 'a'}`);

/* 참고 : NaN 끼리 비교 */
console.log(`NaN == NaN : ${NaN == NaN}`); // false -> 비교 실패

/* NaN을 확인하기 위한 별도 함수 isNaN() 이용 */
console.log(`isNaN(NaN) : ${isNaN(NaN)}`); // true

/* 3. + 단항 연산자 */
// 피연산자가 숫자 타입이 아니면
// 숫자 타입 값으로 암묵적 타입 변환 수행
console.log(+'', typeof +''); // 0
console.log(+1);          // 1
console.log(+'javascript'); // NaN
console.log(+true);       // 1
console.log(+false);      // 0
console.log(+null);       // 0
console.log(+undefined);  // NaN
//console.log(+Symbol());
// TypeError: Cannot convert a Symbol value to a number

console.log(+{}); // 객체, NaN
console.log(+[]); // 배열, 0 (빈 배열)
console.log(+[999]); // 배열, 999 (0번 인덱스 값을 숫자로 변환)
console.log(+['a']); // 배열, NaN (0번 인덱스 값을 숫자로 변환)
console.log(+[999, 888]); // 배열, NaN (여러 인덱스가 있어 무엇을 숫자로 변환할지 모름)

console.log(+function(){});     // NaN

/* 기억할 것
* 1) 빈문자열, 빈배열, null, false -> 0
* 2) true -> 1
* 3) 객체, undefined, 함수 -> NaN
* */



