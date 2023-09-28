let class1 = ["Ali", "Aysu", "Aminenur", "Gizem", "Orhun", "Osman", "Salih"];
const numbers = [49, 1, 52, 67, 33, 200, 120];

// * FOREACH
class1.forEach((value, index, array) => {
  // console.log(value);
  // console.log(index);
  // console.log(array);
});

// * MAP
const newClass = class1.map((value, index, array) => {
  return `${value} is  ${index}th value of array.`;
});
// console.log(newClass);

// * FILTER
const filterCB = (value, index, array) => {
  return value.length >= 5;
};
const newClass1 = class1.filter(filterCB);
// console.log(newClass1);
// const filteredNumbers = numbers.filter((value) => {
//   return value > 50;
// });
const filteredNumbers = numbers.filter((value) => value > 50);
// console.log(filteredNumbers);

// * EVERY
// Returns true if the given condition is satisfied by at all element.
// returns false if the given condition is not satisfied by at least one element.
const everyNumbers = numbers.every((number) => {
  return number > 2;
});
// console.log(everyNumbers);

// * SOME
// Returns true if the given condition is satisfied by at least one element,
// returns false if no element satisfies it.
const someNumbers1 = numbers.some((number) => {
  return number > 50;
});
// console.log(someNumbers1);
const someNumbers2 = numbers.some((number) => number > 200);
// console.log(someNumbers2);

// * FIND
const findNumber = numbers.find((number) => number > 50);
// console.log(findNumber);

// * FINDLAST
const findLastNumber = numbers.findLast((number) => {
  return number > 150;
});
// console.log(findLastNumber);

// * FINDINDEX
const findIndexNumber = numbers.findIndex((number) => number > 50);
// console.log(findIndexNumber);

// * FINDLASTINDEX
const findLastIndexNumber = numbers.findLastIndex((number) => {});
// console.log(findLastIndexNumber);

// * SORT
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// sinif.sort().reverse();
// console.log(sinif);

// * REDUCE
const totalNumbers = numbers.reduce((total, number) => {
  return total + number;
});
console.log(totalNumbers);
