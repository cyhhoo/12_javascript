/* 비교 연산자
* - 동등 비교 연산자 (==, !=) :
*   암묵적 타입 변환을 통해 타입을 일치 시킨 후 값을 비교
*
* - 동일(일치) 비교 연산자(===, !==) :
*   타입부터 비교 후 같은 경우 값을 비교
* */

// number  1, string  '1', boolean  true  비교
console.log(`1 == '1' : ${1 == '1'}`);  // true
console.log(`1 === '1' : ${1 === '1'}`);  // 타입이 다름 -> false

console.log(`1 == true : ${1 == true}`); // true
console.log(`1 === true : ${1 === true}`); // 타입이 다름 -> false
console.log(`1 === Number(true) : ${1 === Number(true)}`); // true


// number 0, string '0', boolean false, 빈문자열 '' 비교
console.log(`0 == '0' : ${ 0 == '0'}`);
console.log(`0 === '0' : ${ 0 === '0'}`);

console.log(`0 == false : ${ 0 == false}`);
console.log(`0 === false : ${ 0 === false}`);

console.log(`0 == '' : ${ 0 == ''}`);
console.log(`0 === '' : ${ 0 === ''}`);

// null과 undefined 비교
console.log(`null == undefined : ${null == undefined}`); // true
console.log(`null === undefined : ${null === undefined}`); // false

// NaN 비교
console.log(`NaN == NaN : ${NaN == NaN}`); // false(비교 불가)
console.log(`NaN === NaN : ${NaN === NaN}`); // false(비교 불가)
console.log(`isNaN(NaN) : ${isNaN(NaN)}`); // true

/* 문자열 비교 */
// Java -> A.equals(B)
// JS -> == 또는 ===
console.log('hello' == 'hello'); // true
console.log('hello' === 'hello'); // true

// 문자열 크기 비교
// -> 같은 인덱스 문자를 하나씩 꺼내와 유니코드로 변환 후 대소 비교
// -> 꺼내온 문자가 같으면 다음 문자를 꺼내와 비교
console.log('apple' > 'banana'); // false
console.log('hello' > 'hell'); // true


