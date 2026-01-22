/* 논리 타입으로 암묵적 변환 */
// - JS 엔진은 boolean 타입이 아닌 앖을
// Truthy값(참으로 평가되는 값) 또는 Falsy(거짓으로 평가되는 값)을 구분한다.

// if (조건식) {조건식이 true 일 때 수행할 코드;}

if(undefined){  //undefined -> Falsy
    console.log("if(undefined)");
}

// null -> Falsy -> false
if(null){
    console.log("if(null)");
}

// 0 -> Falsy ->
if(0){
    console.log("if(0)");
}

// 1 -> Truthy -> true
if(1){
    console.log("if(1)");
}

// NaN -> Falsy -> false
if(NaN){
    console.log("if(NaN)");
}

// '' -> Falsy -> false
if(''){
    console.log("if('')");
}

// 'apple' -> Truthy -> true
if('apple'){
    console.log("if('apple')");
}

// [] -> Truthy -> true
if([]){
    console.log("if([])");
}


// {} -> Truthy -> true
if({}){
    console.log("if({})");
}

// Symbol() -> Truthy -> true
if(Symbol()){
    console.log("if(Symbol())");
}

/* 기억할 것
* 1) Falsy(false) : undefined, null, 0, NaN ''
* 2) Truthy(true) : 나머지 전부
* */



