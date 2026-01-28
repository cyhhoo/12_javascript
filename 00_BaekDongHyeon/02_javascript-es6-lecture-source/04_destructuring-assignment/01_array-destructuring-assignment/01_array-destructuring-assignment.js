/* 01_array-destructuring-assignment */

// 배열 구조 분해 할당

const nameArr = ['길동', '홍'];

// const firstName = nameArr[0];
// const lastName  = nameArr[1];

// nameArr[0] 값을 firstName
// nameArr[1] 값을 lastName 할당
const [firstName, lastName] = nameArr;
console.log("firstName : ", firstName);
console.log("lastName : ", lastName,);

// 반환 값이 배열인 split 메서드를 활용
const [firstName2, lastName2] = "순신 이".split(" ");
console.log("firstName2 : ", firstName2);
console.log("lastName2 : ", lastName2);

// 쉼표를 사용하여 필요하지 않은 배열 요소를 버릴 수 있음.
const arr = ['first', 'second', 'third'];

const [var1, , var2] = arr;
console.log(var1, var2);
