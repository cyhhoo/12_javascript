console.log("배열 메서드 알아보기");
console.log("=".repeat(50));
const arr = []; // 빈 배열 생성

console.log("[배열의 생성자와 프로토타입]");

// Array === 생성자 함수
// arr.constructor === arr 배열을 만들때 사용한 생성자 함수
console.log(arr.constructor === Array); // true
// 배열의 프로토타입 객체
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

// Array.prototype.indexOf
// indexOf(요소) : 배열 시작부터 검색해서 처음 찾은 요소의 인덱스를 반환(없으면 -1)

// lastIndexOf(요소) : 배열 끝부터 검색해서 처음 찾은 요소의 인덱스를 반환(없으면 -1)
// includes(요소) : 배열에 해당 요소가 있으면 true, 없으면 false
const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];
console.log('원본 배열:', foodList);

console.log("foodList.indexOf('물회')", foodList.indexOf('물회')); // 0
console.log("foodList.indexOf('물회', 1)", foodList.indexOf('물회',1)); // 4  // 첫번째 인덱스 건너 뛰고 찾기
console.log("foodList.indexOf('햄버거')", foodList.indexOf('햄버거')); // -1

console.log("foodList.lastIndexOf('물회')", foodList.lastIndexOf('물회')); // 4
console.log("foodList.lastIndexOf('물회',1)", foodList.lastIndexOf('물회',1)); // 0 // 첫번째 인덱스 건너 뛰고 찾기
console.log("foodList.lastIndexOf('햄버거')", foodList.lastIndexOf('햄버거')); // -1

console.log("foodList.includes('물회')", foodList.includes('물회')); // true
console.log("foodList.includes('삼겹살')", foodList.includes('삼겹살')); // false

console.log("=".repeat(50));

// Array.prototype.push() : 마지막 요소로 추가
// Array.prototype.pop() : 마지막 요소를 꺼내서 제거
// Array.prototype.unshift() : 첫번째 요소로 추가
// Array.prototype.shift() : 첫번째 요소를 꺼내서 제거

const chineseFood= ['짜장면', '짬뽕', '유산슬'];
console.log('초기 chineseFood:', chineseFood);

chineseFood.push('탕수육');
chineseFood.push('깐풍기');
console.log('push 후 chineseFood:', chineseFood);

console.log("pop() 결과 :", chineseFood.pop(), chineseFood);
console.log("pop() 결과 :", chineseFood.pop(), chineseFood);
console.log("pop() 결과 :", chineseFood.pop(), chineseFood);
console.log("pop() 결과 :", chineseFood.pop(), chineseFood);
console.log("pop() 결과 :", chineseFood.pop(), chineseFood);

const chickenList = ['양념치킨', '후라이드', '파닭']
console.log("초기 chickenList :", chickenList);

chickenList.unshift("뿌링클");
chickenList.unshift("슈프림");

console.log("unshift 후 chickenList : ", chickenList);

console.log("shift 결과 : ",chickenList.shift(),chickenList);
console.log("shift 결과 : ",chickenList.shift(),chickenList);
console.log("shift 결과 : ",chickenList.shift(),chickenList);
console.log("shift 결과 : ",chickenList.shift(),chickenList);
console.log("shift 결과 : ",chickenList.shift(),chickenList);

// Array.prototype.concat() : 두 개 이상의 배열을 결합
const idol1 = ['아이브','BTS'];
const idol2 = ['엔믹스','르세라핌'];
const idol3 = ['제니','츄'];

const mix1 = idol1.concat(idol2);
console.log(mix1);

const mix2 = idol3.concat(idol1,idol2)
console.log(mix2);

const mix3 = [...idol1,...idol2,...idol3];
console.log(mix3);

// Array.prototype.slice : 배열의 요소 선택 잘라내기
// Array.prototype.splice : 배열의 index 위치의 요소 제거 및 추가
const front = ['HTML', 'CSS', 'JavaScript', 'jQuery'];
console.log('원본 배열:', front);

// slice(시작인덱스, 종료인덱스)
console.log('front.slice(1, 3):', front.slice(1, 3), '← 인덱스 1~2만 복사');
console.log('slice 후 원본:', front, '← 원본 그대로');

// splice(index, 제거수, 추가값1, 추가값2...)
console.log('front.splice(3, 1, "React"):', front.splice(3, 1, "React"), '← 제거된 요소');
console.log('splice 후 원본:', front, '← 원본 변경됨');

// Array.prototype.join : 배열을 구분자로 결합하여 문자열로 반환
const  snackList = ['사탕', '초콜렛', '껌', '과자'];
console.log('원본 배열:', snackList);
console.log('join():', snackList.join(), '← 쉼표로 연결');
console.log(`join('/'):`, snackList.join('/'), '← /로 연결');

// Array.prototype.reverse : 배열의 순서를 뒤집음
console.log('[1,2,3,4,5].reverse():', [1, 2, 3, 4, 5].reverse());
