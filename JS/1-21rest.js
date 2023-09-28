const numbers = [34, 52, 10, 1, 20];
console.log(sum(...numbers, 56, 34));

/**
 * This is a function that sums the numbers provided as parameters.
 * @param  {...number} numbers is a rest parameters.
 * @returns
 */
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number);
}
