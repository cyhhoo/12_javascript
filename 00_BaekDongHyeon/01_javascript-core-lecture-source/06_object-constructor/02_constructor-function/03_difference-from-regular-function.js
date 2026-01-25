function Student(name, age){
  this.name = name;
  this.age = age;
  this.getInfo = function(){
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  }
}

// - 일반 함수와 생성자 함수의 형식적인 차이는 없다
//   (함수명 첫 글자를 대문자로 기술해서 구별하려고 노력함)

// - 단, new 연산자와 함께 호출할 때 "생성자 함수"로 동작하며,
//   new 연산자 없이 호출하면 "일반 함수"로 동작한다.

const student1 = new Student("강감찬", 34);
console.log(student1);
console.log(student1.name)
console.log(student1.age)
console.log(student1.getInfo());

// new 없이 일반 함수로 사용
// -> return값이 없으므로 student2가 undefined가 된다.
const student2 = Student("을지문덕", 50);
console.log(student2);
//console.log(student2.name);
