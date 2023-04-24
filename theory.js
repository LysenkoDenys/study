//*THEORY===============================================================================================================================================

// const a = [1, 2, 3, 4, 5];

// // Create a new array which multiplies every element by 2

// const d = a.map(function (item) {
//   return item * 2;
// });

// console.log(d); // [2,4,6,8,10]

// // Return the words with more than 6 letters
// const words = ["react", "script", "interview", "style", "javascript"];

// const ans = words.filter((word) => word.length > 6);

// console.log(ans); // ['interview', 'javascript']

// let newArr = [];

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 6) {
//     newArr.push(words[i]);
//   }
// }
// console.log(newArr); // ['interview', 'javascript']

// // Return a new array where even numbers are multiplied by 2
// let arr = [1, 2, 3, 4, 5, 6, 7];
// function consoleEven(arr) {
//   let data = arr.map((num) => (num % 2 === 0 ? num * 2 : num * 1));
//   console.log(data); // [1,  4, 3, 8, 5, 12, 7]
// }
// // ? is the ternary operator. If the condition is true - first statement is returned otherwise the second one.
// consoleEven(arr);

// function consoleEven(arr) {
//   let data = arr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1));
//   console.log(data); // undefined
// }

// consoleEven(arr);

// // Convert  the new array back to original

// function consoleEven(arr) {
//   let data = arr
//     .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
//     .map((item) => (item % 2 === 0 ? item / 2 : item / 1));

//   console.log(data); // [1,  4, 3, 8, 5, 12, 7]
// }

// consoleEven(arr);

// // We can even pass functions as arguments to a function. Will see more on this when we try to understand closures.
// const greet = () => {
//   const prefix = "Mr";
//   return (name) => {
//     console.log(`${prefix} ${name}, welcome!`);
//   };
// };

// console.log(greet()("Jack")); //Mr Jack, welcome!

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a); //7
//   }
//   return y;
// }

// var z = x();
// console.log(z); // [Function: y]
// z();

// ==============================================

// // Recursion:
// // 1. loops
// function factorial(n) {
//   let result = 1;
//   for (let i = n; i > 0; i--) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(factorial(3)); //6
// // 2.recursion
// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(3)); //6

// ==============================================

// // Write a function sumTo(n) that calculates
// // the sum of the numbers 1 + 2 + ... + n.
// // 1 by loop:
// function sumTo(n) {
//   let res = n;
//   for (let i = 1; i < n; i++) {
//     res = res + (n - i);
//   }
//   console.log(res); //5050
// }
// sumTo(100);
// // 2 by recursion:
// function sumTo(n) {
//   if (n < 0) {
//     return;
//   }
//   if (n === 0) {
//     return n;
//   } else {
//     return n + sumTo(--n);
//   }
// }
// console.log(sumTo(100)); //5050
