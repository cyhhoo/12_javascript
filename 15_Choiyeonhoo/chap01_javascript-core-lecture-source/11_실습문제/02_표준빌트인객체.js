// 2-1. 년, 월, 일을 전달하면 해당 날짜의 요일을
// '월', '화', '수', '목', '금', '토', '일'
// 문자열로 반환해주는 함수 getWeekDay를 만든다.

console.log(getWeekDay(2022, 6, 21));       // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));      // 2022년 12월 12일

function getWeekDay(year, month, date) {
    // 코드 작성
    const result = new Date();
    result.setFullYear(year);
    result.setMonth(month-1);
    result.setDate(date);

    const day = result.getDay();
    switch (day){
        case 0: {
            return '일' ;
        }
        case 1: {
            return '월' ;
        }
        case 2: {
            return '화' ;
        }
        case 3: {
            return '수' ;
        }
        case 4: {
            return '목' ;
        }
        case 5: {
            return '금' ;
        }
        case 6: {
            return '토' ;
        }
    }
}

// 2-2. 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와
// 오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다.

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    // 코드 작성
    // 지금 시간
    let now = new Date();
    let today = new Date();
    today.setFullYear(now.getFullYear());
    today.setMonth(now.getMonth());
    today.setDate(now.getDate());
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);

    let nowm = now.getTime() / 1000;
    let todaym = today.getTime() / 1000;

    return `${nowm - todaym}초나 흘렀습니다. 시간을 소중히 씁시다 ^^`;

}

function getSecondsToTomorrow() {
    // 코드 작성
    // 지금 시간
    let now = new Date();
    let tommorow = new Date();
    tommorow.setFullYear(now.getFullYear());
    tommorow.setMonth(now.getMonth());
    tommorow.setDate(now.getDate());
    tommorow.setHours(24);
    tommorow.setMinutes(0);
    tommorow.setSeconds(0);

    let nowm = now.getTime() / 1000;
    let tommorowm = tommorow.getTime() / 1000;

    return `${tommorowm - nowm}초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^`;

}

// 2-3. arr 배열에는 숫자 뒤에 단위 문자가 붙거나 숫자 앞에 특수 문자가 1개 붙는 형태의 문자열들이 담겨있다.
// 해당 값들의 앞 또는 뒤에 위치한 문자를 제거하고 숫자로 형변환한 값들이 담긴 새로운 배열을 반환하는 removeChar 함수를 작성한다.

let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];
console.log(removeChar(arr));

function removeChar(arr){
    // 코드 작성
    // 첫번째 글자가 특수문자라면 제거한 배열 생성
    let result1 = arr.map(item=>item.replace(/^[^0-9a-zA-Z-]/,""));

    // console.log(result1);
    // 뒤에 단위 문자가 있으면 제거한 배열 생성
    let result2 = result1.map(item=>item.replace(/[a-zA-Z]+$/,""));

    // console.log(result2);
    return result2;
}

// 2-4. 앞으로 읽어도 거꾸로 읽어도 똑같은 문자인지 판별하는 palindrom 함수를 만든다.

const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '우별림'];

list.forEach(item => console.log(palindrom(item)));

function palindrom(str) {
    // 코드 작성
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}