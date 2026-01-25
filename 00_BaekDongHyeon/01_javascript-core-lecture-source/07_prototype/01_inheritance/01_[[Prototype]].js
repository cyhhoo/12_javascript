/* [[Prototype]] */
const user = {
  activate : false,
  login(){
    console.log("로그인 되었습니다.");
  }
}

const student = {
  passion: true
}

/* __proto__
* - 객체의 부모(프로토 타입)를 가리키는 프로퍼티
* - 모든 객체가 가지고 있음
* */

// student의 부모(프로토 타입)를 user로 지정
// -> student가 user를 상속받았다고 표현
// -> student가 user로 부터 상속 받은 프로퍼티
//    == 상속 프로퍼티 (라고 부름)
student.__proto__ = user;

console.log(`student.passion: ${student.passion}`);
console.log(`student.activate: ${student.activate}`);
student.login();



/* 프로토타입 체인 */
const greedyStudent = {
  class : 11,
  __proto__ : student //  student를 부모로 지정
};

console.log(greedyStudent.class); // greedyStudent
console.log(greedyStudent.passion); // student
console.log(greedyStudent.activate); // user
greedyStudent.login(); // user
/* 상속 계층 구조 구현도 가능 */

/*
*          user
*            ^
*            |
*         student
*            ^
*            |
*       greedyStudent
* */