/* JS는 동적 타입 언어이다.
* - 데이터 타입을 사전에 선언하지 않는다.
* - 변수에 할당된 값에 의해서 타입이 결정된다.
* - 변수에 값이 재할당 될 때마다 타입이 다시 결정됨.
* */

var test;
console.log(test, typeof test); // undefined undefined

test = 1;
console.log(test, typeof test); // 1 number

test = 'javascript';
console.log(test, typeof test);

test = true;
console.log(test, typeof test);

test = null;
console.log(test, typeof test); // null object
// null은 원래 별도 타입으로 구분되어야 하지만
// JS 첫 번째 버전의 버그로 인해 null의 타입이 object로 구분되고 있음.
// -> 기존 코드의 영향을 미칠 수 있어서 버그이지만 아직 수정되지 못하고 있음.

test = Symbol();
console.log(test, typeof test);

test = {}; // JS 객체
console.log(test, typeof test);

test = []; // 배열
console.log(test, typeof test);

test = function(){}; // 함수
console.log(test, typeof test); // function은 object의 한 종류