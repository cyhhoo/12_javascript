/* 생성자 함수 */
/*
*  - {} 객체 리터럴을 이용한 객체 생성 방식은
*   간편하고 직관적이지만 단 하나의 객체만 생성할 수 있다.
*
*  - 생성자 함수는
*   같은 프로퍼티를 갖는 객체를 여러 개 생성할 때 효율적이다.
* */

const student1 = {
  name : "강성훈",
  age : 31,
  getInfo(){
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  }
}

const student2 = {
  name : "정진호",
  age : 27,
  getInfo(){
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  }
}

console.log(student1.getInfo());
console.log(student2.getInfo());


/* Student 생성자 함수 선언, 정의 */
// (중요) 생성자 함수의 함수명은 "대문자"로 시작
function Student(name, age){

  // 생성자 함수 내 this 참조변수 == 생성되는 객체
  this.name = name;
  this.age = age;
  this.getInfo = function(){
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  }
}

/* 생성자 함수를 이용해 새 객체(인스턴스) 생성 */
const student3 = new Student('정병진', 30);
const student4 = new Student('박찬진', 27);

console.log(student3.getInfo());
console.log(student4.getInfo());
