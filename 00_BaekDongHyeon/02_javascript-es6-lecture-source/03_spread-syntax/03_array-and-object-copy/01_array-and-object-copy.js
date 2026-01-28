/* 01_array-and-object-copy */
// 전개 문법을 이용한 배열/객체 깊은 복사

// 얕은 복사 테스트
const arr = [10, 20, 30];
const arr2 = arr;
arr2[2] = 100;
console.log(arr);  // [10, 20, 100]
console.log(arr2); // [10, 20, 100]

// 배열 깊은 복사
const copyArr = [...arr];
// arr의 값이 풀어진 후 다시 묶인 새 배열
copyArr[0] = 99;
console.log(arr);     // [10, 20, 100]
console.log(copyArr); // [99, 20, 100]



/* 객체 깊은 복사 */
const obj = {
  name : "정현호",
  age : "27"
}

const copyObj1 = obj; // 얕은 복사
const copyObj2 = {...obj}; // 깊은 복사

// 타입 일치 + 저장된 값(참조 주소) 일치 여부
console.log(obj === copyObj1); // true

console.log(obj === copyObj2); // false
console.log(copyObj2);



const numbers = [10, 20, 30];

function sum(num1, num2, num3){
  return num1 + num2 + num3;
}

console.log(sum(...numbers));



