/* 배열 고차 함수 */
// 고차 함수란? 콜백 함수를 매개 변수로 전달 받는 함수
//              + 함수를 반환 하는 함수

// Array.prototype.sort : 정렬
let numbers = [];

for (let i = 0; i < 10 ; i++) {
    numbers[i] = Math.floor(Math.random() * 100 + 1);
}

console.log("정렬 전 : ", numbers);

numbers.sort();
console.log("numbers.sort() 후 : ", numbers);

// sort() 기본 정렬은 "문자 오름 차순 정렬"
// 숫자 정렬이나 다른 정렬이 필요하면 콜백 함수를 sort()에 전달 해야한다.

numbers.sort((a,b)=> a-b); // 오름 차순
console.log("numbers.sort((a,b)=> a-b) 후 : ", numbers);

numbers.sort((a,b)=> b-a); // 내림 차순
console.log("numbers.sort((a,b)=> b-a) 후 : ", numbers);

// Array.prototype.forEach : for문을 대체하는 고차 함수
numbers = [1,2,3,4,5];
numbers.forEach(item => console.log(item));

console.log("forEach(item, index, array");
numbers.forEach((item,index,array)=>{
    console.log(`[${index}] : ${item}, ${array}`);
})

/* 중요 : vue, react 에서 component 만들때 정말 많이 사용 */
// Array.prototype.map() :
// - 배열 요소를 전체를 대상으로 callback 함수 호출 후
//  반환되는 값들로만 이루어진 새 배열을 반환하는 고차함수.

const original1 = [true,1,'text'];

const types = original1.map(item=>typeof item);
console.log(types);

const original2 = ['apple', 'banana', 'cat', 'dog', 'egg'];

// 각 요소의 글자 수만 반횐된 배열 생성
const lengths = original2.map(item => item.length);
console.log(lengths)

/* 중요 */
// Array.prototype.filter()
// Array.prototype.map() :
// - 배열 요소를 전체를 대상으로 callback 함수 호출 후
//  반환되는 값이 true인 요소로만 이루어진 새 배열을 반환하는 고차함수.

numbers = [1,2,3,4,5,6,7,8,9];

// 홀수 요소만으로이루어진 새 배열 생성
const odds = numbers.filter(item => item%2 /*=== 1*/)  // item%2가 1이면 암묵적 형변환으로 인해 1이 truthy한 값으로 쳐서 true도 판정
console.log("odds :", odds);

const evens = numbers.filter(item => item%2 === 0)
console.log("evens :", evens);

// Array.prototype.reduce
// - 배열을 순회하면 각 요소에 대하여
//   이전의 콜백 함수 실행 반환값을 전달하여
//  콜백 함수를 실행하고, 그 결과를 반환

numbers.reduce((previousValue, currentValue, currentIndex, array) =>{
    console.log(`[${currentIndex}] 이전값: ${previousValue}, 현재값: ${currentValue}`);
    return  currentValue;
});

/* reduce를 이용한 합산 구하기 */
const sum = numbers.reduce((prev,curr)=> prev+curr);
console.log("sum :", sum);

/* reduce를 이용한 최대값 구하기 */
const max = numbers.reduce((prev,curr)=> prev > curr ? prev : curr)
console.log("max",max);

// Array.prototype.some
// - 배열 내 일부 요소가 콜백 함수 테스트를 통과하는지 확인하여
//   true 또는 false 반환
const testArr = [1,5,3,2,4];

// 배열 내 요소 중 10보다 큰 요소가 하나라도 있는가?
let result = testArr.some(item=> item>10);
console.log("result :",result);
// 배열 내 요소 중 3보다 큰 요소가 하나라도 있는가?

result = testArr.some(item=> item>3);
console.log("result :", result);

// Array.prototype.every
// - 배열 내 모든 요소가 콜백 함수 테스트를 통과하는지 확인하여
//   true 또는 false 반환
result = testArr.every(item => item > 2);
console.log("result : ", result);

result = testArr.every(item => item > 0);
console.log("result : ", result);

// Array.prototype.find :
// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여
// 그 결과가 참인 첫번째요소를 반환, 참인 요소가 존재하지 않는다면 undefined를 반환

// Array.prototype.findIndex :
// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여
// 그 결과가 참인첫번째 요소의 인덱스를 반환참인 요소가 존재하지 않는다면 -1을 반환
// 그 결과가 참인 첫 번째 요소의 인덱스를 반환한다. 참인 요소가 존재하지 않는다면 -1 을 반환한다.

const students = [
    { name : '유관순', score : 90 },
    { name : '홍길동', score : 80 },
    { name : '장보고', score : 70 }
];
console.log("이름이 홍길동인 학생 찾기 : ", students.find(item => item.name === '홍길동')); // { name: '홍길동', score: 80 }
console.log("이름이 이순신인 학생 찾기 : ", students.find(item => item.name === '이순신')); // undefined

console.log("이름이 홍길동인 인덱스 찾기 : ", students.findIndex(item => item.name === '홍길동')); // 1
console.log("이름이 이순신인 학생 찾기 : ", students.findIndex(item => item.name === '이순신')); // -1

// 점수가 80점 이상인 학생 모두 찾기
result = students.filter(student=>student.score >=80)
console.log("점수가 80점 이상인 학생 모두 찾기", result)

// 점수가 80점 이상인 학생의 이름만 찾기
resultname = result.map((student)=>student.name);
console.log("점수가 80점 이상인 학생 이름 찾기",resultname);