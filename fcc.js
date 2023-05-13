//*fcc:
// //In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// //Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];

// // golfScore(4, 2) Eagle
// // golfScore(5, 2) Eagle
// // golfScore(4, 3) Birdie
// // golfScore(4, 4) Par
// // golfScore(5, 5) Par
// // golfScore(4, 5) Bogey
// // golfScore(4, 6) Double Bogey
// // golfScore(4, 7) Go Home!
// // golfScore(5, 9) Go Home!

// function golfScore(par, strokes) {
//   // Only change code below this line
//   let avg = strokes - par;
//   if (strokes >= 1 && strokes <= 1) {
//     return names[0];
//   } else if (avg <= -2) {
//     return console.log(names[1]);
//   } else if (avg == -1) {
//     return console.log(names[2]);
//   } else if (par == strokes) {
//     return console.log(names[3]);
//   } else if (avg == 1) {
//     return console.log(names[4]);
//   } else if (avg == 2) {
//     return console.log(names[5]);
//   } else if (avg >= 3) {
//     return console.log(names[6]);
//   }
//   return "Change Me";
//   // Only change code above this line
// }

// console.log(golfScore(4, 9));
//==========================================================================================================================================================================

// Counting Cards:
// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Outputs: -3 Hold or 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       ++count;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       count;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       --count;
//       break;
//   }

//   // return count > 0 ? console.log(`${count} Bet`) : console.log(`${count} Hold`);
//   return count > 0 ? `${count} Bet` : `${count} Hold`;
//   // Only change code above this line
// }

// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");

// cc(2);
// cc(3);
// cc(4);
// cc(5);
// cc(6);

// cc(7);
// cc(8);
// cc(9);

// cc(10);
// cc("J");
// cc("Q");
// cc("K");
// cc("A");

// Cards Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
// Failed:Cards Sequence 7, 8, 9 should return the string 0 Hold
// Failed:Cards Sequence 10, J, Q, K, A should return the string -5 Hold
// Failed:Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold
// Failed:Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet
// Failed:Cards Sequence 2, 2, 10 should return the string 1 Bet
// Failed:Cards Sequence 3, 2, A, 10, K should return the string -1 Hold

//==========================================================================================================================================================================
// // Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

// // Testing Objects for Properties
// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else return "Not Found";
//   // Only change code above this line
// }
// checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift");

// // checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
// // Failed:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
// // Passed:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
// // Failed:checkObj({city: "Seattle"}, "city") should return the string Seattle.
// // Passed:checkObj({city: "Seattle"}, "district") should return the string Not Found.
// // Passed:checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.

// ==========================================================================================================================================================

// // Record Collection
// // You are given an object literal representing a part of your musical album collection.
// // Each album has a unique id number as its key and several other properties. Not all albums have complete information.

// // You start with an updateRecords function that takes an object literal, records,
// // containing the musical album collection, an id, a prop (like artist or tracks), and a value.
// // Complete the function using the rules below to modify the object passed to the function.

// // Your function must always return the entire record collection object.
// // *If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// // *If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// // *If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// // *If value is an empty string, delete the given prop property from the album.
// // Note: A copy of the recordCollection object is used for the tests.

// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   //* 1. If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//   if (prop !== "tracks" && prop !== "" && value !== "") {
//     records[id][prop] = value;
//   }
//   //* 2. If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//   if (records[id].hasOwnProperty("tracks") !== true && prop === "tracks") {
//     records[id].tracks = new Array(value);
//   }
//   //* 3. If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//   if (
//     records[id].hasOwnProperty("tracks") == true &&
//     records[id].prop !== "" &&
//     prop === "tracks" &&
//     value !== "" &&
//     value !== records[id][prop][0] // or use else if in line 199 to prevent conflict between
//     //rule #2 and rule #3 in case: updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
//   ) {
//     let arr = records[id][prop];
//     arr.push(value);
//   }
//   //* 4. If value is an empty string, delete the given prop property from the album.
//   if (
//     (records[id].hasOwnProperty("artist") && value === "") ||
//     (records[id].hasOwnProperty("tracks") && value === "") ||
//     (records[id].hasOwnProperty("albumTitle") && value === "")
//   ) {
//     delete records[id][prop];
//   }

//   console.log(records);
//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// updateRecords(recordCollection, 2548, "artist", "");
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
// updateRecords(recordCollection, 2468, "tracks", "Free");
// updateRecords(recordCollection, 2548, "tracks", "");
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

// =========================================================================================
// // Sum of  array`s elements:
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total = total + myArr[i];
//   console.log(total); //20
// }
// =========================================================================================

// // a multi-dimensional array, use the same logic as the prior waypoint to loop through both the array and any sub-arrays:
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]); //1, 2, 3, 4, 5, 6
//   }
// }
// =========================================================================================

// // Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product = product * arr[i][j];
//     }
//   }
//   console.log(product); // 6; 5040; 54
//   // Only change code above this line

//   return product;
// }

// multiplyAll([[1], [2], [3]]);
// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);
// multiplyAll([
//   [5, 1],
//   [0.2, 4, 0.5],
//   [3, 9],
// ]);
// =========================================================================================

// // Recursion:
// // Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
// 1. loop:
// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   console.log(product); //2; 24
//   return product;
// }

// multiply([2, 3, 4], 1);
// // 1.[0] = 1*2=2

// multiply([2, 3, 4, 5], 3);
// // 1.[0] = 1*2=2
// // 2.[1]  = 2*3=6
// // 3.[2]  = 6*4=24

// // However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]:
// // multiply([2, 3, 4], 1) == multiply([2, 3, 4], 0) * arr[0]
// // multiply([2, 3, 4, 5], 3) == multiply([2, 3, 4, 5], 2) * arr[2];

// // 2. Recursion:
// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }

// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   // Only change code above this line
// }

// sum([1], 0); //should equal 0.
// sum([2, 3, 4], 1); //should equal 2.
// // 1.[0] = 0+2=2
// sum([2, 3, 4, 5], 3); //should equal 9.
// // 1.[2] = 0+4=4
// // 2.[1]  = 4+3=7
// // 3.[0]  = 7+2=9

// =========================================================================================
// //Profile Lookup
// // We have an array of objects representing different people in our contacts lists.
// // A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// // The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// // If both are true, then return the "value" of that property.
// // If name does not correspond to any contacts then return the string No such contact.
// // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   // console.log(contacts[i].firstName); //Akira
//   // console.log(contacts[i][prop]); //[ 'Pizza', 'Coding', 'Brownie Points' ]
//   // console.log(contacts[i][prop][i]); //Pizza

//   let value;
//   for (let i = 0; i < contacts.length; i++) {
//     if (
//       // If both are true, then return the "value" of that property.
//       contacts[i].firstName === name &&
//       contacts[i].hasOwnProperty(prop) === true
//     ) {
//       value = contacts[i][prop];
//       return value;
//     } else if (
//       // If name does not correspond to any contacts then return the string No such contact.
//       contacts[i].firstName !== name
//     ) {
//       value = "No such contact";
//     } else if (
//       // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
//       contacts[i].firstName === name &&
//       contacts[i].hasOwnProperty(prop) === false
//     ) {
//       value = "No such property";
//       console.log(value); //
//       return value;
//     }
//   }
//   return value;
//   // Only change code above this line
// }

// lookUpProfile("Akira", "likes"); //[ 'Pizza', 'Coding', 'Brownie Points' ]
// lookUpProfile("Kristian", "lastName"); //Vos
// lookUpProfile("Sherlock", "likes"); //[ 'Intriguing Cases', 'Violin' ]
// lookUpProfile("Harry", "likes"); //[ 'Hogwarts', 'Magic', 'Hagrid' ]
// lookUpProfile("Bob", "number"); //No such contact
// lookUpProfile("Bob", "potato"); //No such contact
// lookUpProfile("Akira", "address"); //No such property

// v2==============================
// //! Does not work correctly:
// function lookUpProfile(name, prop) {
//   let value;
//   for (let i = 0; i < contacts.length; i++) {
//     // console.log(i); //
//     contacts[i].firstName === name && contacts[i].hasOwnProperty(prop) === true
//       ? (value = contacts[i][prop])
//       : contacts[i].firstName === name &&
//         contacts[i].hasOwnProperty(prop) === false
//       ? (value = "No such property")
//       : (value = "No such contact");
//   }
//   console.log(value); // No such contact--Vos
//   return value;
// }
// =========================================================================================

// // Recursion to Create a Countdown:

// // We have defined a function called countdown with one parameter (n).
// // The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
// // If the function is called with a number less than 1, the function should return an empty array.
// // For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
// // Your function must use recursion by calling itself and must not use loops of any kind.

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(5)); //[ 5, 4, 3, 2, 1 ]

// // LIFO (last in first out) STACK.

// =========================================================================================

// // Use Recursion to Create a Range of Numbers

// // We have defined a function named rangeOfNumbers with two parameters.
// // The function should return an array of integers which begins with a number represented by the startNum parameter
// // and ends with a number represented by the endNum parameter.
// // The starting number will always be less than or equal to the ending number.
// // Your function must use recursion by calling itself and not use loops of any kind.
// // It should also work for cases where both startNum and endNum are the same.

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) return;
//   if (endNum - startNum == 0) {
//     return [startNum];
//   } else {
//     const arr = rangeOfNumbers(startNum, endNum - 1);
//     arr.push(endNum);
//     console.log(arr);
//     return arr;
//   }
// }

// rangeOfNumbers(1, 5); //[1, 2, 3, 4, 5]
// rangeOfNumbers(6, 9); //[6, 7, 8, 9]
// rangeOfNumbers(4, 4); //[4]

// // Your function should return an array.
// // Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).
// // rangeOfNumbers should use recursion (call itself) to solve this challenge.
// // rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
// // rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
// // rangeOfNumbers(4, 4) should return [4].
// // Global variables should not be used to cache the array.

// *ES6=========================================================================================
// // Use the Rest Parameter with Function Parameters:
// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0);
// };
// console.log(sum(1, 2, 3)); //6
// console.log(sum(1, 2, 3, 4)); //10
// console.log(sum(5)); //5
// console.log(sum()); //0
// =========================================================================================
// // Replace the two assignments with an equivalent destructuring assignment.
// // It should still assign the variables lowToday and highToday the values of today.low
// // and today.high from the LOCAL_FORECAST object.

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST;

// console.log(lowToday); //64
// console.log(highToday); //77
// =========================================================================================
// // Use destructuring assignment to swap the values of a and b so that a receives
// // the value stored in b, and b receives the value stored in a.
// let a = 8,
//   b = 6;
// // Only change code below this line
// let arr = [a, b];
// [a, b] = [b, a];
// console.log(a); //6
// console.log(b); //8
// =========================================================================================
// // Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice().
// // removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a, b, ...shorterList] = list; // Change this line
//   // Only change code above this line
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);
// console.log(removeFirstTwo(source)); //[  3, 4, 5,  6,  7, 8, 9, 10]

// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(1, 3);
// // console.log(citrus); //[ 'Orange', 'Lemon' ]
// =========================================================================================

// // Use Destructuring Assignment to Pass an Object as a Function's Parameters
// // In some cases, you can destructure the object in a function argument itself.
// // When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

// // Use destructuring assignment within the argument to the function half to send only max and min inside the function.

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// };

// // Only change code below this line
// const half = ({ max, min }) => (max + min) / 2.0;
// console.log(half(stats)); //
// // Only change code above this line

// // Get rid of the stats, and see if you can destructure it. We need the max and min of stats.
// =========================================================================================

// // Create Strings using Template Literals
// // Use template literal syntax with backticks to create an array of list element (li) strings.
// // Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning.
// // The makeList function should return the array of list item strings.

// // Use an iterator method (any kind of loop) to get the desired output (shown below).

// // [
// //   '<li class="text-warning">no-var</li>',
// //   '<li class="text-warning">var-on-top</li>',
// //   '<li class="text-warning">linebreak</li>'
// // ]

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   for (let i of arr) {
//     failureItems.push(`<li class="text-warning">${i}</li>`);
//   }
//   // Only change code above this line
//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList); //
// // [
// //   '<li class="text-warning">no-var</li>',
// //   '<li class="text-warning">var-on-top</li>',
// //   '<li class="text-warning">linebreak</li>'
// // ]

// =========================================================================================
// // Write Concise Object Literal Declarations Using Object Property Shorthand
// const getMousePosition = (x, y) => {
//   return { x: x, y: y };
// };
// console.log(getMousePosition()); //{ x: undefined, y: undefined }
// // Shorthand:
// const getMousePosition2 = (x, y) => ({ x, y });
// console.log(getMousePosition2()); //{ x: undefined, y: undefined }
// //* ES6: () instead return, x instead x:x

// =========================================================================================
// // Use class Syntax to Define a Constructor Function
// // Use the class keyword and write a constructor to create the Vegetable class.
// // The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

// // Only change code below this line
// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // Only change code above this line

// const carrot = new Vegetable("carrot");
// console.log(carrot.name); // Should display 'carrot'

// =========================================================================================
// // Use getters and setters to Control Access to an Object:
// // Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
// // In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
// // Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
// // Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
// // This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
// // In other words, you are abstracting implementation details from the user.

// // Only change code below this line
// class Thermostat {
//   constructor(temperature) {
//     this._temperature = temperature;
//   }
//   // getter
//   get temperature() {
//     return Math.round((5 / 9) * (this._temperature - 32) * 100) / 100;
//   }
//   // setter
//   set temperature(updatedTempo) {
//     this._temperature = (updatedTempo * 9.0) / 5 + 32;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius

// console.log(thermos.temperature); //24.444444444444446

// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// console.log(temp); //26

// // Thermostat should be a class with a defined constructor method.
// // class keyword should be used.
// // Thermostat should be able to be instantiated.
// // When instantiated with a Fahrenheit value, Thermostat should set the correct temperature.
// // A getter should be defined.
// // A setter should be defined.
// // Calling the setter with a Celsius value should set the temperature.

// =========================================================================================
// // Handle a Fulfilled Promise with then
// // Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request.
// // When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server.
// // This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

// // myPromise.then(result => {

// // });
// // result comes from the argument given to the resolve method.

// // Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to true to represent a successful response from a server
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve("We got the data");
//     makeServerRequest.then((result) => {
//       console.log(result);
//     });
//   } else {
//     reject("Data not received");
//   }
// });

// // Passed:You should call the then method on the promise.
// // Passed:Your then method should have a callback function with result as its parameter.
// // Passed:You should log result to the console.

// =========================================================================================
// // Handle a Rejected Promise with catch
// // catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

// // myPromise.catch(error => {

// // });
// // error is the argument passed in to the reject method.

// // Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

// const makeServerRequest2 = new Promise((resolve, reject) => {
//   // responseFromServer is set to false to represent an unsuccessful response from a server
//   let responseFromServer = false;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//     makeServerRequest2.catch((error) => {
//       console.log(error);
//     });
//   }
// });

// makeServerRequest2.then((result) => {
//   console.log(result);
// });

// // You should call the catch method on the promise.
// // Your catch method should have a callback function with error as its parameter.
// // You should log error to the console.

// =========================================================================================
// // REGULAR EXPRESSIONS:
// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);
// console.log(testRegex.test(testStr)); // true

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);

// // =========================================================================================
// let testStr2 = "Hello, my name is Kevin.";
// // Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.
// let wrongRegex = /kevin/;
// wrongRegex.test(testStr2);
// let result2 = wrongRegex.test(testStr);
// console.log(result2); //false

// // =========================================================================================
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result3 = petRegex.test(petString);
// console.log(result3); // true

// // =========================================================================================
// let testStr3 = "Repeat, Repeat, Repeat";
// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// console.log(testStr3.match(repeatRegex)); //[ 'Repeat', 'Repeat', 'Repeat' ]

// =========================================================================================
// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/gi;
// jennyStr.match(myRegex);
// console.log(jennyStr.match(myRegex));
// // [
// //   'J', 'e', 'n', 'n',
// //   'y', '8', '6', '7',
// //   '5', '3', '0', '9'
// // ]

// =========================================================================================
// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);
// console.log(soccerWord.match(goRegex)); //[ 'goooooooo', index: 0, input: 'gooooooooal!', groups: undefined ]
// console.log(gPhrase.match(goRegex)); //[ 'g', index: 0, input: 'gut feeling', groups: undefined ]
// console.log(oPhrase.match(goRegex)); //null

// =========================================================================================
// // Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
// // Remember the wildcard . in a regular expression matches any character.

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result); //[ '<h1>', index: 0, input: '<h1>Winter is coming</h1>', groups: undefined]

// =========================================================================================
// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// console.log(firstRegex.test(firstString)); //true
// console.log(firstRegex.test(notFirst)); // false

// =========================================================================================
// let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// storyRegex.test(theEnding);
// let noEnding = "Sometimes a story will have to end";
// storyRegex.test(noEnding);
// console.log(storyRegex.test(theEnding)); //true
// console.log(storyRegex.test(noEnding)); // false

// // =========================================================================================
// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// longHand.test(numbers);
// shortHand.test(numbers);
// longHand.test(varNames);
// shortHand.test(varNames);
// console.log(longHand.test(numbers)); //true
// console.log(shortHand.test(numbers)); //true
// console.log(longHand.test(varNames)); //true
// console.log(shortHand.test(varNames)); //true

// =========================================================================================
// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand);
// sentence.match(shortHand);
// console.log(numbers.match(shortHand)); //[ '%', index: 2, input: '42%', groups: undefined ]
// console.log(sentence.match(shortHand)); //[ '!', index: 6, input: 'Coding!', groups: undefined ]

// =========================================================================================
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;
// console.log(result); //4

// =========================================================================================
// // Restrict Possible Usernames
// // You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
// // Usernames can only use alpha-numeric characters.
// // The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// // Username letters can be lowercase and uppercase.
// // Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// let username = "Z97";
// let userCheck = /^[a-zA-Z]([0-9]{2,}|[A-Za-z]+\d*)$/g; // Change this line
// let result = userCheck.test(username);
// console.log(result);

// // 1. regex should match the string JACK
// // 2. regex should not match the string J
// // 3. regex should match the string Jo
// // 4. regex should match the string Oceans11
// // 5. regex should match the string RegexGuru
// // 6. regex should not match the string 007
// // 7. regex should not match the string 9
// // 8. regex should not match the string A1
// // 9. regex should not match the string BadUs3rnam3
// // 10. regex should match the string Z97
// // 11. regex should not match the string c57bT3
// // 12. regex should match the string AB1
// // 13. regex should not match the string J%4

// =========================================================================================
// let whiteSpace = "Whitespace. Whitespace every    where!";
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// console.log(whiteSpace.match(spaceRegex)); //[ ' ', ' ', ' ', ' ', ' ', ' ' ]

// =========================================================================================
// let whiteSpace = "Whitespace. Whitespace everywhere!";
// let nonSpaceRegex = /\S/g;
// whiteSpace.match(nonSpaceRegex).length;
// console.log(whiteSpace.match(nonSpaceRegex).length); //32

// =========================================================================================
// let A4 = "aaaah";
// let A2 = "aah";
// let A5 = "aaaaah";
// let A6 = "aaaaaah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4);
// multipleA.test(A2);
// multipleA.test(A5);
// multipleA.test(A6);
// console.log(multipleA.test(A4)); //true
// console.log(multipleA.test(A2)); //false
// console.log(multipleA.test(A5)); //true
// console.log(multipleA.test(A6)); //true

// =========================================================================================
// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4);
// multipleA.test(A2);
// multipleA.test(A100);
// console.log(multipleA.test(A4)); //true
// console.log(multipleA.test(A2)); //false
// console.log(multipleA.test(A100)); //true

// =========================================================================================
// let american = "color";
// let british = "colour";
// let rainbowRegex = /colou?r/;
// rainbowRegex.test(american);
// rainbowRegex.test(british);
// console.log(rainbowRegex.test(american)); //true
// console.log(rainbowRegex.test(british)); //true

// =========================================================================================
// let quit = "qu";
// let noquit = "qt";
// let quRegex = /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex);
// noquit.match(qRegex);
// console.log(quit.match(quRegex)); //[ 'q', index: 0, input: 'qu', groups: undefined ]
// console.log(noquit.match(qRegex)); //[ 'q', index: 0, input: 'qt', groups: undefined ]

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password);
// console.log(checkPass.test(password)); //true

// =========================================================================================
// // Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
// let sampleWord1 = "astronaut";
// let sampleWord2 = "banan1";
// let sampleWord3 = "bana12";
// let sampleWord4 = "abc123";
// let sampleWord5 = "12345";
// let sampleWord6 = "8pass99";
// let sampleWord7 = "1a2bcde";
// let sampleWord8 = "astr1on11aut";
// let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
// let result1 = pwRegex.test(sampleWord1);
// let result2 = pwRegex.test(sampleWord2);
// let result3 = pwRegex.test(sampleWord3);
// let result4 = pwRegex.test(sampleWord4);
// let result5 = pwRegex.test(sampleWord5);
// let result6 = pwRegex.test(sampleWord6);
// let result7 = pwRegex.test(sampleWord7);
// let result8 = pwRegex.test(sampleWord8);
// console.log(result1); //false
// console.log(result2); //false
// console.log(result3); //true
// console.log(result4); //true
// console.log(result5); //false
// console.log(result6); //true
// console.log(result7); //false
// console.log(result8); //true

// =========================================================================================
// // Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
// let repeatNum = "42\t42\t42";
// let reRegex = /^(\d+)( )\1\2\1$/; // Change this line
// let result = reRegex.test(repeatNum);
// console.log(result); //false

// // match the string 42 42 42.
// // match the string 100 100 100.
// // not match the string 42 42 42 42.
// // not match the string 42 42.
// // not match the string 101 102 103.
// // not match the string 1 2 3.
// // match the string 10 10 10.
// // not match the string 42\t42\t42.
// // not match the string 42  42  42.

// =========================================================================================
// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// console.log(wrongText.replace(silverRegex, "blue")); //The sky is blue.
// console.log(wrongText); //The sky is silver.

// let text = "Code Camp";
// text.replace(/(\w+)\s(\w+)/, "$2 $1");
// console.log(text.replace(/(\w+)\s(\w+)/, "$2 $1")); //Camp Code

// // Write a regex fixRegex using three capture groups that will search for each word in the string one two three.
// // Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable.
// // Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
// let str = "one two three";
// let fixRegex = /^(\w+)\s(\w+)\s(\w+)$/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);
// console.log(result); //three two one

// =========================================================================================
// // Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
// // Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, ""); // Change this line
// console.log(`text:${result}`); // text:Hello, World!

// =========================================================================================
// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }

// let base = 2;
// let exp = 3;
// let power = raiseToPower(exp, base);
// console.log(power); //9

// let power2 = raiseToPower(base, exp);
// console.log(power2); //8

// =========================================================================================
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   console.log(alphabet[i]); //a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-undefined
// }
// for (let j = 1; j < len; j++) {
//   console.log(alphabet[j]); //b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z
// }
// for (let k = 0; k < len; k++) {
//   console.log(alphabet[k]); //a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z
// }

// =========================================================================================
// // The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes.
// // Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop.
// // Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].

// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//     console.log(`i=${i}`); //
//     let row = [];
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       console.log(`j=${j}`); //
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix); //[ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]

// =========================================================================================
// // We have defined a function, mixedNumbers, which we are passing an array as an argument.
// // Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
// function mixedNumbers(arr) {
//   // Only change code below this line
//   // let arr2 = Array(arr);
//   arr.unshift("I", 2, "three");
//   arr.push(7, "VIII", 9);

//   // Only change code above this line
//   return arr;
// }

// console.log(mixedNumbers(["IV", 5, "six"]));

// =========================================================================================
// // We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1, 4);
// // Only change code above this line
// console.log(arr); //[ 2, 5, 2, 1 ]

// =========================================================================================
// // We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument.
// // Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
// function htmlColorNames(arr) {
//   // Only change code below this line
//   arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
//   // Only change code above this line
//   return arr;
// }

// console.log(
//   htmlColorNames([
//     "DarkGoldenRod",
//     "WhiteSmoke",
//     "LavenderBlush",
//     "PaleTurquoise",
//     "FireBrick",
//   ])
// ); // ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']

// =========================================================================================
// // We have defined a function, forecast, that takes an array as an argument.
// // Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.
// function forecast(arr) {
//   // Only change code below this line
//   let arr2 = arr.slice(2, 4);
//   console.log(arr2); //[ 'warm', 'sunny' ]
//   return arr2;
// }
// // Only change code above this line
// console.log(
//   forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
// );

// =========================================================================================
// // We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
// // The function is supposed to return a new array made up of num copies of arr.
// // We have done most of the work for you, but it doesn't work quite right yet.
// // Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);

//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2)); //[ [ true, false, true ], [ true, false, true ] ]
// console.log(copyMachine([1, 2, 3], 5)); //[ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]
// console.log(copyMachine([true, true, null], 1)); //[ [ true, true, null ] ]
// console.log(copyMachine(["it works"], 3)); //[ [ 'it works' ], [ 'it works' ], [ 'it works' ] ]

// =========================================================================================
// // We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf()
// // so that it returns true if the passed element exists on the array, and false if it does not.
// function quickCheck(arr, elem) {
//   // Only change code below this line
//   let check = arr.indexOf(elem);
//   return check == -1 ? false : true;
//   // Only change code above this line
// }

// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms")); // false
// console.log(quickCheck(["onions", "squash", "shallots"], "onions")); //true
// console.log(quickCheck([3, 5, 9, 125, 45, 2], 125)); //true
// console.log(quickCheck([true, false, false], undefined)); //false

// ========================================================================================
// // We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents
// // an element that may or may not be present on one or more of the arrays nested within arr.
// // Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) == -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Only change code above this line
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// ); // []
// console.log(
//   filteredArray(
//     [
//       [10, 8, 3],
//       [14, 6, 23],
//       [3, 18, 6],
//     ],
//     18
//   )
// ); // [ [ 10, 8, 3 ], [ 14, 6, 23 ] ]
// console.log(
//   filteredArray(
//     [
//       ["trumpets", 2],
//       ["flutes", 4],
//       ["saxophones", 2],
//     ],
//     2
//   )
// ); // [ [ 'flutes', 4 ] ]
// console.log(
//   filteredArray(
//     [
//       ["amy", "beth", "sam"],
//       ["dave", "sean", "peter"],
//     ],
//     "peter"
//   )
// ); // [ [ 'amy', 'beth', 'sam' ] ]
// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// ); // []

// ========================================================================================
// let myNestedArray = [
//   // Only change code below this line
//   [
//     [
//       [["deepest", "hardest"], "deeper", "mustain"],
//       "newsted",
//       "hetfield",
//       "ulrich",
//       "deep",
//     ],
//     "unshift",
//     false,
//     1,
//     2,
//     3,
//     "complex",
//     "nested",
//   ],
//   ["loop", "shift", 6, 7, 1000, "method"],
//   ["concat", false, true, "spread", "array"],
//   ["mutate", 1327.98, "splice", "slice", "push"],
//   ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
//   // Only change code above this line
// ];
// console.log(myNestedArray[0][0][0][0][0]); //deepest

// ========================================================================================
// // Finish writing the function so that it returns true if the object passed to it contains all four names,
// //  Alan, Jeff, Sarah and Ryan and returns false otherwise.

// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   // Sarah: {
//   //   age: 48,
//   //   online: true,
//   // },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   if (
//     userObj.hasOwnProperty("Alan") &&
//     userObj.hasOwnProperty("Jeff") &&
//     userObj.hasOwnProperty("Sarah") &&
//     userObj.hasOwnProperty("Ryan")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));

// // v2=========================================
// if (
//   ("Alan" in userObj) &
//   ("Jeff" in userObj) &
//   ("Sarah" in userObj) &
//   ("Ryan" in userObj)
// ) {
//   return true;
// }
// // v3=========================================
// function isEveryoneHere(userObj) {
//   let students = ["Alan", "Jeff", "Sarah", "Ryan"];
//   return students.every((student) => userObj.hasOwnProperty(student));
// }

// ========================================================================================
// // We've defined a function countOnline which accepts one argument (a users object).
// // Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true.
// // An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(usersObj) {
//   // Only change code below this line
//   let online = 0;
//   for (let user in usersObj) {
//     if (usersObj[user]["online"] === true) {
//       online += 1;
//     }
//   }
//   return online;
//   // Only change code above this line
// }

// console.log(countOnline(users));

// ========================================================================================
// // Finish writing the getArrayOfUsers function so that
// // it returns an array containing all the properties in the object
// // it receives as an argument.
// let users = {
//   Alan: {
//     age: 27,
//     online: false,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: false,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
//   return Object.keys(obj);
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users)); //[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

// ========================================================================================
// // Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures.
// // We've started writing a function addFriend.
// // Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
// let user = {
//   name: "Kenneth",
//   age: 28,
//   data: {
//     username: "kennethCodesAllDay",
//     joinDate: "March 26, 2016",
//     organization: "freeCodeCamp",
//     friends: ["Sam", "Kira", "Tomo"],
//     location: {
//       city: "San Francisco",
//       state: "CA",
//       country: "USA",
//     },
//   },
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line

//   userObj.data.friends.push(friend);
//   return userObj.data.friends;
//   // Only change code above this line
// }

// console.log(addFriend(user, "Pete"));

// ========================================================================================
// // Reverse the provided string and return the reversed string.
// // For example, "hello" should become "olleh".
// function reverseString(str) {
//   const arr = [];
//   for (const character of str) {
//     arr.unshift(character);
//   }
//   const str2 = arr.join("");
//   console.log(str2); //olleh
// }

// reverseString("hello");

// ========================================================================================
// // Return the factorial of the provided integer.
// // If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// // Factorials are often represented with the shorthand notation n!
// // For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// // Only integers greater than or equal to zero will be supplied to the function.

// function factorialize(num) {
//   if (num === 0) {
//     return (num = 1);
//   } else {
//     let num2 = 1;
//     for (let i = 1; i <= num; i++) {
//       num2 = num2 * i;
//     }
//     return num2; //120
//   }
// }

// factorialize(5);

// ========================================================================================
// // Find the Longest Word in a String
// // Return the length of the longest word in the provided sentence.
// // Your response should be a number.
// function findLongestWordLength(str) {
//   const arr = [];
//   for (let i = 0; i < str.length; i++) {
//     let num = str.indexOf(" ");
//     if (num == -1) {
//       arr.push(str.length);
//     } else {
//       arr.push(num);
//       str = str.slice(num + 1);
//     }
//   }
//   const max = Math.max(...arr);
//   return console.log(max); //6;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog"); //6
// findLongestWordLength("May the force be with you"); //5
// findLongestWordLength("Google do a barrel roll"); //5
// findLongestWordLength(
//   "What is the average airspeed velocity of an unladen swallow"
// ); //8
// findLongestWordLength(
//   "What if we try a super-long word such as otorhinolaryngology"
// ); //19

// ========================================================================================
// // Return an array consisting of the largest number from each provided sub-array.
// // For simplicity, the provided array will contain exactly 4 sub-arrays.
// // Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
// function largestOfFour(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     let max = Math.max(...arr[i]);
//     arr2.push(max);
//   }
//   console.log(arr2); //
//   return arr2;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);
// largestOfFour([
//   [13, 27, 18, 26],
//   [4, 5, 1, 3],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);
// largestOfFour([
//   [4, 9, 1, 3],
//   [13, 35, 18, 26],
//   [32, 35, 97, 39],
//   [1000000, 1001, 857, 1],
// ]);
// largestOfFour([
//   [17, 23, 25, 12],
//   [25, 7, 34, 48],
//   [4, -10, 18, 21],
//   [-72, -3, -17, -10],

// ========================================================================================
// // Check if a string (first argument, str) ends with the given target string (second argument, target).
// // This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// // But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// function confirmEnding(str, target) {
//   const tarLength = target.length;
//   const strLength = str.length;
//   const num = strLength - tarLength;
//   str = str.includes(target, num);
//   console.log(str); //
//   return str;
// }

// confirmEnding("Bastian", "n"); // true
// confirmEnding("Congratulation", "on"); //true
// confirmEnding("Connor", "n"); //false
// confirmEnding(
//   "Walking on water and developing software from a specification are easy if both are frozen",
//   "specification"
// ); //false
// confirmEnding("He has to give me a new name", "name"); //true
// confirmEnding("Open sesame", "same"); //true
// confirmEnding("Open sesame", "sage"); //false
// confirmEnding("Open sesame", "game"); //false
// confirmEnding(
//   "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
//   "mountain"
// ); //false
// confirmEnding("Abstraction", "action"); //true

// ========================================================================================
// // Repeat a String Repeat a String
// // Repeat a given string str (first argument) for num times (second argument).
// // Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
// function repeatStringNumTimes(str, num) {
//   let arr = [];
//   if (num <= 0) {
//     str = "";
//   } else {
//     for (let i = 0; i < num; i++) {
//       arr.push(str);
//     }
//     str = arr.join("");
//     console.log(str); //
//   }
//   return str;
// }

// repeatStringNumTimes("abc", 3); //abcabcabc
// repeatStringNumTimes("*", 3); //***
// repeatStringNumTimes("abc", 4); //abcabcabcabc
// repeatStringNumTimes("*", 8); //********

// ========================================================================================
// // Truncate a String
// // Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// // Return the truncated string with a ... ending.
// function truncateString(str, num) {
//   if (str.length > num) {
//     return console.log((str = str.slice(0, num) + "...")); //
//   } else {
//     console.log(str); //
//     return str;
//   }
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8); //should return the string A-tisket....
// truncateString("Peter Piper picked a peck of pickled peppers", 11); //should return the string Peter Piper....
// truncateString(
//   "A-tisket a-tasket A green and yellow basket",
//   "A-tisket a-tasket A green and yellow basket".length
// ); //should return the string A-tisket a-tasket A green and yellow basket.
// truncateString(
//   "A-tisket a-tasket A green and yellow basket",
//   "A-tisket a-tasket A green and yellow basket".length + 2
// ); //should return the string A-tisket a-tasket A green and yellow basket.
// truncateString("A-", 1); //should return the string A....
// truncateString("Absolutely Longer", 2); //should return the string Ab....

// ========================================================================================
// // Finders Keepers
// // Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// // This means that given an element x, the 'truth test' is passed if func(x) is true.
// // If no element passes the test, return undefined.
// function findElement(arr, func) {
//   let num = 0;
//   //===========================
//   for (let i = 0; i <= arr.length; i++) {
//     num = arr[i];
//     if (func(num) === true) {
//       console.log(num);
//       return num;
//     } else {
//       console.log(undefined);
//     }
//   }
//   //===========================
//   return num;
// }

// findElement([1, 2, 3, 4], (num) => num % 2 === 0); //should return 2.
// findElement([1, 3, 5, 8, 9, 10], function (num) {
//   return num % 2 === 0;
// }); //should return 8.
// findElement([1, 3, 5, 9], function (num) {
//   return num % 2 === 0;
// }); //should return undefined.

// ========================================================================================
// function booWho(bool) {
//   if (typeof bool === "boolean") {
//     console.log(true); //
//     return true;
//   } else {
//     console.log(false); //
//     return false;
//   }
//   return bool;
// }

// booWho(null); //false

// booWho(true); //should return true.
// booWho(false); //should return true.
// booWho([1, 2, 3]); //should return false.
// booWho([].slice); //should return false.
// booWho({ a: 1 }); //should return false.
// booWho(1); //should return false.
// booWho(NaN); //should return false.
// booWho("a"); //should return false.
// booWho("true"); //should return false.
// booWho("false"); //should return false.

// ========================================================================================
// // Title Case a Sentence
// // Return the provided string with the first letter of each word capitalized.
// // Make sure the rest of the word is in lower case.
// // For the purpose of this exercise, you should also capitalize connecting words like the and of.
// function titleCase(str) {
//   // 1. set everything into lowercase:
//   let str2 = str.toLowerCase();
//   // 2. convert string to an array:
//   let arr = [];
//   for (const character of str2) {
//     arr.push(character);
//   }
//   // 3. core: change to upperCase the first letters:
//   for (let i = 0; i <= arr.length; i++) {
//     arr.splice(0, 1, arr[0].toUpperCase());
//     if (arr.indexOf(" ", i) >= 0) {
//       let ind = arr.indexOf(" ", i) + 1;
//       let upper = arr[ind].toUpperCase();
//       let changer = arr.splice(ind, 1, upper);
//     } else {
//       str = arr.join("");
//       console.log(str); //I'm A Little Tea Pot;
//       return str;
//     }
//   }
//   return str;
// }

// titleCase("I'm a little tea pot"); //should return the string I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt"); //should return the string Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return the string Here Is My Handle Here Is My Spout.

// ========================================================================================
// // Slice and Splice
// // You are given two arrays and an index.
// // Copy each element of the first array into the second array, in order.
// // Begin inserting elements at index n of the second array.
// // Return the resulting array. The input arrays should remain the same after the function runs.
// function frankenSplice(arr1, arr2, n) {
//   const array2 = arr2.slice();
//   for (let i = arr1.length - 1; i >= 0; i--) {
//     let removed = array2.splice(n, 0, arr1[i]);
//   }
//   console.log(array2); //
//   // ======================================s
//   return array2;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1); //[ 4, 1, 2, 3 , 5, 6 ]

// frankenSplice([1, 2, 3], [4, 5], 1); //should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1); //should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// frankenSplice([1, 2, 3, 4], [], 0); //should return [1, 2, 3, 4].

// ========================================================================================
// // Falsy Bouncer
// // Remove all falsy values from an array. Return a new array; do not mutate the original array.
// // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// // Hint: Try converting each value to a Boolean.
// function bouncer(arr) {
//   let arr2 = [];
//   for (let index = 0; index < arr.length; index++) {
//     if (!!arr[index] !== false) {
//       arr2.push(arr[index]);
//     }
//   }
//   console.log(arr2); //[ 7, 'ate', 9 ]
//   return arr2;
// }

// bouncer([7, "ate", "", false, 9]); //[ 7, 'ate', 9 ]
// bouncer([7, "ate", "", false, 9]); //should return [7, "ate", 9].
// bouncer(["a", "b", "c"]); //should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]); //should return [].
// bouncer([null, NaN, 1, 2, undefined]); //should return [1, 2].

// ========================================================================================
// // Where do I Belong
// // Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// // The returned value should be a number.
// // For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// // Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
// // it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
// function getIndexToIns(arr, num) {
//   // alt:----------------------------
//   // function compareNumbers(a, b) {
//   //   return a - b;
//   // }
//   // let arr2 = arr.sort(compareNumbers);
//   // alt:----------------------------
//   let arr2 = [...arr];
//   arr2.push(num);
//   arr2 = arr2.sort((a, b) => a - b);
//   if (arr2.length === 0) {
//     return 0;
//   }
//   let index = 0;
//   for (index; index < arr2.length; index++) {
//     if (arr2[index] === num) {
//       return console.log(index); //1
//     }
//   }
// }

// getIndexToIns([40, 60], 50); //1
// getIndexToIns([10, 20, 30, 40, 50], 35); //should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 30); //should return 2.
// getIndexToIns([40, 60], 50); //should return 1.
// getIndexToIns([3, 10, 5], 3); //should return 0.
// getIndexToIns([5, 3, 20, 3], 5); //should return 2.
// getIndexToIns([2, 20, 10], 19); //should return 2.
// getIndexToIns([2, 5, 10], 15); //should return 3.
// getIndexToIns([], 1); //should return 0.

// ========================================================================================
// // Mutations
// // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// // For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// // The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// // Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// function mutation(arr) {
//   let arr2 = [];
//   let character = "";
//   for (character of arr[1].toLowerCase()) {
//     if (arr[0].toLowerCase().includes(character) === true) {
//       arr2.push(true);
//     }
//   }
//   if (arr2.length < arr[1].length) {
//     console.log("false"); //
//     return false;
//   } else {
//     console.log("true"); //
//     return true;
//   }
// }

// mutation(["hello", "hey"]); //should return false.
// mutation(["hello", "Hello"]); //should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //should return true.
// mutation(["Mary", "Army"]); //should return true.
// mutation(["Mary", "Aarmy"]); //should return true.
// mutation(["Alien", "line"]); //should return true.
// mutation(["floor", "for"]); //should return true.
// mutation(["hello", "neo"]); //should return false.
// mutation(["voodoo", "no"]); //should return false.
// mutation(["ate", "date"]); //should return false.
// mutation(["Tiger", "Zebra"]); // should return false.
// mutation(["Noel", "Ole"]); //should return true.

// ========================================================================================
// // Chunky Monkey
// // Write a function that splits an array (first argument) into groups
// // the length of size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//   const arr1 = [];
//   for (let index = 0; index < arr.length; index++) {
//     let arr2 = [];
//     for (let index = 0; index <= size; index++) {
//       arr2 = arr.splice(0, size);
//       arr1.push(arr2);
//       if (arr.length === 0) {
//         console.log(arr1); //
//         return arr1;
//       }
//     }
//   }
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2); //should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); //should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); //should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); //should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

// ========================================================================================
// // Add the own properties of canary to the array ownProps.
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];
// // Only change code below this line
// for (let property in canary) {
//   if (canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }
// console.log(ownProps); //[ 'name', 'numLegs' ]

// ========================================================================================
// *OOP
// function Bird(name) {
//   this.name = name;
// }

// typeof Bird.prototype;
// console.log(typeof Bird.prototype); //object

// Object.prototype.isPrototypeOf(Bird.prototype);
// console.log(Object.prototype.isPrototypeOf(Bird.prototype)); //true

// let duck = new Bird("Donald");
// duck.hasOwnProperty("name");
// console.log(duck.hasOwnProperty("name")); //true
// ========================================================================================
// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// Dog.prototype.isPrototypeOf(beagle); // yields true

// // Fix the code below so that it evaluates to true
// Object.prototype.isPrototypeOf(Dog.prototype);
// console.log(Object.prototype.isPrototypeOf(Dog.prototype)); //true

// ========================================================================================

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = {
//   constructor: Cat,
// };

// function Bear(name) {
//   this.name = name;
// }

// Bear.prototype = {
//   constructor: Bear,
// };

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// const bongo = new Animal("Bongo");
// bongo.eat(); //nom nom nom

// // ========================================================================================
// let animal = new Animal();
// animal.eat(); //nom nom nom
// animal instanceof Animal;
// console.log(animal instanceof Animal); //true

// ========================================================================================
// // Use Object.create to make two instances of Animal named duck and beagle.
// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// // Only change code below this line

// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line

// ========================================================================================
// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// function Dog() {}

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();
// beagle.eat(); //nom nom nom

// ========================================================================================
// // Fix the code so duck.constructor and beagle.constructor return their respective constructors.
// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// function Bird() {}
// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird();
// duck.constructor;
// console.log(duck.constructor); //[Function: Animal]

// Bird.prototype.constructor = Bird;
// duck.constructor;
// console.log(duck.constructor); //[Function: Bird]

// ========================================================================================
// // Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.
// function Bird() {}

// Bird.prototype.fly = function () {
//   return "I am flying!";
// };

// function Penguin() {}
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line
// Penguin.prototype.fly = function () {
//   return "Alas, this is a flightless bird.";
// };
// // Only change code above this line

// let penguin = new Penguin();
// let bird = new Bird();
// console.log(penguin.fly()); //Alas, this is a flightless bird
// console.log(bird.fly()); //I am flying!

// ========================================================================================
// // Create a mixin named glideMixin that defines a method named glide.
// // Then use the glideMixin to give both bird and boat the ability to glide.
// let bird = {
//   name: "Donald",
//   numLegs: 2,
// };

// let boat = {
//   name: "Warrior",
//   type: "race-boat",
// };

// // Only change code below this line

// let glideMixin = (obj) => {
//   obj.glide = () => {
//     console.log("we are glade!"); //
//   };
// };

// glideMixin(boat);
// glideMixin(bird);
// boat.glide(); //we are glade!
// bird.glide(); //we are glade!

// console.log(bird.name); //Donald
// bird.name = "Duffy";
// console.log(bird.name); //Duffy

// ========================================================================================
// // Change how weight is declared in the Bird function so it is a private variable.
// // Then, create a method getWeight that returns the value of weight 15.

// function Bird() {
//   let weight = 15;
//   this.getWeight = function () {
//     return weight;
//   };
// }

// let ducky = new Bird();
// console.log(ducky.getWeight()); //15

// // ducky.weight = 20;
// console.log(ducky.weight); //undefined

// ========================================================================================
// // Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
// (function () {
//   console.log("A cozy nest is ready"); //A cozy nest is ready
// })();
// // The function should be anonymous.
// // Your function should have parentheses at the end of the expression to call it immediately.

// ========================================================================================

// let isCuteMixin = function (obj) {
//   obj.isCute = function () {
//     return true;
//   };
// };
// let singMixin = function (obj) {
//   obj.sing = function () {
//     console.log("Singing to an awesome tune");
//   };
// };

// const sting = {
//   name: "Gordon Matthew Thomas Sumner",
//   age: 72,
// };

// // solution:
// let funModule = (function () {
//   return {
//     isCuteMixin: function (obj) {
//       obj.isCute = function () {
//         return true;
//       };
//     },
//     singMixin: function (obj) {
//       obj.sing = function () {
//         console.log("Singing to an awesome tune");
//       };
//     },
//   };
// })();
// funModule.singMixin(sting);

// console.log(`${sting.name} in his own ${sting.age} years ${sting.sing()}`); //Singing to an awesome tune -->Gordon Matthew Thomas Sumner in his own 72 years undefined
// ========================================================================================
// // The members of freeCodeCamp happen to love tea.
// // In the code editor, the prepareTea and getTea functions are already defined for you.
// // Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

// // Function that returns a string representing a cup of green tea
// const prepareTea = () => "greenTea";

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   console.log(teaCups); //
//   /*[
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea', 'greenTea', 'greenTea',
//     'greenTea'
//   ]*/
//   return teaCups;
// };

// // Only change code below this line
// const tea4TeamFCC = getTea(40);
// // Only change code above this line

// ========================================================================================
// // Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.
// // Note that the getTea function has been modified so it now takes a function as the first argument.
// // Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.
// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => "greenTea";

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => "blackTea";

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC); //
// /*[
//   'greenTea', 'greenTea', 'greenTea',
//   'greenTea', 'greenTea', 'greenTea',
//   'greenTea', 'greenTea', 'greenTea',
//   'greenTea', 'greenTea', 'greenTea',
//   'greenTea', 'greenTea', 'greenTea',
//   'greenTea', 'greenTea', 'greenTea',
//   'greenTea', 'greenTea', 'greenTea',
//   'greenTea', 'greenTea', 'greenTea',
//   'greenTea', 'greenTea', 'greenTea'
// ] [
//   'blackTea', 'blackTea',
//   'blackTea', 'blackTea',
//   'blackTea', 'blackTea',
//   'blackTea', 'blackTea',
//   'blackTea', 'blackTea',
//   'blackTea', 'blackTea',
//   'blackTea'
// ]*/

// ========================================================================================
// // Examine the code in the editor.
// // It's using a method that has side effects in the program, causing incorrect behaviour.
// // The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab',
// // 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.
// // Change Window.prototype.tabClose so that it removes the correct tab.

// // tabs is an array of titles of each site open within the window
// const Window = function (tabs) {
//   this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push("new tab"); // Let's open a new tab for now
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   // Only change code below this line
//   const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
//   // const tabsAfterIndex = this.tabs.splice(index); // Get the tabs after the tab

//   // =================================================
//   let tabsAfterIndex;
//   // if array that modified is less tnan index it must add last element
//   if (this.tabs.length <= index) {
//     tabsAfterIndex = this.tabs.splice(index - 1); // Get the tabs after the tab
//   } else {
//     tabsAfterIndex = this.tabs.splice(index); // Get the tabs after the tab
//   }
//   // =================================================

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
//   // Only change code above this line

//   return this;
// };

// // Let's create three browser windows
// const workWindow = new Window([
//   "GMail",
//   "Inbox",
//   "Work mail",
//   "Docs",
//   "freeCodeCamp",
// ]); // Your mailbox, drive, and other work sites
// const socialWindow = new Window([
//   "FB",
//   "Gitter",
//   "Reddit",
//   "Twitter",
//   "Medium",
// ]); // Social sites
// const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs); //

// /*[ 'FB',
//   'Gitter',
//   'Reddit',
//   'Twitter',
//   'Medium',
//   'new tab',
//   'Netflix',
//   'YouTube',
//   'GMail',
//   'Docs',
//   'freeCodeCamp',
//   'new tab' ]*/

// //v2===================================================
// // tabs is an array of titles of each site open within the window
// const Window = function (tabs) {
//   this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push("new tab"); // Let's open a new tab for now
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   // Only change code below this line

//   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
//   const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
//   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

//   // Only change code above this line

//   return this;
// };

// // Let's create three browser windows
// const workWindow = new Window([
//   "GMail",
//   "Inbox",
//   "Work mail",
//   "Docs",
//   "freeCodeCamp",
// ]); // Your mailbox, drive, and other work sites
// const socialWindow = new Window([
//   "FB",
//   "Gitter",
//   "Reddit",
//   "Twitter",
//   "Medium",
// ]); // Social sites
// const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

// ========================================================================================
// // Rewrite the code so the global array bookList is not changed inside either function.
// // The add function should add the given bookName to the end of the array passed to it and return a new array (list).
// // The remove function should remove the given bookName from the array passed to it.

// // Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
// // The global variable

// const bookList = [
//   "The Hound of the Baskervilles",
//   "On The Electrodynamics of Moving Bodies",
//   "Philosophiæ Naturalis Principia Mathematica",
//   "Disquisitiones Arithmeticae",
// ];

// // Change code below this line
// function add(newBookList, bookName) {
//   newBookList = [...bookList];
//   newBookList.push(bookName);
//   console.log(newBookList); //
//   return newBookList;

//   // Change code above this line
// }

// // Change code below this line
// function remove(newBookList, bookName) {
//   if (newBookList === bookList) {
//     newBookList = [...bookList];
//   }
//   const book_index = newBookList.indexOf(bookName);
//   if (book_index >= 0) {
//     newBookList.splice(book_index, 1);
//     console.log(newBookList); //
//     return newBookList;

//     // Change code above this line
//   }
// }

// add(bookList, "A Brief History of Time"); //should return ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
// remove(bookList, "On The Electrodynamics of Moving Bodies"); //should return ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
// remove(
//   add(bookList, "A Brief History of Time"),
//   "On The Electrodynamics of Moving Bodies"
// ); //should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

// ========================================================================================
// // The watchList array holds objects with information on several movies.
// // Use map on watchList to assign a new array of objects to the ratings variable.
// // Each movie in the new array should have only a title key with the name of the film,
// // and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this,
// // so you should replace the loop functionality with your map expression.

// // The global variable
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Only change code below this line

// // const ratings = [];
// // for (let i = 0; i < watchList.length; i++) {
// //   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// // }

// const ratings = watchList.map((rate) => ({
//   title: rate["Title"],
//   rating: rate["imdbRating"],
// }));

// // Only change code above this line

// console.log(JSON.stringify(ratings));

// ========================================================================================
// // Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
// // You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

// Array.prototype.myMap = function (callback) {
//   const newArray = [];
//   // Only change code below this line
//   console.log('"this" is ->', this); //"this" is -> [ 23, 65, 98, 5, 13 ]
//   console.log('"callback" is ->', callback.toString()); // "callback" is -> (item) => item * 2
//   // ===============================================
//   // let currentValue = this.currentValue;
//   // let index = this.index;
//   // let array = this.array;

//   // function callback(currentValue, [index], [array]) {
//   //   for (let index = 0; index < this.length; index++) {
//   //     newArray.push(this[index].currentValue);
//   //   }
//   // }
//   // ===============================================
//   // for of as alternative:
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   // Only change code above this line
//   console.log(newArray); //
//   return newArray;
// };

// [23, 65, 98, 5, 13].myMap((item) => item * 2); //should equal [46, 130, 196, 10, 26].
// ["naomi", "quincy", "camperbot"].myMap((element) => element.toUpperCase()); //should return ["NAOMI", "QUINCY", "CAMPERBOT"].
// [1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]); //should return [1, 2, 5, 2, 1].

// ========================================================================================
// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 },
// ];

// const usersUnder30 = users.filter((user) => user.age < 30);
// console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
// // or
// // const usersUnder30 = users.filter(function (user) {
// //   return user.age < 30;
// // });
// console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

// ========================================================================================
// // The variable watchList holds an array of objects with information on several movies.
// // Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys.
// // The new array should only include objects where imdbRating is greater than or equal to 8.0.
// // Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

// // The global variable
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Only change code below this line
// // ============================================================
// // create an array with needed keys and values:
// const ratings = watchList.map((rate) => ({
//   title: rate["Title"],
//   rating: rate["imdbRating"],
// }));

// // filter from an array:
// const filteredList = ratings.filter((fil) => Number(fil.rating) > 8);
// // ============================================================
// // or
// const filteredList = watchList
//   .map((rate) => ({
//     title: rate.Title,
//     rating: rate.imdbRating,
//   }))

//   .filter((fil) => Number(fil.rating) > 8);
// // Only change code above this line

// console.log(filteredList);

// // filteredList should equal
// //[{"title": "Inception", "rating": "8.8"},
// // {"title": "Interstellar", "rating": "8.6"},
// // {"title": "The Dark Knight", "rating": "9.0"},
// // {"title": "Batman Begins", "rating": "8.3"}].
// ========================================================================================

// // Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
// // You should not use the built-in filter method.
// // The Array instance can be accessed in the myFilter method using this.

// Array.prototype.myFilter = function (callback) {
//   const newArray = [];
//   console.log('"this" is ->', this); //
//   console.log('"callback" is ->', callback.toString()); //
//   // Only change code below this line
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this) == true) {
//       newArray.push(this[i]);
//     }
//   }
//   // Only change code above this line
//   console.log(newArray); //
//   return newArray;
// };

// [23, 65, 98, 5, 13].myFilter((item) => item % 2); //should equal [23, 65, 5, 13].
// ["naomi", "quincy", "camperbot"].myFilter((element) => element === "naomi"); //should return ["naomi"].
// [1, 1, 2, 5, 2].myFilter(
//   (element, index, array) => array.indexOf(element) === index
// ); //should return [1, 2, 5].

// ========================================================================================

// // Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices.
// // The function should return an array.

// function sliceArray(anim, beginSlice, endSlice) {
//   // Only change code below this line
//   const newArray = anim.slice(beginSlice, endSlice);
//   console.log(newArray); //
//   return newArray;
//   // Only change code above this line
// }

// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// sliceArray(inputAnim, 1, 3);

// sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3); //should return ["Dog", "Tiger"].
// sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1); //should return ["Cat"].
// sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4); //should return ["Dog", "Tiger", "Zebra"].

// ========================================================================================
// // Rewrite the function nonMutatingSplice by using slice instead of splice.
// // It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

// function nonMutatingSplice(cities) {
//   // Only change code below this line

//   console.log(cities.slice(0, 3)); //[ 'Chicago', 'Delhi', 'Islamabad' ]
//   return cities.slice(0, 3);

//   // Only change code above this line
// }

// const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// nonMutatingSplice(inputCities);

// //nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) //should return ["Chicago", "Delhi", "Islamabad"]
// ========================================================================================
// // Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original.
// // The function should return the concatenated array.
// function nonMutatingConcat(original, attach) {
//   // Only change code below this line
//   console.log(original.concat(attach)); //[1, 2, 3, 4, 5]
//   return original.concat(attach);
//   // Only change code above this line
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingConcat(first, second);

// nonMutatingConcat([1, 2, 3], [4, 5]); //should return [1, 2, 3, 4, 5].
// ========================================================================================
// // Change the nonMutatingPush function so it uses concat to merge newItem to the end of original without mutating original or newItem arrays.
// // The function should return an array.
// function nonMutatingPush(original, newItem) {
//   // Only change code below this line
//   console.log(original.concat(newItem)); //[ 1, 2, 3, 4, 5 ]
//   return original.concat(newItem);

//   // Only change code above this line
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingPush(first, second);

// // nonMutatingPush([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5]
// ========================================================================================
//REDUCE
// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 },
// ];

// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumOfAges); //64
// //===================================

// const usersObj = users.reduce((obj, user) => {
//   obj[user.name] = user.age;
//   return obj;
// }, {});
// console.log(usersObj); //{ John: 34, Amy: 20, camperCat: 10 }
// //===================================

// var flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce(function (a, b) {
//   return a.concat(b);
// });
// console.log(flattened); //[ 0, 1, 2, 3, 4, 5 ]
// //===================================

// let arr39 = [1, 2, 3, 4, 5];
// let reduceValueOne = arr39.reduce(function (previousValue, item, index, array) {
//   return item + previousValue;
// }, 0);
// console.log(reduceValueOne); //10

// ========================================================================================
// // The variable watchList holds an array of objects with information on several movies.
// // Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
// // Recall from prior challenges how to filter data and map over it to pull what you need.
// // You may need to create other variables, and return the average rating from getRating function.
// // Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

// // The global variable
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// function getRating(watchList) {
//   // Only change code below this line
//   let averageRating = watchList
//     .filter((item) => item.Director === "Christopher Nolan")
//     .reduce((accum, item) => accum + Number(item.imdbRating), 0);
//   let num = watchList.filter(
//     (item) => item.Director === "Christopher Nolan"
//   ).length;
//   averageRating = averageRating / num;
//   // Only change code above this line
//   return averageRating;
// }

// console.log(getRating(watchList)); //8.675
// ========================================================================================
// // Complete the code for the squareList function using any combination of map(), filter(), and reduce().
// // The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. \
// // Note: Your function should not use any kind of for or while loops or the forEach() function.
// const squareList = (arr) => {
//   // Only change code below this line
//   const arr2 = arr
//     .filter((item) => item > 0 && item === Math.round(item))
//     .map((item) => item * item);
//   return arr2;
//   // Only change code above this line
// };

// let squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]); //should return [25, 9].
// console.log(squaredIntegers); //[25, 9].
// squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]); //should return [16, 1764, 36].
// console.log(squaredIntegers); //[16, 1764, 36]
// squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]); //should return [9, 100, 49].
// console.log(squaredIntegers); //[9, 100, 49]

// ========================================================================================
// // Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
// // The function should return the sorted array.

// function alphabeticalOrder(arr) {
//   // Only change code below this line
//   arr.sort();
//   console.log(arr); //
//   return arr;
//   // Only change code above this line
// }

// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); //should return ["a", "a", "c", "d", "g", "z"].
// alphabeticalOrder(["x", "h", "a", "m", "n", "m"]); //should return ["a", "h", "m", "m", "n", "x"].
// alphabeticalOrder(["a", "a", "a", "a", "x", "t"]); //should return ["a", "a", "a", "a", "t", "x"].

// ========================================================================================
// // Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
// // The function should return a new array, and not mutate the globalArray variable.
// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Only change code below this line
//   const arr2 = arr.slice();
//   //or
//   // const arr2 = arr.concat();
//   //or
//   // const arr2 = [].concat(arr);
//   console.log(arr2); //
//   arr2.sort(compareFunction);
//   function compareFunction(a, b) {
//     return a - b;
//   }
//   return arr2;
//   console.log(arr2); //
//   // Only change code above this line
// }

// nonMutatingSort(globalArray); //should return [2, 3, 5, 6, 9].
// nonMutatingSort([1, 30, 4, 21, 100000]); //should return [1, 4, 21, 30, 100000].
// nonMutatingSort([140000, 104, 99]); //should return [99, 104, 140000].
// ========================================================================================
// // Use the split method inside the splitify function to split str into an array of words.
// // The function should return the array.
// // Note that the words are not always separated by spaces, and the array should not contain punctuation.
// function splitify(str) {
//   // Only change code below this line

//   const arr = str.split(/\W/);
//   console.log(arr); // ["Hello", "World", "I", "am", "code"]
//   return arr;
//   // Only change code above this line
// }

// splitify("Hello World,I-am code"); //should return ["Hello", "World", "I", "am", "code"].
// splitify("Earth-is-our home"); //should return ["Earth", "is", "our", "home"].
// splitify("This.is.a-sentence"); //should return ["This", "is", "a", "sentence"].

// ========================================================================================
// // Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.
// // The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars.
// // For this challenge, do not use the replace method.
// function sentensify(str) {
//   // Only change code below this line
//   //1. make string to be array:
//   const arr = str.split(/\W/);
//   //2. make arrays to be string:
//   const str2 = arr.join(" ");
//   console.log(str2); //May the force be with you
//   return str2;
//   // Only change code above this line
// }

// sentensify("May-the-force-be-with-you"); //should return the string May the force be with you.
// sentensify("The.force.is.strong.with.this.one"); //should return the string The force is strong with this one.
// sentensify("There,has,been,an,awakening"); //should return the string There has been an awakening.

// ========================================================================================
// // Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
// // You can use any of the methods covered in this section, and don't use replace.
// // Here are the requirements:
// // The input is a string with spaces and title-cased words
// // The output is a string with the spaces between words replaced by a hyphen (-)
// // The output should be all lower-cased letters
// // The output should not have any spaces

// // Only change code below this line
// function urlSlug(title) {
//   const url = title
//     .toLowerCase()
//     // make the array:
//     .split(/ /)
//     // make clean words from the array:
//     .filter(function (item) {
//       item !== "";
//       return item;
//     })
//     .join("-");
//   console.log(url); //
//   return url;
// }
// // Only change code above this line

// urlSlug("Winter Is Coming"); //should return the string winter-is-coming.
// urlSlug(" Winter Is  Coming"); //should return the string winter-is-coming.
// urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"); //should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.
// urlSlug("Hold The Door"); //should return the string hold-the-door.

// ========================================================================================
// // Use the every method inside the checkPositive function to check if every element in arr is positive.
// // The function should return a Boolean value.
// function checkPositive(arr) {
//   // Only change code below this line
//   function isTrue(currentValue) {
//     return currentValue >= 0;
//   }
//   console.log(arr.every(isTrue)); // false--true--false
//   return arr.every(isTrue);
//   // Only change code above this line
// }

// checkPositive([1, 2, 3, -4, 5]); //should return false.
// checkPositive([1, 2, 3, 4, 5]); //should return true.
// checkPositive([1, -2, 3, -4, 5]); //should return false.

// ========================================================================================
// // Use the some method inside the checkPositive function to check if any element in arr is positive.
// // The function should return a Boolean value.
// function checkPositive(arr) {
//   // Only change code below this line
//   return arr.some(function (currentValue) {
//     return currentValue >= 0;
//   });
//   // Only change code above this line
// }

// checkPositive([1, 2, 3, -4, 5]); //should return true.
// checkPositive([1, 2, 3, 4, 5]); //should return true.
// checkPositive([-1, -2, -3, -4, -5]); //should return false.

// ========================================================================================
// // Carrying:
// function getPersonInfo(name, city, age) {
//   return [name, city, age];
// }
// console.log(getPersonInfo("John", "Kyiv", 25)); //[ 'John', 'Kyiv', 25 ]

// function getPersonInfo2(name) {
//   return function (city) {
//     return function (age) {
//       return [name, city, age];
//     };
//   };
// }
// console.log(getPersonInfo2("John")("Kyiv")(25)); //[ 'John', 'Kyiv', 25 ]

// function getPersonInfo3(name) {
//   return function (city, age) {
//     return [name, city, age];
//   };
// }
// console.log(getPersonInfo3("John")("Kyiv", 25)); //[ 'John', 'Kyiv', 25 ]
// Universal carrying:============================================
// function getPersonInfo(name, city, age) {
//   return [name, city, age];
// }
// function carry(func) {
//   return function inner(...args1) {
//     if (func.length === args1.length) {
//       return func(...args1);
//     }
//     return function (...args2) {
//       return inner(...args1, ...args2);
//     };
//   };
// }
// const infoGetter = carry(getPersonInfo);
// console.log(infoGetter("John", "Kyiv", 25)); //[ 'John', 'Kyiv', 25 ]
// console.log(infoGetter("John", "Kyiv")(25)); //[ 'John', 'Kyiv', 25 ]
// console.log(infoGetter("John")("Kyiv")(25)); //[ 'John', 'Kyiv', 25 ]

// ========================================================================================

// function unCurried(x, y) {
//   return x + y;
// }

// function curried(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// // or:
// // const curried = (x) => (y) => x + y;

// console.log(curried(1)(2)); //3
// curried(1)(2);

// const funcForY = curried(1);
// console.log(funcForY(2)); // 3

// ========================================================================================
// // Fill in the body of the add function so it uses currying to add parameters x, y, and z.
// function add(x) {
//   // Only change code below this line
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
//   // or using ES6:--------------------------
//   return (y) => (z) => x + y + z;
//   //------------------------------------------
//   // Only change code above this line
// }

// add(10)(20)(30);
// console.log(add(10)(20)(30)); //60
// console.log(add(1)(2)(3)); //6
// console.log(add(11)(22)(33)); //66

// ========================================================================================
// // Sum All Numbers in a Range
// // We'll pass you an array of two numbers.
// // Return the sum of those two numbers plus the sum of all the numbers between them.
// // The lowest number will not always come first.

// // For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// function sumAll(arr) {
//   // 1	find min argument:
//   const min = Math.min(...arr);
//   // 2	find max argument:
//   const max = Math.max(...arr);
//   // 3	cycle to push the middle arguments to an array:
//   const arrMid = [];
//   for (let i = 1; i < max - min; i++) {
//     arrMid.push(min + i);
//   }
//   // 4	concat the arrays:
//   const arrFull = arrMid.concat([min, max]);
//   // 5	reduce to sum of all arguments of array:
//   const result = arrFull.reduce(function (prev, item) {
//     return prev + item;
//   }, 0);
//   console.log(result); //
//   return result;
// }

// sumAll([1, 4]); //should return 10.
// sumAll([4, 1]); //should return 10.
// sumAll([5, 10]); //should return 45.
// sumAll([10, 5]); //should return 45.

// ========================================================================================
// // Diff Two Arrays
// // Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// // In other words, return the symmetric difference of the two arrays.
// // Note: You can return the array with its elements in any order.

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   //=====================================
//   if (arr1.length === 0 && arr2.length !== 0) {
//     for (let index = 0; index < arr2.length; index++) {
//       newArr.push(arr2[index]);
//     }
//     console.log(newArr); //
//     return newArr;
//   }
//   if (arr2.length === 0 && arr1.length !== 0) {
//     for (let index = 0; index < arr1.length; index++) {
//       newArr.push(arr1[index]);
//     }
//     console.log(newArr); //
//     return newArr;
//   }
//   //=====================================
//   for (let index = 0; index < arr1.length; index++) {
//     for (let j = 0; j < arr2.length; j++) {
//       let unic1 = arr1.includes(arr2[j]);
//       let unic2 = arr2.includes(arr1[index]);
//       if (unic1 === false) {
//         if (!newArr.includes(arr2[j])) {
//           newArr.push(arr2[j]);
//         }
//       }
//       if (unic2 === false) {
//         if (!newArr.includes(arr1[index])) {
//           newArr.push(arr1[index]);
//         }
//       }
//     }
//   }
//   console.log(newArr); //
//   return newArr;
// }

// diffArray(
//   ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//   ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// ); //should return ["pink wool"].
// diffArray(
//   ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//   ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// ); //should return ["diorite", "pink wool"].
// diffArray(
//   ["andesite", "grass", "dirt", "dead shrub"],
//   ["andesite", "grass", "dirt", "dead shrub"]
// ); //should return [].
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //should return [4].
// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); //should return ["piglet", 4].
// diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); //should return ["snuffleupagus", "cookie monster", "elmo"].
// diffArray([1, "calf", 3, "piglet"], [7, "filly"]); //should return [1, "calf", 3, "piglet", 7, "filly"].

// ========================================================================================
// // Seek and Destroy
// // You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// // Remove all elements from the initial array that are of the same value as these arguments.

// // Note: You have to use the arguments object.

// function destroyer(arr) {
//   // 1. extract an array and the arguments seperately:
//   const arrToSeek = [];
//   const arrTargets = [];
//   for (let index = 0; index < arguments.length; index++) {
//     if (typeof arguments[index] === "object") {
//       arrToSeek.push(...arguments[index]);
//     } else {
//       arrTargets.push(arguments[index]);
//     }
//   }
//   // 2. return an array without the arguments
//   const newArr = [];
//   for (let j = 0; j < arrToSeek.length; j++) {
//     let unic1 = arrTargets.includes(arrToSeek[j]);
//     if (unic1 === false) {
//       newArr.push(arrToSeek[j]);
//     }
//   }
//   console.log(newArr); //
//   arr = newArr;
//   return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3); //should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5); //should return [1].
// destroyer([2, 3, 2, 3], 2, 3); //should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53); //should return ["hamburger"].
// destroyer(
//   [
//     "possum",
//     "trollo",
//     12,
//     "safari",
//     "hotdog",
//     92,
//     65,
//     "grandma",
//     "bugati",
//     "trojan",
//     "yacht",
//   ],
//   "yacht",
//   "possum",
//   "trollo",
//   "safari",
//   "hotdog",
//   "grandma",
//   "bugati",
//   "trojan"
// ); //should return [12,92,65].
// ========================================================================================
// // Wherefore art thou
// // Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// // Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// // For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
// // then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// // my solution=======================================================================================
// //!plan:
// // 1 source to array that consist of 2 or more strings key and value;
// // 2 every object in collection we turn to string and compare with 1st string of source and 2nd string of source;
// // 3 if source.length>1:
// // 4. if they are true --> push it to arrName.
// function whatIsInAName(collection, source) {
//   // console.log(collection); // [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }]
//   // console.log(source); // { apple: 1, cookie: 2 }
//   // console.log(collection.length); //3
//   const arrName = [];
//   const arrSour = JSON.stringify(source)
//     .slice(1, JSON.stringify(source).length - 1)
//     .split(",");
//   // loop:
//   for (let index = 0; index < collection.length; index++) {
//     for (let j = 0; j < arrSour.length; j++) {
//       // separator of object to string in source:
//       const strCollection = JSON.stringify(collection[index]);
//       // conditions:
//       const arrUnic = [];
//       for (let index = 0; index < arrSour.length; index++) {
//         arrUnic.push(strCollection.includes(arrSour[index]));
//       }
//       // make conditions:
//       const getStringOfCondition = JSON.stringify(arrUnic)
//         .slice(1, JSON.stringify(arrUnic).length - 1)
//         .replace(",", " && ");
//       // make string conditions turn into boolean:
//       const assignToBoolean = !getStringOfCondition.includes(false)
//         ? true
//         : false;
//       // check conditions:
//       if (assignToBoolean === true) {
//         if (!arrName.includes(collection[index])) {
//           arrName.push(collection[index]);
//         }
//       }
//     }
//   }
//   // 4. if they are true --> push it to arrName:
//   console.log(arrName); //
//   return arrName;
// }
// // suggesed variant=======================================================================================
// function whatIsInAName(collection, source) {
//   const souceKeys = Object.keys(source);
//   console.log(souceKeys); //[ 'last' ]
//   // filter the collection
//   return collection.filter((obj) => {
//     for (let i = 0; i < souceKeys.length; i++) {
//       if (
//         !obj.hasOwnProperty(souceKeys[i]) ||
//         obj[souceKeys[i]] !== source[souceKeys[i]]
//       ) {
//         return false;
//       }
//     }
//     return true;
//   });
// }
// // =======================================================================================================
// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" },
//   ],
//   { last: "Capulet" }
// ); //should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 }); //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// whatIsInAName(
//   [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, bat: 2 }
// ); //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName(
//   [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, cookie: 2 }
// ); //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName(
//   [
//     { apple: 1, bat: 2 },
//     { apple: 1 },
//     { apple: 1, bat: 2, cookie: 2 },
//     { bat: 2 },
//   ],
//   { apple: 1, bat: 2 }
// ); //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }); //should return []
// whatIsInAName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 }); //should return []

// ========================================================================================
// // Spinal Tap Case
// // Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// // !Plan:
// // 1. Brake down words with upperCase. Use RegExp.
// // 2. Replace spaces and special symbols to dashes.
// // 3. Make it toLowerCase.

// function spinalCase(str) {
//   const splitStr = str
//     .match(/.[^A-Z]*/g)
//     .join("_")
//     .replace(/_|\s/g, "-")
//     .replace(/--/g, "-")
//     .toLowerCase();
//   console.log(splitStr); //
//   return splitStr;
// }
// // suggesed variant================================
// function spinalCase(str) {
//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }
// // suggesed variant================================

// spinalCase("This Is Spinal Tap"); //should return the string this-is-spinal-tap.
// spinalCase("thisIsSpinalTap"); //should return the string this-is-spinal-tap.
// spinalCase("The_Andy_Griffith_Show"); //should return the string the-andy-griffith-show.
// spinalCase("Teletubbies say Eh-oh"); //should return the string teletubbies-say-eh-oh.
// spinalCase("AllThe-small Things"); //should return the string all-the-small-things.

// ========================================================================================
// Pig Latin
// Pig Latin is a way of altering English Words.
// The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin.
// Input strings are guaranteed to be English words in all lowercase.

// !Plan:
// 1. Define words with consonant and vowel. Use RegExp.
// 2. Replace characters to end + add characters.
// function translatePigLatin(str) {
//   // *1.1 Define words with consonant 1 or 2 and following vowel
//   if (str.match(/^[b-df-hjk-np-tv-z][aeiou]|^[b-df-hjk-np-tv-z]{2}[aeiou]/)) {
//     console.log(`case1`); //
//     //1.1.1 one character:
//     if (str.match(/^[b-df-hjk-np-tv-z][aeiou]/)) {
//       str = str.slice(1) + str.slice(0, 1) + "ay";
//       console.log(str); //
//       return str;
//     }
//     //1.1.2 two characters:
//     if (str.match(/^[b-df-hjk-np-tv-z]{2}[aeiou]/)) {
//       str = str.slice(2) + str.slice(0, 2) + "ay";
//       console.log(str); //
//       return str;
//     }
//   }
//   // *1.2 Define words with start from vowel:
//   if (str.match(/^[aeiou]/)) {
//     console.log(`case2 ${str + "way"}`); //
//     return str + "way";
//   }
//   // 1.3 Define words with 3 or more consonant
//   if (str.match(/^[b-df-hjk-np-tv-z]{3,}[aeiou]/)) {
//     console.log(`case3`); //
//     for (let index = 0; index < str.length; index++) {
//       if (str[index].match(/[aeiou]/)) {
//         console.log(str[index]); //
//         str = str.slice(index) + str.slice(0, index) + "ay";
//         console.log(str); //
//         return str;
//       }
//     }
//   }
//   // *1.4 Define words with whole word are consonant:
//   let regexp = new RegExp(`^[b-df-hjk-np-tv-z]{${str.length}}`); // special syntax to add a variable to RegEx
//   if (str.match(regexp)) {
//     console.log(`case4 ${str + "ay"}`); //
//     return str + "ay";
//   }
//   return str;
// }

// // suggesed variant================================

// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
//     : str.concat("way");
// }

// // Code Explanation
// // start at beginning and get longest match of everything not a vowel (consonants)
// // if regex pattern found, it saves the match; else, it returns null
// // if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end
// // if regex pattern not found (starts with vowels), it just adds “way” to the ending

// // suggesed variant================================

// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

// // Code Explanation
// // Use replace() on the string, using a regular expression to check if the first letter is a consonant and adding way at the end in this case.
// // If the first letter is a consonant nothing will happen at this point.
// // Use replace() again to check for consonants at the beginning of the word and to move it or them to the end of the word and add ay at the end.

// // suggesed variant================================

// translatePigLatin("consonant"); //should return the string onsonantcay.
// translatePigLatin("california"); //should return the string aliforniacay.
// translatePigLatin("paragraphs"); //should return the string aragraphspay.
// translatePigLatin("glove"); //should return the string oveglay.
// translatePigLatin("algorithm"); //should return the string algorithmway.
// translatePigLatin("eight"); //should return the string eightway.
// translatePigLatin("schwartz"); //should return the string artzschway. Should handle words where the first vowel comes in the middle of the word.
// translatePigLatin("rhythm"); //should return the string rhythmay. Should handle words without vowels.

// ========================================================================================
// // Search and Replace
// // Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// // First argument is the sentence to perform the search and replace on.
// // Second argument is the word that you will be replacing (before).
// // Third argument is what you will be replacing the second argument with (after).
// // Note: Preserve the case of the first character in the original word when you are replacing it.
// // For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

// function myReplace(str, before, after) {
//   return before.match(/^[A-Z]/)
//     ? str.replace(before, after.charAt().toUpperCase().concat(after.slice(1)))
//     : str.replace(before, after.toLowerCase());
// }

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); //should return the string A quick brown fox leaped over the lazy dog.
// myReplace("Let us go to the store", "store", "mall"); //should return the string Let us go to the mall.
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); //should return the string He is Sitting on the couch.
// myReplace("I think we should look up there", "up", "Down"); //should return the string I think we should look down there.
// myReplace("This has a spellngi error", "spellngi", "spelling"); //should return the string This has a spelling error.
// myReplace("His name is Tom", "Tom", "john"); //should return the string His name is John.
// myReplace("Let us get back to more Coding", "Coding", "algorithms"); //should return the string Let us get back to more Algorithms.

// ========================================================================================
// // DNA Pairing
// // Pairs of DNA strands consist of nucleobase pairs.
// // Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// // The DNA strand is missing the pairing element.
// // Write a function to match the missing base pairs for the provided DNA strand.
// // For each character in the provided string, find the base pair character.
// // Return the results as a 2d array.

// // For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// // The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// //Problem Explanation
// // You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs.
// // Keep in mind that the provided strand should be first always.

// // Another way to interpret the problem: there are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”.
// // “A” and “T” are always paired together, and “G” and “C” are always paired together.
// // This problem presents you with an input, e.g. “ATCGA”.
// // Each of those five characters are missing their pairs.
// // E.g. the first character “A” needs to be paired with “T” to give the array element [“A”, “T”].
// // The second character “T” needs to be paired with “A” to give the array element [“T”, “A”].
// // The number of elements in the final output equals the number of characters in the input.

// // This problem does not involve rearranging the input into different combinations or permutations.

// function pairElement(str) {
//   const arrStr = [];
//   for (let index = 0; index < str.length; index++) {
//     switch (str[index]) {
//       case "C":
//         arrStr.push([str[index], "G"]);
//         break;
//       case "G":
//         arrStr.push([str[index], "C"]);
//         break;
//       case "A":
//         arrStr.push([str[index], "T"]);
//         break;
//       case "T":
//         arrStr.push([str[index], "A"]);
//         break;
//     }
//   }
//   console.log(arrStr); //
//   return arrStr;
// }

// // suggesed variant================================
// function pairElement(str) {
//   // create object for pair lookup
//   const pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };

//   // map character to array of character and matching pair
//   return str.split("").map((x) => [x, pairs[x]]);
// }
// // Code Explanation
// // First define an object with all pair possibilities, this allows us to easily find by key or value.
// // Split str into a characters array so we can use each letter to find its pair.
// // Use the map function to map each character in the array of individual characters to an array
// // with the character and its matching pair, creating a 2D array.
// // suggesed variant================================

// pairElement("GCG"); //should return [["G", "C"], ["C","G"], ["G", "C"]]
// pairElement("ATCGA"); //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG"); //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA"); //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

// ========================================================================================
// //Missing letters
// // Find the missing letter in the passed letter range and return it.

// // If all letters are present in the range, return undefined.

// // !Plan:
// // 1. Create an array with ABC.
// // 2. Find first character and lst character.
// // 3. Find ubound of array (index of last character).
// // 4. Create the array to compare with.
// // 5. Compare 2 arrays.
// // 6. Return the missing index.

// function fearNotLetter(str) {
//   const arrABC = "abcdefghijklmnopqrstuvwxyz".split("");
//   const firstChar = str.split("").shift();
//   const firstIndex = arrABC.indexOf(firstChar);

//   const lastChar = str.split("").pop();
//   const arrComp = [];
//   let lenthComp = 0;
//   // console.log(arrABC); //
//   // console.log(firstChar); // s
//   // console.log(lastChar); // e
//   for (let index = 0; index < arrABC.length; index++) {
//     if (arrABC[index] === lastChar) {
//       lenthComp = index;
//       // console.log(lenthComp); //
//     }
//   }
//   for (let index = firstIndex; index <= lenthComp; index++) {
//     arrComp.push(arrABC[index]);
//   }
//   // console.log(arrComp); //
//   // console.log(str.split("")); //

//   const missedChar = str
//     .split("")
//     .map((elem, index) => (elem.includes(arrComp[index]) ? "" : arrComp[index]))
//     .toString()
//     .replace(/,/g, "")[0];

//   // console.log(missedChar); //
//   return missedChar;
// }

// // suggesed variant================================
// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; ++i) {
//     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }
// // Code Explanation
// // Loop over the string
// // Check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table)
// // Return the missing character ( +1 from where the gap was detected)
// // suggesed variant================================

// fearNotLetter("abce"); //should return the string d.
// fearNotLetter("abcdefghjklmno"); //should return the string i.
// fearNotLetter("stvwx"); //should return the string u.
// fearNotLetter("bcdf"); //should return the string e.
// fearNotLetter("abcdefghijklmnopqrstuvwxyz"); //should return undefined.

// ========================================================================================
// // Sorted Union
// // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// // In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// // The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// // Check the assertion tests for examples.

// // !Plan:
// // 1. Create total array.
// // 2. Find unique values by filter.

// function uniteUnique(...arr) {
//   const arrTot = arr
//     .toString()
//     .split(",")
//     .map(function (element) {
//       return Number(element);
//     }); // convert all arguments (arrays) to a string, make it an array, convert elements to numbers.
//   const unique = arrTot.filter(
//     (value, index, array) => array.indexOf(value) === index
//   ); // filter unic elements.
//   arr = unique; //
//   console.log(arr); //
//   return arr;
// }

// // suggesed variant================================
// function uniteUnique(arr) {
//   const args = [...arguments];
//   const result = [];
//   for (let i = 0; i < args.length; i++) {
//     for (let j = 0; j < args[i].length; j++) {
//       if (!result.includes(args[i][j])) {
//         result.push(args[i][j]);
//       }
//     }
//   }
//   return result;
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// // suggesed variant================================

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]); //should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); //should return [1, 2, 3, 5, 4, 6, 7, 8].
// uniteUnique([1, 3, 2], [5, 4], [5, 6]); //should return [1, 3, 2, 5, 4, 6].
// uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4].

// ========================================================================================
// // Convert HTML Entities
// // Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// function convertHTML(str) {
//   const arrToFind = ["&", "<", ">", '"', "'"];
//   const arrToReplace = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

//   for (let index = 0; index < arrToFind.length; index++) {
//     str = str.replaceAll(arrToFind[index], arrToReplace[index]);
//   }
//   return str;
// }

// // suggesed variant================================
// function convertHTML(str) {
//   var characters = [/&/g, /</g, />/g, /\"/g, /\'/g];
//   var entities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

//   for (var i = 0; i < characters.length; i++) {
//     str = str.replace(characters[i], entities[i]);
//   }
//   return str;
// }

// function convertHTML(str) {
//   // Split by character to avoid problems.

//   var temp = str.split("");

//   // Since we are only checking for a few HTML elements, use a switch

//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }

//   temp = temp.join("");
//   return temp;
// }
// // suggesed variant================================
// convertHTML("Hamburgers < Pizza < Tacos"); //should return the string Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve"); //should return the string Sixty &gt; twelve.
// convertHTML("Dolce & Gabbana"); //should return the string Dolce &amp; Gabbana.
// convertHTML('Stuff in "quotation marks"'); //should return the string Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List"); //should return the string Schindler&apos;s List.
// convertHTML("<>"); //should return the string &lt;&gt;.
// convertHTML("abc"); //should return the string abc.

// ========================================================================================
// // Sum All Odd Fibonacci Numbers
// // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// // The first two numbers in the Fibonacci sequence are 0 and 1.
// // Every additional number in the sequence is the sum of the two previous numbers.
// // The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// // For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// function sumFibs(num) {
//   const arrFib = [0, 1];
//   for (let index = 0; index < num; index++) {
//     const element = arrFib[index] + arrFib[index + 1];
//     arrFib.push(element);
//   }
//   const newArr = arrFib.filter(function (element) {
//     const result = element % 2 === 1 && element <= num;
//     return result;
//   });
//   const result = newArr.reduce(function (previous, current) {
//     return previous + current;
//   });
//   console.log(result);
//   return result;
// }

// // suggesed variant================================
// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }
//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }

// // Code Explanation
// // Create a variable to keep record of the current and previous numbers along with the result that will be returned.
// // Use a while loop to make sure we do not go over the number given as parameter.
// // We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
// // Complete the Fibonacci circle by rotating getting the next number and swapping values after.
// // Return the result.
// // suggesed variant================================

// sumFibs(1); //should return a number.
// sumFibs(1000); //should return 1785.
// sumFibs(4000000); //should return 4613732.
// sumFibs(4); //should return 5.
// sumFibs(75024); //should return 60696.
// sumFibs(75025); //should return 135721.

// ========================================================================================
// // Sum All Primes
// // A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// // For example, 2 is a prime number because it is only divisible by 1 and 2.
// // In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// // Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
// function sumPrimes(num) {
//   const arr = [];
//   for (let i = 0; i <= num; i++) {
//     if (isPrime(i)) arr.push(i);
//   }
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
//   // ======================================================
//   const result = arr.reduce(function (previous, current) {
//     return previous + current;
//   }, 0);
//   console.log(arr); //
//   console.log(result); //
//   return result;
// }

// sumPrimes(10); //should return 17.
// sumPrimes(977); //should return 73156.

// ========================================================================================
// // Smallest Common Multiple
// // Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// // The range will be an array of two numbers that will not necessarily be in numerical order.
// // For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
// // The answer here would be 6.

// // An example would be the numbers 3 and 4.
// // The multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, ....
// // The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.
// // An faster approach is to check all multiples of 4 to see if they are also multiples of 3, by checking the remainder when we divide the multiple of 4 by 3.

// function smallestCommons(arr) {
//   const arrNew = [];
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   //1. get the array of numbers.
//   for (let i = max; i >= min; i--) {
//     arrNew.push(i);
//   }
//   //2. multiply items of array to get the Low bound:
//   const lowBound = arrNew.reduce(function (prev, curr) {
//     return prev * curr;
//   }, 1);
//   //3. create and find arrays with all items as in arrNew (check if i divide of item ):
//   for (let i = max; i <= lowBound; i++) {
//     const arrTemp = [];
//     for (let j = min; j <= max; j++) {
//       if (i % j === 0) {
//         arrTemp.push(j);
//       }
//     }
//     //4. compare the length of arrays:
//     if (arrTemp.length === arrNew.length) {
//       return console.log(i); //
//     }
//   }
//   return i;
// }

// // suggesed variant================================
// function smallestCommons(arr) {
//   const min = Math.min(arr[0], arr[1]),
//     max = Math.max(arr[0], arr[1]),
//     range = [...Array(max + 1).keys()].slice(min);

//   return range.reduce(function (a, b) {
//     for (let i = a; i <= a * b; i += a) {
//       if (i % b === 0) return i;
//     }
//   });
// }
// // suggesed variant================================

// smallestCommons([1, 5]); //should return 60.
// smallestCommons([5, 1]); //should return 60.
// smallestCommons([2, 10]); //should return 2520.
// smallestCommons([1, 13]); //should return 360360.
// smallestCommons([23, 18]); //should return 6056820.

// ========================================================================================
// // Drop it
// // Given the array arr, iterate through and remove each element starting from the first element (the 0 index)
// // until the function func returns true when the iterated element is passed through it.

// // Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// function dropElements(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i]) === true) {
//       console.log(arr); //
//       return arr;
//     } else {
//       arr.shift();
//       i--;
//     }
//   }
//   console.log(arr); //
//   return arr;
// }

// dropElements([1, 2, 3], function (n) {
//   return n < 3; //should return [1, 2, 3].
// });

// // suggesed variant================================
// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   return arr;
// }
// // Use a while loop with Array.prototype.shift() to continue checking
// // and dropping the first element of the array until the function returns true.
// // It also makes sure the array is not empty first to avoid infinite loops.
// // Return the filtered array.

// // suggesed variant================================
// function dropElements(arr, func) {
//   let sliceIndex = arr.findIndex(func);
//   return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
// }

// // Use ES6 findIndex() function to find the index of the element that passes the condition
// // Slice the array from the found index until the end
// // There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice().
// // In this case use a simple conditional operator to return false instead of -1.
// // And the ternary operator returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.

// // suggesed variant================================
// function dropElements(arr, func) {
//   return arr.length > 0 && !func(arr[0])
//     ? dropElements(arr.slice(1), func)
//     : arr;
// }
// // Use recursion to solve the challenge

// // suggesed variant================================

// dropElements([1, 2, 3, 4], function (n) {
//   return n >= 3;
// }); //should return [3, 4].
// dropElements([0, 1, 0, 1], function (n) {
//   return n === 1;
// }); //should return [1, 0, 1].
// dropElements([1, 2, 3], function (n) {
//   return n > 0;
// }); //should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function (n) {
//   return n > 5;
// }); //should return [].
// dropElements([1, 2, 3, 7, 4], function (n) {
//   return n > 3;
// }); //should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function (n) {
//   return n > 2;
// }); //should return [3, 9, 2].

// ========================================================================================
// // Steamroller
// // Flatten a nested array. You must account for varying levels of nesting.
// function steamrollArray(arr) {
//   const arrNew = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       arrNew.push(...steamrollArray(item));
//     } else {
//       arrNew.push(item);
//     }
//   });
//   console.log(arrNew); //
//   return arrNew;
// }

// // suggesed variant================================
// function steamrollArray(arr) {
//   return arr
//     .toString()
//     .replace(",,", ",") // "1,2,,3" => "1,2,3"
//     .split(",") // ['1','2','3']
//     .map(function (v) {
//       if (v == "[object Object]") {
//         // bring back empty objects
//         return {};
//       } else if (isNaN(v)) {
//         // if not a number (string)
//         return v;
//       } else {
//         return parseInt(v); // if a number in a string, convert it
//       }
//     });
// }
// // First we turn the array to a string, which will give us a string of numbers separated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix later in our if statement.
// // We replace the double comma with one, then split it back into an array.
// // map through the array and fix object values and convert string numbers to regular numbers.

// // suggesed variant================================
// function steamrollArray(arr) {
//   const flattenedArray = [];
//   // Loop over array contents
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // Recursively flatten entries that are arrays
//       //  and push into the flattenedArray
//       flattenedArray.push(...steamrollArray(arr[i]));
//     } else {
//       // Copy contents that are not arrays
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// }
// // Create a new variable to keep flattened arrays.
// // Loop over the elements of the array
// // If the element is an array then call the function again with to flatten the subarray and push the contents of the flattened subarray into the flattened array.
// // If the element is not an array, then push that non-array element to the flattened array.
// // Return the flattened array.

// // suggesed variant================================

// steamrollArray([[["a"]], [["b"]]]); //should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
// // Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// // Global variables should not be used.

// ========================================================================================
// // Binary Agents
// // Return an English translated sentence of the passed binary string.
// // The binary string will be space separated.

// function binaryAgent(str) {
//   str = str
//     .split(" ") // make the string become an array
//     .map((element) => {
//       return String.fromCharCode(parseInt(element, 2));
//     }) // for each element of the array convert binary to a digit (parseInt -->65) and then convert the digit into a character (String.fromCharCode -->A)
//     .join(""); // then we join the array of characters into a sentence
//   console.log(str); //
//   return str;
// }

// binaryAgent(
//   "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// ); //should return the string Aren't bonfires fun!?
// binaryAgent(
//   "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
// ); //should return the string I love FreeCodeCamp!

// ========================================================================================
// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects.
// The predicate pre will be an object property and you need to return true if its value is truthy.
// Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  return pre;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
); //should return false.
// truthCheck(
//   [
//     { name: "Quincy", role: "Founder", isBot: false },
//     { name: "Naomi", role: "", isBot: false },
//     { name: "Camperbot", role: "Bot", isBot: true },
//   ],
//   "name"
// ); //should return true.
// truthCheck(
//   [
//     { name: "Quincy", role: "Founder", isBot: false },
//     { name: "Naomi", role: "", isBot: false },
//     { name: "Camperbot", role: "Bot", isBot: true },
//   ],
//   "role"
// ); //should return false.
// truthCheck(
//   [
//     { name: "Pikachu", number: 25, caught: 3 },
//     { name: "Togepi", number: 175, caught: 1 },
//   ],
//   "number"
// ); //should return true.
// truthCheck(
//   [
//     { name: "Pikachu", number: 25, caught: 3 },
//     { name: "Togepi", number: 175, caught: 1 },
//     { name: "MissingNo", number: NaN, caught: 0 },
//   ],
//   "caught"
// ); //should return false.
// truthCheck(
//   [
//     { name: "Pikachu", number: 25, caught: 3 },
//     { name: "Togepi", number: 175, caught: 1 },
//     { name: "MissingNo", number: NaN, caught: 0 },
//   ],
//   "number"
// ); //should return false.
// truthCheck(
//   [
//     { name: "Quincy", username: "QuincyLarson" },
//     { name: "Naomi", username: "nhcarrigan" },
//     { name: "Camperbot" },
//   ],
//   "username"
// ); //should return false.
// truthCheck(
//   [
//     { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
//     { name: "Code Radio", users: [{ name: "Camperbot" }] },
//     { name: "", users: [] },
//   ],
//   "users"
// ); //should return true.
// truthCheck(
//   [
//     { id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } },
//     {
//       id: 2,
//       data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
//     },
//     { id: null, data: {} },
//   ],
//   "data"
// ); //should return true.
// truthCheck(
//   [
//     { id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } },
//     {
//       id: 2,
//       data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
//     },
//     { id: null, data: {} },
//   ],
//   "id"
// ); //should return false.
