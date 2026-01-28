/* 01_class-declaration */

/* 클래스 선언 */
// JS에서 클래스는 사실 함수의 한 종류이며,
// 프로토타입 기반 상속을 더 보기 좋게 만든 구문

class Student{

  // 생성자
  // - 인스턴스를 생성하고 특정 기능을 수행하는 특별한 메서드
  // - JS 클래스의 생성자는 한 개만 존재할 수 있다.
  constructor(name) {
    // this === 생성되는 객체
    this.name = name;
    // 생성되는 Student 객체의 name 프로퍼티에 전달 받은 name을 대입

    this.group = 1;
  }


  // 프로토타입 메서드
  // - 클래스 내부에 정의한 메서드는
  //  자동으로 해당 클래스의 프로토타입의 프로퍼티로 추가된다.
  introduce(){
    console.log(`안녕하세요 저는 ${this.group}반 학생 ${this.name} 입니다.`);
  }
}


const student = new Student("홍길동");
student.introduce();

console.log(typeof student); // 생성된 객체 ->  object
console.log(typeof Student); // class -> function === 생성자 함수
console.log(Student === Student.prototype.constructor);
console.log(Object.getOwnPropertyNames(Student.prototype));


// 클래스 문법과 유사하게 기능하는 것처럼 보이는 생성자 함수도 사용 가능
function Teacher(name){
  this.group = 1;
  this.name = name;
}

// 생성자 함수에 프로토타입 메서드 추가하기
Teacher.prototype.introduce = function(){
  console.log(`안녕하세요 저는 ${this.group}반 교사 ${this.name} 입니다.`);
}

const teacher = new Teacher("유관순");
teacher.introduce();


/* 클래스와 생성자 함수의 차이점 */
// 1. 클래스는 new 키워드 없이 사용하면 오류 발생
//    생성자 함수는 new 키워드가 없어도 사용 가능(단순 함수)
// Student();
// Class constructor Student cannot be invoked without 'new'

Teacher(); // 오류 발생 X


// 2. 클래스에 정의된 메서드는 열거 불가
for(let method in student){
  console.log(method);
}
console.log("------------------");
for(let method in teacher){
  console.log(method);
}


