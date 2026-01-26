// length property는 배열 요소의 개수를 나타내는 0 이상의 정수를 가짐

console.log("1. 빈 배열의 length :", [].length); // 0

const arr = [1,2,3,4,5];
console.log("2. arr의 length :", arr.length);

// length property 값은 배열 요소가 추가/제거 될 때 마다 자동으로 갱신 됨.
arr.push(6); // 배열 마지막 요소 추가
console.log("3. push 후의 배열 :", arr);
console.log("length :", arr.length);

arr.pop(); // 배열 마지막 요소 제거
console.log("4. pop 후의 배열 :", arr);
console.log("length :", arr.length);

// length property에 임의의 값을 명시적으로 할당할 수 있다.
// -> 배열 길이를 초과한 요소들이 제거됨
// -> 배열 길이가 기존 요소보다 많아지면 empty(빈 슬롯)으로 채움
arr.length = 3;
console.log('5. length를 3으로 설정:', arr); // [1,2,3]

arr.length = 10;
console.log('6. length를 10으로 설정:', arr); // [1,2,3]

// JS는 배열의 요소가 연속적으로 위치하지 않고
// 일부가 비어있는 '희소 배열'을 허용한다.
const sparse = [,2,,4];
console.log('7. 희소 배열 :', sparse);
console.log('8. 희소 배열의 내부 구조 :', Object.getOwnPropertyDescriptors(sparse));

/* for in vs for of */

/* for in >> 객체 내 key 값 순회 (length 제외)*/
console.log("9. for in ");
for(let key in arr){
    console.log(key, arr[key]);
}

/* for of >> length 만큼 값 (value) 순회 */
console.log("10. for of ");
for(let item of arr){
    console.log(item);
    // console.log(arr[item]); // key 가 아니라 value를 가져와서 , 0,1,2가 아니라 ,1,2,3이 item에 담김
}