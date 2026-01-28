/* 04_function-parameter */
/* 함수 매개 변수 : 함수의 매개 변수가 많거나 기본값이 필요한 경우 사용 */

function displayProduct(
    producer = "아무개",
    width = 0,
    height = 0,
    items = []
){
  console.log(producer);
  console.log(width);
  console.log(height);
  console.log(items);
}


// 구조 분해 할당 적용 X
// -> producer랑 items만 전달하고 싶었으나
//   인자의 순서를 유지해야만 알맞은 코드가 수행되기 때문에
//   중간 width/height에 undefined를 작성할 수 밖에 없음
displayProduct(
    '신사임당',
    undefined,
    undefined,
    ["Coffee", "Donut"]);


// [구조 분해 할당 이용]
// let {producer, width, height, items} = temp; // 객체 분해 할당
// console.log(producer); // 할당된 변수 사용

function displayProduct2(

    { // <- 객체 구조 분해 할당을 위한 기호 (객체 리터럴 X)
      producer = "아무개",
      width = 0,
      height = 0,
      items = []
    }

){
  console.log(producer);
  console.log(width);
  console.log(height);
  console.log(items);
}



const temp = {
  producer : "홍길동",
  items : ["doll", "robot"]
}
displayProduct2(temp);
