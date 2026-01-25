/* in 연산자 : 객체 내 프로퍼티 존재 여부를 확인하는 연산자 */
var student = {
  name : "유관순",
  age : 16,
  test : undefined
}

// student.name에 값이 대입되어 있는지 확인
console.log(student.name === undefined); // false
console.log(student.age === undefined); // false

// student.test는 프로퍼티가 존재하지만 값이 undefined로
// 프로퍼티는 있지만 대입된 값이 없는 상태 (모호함)
console.log(student.test === undefined); // true


// student 객체 내부에 key 값이 "name"인 프로퍼티가 있는지 확인
console.log("name" in student); // true
console.log("age"  in student); // true
console.log("test" in student); // true
console.log("test2" in student); // false



