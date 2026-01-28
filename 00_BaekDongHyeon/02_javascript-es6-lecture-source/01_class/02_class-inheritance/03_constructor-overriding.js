/* 03_constructor-overriding */

// 생성자 오버라이딩
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

// 다른 클래스를 상속받고 constructor를 선언하지 않으면 비어있는 생성자가 만들어진다.
class Tiger extends Animal {
  // constructor(...args){
  //    super(...args);
  // }
}

class Deer extends Animal {
  constructor(name, weight, legLength) {
    // 상속 클래스의 생성자에서는 반드시 부모 클래스의 생성자를 호출하는 구문이 들어가야한다.
    super(name, weight); // 항상 자식 생성자 첫 번째 줄에 위치
    this.legLength = legLength;
  }
}

const deer = new Deer("꽃사슴", 50, 90);
console.log(deer);