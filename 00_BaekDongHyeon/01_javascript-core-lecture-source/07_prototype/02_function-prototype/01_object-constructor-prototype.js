const user = {
  activate : true,
  login : function(){
    console.log('로그인 되었습니다.');
  }
};

/* 생성자 함수 */
function Student(name) {
  this.name = name;
}

// 여기서의 prototype은
// 앞에서 배운 프로토타입(__proto__)와 이름만 같을 뿐
// 실제로는 일반 프로퍼티이다.

// 생성자 함수가 생성할 인스턴스(Student)의 부모(user)를 지정
Student.prototype = user;

const student1 = new Student('홍길동');

for(let key in student1){
  let isOwn = student1.hasOwnProperty(key);

  if(isOwn) {
    console.log(`객체 자신의 property : ${key}`);
  } else {
    console.log(`상속 property : ${key}`);
  }
}


const student2 = new Student('유관순');
console.log(student2.name);
console.log(student2.activate);
student2.login();
