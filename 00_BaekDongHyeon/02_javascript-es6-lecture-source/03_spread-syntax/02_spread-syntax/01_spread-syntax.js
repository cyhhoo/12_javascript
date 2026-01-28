/* 01_spread-syntax */
// 스프레드 문법(전개 문법)
// - 반복 가능한(iterable) 객체(배열, 문자열, 객체)를
//   각각 개별 요소로 분리하여 목록을 만드는 문법
const arr = [10, 20, 30];

console.log(`가장 큰 값 : ${Math.max(arr)}`);// 배열 x
console.log(`가장 큰 값 : ${Math.max(arr[0], arr[1], arr[2])}`);
console.log(`가장 큰 값 : ${Math.max(...arr)}`);


const arr1 = [10,20,30];
const arr2 = [100,200,300];

// arr1, arr2 두 배열에서 가장 큰 값 찾기
console.log(`arr1, arr2 중 가장 큰 값 : ${Math.max(arr1[0],arr1[1],arr1[2], arr2[0],arr2[1],arr2[2])}`);
console.log(`arr1, arr2 중 가장 큰 값 : ${Math.max(...arr1, ...arr2)}`);

// 0, arr1의 모든 요소, arr2의 모든 요소가 합쳐진 배열 생성
const merged = [0, ...arr1, ...arr2];
console.log(merged);


// 문자열을 한 글자씩 쪼개기
const str = "JavaScript";

// 1) charAt(i)
// 2) split('')
console.log(str.split(''));
// 3) ... 전개 문법 이용
console.log(...str);
console.log([...str]);
