/* 01_static-method */
// 정적 메서드
// - 특정 클래스(인스턴스)만 필요한 기능이 아닌
//  '전체'에 필요한 기능을 만들 때 사용하는 메서드

class Student {

  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  // 클래스 선언부 안에 위치하고 static키우더를 붙이면 정적 메서드가 선언된다.
  static compare(studentA, studentB){
    // 학생 인스턴스의 키를 비교해주는 메서드로 정의
    return studentA.height - studentB.height;
  }
}


let students = [
  new Student('유관순', 165.5),
  new Student('홍길동', 180.5),
  new Student('선덕여왕', 159.5),
];

// static 메서드인 compare 메서드를 이용해서 정렬
students.sort(Student.compare);
console.log(students);


/* Student class(function)의 프로퍼티로 메서드 추가
* == static 메서드
* */
Student.testMethod = () => {
  console.log("해당 메서드는 Student에 등록된 static 메서드 입니다.");
  console.log("static 메서드는 객체에 프로퍼티로 함수를 할당하는 것과 같다");
};

// 객체 메서드(=== 프로토 타입 메서드)는
// new 클래스명()을 통해 생성된 객체를 이용해서만 호출 가능하지만

// static 메서드는
// 객체 생성 없이도 class명.메서드명()으로 호출 가능
Student.testMethod();




// 조건에 맞는 객체를 만들어야 할 때 생성자도 사용 가능하지만
// 클래스에 정적 메서드를 만들어 팩토리 메서드를 구현할 수 있다.
class User{

  constructor(id, registDate) {
    this.id = id;
    this.registDate = registDate;
  }

  // 팩토리 메서드 패턴
  static registUser(id){
    return new this(id, new Date());
  }
}

let user01 = User.registUser('user01');
console.log(user01);



