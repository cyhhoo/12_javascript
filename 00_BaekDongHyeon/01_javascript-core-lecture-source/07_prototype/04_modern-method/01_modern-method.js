// 프로토타입 접근 시 사용하는 모던 메서드

const user = {
  activate: true
};

// Object.create(proto) : [[Prototype]]이 proto를 참조하는 빈 객체 생성
const student = Object.create(user);
console.log(student.activate);

// Object.getPrototypeOf(obj) – obj의 [[Prototype]]을 반환
// -> student의 부모(프로토타입)가 user가 맞는지 확인
console.log(Object.getPrototypeOf(student) === user); // true

// Object.setPrototypeOf(obj, proto)
//  – obj의 [[Prototype]]이 proto가 되도록 설정
Object.setPrototypeOf(student, {}); // student의 프로토타입을 {}으로 변경
console.log(Object.getPrototypeOf(student)); // {}
console.log(Object.getPrototypeOf(student) === user); // false


// __proto__ 를 getter, setter로 직접 사용하면
// 키가 "__proto__"일 때 에러가 발생 하는
// 의도하지 않은 결과가 나올 수 있으므로 메서드 사용을 권장함.
const obj = Object.create(user); // obj의 부모(프로토타입)를 user로 설정

let key = "__proto__"; // 단순 문자열
console.log(obj[key]); // { activate: true }  == user

obj[key] = {test : "새로운 객체로 덮어쓰기"};
console.log(obj[key]);
console.log(obj.__proto__);
