// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // item : 현재 요소의 값, idx : 현재 반복 카운트, arr : 전체 배열의 값
  //  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes
// 배열의 특정 요소가 있는지 확인하는 그런 메서드 --> true or false
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 값이 존재하지 않을 경우 --> -1
let arr3 = [2, 2, 2]; // 같을 경우 가장 앞에 있는 결과값 출력
let index = arr3.indexOf(2);
// console.log(index);

let objectArr = [{ name: "이영희" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "이영희" })); // 객체값 찾지 못함
console.log(objectArr.findIndex((item) => item.name === "이영희"));

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
// 다른 방법
const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);

// console.log(findedIndex);
// console.log(findedIndex2);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "이영희" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이영희");
console.log(finded);
