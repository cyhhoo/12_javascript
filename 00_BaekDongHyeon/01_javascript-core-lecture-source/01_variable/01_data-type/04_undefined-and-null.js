/* undefined
* - 변수에 값이 저장되지 않아서 타입이 결정되지 않은 상태
*  == 변수에 값 대입이 안되어있음!
*
* - 의도적으로 undefined를 대입하는 것은 지양한다.
* * */
var undef;
console.log(undef); // undefined

/* null
* - 참조하고 있는 객체가 없음 (주소 없음)
* - 변수에 값에 없음을 의도적으로 명시할 때 주로 사용
* */
var nullVal = null;
console.log(nullVal);
console.log(nullVal == null); // true


