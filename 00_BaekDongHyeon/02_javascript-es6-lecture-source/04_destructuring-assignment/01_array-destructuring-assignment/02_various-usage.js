/* 다양한 사용법 */

// 1. 객체 프로퍼티에서 사용하기
const user = {};
[user.firstName, user.lastName] = "진호 정".split(" ");
console.log(user);

// 2. 변수 값 교환
let student = '학생';
let teacher = '선생님';

// 방법 1) 임시 변수를 이용한 swap
let tmp = student;
student = teacher;
teacher = tmp;
console.log("student : ", student); // 선생님
console.log("teacher : ", teacher); // 학생

// 방법 2) 구조 분해 할당 이용
[teacher, student] = [student, teacher];
console.log("student : ", student); // 학생
console.log("teacher : ", teacher); // 선생님


// 3. rest parameter와 함께 사용하기
const [sign1, sign2, ...rest]
  = ['양자리', '염소자리', '사자자리', '처녀자리', '게자리', '물병자리'];

console.log(sign1);
console.log(sign2);
console.log(rest);


/* 중요 */
// 4. 기본 값 설정하고 사용하기
const [firstName = "아무개", lastName = "김"] = ["병진"];
console.log(firstName);
console.log(lastName);
