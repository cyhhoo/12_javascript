var id = 'p-0001';
var price = 30000;

var product = {
  id : id,
  price : price
};

/* ES6 부터 프로퍼티 값으로 변수를 사용하는 경우
* 변수명과 프로퍼티 키가 동일하면 생략할 수 있다.
* */

var product2 = {id, price};

console.log(product);
console.log(product2);