// - Function, String, Number를 비롯한 내장 객체들 역시
// 프로토타입 메서드를 저장한다.
// - 모든 내장 프로토타입 상속 계층 꼭대기에는
//   Object.prototype이 있어야 한다고 규정한다.

const num = new Number(100);

// num은 Number.prototype을 상속받았는가?
console.log( num.__proto__ === Number.prototype ); // true

// num은 Object.prototype을 상속받았는가?
console.log( num.__proto__.__proto__ === Object.prototype ); // true

// 체인 맨 위엔 null이 있다.
console.log( num.__proto__.__proto__.__proto__ ); // null

// Number.prototype의 toString 사용
console.log(num);
console.log(num.toString());
