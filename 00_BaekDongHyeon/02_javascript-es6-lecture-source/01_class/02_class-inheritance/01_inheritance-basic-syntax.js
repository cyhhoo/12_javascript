/* 01_inheritance-basic-syntax */

// 상속 기본 문법
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat(foodWeight) {
    this.weight += foodWeight;
    console.log(`${this.name}(은)는 ${foodWeight}kg 의 식사를 하고 ${this.weight}kg이 되었습니다.`);
  }
}

/* Animal을 상속 받은 Human 클래스 선언 -> extends 키워드 사용 */
class Human extends Animal{
  
  // Human 클래스에 생성자 없음
  // -> 부모인 Animal의 constructor가 호출됨
  // (Human.prototype.constructor)

  /* 상속 받은 기능 X, Human만의 기능 */
  develop(language){
    console.log(`${this.name}(은)는 ${language}로 개발을 합니다. 정말 즐겁습니다~~:)`);
  }
}

const human = new Human("정진호", 55);
human.eat(1)
human.develop('javascript');



