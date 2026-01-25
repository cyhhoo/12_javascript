/* 순수 함수와 비순수 함수 */
/*
* 순수 함수 : 외부 상태에 의존하지 않고 외부 상태를 변경하지 않는 함수
*
* 비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수
* (비순수는 지양)
*
* */
var cnt = 0;
function increase(n){return ++n;}
console.log(increase(cnt), cnt);

function decrease(){return --cnt;}
console.log(decrease(), cnt);
