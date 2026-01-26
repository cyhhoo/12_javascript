// 1. 일반 함수의 this
// 생성자 함수가 아닌 일반 함수에서
// this를 사용할 필요가 없기 때문에
// strict mode 에서는 일반 함수 내에서 this를 undefined로 바인딩 시킴

(function(){
    "use strict"

    // non-strict -> global 객체
    // strict -> undefined
    console.log(this);
})();

// 2. argument 객체
// 매개 변수에 전달된 인수를 재할당 하여 변경하여도
// argument 객체에 반영되지 않는다.

(function(x){
    // "use strict"
    x = 200;
    console.log(x);
    console.log(arguments);
})(10);

