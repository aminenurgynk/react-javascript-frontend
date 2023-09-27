// 1-) - Returns the absolute value of `x`. ---> Math.abs(x)
var value = -20;
var absoluteValue = Math.abs(value);
console.log(absoluteValue);
// 2-) Rounds `x` up to the nearest integer (ceiling). ---> Math.ceil(x)
var value = 5.3;
var ceilingValue = Math.ceil(value);
console.log(ceilingValue);
// 3-) - Rounds `x` down to the nearest integer (floor). ---> Math.floor(x)
var floorValue = Math.floor(value);
console.log(floorValue);
// 4-) Returns the largest value among a specified set of numbers. ---> Math.max(x, y, ...)
let numbers = [6, 15, -7, 0, 80, -35];
var largestValue = Math.max(numbers);
console.log(largestValue);
// 5-) Returns the smallest value among a specified set of numbers. ---> Math.min(x, y, ...)
var smallestValue = Math.min(numbers);
console.log(smallestValue);
// 6-) Returns a string representing a number rounded to a specified number of decimal places. ---> .toFixed(n)
const value1 = 3.14159;
console.log(value1.toFixed(4));
// 7-) Returns the square root of `x`. ---> Math.sqrt(x)
var sqrtValue = Math.sqrt(value);
console.log(sqrtValue);
// 8-) Returns `x` raised to the power of `y`. ---> Math.pow(x, y)
var y = 2;
var powerOfY = Math.pow(value, 2);
console.log(powerOfY);

// 9-)          -->  123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
const value2 = 123.456789;
console.log(value2.toFixed(4));

// 10-) Returns a string representing a number with a specified precision. ---> Math.trunc(x)
console.log(Math.trunc(value2));



// 1. `Math.abs(x)`:
//    - Returns the absolute value of `x`.
//    - The absolute value represents the positive value of a number. For example, `Math.abs(-5)` returns `5`.
// 2. `Math.ceil(x)`:
//    - Rounds `x` up to the nearest integer (ceiling).
//    - For example, `Math.ceil(4.2)` returns `5`.
// 3. `Math.floor(x)`:
//    - Rounds `x` down to the nearest integer (floor).
//    - For example, `Math.floor(4.8)` returns `4`.
// 4. `Math.max(x, y, ...)`: 
//    - Returns the largest value among a specified set of numbers.
//    - For example, `Math.max(2, 7, 1, 9)` returns `9`.
// 5. `Math.min(x, y, ...)`: 
//    - Returns the smallest value among a specified set of numbers.
//    - For example, `Math.min(2, 7, 1, 9)` returns `1`.
// 6. `Math.sqrt(x)`:
//    - Returns the square root of `x`.
//    - For example, `Math.sqrt(25)` returns `5`.
// 7. `Math.pow(x, y)`:
//    - Returns `x` raised to the power of `y`.
//    - For example, `Math.pow(2, 3)` returns `8`.
// 8. `Math.trunc(x)`:
//    - Returns the integer part of `x` by removing the decimal fraction.
//    - For example, `Math.trunc(4.9)` returns `4`.
// 9. `.toFixed(n)`:
//    - Returns a string representing a number rounded to a specified number of decimal places.
//    - For example, `3.14159.toFixed(2)` returns `"3.14"` as a string.
// 10. `.toPrecision(n)`:
//     - Returns a string representing a number with a specified precision.
//     - For example, `3.14159.toPrecision(3)` returns `"3.14"` as a string.