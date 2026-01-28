/* 01_arrow-function-feature */

/* 화살표 함수는
* 기존 함수보다 표현식이 간략화된 것 뿐만 아니라
* 내부 동작 또한 간략화 되었다.
* */

// 1. 화살표 함수는 this를 가지지 않는다.
const theater = {
  store : '강남점',
  titles : ['만약에 우리', '아바타3', '주토피아2'],
  showMovieList(){
    // 일반 함수를 이용한 forEach
    this.titles.forEach(function(title){
      // 일반 함수 내에서 this == 함수 객체 자체를 나타냄
      console.log(this.store,  title); // this.store == undefined
    });

    // 화살표 함수를 이용한 forEach
    this.titles.forEach((title) => {
      // 화살표 함수는 this를 ()=>{} 표현식으로 만든 함수 객체와
      // 연결하지 않는다.
      // -> 화살표 함수 밖에 있는 theater 객체가 this와 매핑된다.
      console.log(this.store,  title); //  this.store == 강남점
    });
  }
};

theater.showMovieList();

const testFn = () => {
  console.log(this); // this == global
}

testFn();


// 2. 화살표 함수는 new 와 함께 호출할 수 없다.
// const arrowFunc = () => {}; // 화살표 함수는 생성자 함수로 인식 X
// const arrowFunc = function() {};
// console.log(new arrowFunc().hasOwnProperty("prototype"));



// 3. 화살표함수는 super를 가지지 않는다.
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  move(lostWeight) {
    if(this.weight > lostWeight) {
      this.weight -= lostWeight;
      console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
    }
  }
}

class Tiger extends Animal {
  move(lostWeight) {
    // 일반 함수
    // setTimeout(function() {
    //     super.move(lostWeight)
    // }, 3000);
    // 화살표 함수
    setTimeout(() => super.move(lostWeight), 3000);
  }
}

let tiger = new Tiger('백두산 호랭이', 90);
tiger.move(1);



// 4.화살표 함수는 arguments를 가지지 않는다.
// arguments키워드는 자바스크립트에서 매개 변수가 하나 이상 선언되어 있는데
// 해당 값 이상의 값을 넘겨받으면 모든 값은 arguments에서 관리한다.
(function() {
  console.log(arguments); // 1,2
  // const arrowFunc = function(){
  //     console.log("일반함수 : ", arguments);
  // };
  // 화살표 함수는 본인의 arguments 3,4가 아닌 상위 스코프의 arguments 1,2를 참조한다.
  const arrowFunc = () => console.log(arguments);
  arrowFunc(3, 4)

})(1, 2);


// 화살표 함수는 콜백함수로 자주 사용되며, 자신의 this/arguments를 갖지 않고
// 상위 스코프를 그대로 참조하도록 설계되어 ES5콜백 함수에서 자주 발생하던
// this바인딩 문제(전역 객체 or undefined)를 간편하게 해결할 수 있다.