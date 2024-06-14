// https://www.youtube.com/watch?v=FVbr0CS4oR8&ab_channel=%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9%D0%91%D0%B0%D0%B1%D1%96%D1%87%D1%82%D0%B0%D0%94%D0%B8%D0%B2%D0%BE%D0%B2%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9%D1%81%D0%B2%D1%96%D1%82%D0%B2%D0%B5%D0%B1%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B8

//write async function:
// 1 get a list of items '{name: string, price: number}'
// 2 group by value for 4 category:
// 1-100, 101-200, 200-500, 500+
// 3. sort it by name (the ignored)
// 4 calculate average price by each category.

async function fetchAndGroupItems(params) {
  return;
}

var formatAsTime = (session) => {
  let seconds = session / 1000;
  let minutes = parseInt(seconds / 60);
  seconds = seconds % 60;

  let displayTime =
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0');

  return displayTime;
};
console.log(formatAsTime(25)); //

console.log(typeof function () {}); //

// function factorial(num) {
//   return num === 0 ? 1 : num * factorial(num - 1);
// }
// return console.log(factorial(4));

const str34 = '1:25';
console.log(str34.match(/(?<=:)\d*/)[0]); //;

const brokenLinks = ['facebook', 'youtube', 'instagram'];
function fixLinks(arr) {
  return arr.map((el) => `//http://${el}.com`);
}

console.log(fixLinks(brokenLinks)); //['//http://facebook.com', '//http://youtube.com','//http://instagram.com']

// date:
console.log(
  ((null - new Date('2024-01-14T07:16:03.344Z')) / (1000 * 60 * 60)).toFixed(2)
);

//=====================================
// tasks from interview

//1 sum:
const arr = [1, 2, 2, 4, 5, 6, 6];

const sum = arr.reduce((acc, init) => acc + init, 0);

let sumLoop = 0;

for (let i = 0; i < arr.length; i++) {
  sumLoop += arr[i];
}
console.log(sum); // 26
console.log(sumLoop); // 26
console.log(eval(arr.join('+'))); // 26

//2 max-min:

//my loop
let minimum = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] <= arr[i + 1]) {
    if (minimum >= arr[i]) {
      minimum = arr[i];
    } else {
      minimum;
    }
  } else {
    minimum = arr[i + 1];
  }
}

// optimum loop
let minimum1 = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (minimum1 > arr[i]) {
    minimum1 = arr[i];
  }
}

//ternary
let minimum2 = arr[0];
for (let i = 0; i < arr.length; i++) {
  minimum2 = minimum2 <= arr[i] ? minimum2 : arr[i];
}

//Math
let minimum3 = arr[0];
for (let i = 0; i < arr.length; i++) {
  minimum3 = Math.min(minimum3, arr[i]);
}
//reduce
let minimum4 = arr.reduce((acc, init) => (acc < init ? acc : init), arr[0]);
let minimum5 = arr.reduce((acc, init) => Math.min(acc, init));
let maximum4 = arr.reduce((acc, init) => (acc > init ? acc : init), arr[0]);

const minimum6 = Math.min(...arr);
const maximum5 = Math.max(...arr);

const minimum7 = arr.sort((a, b) => (a > b ? 1 : -1))[0];
const maximum6 = arr.sort((a, b) => (a < b ? 1 : -1))[0];

const maximum7 = Math.max.apply(null, arr);

console.log(`min: ${minimum}`); //1
console.log(`min1: ${minimum1}`); //1
console.log(`min2: ${minimum2}`); //1
console.log(`min3: ${minimum3}`); //1
console.log(`min4: ${minimum4}`); //1
console.log(`min5: ${minimum5}`); //1
console.log(`min6: ${minimum6}`); //1
console.log(`min7: ${minimum7}`); //1
console.log(`max4: ${maximum4}`); //6
console.log(`max5: ${maximum5}`); //6
console.log(`max6: ${maximum6}`); //6
console.log(`max7: ${maximum7}`); //6

//3 sort
const arr2 = [8, 2, 1, 4, 5, 11, 6];

const sort = arr2.sort((a, b) => a - b);

console.log(`sort: ${sort}`); //1,2,4,5,6,8,11

//array of objects sorted by age
const users = [
  { name: 'John Doe', age: 20 },
  { name: 'Michael Jackson', age: 40 },
  { name: 'Janet Jackson', age: 30 },
];

const sort1 = users.sort((a, b) => a.age - b.age);

console.log(sort1); //[{ name: 'John Doe', age: 20 }, { name: 'Janet Jackson', age: 30 }, { name: 'Michael Jackson', age: 40 }]

//array of objects sorted by name
const sort2 = users.sort((a, b) =>
  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
);
console.log(sort2); //[{ name: 'Janet Jackson', age: 30 }, { name: 'John Doe', age: 20}, { name: 'Michael Jackson', age: 40 }]

//localeCompare()
const sort3 = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(sort3); //[{ name: 'Janet Jackson', age: 30 }, { name: 'John Doe', age: 20}, { name: 'Michael Jackson', age: 40 }]

//4 reverse array
const arr3 = [1, 2, 2, 4, 5, 6, 6, 7, 8];
const arr4 = [1, 2, 3];
const arr5 = [1, 2, 3];
const arr6 = [1, 2, 3];
const arr7 = [1, 2, 3];
const arr8 = [1, 2, 3];
const arr9 = [1, 2, 3];

console.log(arr3.reverse()); // [ 8, 7, 6, 6, 5, 4, 2, 2, 1]

//without reverse
let arrNew = [];

arr4.forEach((el) => arrNew.unshift(el));

console.log(arrNew); //[ 3, 2, 1 ]

//loop
let arrNew2 = [];

for (let i = arr5.length - 1; i >= 0; i--) {
  arrNew2.push(arr5[i]);
}

console.log(arrNew2); //[ 3, 2, 1 ]

//map
let arrNew3 = [];
arr6.map((el) => arrNew3.unshift(el));
const rev = arr7.map((el, index, arr7) => arr7[arr7.length - 1 - index]);

console.log(arrNew3); //[ 3, 2, 1 ]
console.log(rev); //[ 3, 2, 1 ]
//how it works?
console.log([...arr8].map(arr8.pop, arr8)); //[ 3, 2, 1 ]
console.log([...arr9].map([].pop, arr9)); //[ 3, 2, 1 ]

//5 filter false:
const array5 = [7, 'correct', 0, false, 9, NaN, ''];

const arrNotFalse = [];

for (let i = 0; i < array5.length; i++) {
  if (!!array5[i]) {
    arrNotFalse.push(array5[i]);
  }
}

console.log(arrNotFalse); //

//filter
const filtered1 = array5.filter((el) => !!el !== false);
const filtered2 = array5.filter((el) => !!el);
const filtered3 = array5.filter(Boolean);
console.log(filtered1); //[ 7, 'correct', 9 ]
console.log(filtered2); //[ 7, 'correct', 9 ]
console.log(filtered3); //[ 7, 'correct', 9 ]

// babich #9=========================================================
// 1 className instead of class (reserved word)
// 2 import useState, no trigger function, it will be infinity
// 3 we can`t use component inside another component (performance)
// 4 array of dependencies [] - empty array
// 5 fetch an array, break down to 4 categories, sort accent 'the' ignore by name and show average price:

const arr55 = [
  { name: 'the hdd', price: 100 },
  { name: 'monitor', price: 300 },
  { name: 'rom', price: 200 },
  { name: 'the cpu', price: 500 },
  { name: 'mouse', price: 50 },
  { name: 'camera', price: 800 },
  { name: 'notebook', price: 1000 },
  { name: 'ssd', price: 400 },
  { name: 'flash', price: 150 },
  { name: 'ups', price: 99 },
];

function fetchAndGroupItems() {
  function getSortedGroup(from, to) {
    return arr55
      .filter((el) => el.price > from && el.price <= to)
      .sort((a, b) =>
        a.name.toLowerCase().replace(/^the/gi, '') >
        b.name.toLowerCase().replace(/^the/gi, '')
          ? 1
          : -1
      );
  }

  const arr1 = getSortedGroup(0, 100);
  const arr2 = getSortedGroup(100, 200);
  const arr3 = getSortedGroup(200, 500);
  const arr4 = getSortedGroup(500, 10000);

  function reducer(acc, cV) {
    return acc + cV.price;
  }
  const avgArr1 = arr1.reduce(reducer, 0) / arr1.length;
  const avgArr2 = arr2.reduce(reducer, 0) / arr2.length;
  const avgArr3 = arr3.reduce(reducer, 0) / arr3.length;
  const avgArr4 = arr4.reduce(reducer, 0) / arr4.length;

  return [arr1, arr2, arr3, arr4, avgArr1, avgArr2, avgArr3, avgArr4];
}

console.log(fetchAndGroupItems()); //

// babich Oleksii Vasin=========================================================
//1 there is no state, so result will render just one time, counter const - does not re-wright
//2 hooks must be on first level and not inside if else statement
//3 Card has to be from Capital letter to recognize by React as a Component
//4 memo -HOC, useCallback inside of our component to make memo work

// babich Bogdana Kuzmina========================================================
//1 we do not change the state by setCount so it won`t re render
//2 reference will not change in the array
//3 key, if users.length===0 we will see 0 on the screen

// babich Vitaly Baydak==========================================================

// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase.
// Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// rot13("SERR PBQR PNZC"); //should decode to the string FREE CODE CAMP
// rot13("SERR CVMMN!"); //should decode to the string FREE PIZZA!
// rot13("SERR YBIR?"); //should decode to the string FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); //should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

function ceasarsCipher(str, shift) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  arrNew = [];
  // const charIndex = abc.indexOf('a') + shift;
  function index(charIndex) {
    return charIndex >= abc.length
      ? [...abc].at(charIndex - abc.length)
      : [...abc].at(charIndex);
  }
  for (const i of str.toLowerCase()) {
    if (abc.indexOf(i) === -1) {
      arrNew.push(i);
    } else {
      arrNew.push(index(abc.indexOf(i) + shift));
    }
  }
  return arrNew.join('');
}

console.log(ceasarsCipher('FREE CODE CAMP', 13)); //serr pbqr pnzc
console.log(ceasarsCipher('FREE CODE CAMP', 1)); //gsff dpef dbnq
console.log(ceasarsCipher('FREE PIZZA!', 13)); //serr cvmmn!
console.log(ceasarsCipher('FREE LOVE?', 13)); //serr ybir?
console.log(ceasarsCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 13)); //gur dhvpx oebja sbk whzcf bire gur ynml qbt

// babich Svyatoslav Kondur======================================================
//1 concat arrays and set:
function findCommonElements(arr1, arr2) {
  //v1:
  // const arrNew = [];
  // arr1.map((el) => {
  //   if (
  //     arr2.find((elem) => el === elem) // working
  //   )
  //     arrNew.push(el);
  // });
  // return [...new Set(arrNew)];

  //v2:
  // return [
  //   ...new Set(
  //     arr1
  //       .map((el) => arr2.find((elem) => el === elem))
  //       .filter((el) => el !== undefined)
  //   ),
  // ];

  //v3 (on iter):
  const arr1Unique = new Set(arr1);
  const arr2Unique = new Set(arr2);
  const commonElements = Array.from(arr1Unique.values()).filter((x) =>
    arr2Unique.has(x)
  );
  return commonElements;
}

console.log(findCommonElements([1, 2, 3, 6, 6], [4, 5, 6, 3, 6])); //

//2 performance :
//! document fragment

// babich Dmytro Tulug=========================================================
//1 refactoring
//v1
function processData(data) {
  return data.filter((el) => el > 10);
}
//v2
const processData2 = (data) => data.filter((el) => el > 10);

console.log(processData([1, 2, 3, 4, 11, 24])); //
console.log(processData2([1, 2, 3, 4, 11, 24])); //

//2 refactoring
// function loadUserData(userId) {
//   fetch(`https://api.example.com/users/${userId}`)
//     .then((response) => response.json())
//     .then((userData) => {
//       console.log('User data loaded', userData);
//       fetch(`https://api.example.com/users/${userId}/permissions`)
//         .then((response) => response.json())
//         .then((userPermissions) => {
//           console.log('User permissions loaded', userPermissions);
//         });
//     });
// }

// async function loadUserData2(userId) {
//   try {
//     const userData = await await fetch(
//       `https://api.example.com/users/${userId}`
//     ).json();
//     console.log('User data loaded', userData);
//     const userPermissions = await await fetch(
//       `https://api.example.com/users/${userId}/permissions`
//     ).json();
//     console.log('User permissions loaded', userPermissions);
//   } catch (error) {
//     console.log('Error');
//   }
// }

//3 refactoring

function assignTask(task, employee) {
  if (employee.position === 'Manager') {
    if (task.difficulty === 'hard') {
      console.log('Task assigned to manager');
    } else {
      console.log('Task is too easy for a manager');
    }
  } else if (employee.position === 'Developer') {
    if (task.difficulty === 'medium' || task.difficulty === 'hard') {
      console.log('Task assigned to developer');
    } else {
      console.log('Task is too easy for a developer');
    }
  } else {
    console.log('Task assigned to an intern');
  }
}

const task = { difficulty: 'hard' };
const employee = { position: 'Manager' };

console.log(assignTask(task, employee)); //Task assigned to manager

// v1
function assignTask2(task2, employee2) {
  switch (employee2.position) {
    case 'Manager':
      task2.difficulty === 'hard'
        ? console.log('Task assigned to manager')
        : console.log('Task is too easy for a manager');
      break;
    case 'Developer':
      task2.difficulty === 'hard' || task2.difficulty === 'medium'
        ? console.log('Task assigned to developer')
        : console.log('Task is too easy for a developer');
      break;

    default:
      console.log('Task assigned to an intern');
      break;
  }
}

const task2 = { difficulty: 'medium' };
const employee2 = { position: 'Developer' };

console.log(assignTask2(task2, employee2)); //Task assigned to developer

//hack:
//task2.difficulty === 'hard' || task2.difficulty === 'medium'
// translate to this:
const isHardForDeveloper = ['medium', 'hard'].includes(task2.difficulty);

// Собеседование Frontend разработчика. Вопросы #1.mp4==============================

//bubble sort:
const arr12 = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(arr12); //[6, 5, 3, 1, 8, 7, 2, 4]

for (let i = 0; i < arr12.length; i++) {
  for (let j = 0; j < arr12.length; j++) {
    let temp;
    if (arr12[j] > arr12[j + 1]) {
      temp = arr12[j + 1];
      arr12[j + 1] = arr12[j];
      arr12[j] = temp;
    }
  }
}
console.log(arr12); //[1, 2, 3, 4, 5, 6, 7, 8]

// Собеседование Frontend разработчика. Вопросы #2.mp4==============================
//getInitials('tom Hanks') --> T.H.
// v1:
const getInitials = (name) => {
  //remove spaces from start and end of string:
  let wsRegex = /^\s+|\s+$/g;
  name = name.replace(wsRegex, '');

  return name
    .split(' ')
    .map((el) => el.slice(0, 1).toUpperCase() + '.')
    .join('');
};

// v2 (in the video) - do not work fine with spaces in start and end of string:
// const getInitials = (name) => {
//   return (
//     name
//       .split(' ')
//       .map((el) => el[0])
//       .join('.')
//       .toUpperCase() + '.'
//   );
// };

console.log(getInitials('tom Hanks')); //T.H.
console.log(getInitials(' tom Delonge')); //T.H.
console.log(getInitials(' volfgan amadey mozart')); //V.A.M.

// Собеседование Frontend разработчика. Вопросы #3.mp4==============================
// isPalindrome

const isPalindrome = (word) => {
  const str = word.toLowerCase().replace(/ /gi, '');
  return [...str].reverse().join('') === str;
};

console.log(isPalindrome('abba')); // true
console.log(isPalindrome('sabbath')); // false
console.log(isPalindrome('as sa')); // true

// Собеседование Frontend разработчика. Вопросы #5.mp4==============================
// sumDigits
// v1
// const sumDigits = (number) => {
//   return [...number.toString().replace(/[+-]/gi, '')]
//     .map((el) => +el)
//     .reduce((acc, currValue) => acc + currValue, 0);
// };

// v2 (in the video):
const sumDigits = (number) => {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((acc, currValue) => +acc + +currValue, 0);
};

console.log(sumDigits(158)); //14
console.log(sumDigits(-55)); //10

// ====================================================================================
// tasks for JS:
// https://www.youtube.com/watch?v=NMwAXiGk4og
//1. find sum of 2 numbers by function:

const a = 5;
const b = 4;

function sum1(a, b) {
  return a + b;
}

console.log(sum1(a, b)); //

//2. find sum of any quantity of numbers by function:
function sum2(...args) {
  return [...args].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sum2(a, b, 3)); //
// suggested solution=================================
function sum3() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'numbers ') {
      total += arguments[i];
    }
  }
  return total;
}

console.log(sum2(a, b, 10, 15, 300)); //

//3. make the string reverse:
const str = 'i am a string';

function strReverse(string) {
  return string.split('').reverse().join('');
}

console.log(strReverse(str)); // gnirts a ma i

//4. is the number even:
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(2)); //true
console.log(isEven(3)); //false

//5. find max number from an array:
const arr10 = [1, 2, 3, 4, 15, 6, 7];
function arrMax(arr) {
  // return arr.reduce((acc, cV) => {
  //   if (cV > acc) {
  //     return (acc = cV);
  //   } else {
  //     return acc;
  //   }
  // });

  return Math.max(...arr);
}
console.log(arrMax(arr10)); //

//6. is str a palindrome:
function inPalindrome(str) {
  return str.split('').reverse().join('') === str ? true : false;
}

console.log(inPalindrome('mama')); //false
console.log(inPalindrome('mahham')); //true

//https://www.youtube.com/watch?v=n8LR9LClLkE
//1. sum of numbers in the array:
const arr11 = [1, 2, 3, 4, 15, 6, 7];
function sumNumbersOfAnArray(arr) {
  return arr.reduce((acc, cV) => acc + cV, 0);
}

function sumNumbersOfAnArray2(arr) {
  let counter = 0;
  arr.forEach((el) => (counter = counter + el));
  return counter;
}

// suggested solution=================================
function sumNumbersOfAnArray3(arr) {
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum2 = sum2 + arr[i];
  }
  return sum2;
}

console.log(sumNumbersOfAnArray(arr11)); //38
console.log(sumNumbersOfAnArray2(arr11)); //38
console.log(sumNumbersOfAnArray3(arr11)); //38

//2.change all the included elements in the array to new values:
const arr13 = ['dog', 'cat', 'hamster', 'bird', 'cat'];

function changeArrValues(arr, value, newValue) {
  return arr.includes(value)
    ? arr.map((el) => (el === value ? (el = newValue) : el))
    : arr;
}

// suggested solution=================================
function replaceElement(array, oldElem, newElem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === oldElem) {
      array[i] = newElem;
    }
  }
  return array;
}

console.log(changeArrValues(arr13, 'cat', 'fish')); // [ 'dog', 'fish', 'hamster', 'bird', 'fish' ]
console.log(changeArrValues(arr13, 'cat', 'fish')); // [ 'dog', 'fish', 'hamster', 'bird', 'fish' ]
console.log(replaceElement(arr13, 'squirrel', 'fish')); // [ 'dog', 'cat', 'hamster', 'bird', 'cat' ]
console.log(replaceElement(arr13, 'squirrel', 'fish')); // [ 'dog', 'cat', 'hamster', 'bird', 'cat' ]

//3.is the number a palindrome (2332-true; 123-false):

function isNumPalindrome(num) {
  const number = num.toString();
  return [...number].join('') == [...number].reverse().join('');
}

// suggested solution=================================
function isPal(num) {
  const str = num.toString();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isNumPalindrome(2332)); //true
console.log(isNumPalindrome(233)); //false
console.log(isPal(134)); //false

//4.find avg in the array:
function avgOfAnArray(arr) {
  return arr.reduce((acc, cV) => acc + cV) / arr.length;
}

// suggested solution=================================
function calcAverage(numbers) {
  const initialValue = 0;
  const sumWithInitial = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial / numbers.length;
}

console.log(avgOfAnArray([1, 2, 3, 4, 5])); //3
console.log(calcAverage([1, 2, 3, 4, 5])); //3

//5. reverse words in the sentence:
function sentenceReverse(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(sentenceReverse('this was not right')); //right not was this

//6. is the payload fit the truck:
function isCargoFit(
  cargoLength,
  cargoHeight,
  cargoWidth,
  truckLength,
  truckHeight,
  truckWidth
) {
  return (
    cargoLength <= truckLength &&
    cargoHeight <= truckHeight &&
    cargoWidth <= truckWidth
  );
}
console.log(isCargoFit(2, 0.6, 1, 5, 2, 5)); //

// https://www.youtube.com/watch?v=TETUt-COiP4
//1. Cesar cipher:

function cipher(str, offset) {
  const abc = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return [...str]
    .map((el) =>
      el === el.toUpperCase()
        ? el.replace(
            el,
            abc[
              abc.findIndex((el2) => el.toLowerCase() === el2) + offset <=
              abc.length - 1
                ? abc.findIndex((el2) => el.toLowerCase() === el2) + offset
                : (abc.findIndex((el2) => el.toLowerCase() === el2) + offset) %
                  abc.length //or : abc.findIndex((el2) => el === el2) + offset - abc.length
            ].toLocaleUpperCase()
          )
        : el.replace(
            el,
            abc[
              abc.findIndex((el2) => el === el2) + offset <= abc.length - 1
                ? abc.findIndex((el2) => el === el2) + offset
                : (abc.findIndex((el2) => el === el2) + offset) % abc.length //or : abc.findIndex((el2) => el === el2) + offset - abc.length
            ]
          )
    )
    .join('');
}

// suggested solution=================================
function cipher2(str, offset) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (abc.includes(char.toLowerCase())) {
      const index = abc.indexOf(char.toLowerCase());
      const newIndex = (index + offset) % 26;
      if (char === char.toUpperCase()) {
        result += abc[newIndex].toUpperCase();
      } else {
        result += abc[newIndex];
      }
    } else {
      result += char;
    }
  }
  return result;
}

console.log(cipher('abC', 1)); //bcD
console.log(cipher('freecodecamp', 13)); //serrpbqrpnzc
console.log(cipher2('abC', 1)); //bcD
console.log(cipher2('freecodecamp', 13)); //serrpbqrpnzc

//2. algorithm to find max subarray with max sum in the array ( contiguous subarray - subarray with consecutive elements):
//Kadane’s algorithm:
// https://www.youtube.com/watch?v=6N-rBMGvlp0&t=1s

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

// suggested solution=================================
function maxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([-2, 3, -4, 5, 7, -8, 9])); //13
console.log(getMaxSubSum([-2, 3, -4, 5, 7, -8, 9])); //13

// 2.1 facultative algorithm to find max subarray [] with max sum in the 2D array:
function maxSubarray(arr) {
  // const arrOfSums = arr.map((el) => el.reduce((acc, cV) => acc + cV, 0));
  // const max = Math.max(...arrOfSums);
  // const index = arrOfSums.findIndex((el) => el === max);
  // return arr[index];
  //or:
  return arr[
    arr
      .map((el) => el.reduce((acc, cV) => acc + cV, 0))
      .findIndex(
        (el) =>
          el ===
          Math.max(...arr.map((el) => el.reduce((acc, cV) => acc + cV, 0)))
      )
  ];
}

console.log(
  maxSubarray([
    [1, 2, 3],
    [23, 45],
    [134, 67],
  ])
); //[134,67]

// 3. reverse the string without embedded methods:
function getReverseString(str) {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

console.log(getReverseString('crack')); //
console.log(getReverseString('Glory')); //
