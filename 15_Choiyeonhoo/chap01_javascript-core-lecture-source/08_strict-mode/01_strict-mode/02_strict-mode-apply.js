// strict mode 적용

// 1. 전역에 strict mode 적용
// -> var, let, const 변수 선언 키워드가 누락 되면 변수로 인식 X
// "use strict";
// x = 20;

function test(){
    // 2. 함수 레벨로 strict mode 설정
     "use strict"
    x = 10;
}
// test();

function test2(){
    x = 30;
}
test2()

console.log("x : ", x);
/*
* 전역에 엄격모드를 적용하면 스크립트 태그 단위로 적용되어 strict mode와 non strict mode의
* 혼용으로 인한 오류가 발생할 수 있음에 유의한다.
* <script>
*   'use strict';
* </script>
* <script>
*    x = 10;   // 엄격 모드 적용 x, 에러 발생 x
* </script>
* */

// 해당 문제를 해결하기 위한 방법.
// 화면 로딩이 끝난 후 수행해라.
// window.addEventListener("DOMContentLoaded", () =>{
//     "use strict"
// });

// 서드파티 라이브러리가 non strict mode 인 경우
// 즉시 실행 함수로 스크립트 전체를 감싸서
// 스코프를 구분하고, 즉시 실행 함수 선두에 strict mode를 적용한다.
(function(){
    /* strict mode 적용 */
    "use strict"

    let temp = 100;
    console.log("temp : ", temp);
})();

(function(){
    /* strict mode 미적용 서드파티 라이브러리*/
    temp = 200;
    console.log("non-strict temp : ", temp);
})();