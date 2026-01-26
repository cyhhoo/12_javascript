/* flag의 종류
* i(ignore case) : 대소문자 구별 않고 패턴 검색
* g(global) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
* flag는 옵션이므로 선택적으로 사용하며, 순서와 상관 없이 하나 이상의 플래그를 동시 설정 가능
* */

let target = 'Java JavaScript';

console.log(target.match(/VA/)); // null
console.log(target.match(/VA/i)); // index : 2
console.log(target.match(/VA/ig)); // ['va', 'va']
console.log("=".repeat(50));
/*
* pattern
* 패턴은 특별한 의미를 가지는 메타문자 또는 기호를 표현할 수 있다.
* */

// . : 임의의 문자열
target = 'abcdefg';
console.log(target.match(/../g));   // 임의의 2자리 문자열 전역 검색

console.log(target.match(/abcd.../));

// {m, n} :최소 m번, 최대 n번 반복되는 문자열(반복 검색)
target = 'a aa aaa b bb bbb ab aab abb bbbbb';
console.log(target.match(/a{2,3}/g));  // a 최소 2번~ 최대 3번 반복
console.log(target.match(/b{2}/g)); // b 두번 반복
console.log(target.match(/b{3,}/g)); // b 3번 이상 반복

// + : 앞선 패턴이 최소 한 번 이상 반복되는 문자열(반복 검색)
// +는 {1,}과 같다.
console.log(target.match(/b+/g));

// * : 앞선 패턴이 최소 0 번 이상 반복되는 문자열(반복 검색)
// *는 {0,}과 같다.
console.log(target.match(/b*/g));

// ? : 앞선 패턴이 최대 한 번(0번 포함) 포함되는 문자열
// ?는 {0,1}과 같다.
target = 'soul seoul seul';
console.log(target.match(/se?oul/g)); // ['soul', 'seoul']

// | : or
target = 'aa bb cc dd 123 456 @';
console.log(target.match(/a|b/g));
console.log(target.match(/a+|b+/g));

// [] 내의 문자는 or로 동작
console.log(target.match(/[abc]+/g));
// 범위를 지정하려면 - 사용
// [a-z] -> 한 글자가 영어 소문자 범위의 글자인 경우
console.log(target.match(/[a-z]+/g));
// 대소문자 범위
console.log(target.match(/[A-Za-z]+/g));
console.log(target.match(/[A-Za-z0-9]+/g));
// 숫자 범위
console.log(target.match(/[0-9]+/g));

// \d: 숫자
// \D: 숫자가 아닌 문자
console.log(target.match(/\d+/g));
console.log(target.match(/\D+/g));

// \w : 알파벳, 숫자, 언더스코어
// \W : \w의 반대
console.log(target.match(/\w+/g));
console.log(target.match(/\W+/g));

console.log('start----------------------------');

// [] 내의 ^ : not
console.log(target.match(/[^0-9]+/g)); // 숫자 아닌거 찾기
console.log(target.match(/[^a-z]+/g)); // 영어 소문자 아닌거 찾기
console.log('----------------------------');

// [] 밖의 ^ : 시작 위치 검색
// $ : 마지막 위치 검색
target = 'https://www.google.com';
console.log(/^https/.test(target)); // https로 시작하는 문자가 맞는지 확인
console.log(/com$/.test(target));  // com으로 끝나는 문자가 맞는지 확인