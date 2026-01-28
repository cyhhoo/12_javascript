/* 02_object-destructuring-assignment */

/* 객체 구조 분해 할당 */
const pants = {
  productName : '배기 팬츠',
  color: '검정색',
  price: 30000
};

// const a   = pants.productName;
// const b   = pants.color;
// const c = pants.price;

// 변수명이 객체(pants)의 프로퍼티 Key와 일치하면 자동으로 분해 할당
const {productName, price, color} = pants;
console.log(productName);
console.log(price);
console.log(color);


//  {변수명:별명} 형태를 이용해 다른 변수명 설정 가능
const { productName : pn, price: pr, color : co } = pants;
console.log(pn);
console.log(pr);
console.log(co);