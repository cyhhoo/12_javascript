/* 02_static-property */
// - JS 스펙에 추가된지 얼마 되지 않은 문법
// - 데이터를 클래스 수준에 저장하고 싶을 때 사용

// Animal 클래스 선언
class Animal {

  static planet = "지구";

  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat(foodWeight){
    this.weight += foodWeight;
    console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
  }

  move(lostWeight){
    if(this.weight > lostWeight) {
      this.weight -= lostWeight;
      console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량 되어 ${this.weight}kg이 되었습니다.`);
    }
  }
}

/* non-static 프로퍼티 호출 */
// 객체 생성 필수
const animal1 = new Animal("토끼", 5);
console.log(animal1.name);
console.log(animal1.weight);

/* static 프로퍼티 호출 */
// 객체 생성 없이 class명.프로퍼티명
console.log(Animal.planet);


/* static 프로퍼티 추가 */
const obj = {};
obj.name = "test"; // 객체에 프로퍼티 추가

// 클래스 == 함수 == 객체
Animal.staticProperty
    = "static 프로퍼티 추가는 클래스 자체에 프로퍼티를 추가하는 것과 같다";

console.log(Animal.staticProperty);




// Animal을 상속 받는 Human클래스
class Human extends Animal {
  develop(language){
    console.log(`${this.name}(은)는 ${language}로 개발을 합니다. 정말 즐겁습니다~~~ :-)`);
  }
}

// Animal의 정적 프로퍼티를 Human이 상속받아 사용할 수 있다.
console.log(Human.planet);
console.log(Human.staticProperty);
console.log(new Human().develop('javascript'));