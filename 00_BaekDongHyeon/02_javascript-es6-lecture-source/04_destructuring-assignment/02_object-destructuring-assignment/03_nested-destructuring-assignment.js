/* 03_nested-destructuring-assignment */

// 중첩 구조 분해 할당
const product = {
  size: {
    width: 10,
    height: 30
  },
  items: ['doll', 'robot']
};


const {
  size: {width, height},
  items: [item1, item2]
} = product;

console.log(width); // 10
console.log(height); // 30
console.log(item1); // doll
console.log(item2); // robot
