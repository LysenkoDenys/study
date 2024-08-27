//* https://www.youtube.com/watch?v=R1_I2xb9LX4&ab_channel=VasinOleksii
// code wars 8 kyu:

// Simple given a string of words, return the length of the shortest word(s),
// String won`t be empty and you do not need to account for different data types.

const string = 'bitcoin take over the world maybe who knows perhaps';

function findShort(string) {
  return console.log(Math.min(...string.split(' ').map((item) => item.length)));
}

findShort(string);
// =================================================================================

// code wars 7 kyu:

// create function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.
// example: [1,2,'a','b']==[1,2] - clean the array from strings.

const arr = [1, 2, 'a', 'b', 3];
function filterNumbers(arr) {
  return console.log(arr.filter((item) => typeof item === 'number'));
}

filterNumbers(arr);
// =================================================================================

// finish the solution so that it sorts the passed in array of numbers.
// if the function passes in an empty array or null/nil value then it should return an empty array.

const arrNumbers = [1, 2, 10, 50, 5]; //[1, 2, 5, 10, 50]
const arrNumbers1 = null; //[]

function solution(arrNumbers) {
  arrNumbers ? console.log(arrNumbers.sort((a, b) => a - b)) : console.log([]);
}

solution(arrNumbers);
solution(arrNumbers1);
// =================================================================================

// return url with anything after anchor(#) removed

// 'www.codewars.com#about' --> 'www.codewars.com'
// 'www.codewars.com?page=1' --> 'www.codewars.com?page=1'

const url = 'www.codewars.com#about';

function removeUrlAnchor(url) {
  return console.log(url.split('#', 1));
}

removeUrlAnchor(url);
// =================================================================================

// make the number negative. but if the number is already negative

const number = 0;

function makeNegative(number) {
  return number > 0 ? console.log(number * -1) : console.log(number);
}

makeNegative(number);

//* https://www.youtube.com/watch?v=C_GADkRCw30&ab_channel=VasinOleksii
// code wars 6 kyu:

// =================================================================================
// validate if value is a strung and number a-z and A-Z and 0-9:
// combination of digits and characters:

function alphanumeric(string) {
  let result1 = [...string].find((element) => /[a - zA - Z]/.test(element));
  let result2 = [...string].find((element) => /[0-9]/.test(element));
  result1 && result2 ? console.log(string) : console.log('invalid string');
  // universal RegExp - /^[a-z\d]+$/i.test(string)
}

alphanumeric('Mazinkaiser'); //invalid string
alphanumeric('Mazink5aiser'); // Mazink5aiser
// =================================================================================

// who likes it?
// function takes an array containing the names and return it like this:
// [] --> 'no one likes this'
// ['Peter'] --> 'Peter likes this'
// ['Jacob', 'Alex'] --> 'Jacob and Alex like this'
// ['Max', 'John', 'Mark'] --> 'Max, John and Alex like this'
// ['Alex', 'Jacob', 'Mark', 'Max'] --> 'Alex, Jacob and 2 others like this'

function likes(names) {
  const length = names.length;
  // if (length === 0) {
  //   return console.log("no one likes this");
  // } else if (length === 1) {
  //   return console.log(`${names[0]} likes this`);
  // } else if (length === 2) {
  //   return console.log(`${names[0]} and ${names[1]} like this`);
  // } else if (length === 3) {
  //   return console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
  // } else if (length > 3) {
  //   return console.log(
  //     `${names[0]}, ${names[1]} and ${length - 2} others like this`
  //   );
  // }
  //or:
  switch (length) {
    case 0:
      return console.log('no one likes this');
    case 1:
      return console.log(`${names[0]} likes this`);
    case 2:
      return console.log(`${names[0]} and ${names[1]} like this`);
    case 3:
      return console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
    default:
      return console.log(
        `${names[0]}, ${names[1]} and ${length - 2} others like this`
      );
  }
}

likes([]);
likes(['Peter']);
likes(['Jacob', 'Alex']);
likes(['Max', 'John', 'Mark']);
likes(['Alex', 'Jacob', 'Mark', 'Max']);
likes(['Alex', 'Jacob', 'Mark', 'Max', 'Egor', 'Kirillo']);

// =================================================================================

// move the first letter of each word to the end of it, then add 'ay' to the end of the word.
// leave punctuation marks untouched.
//5kyu:

function pigIt(str) {
  return str
    .split(' ')
    .map((word) =>
      /[a-z]/i.test(word) ? word.slice(1) + word.split('')[0] + 'ay' : word
    )
    .join(' ');
  // or:
  // return str
  //   .split("")
  //   .map((el) => {
  //     const firstLetter = el.charAt(0);
  //     return /^[a-zA-Z0-9]+$/.test ? el.slice(1) + firstLetter + "ay" : el;
  //   })
  //   .join(" ");
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !

// =================================================================================

// Sum of Digits / Digital Root

// digital root is the recursive sum of all the digits in a number
// given n, take the sum of the digits of n if that value has more than one digit.
// continue reducing in this way until a single digit is produced.
// the input will be a non-negative integer.
// 16 --> 1 + 6 = 7
// 942 --> 9  4 + 2 = 15 -->1 + 5 = 6
// 132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
// 493193 --> 4 + 9 + 3 + 1 +9 + 3= 29 --> 2 + 9 = 11 --> 1 + 1 = 2
// code wars 6 kyu:

function digitalRoot(num) {
  const n = num.toString();
  if (n.length > 1) {
    const res = n
      .split('')
      .reduce((acc, currentValue) => acc + +currentValue, 0);
    return digitalRoot(res);
  } else {
    return num;
  }
  // or:
  // if (num < 10) {
  //   return num;
  // }
  // return digitalRoot(
  //   num
  //     .toString()
  //     .split("")
  //     .reduce((acc, el) => acc + +el, 0)
  // );
}

// best practice:
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

console.log(digitalRoot(493193)); //2 ;

// =================================================================================

// given an array of integers, find the one that appears an odd number of times.
// there will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  // me:
  // let arr2 = [];
  // arr.forEach((el, index) => {
  //   const element = arr.filter((el2) => el2 === arr[index]);
  //   if (element.length % 2 !== 0) {
  //     arr2.push(el);
  //   }
  // });
  // return arr2.flat()[0];

  // or:
  const filterOdd = (array, value) => array.filter((el) => el === value).length;
  let res;
  arr.forEach((el) => {
    if (filterOdd(arr, el) % 2 !== 0) {
      res = el;
    }
  });
  return res;
}

console.log(findOdd([7])); //7 ;
console.log(findOdd([1, 1, 2])); //2 ;
console.log(findOdd([0, 1, 0, 1, 0])); //0 ;
console.log(findOdd([0, 1, 0, 1, 0, 0, 3])); //3 ;

// =================================================================================

// Moving zeros to the End
// Write an algorithm that takes an array and moves all of thr zeros th the end
// preserving the order of the other elements

function moveZeros(arr) {
  const arrZeros = arr.filter((el) => el === 0);
  const arrNotZeros = arr.filter((el) => el !== 0);
  return [...arrNotZeros, ...arrZeros];
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

// =================================================================================

// Bit Counting
// Write a function that takes integer as input, and returns the number of bits
// that are equal to one in the binary representation of that number.
// You can guarantee that input  is non-negative.

// Example: THe binary representation of 1234 is 10011010010, so the function should return 5 in this case.

function bitCounter(numb) {
  return numb
    .toString(2)
    .split('')
    .reduce((acc, currentValue) => acc + +currentValue, 0);
}
// best practice:
countBits = (n) => n.toString(2).split('0').join('').length;

console.log(bitCounter(8)); //1
console.log(countBits(8)); //1

// =================================================================================

// Multiples of 3 or 5
//  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of this multiples is 23.

// FInish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.

// Note if the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  // me:
  // if (number < 0) {
  //   return 0;
  // }
  // let array = [];
  // // number - 1 - because of 'below':
  // for (let index = number - 1; index > 0; index--) {
  //   if (index % 5 === 0) {
  //     array.push(index);
  //   } else if (index % 3 === 0) {
  //     array.push(index);
  //   }
  // }
  // return array.reduce((acc, currentValue) => acc + +currentValue, 0);

  // or:
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

console.log(solution(9)); //14

// =================================================================================

//* https://www.youtube.com/watch?v=dPL4Ty4pRLg&ab_channel=VasinOleksii
// =================================================================================
// Array.diff
// Implement a difference function, wich subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1, 2], [1]) == [2];
// if the value is present in b, all of its occurences must be removed from the other:
// arrayDiff([1, 2, 2, 2, 2, 2, 3], [2]) == [1, 3];

function arrayDiff(arr1, arr2) {
  // me:
  if (arr2.length > 0) {
    let newArr = arr1;
    for (let index = 0; index < arr2.length; index++) {
      newArr = newArr.filter((el) => el !== arr2[index]);
    }
    return newArr;
  }
  return arr1;
  // or:
  // let res = arr1;
  // const filterArray = (arr, value) => {
  //   res = arr.filter((el) => el !== value);
  // };
  // arr2.forEach((el) => filterArray(res, el));
  // return res;
}

console.log(arrayDiff([1, 2, 2, 3], [1, 2])); //[3]
console.log(arrayDiff([1, 2, 2], [])); //[1, 2, 2 ]
console.log(arrayDiff([1, 2], [1])); //[2]

// =================================================================================

// Stop gninnipS My sdroW!
// return the same string, but with all 5 or more letter words removed (just like the name of this Kata).
// Strings passed in will consist if only letters and spaces.
// Spaces will be included only when more than one word is present.

function spinWords(string) {
  return string
    .split(' ')
    .map((element) =>
      element.length >= 5 ? element.split('').reverse().join('') : element
    )
    .join(' ');
}

console.log(spinWords('This is another test')); //drowS

// =================================================================================

//Convert string to the Camel Case
// ...convert dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// known as upper Camel Case, also often referred to as Pascal Case.)
// The next words should be always capitalized.

function toCamelCase(str) {
  //me:
  // if (/^[A-Z]*$/.test([...str][0])) {
  //   return str
  //     .split(/[-_]/)
  //     .map((el) => el.split("")[0].toUpperCase() + el.slice(1))
  //     .join("");
  // }
  // return (
  //   str.split(/[-_]/)[0] +
  //   str
  //     .split(/[-,_]/)
  //     .slice(1)
  //     .map((el) => el.split("")[0].toUpperCase() + el.slice(1))
  //     .join("")
  // );
  //me2:
  return (
    str.split(/[-_]/)[0] +
    str
      .split(/[-,_]/)
      .slice(1)
      .map((el) => el.split('')[0].toUpperCase() + el.slice(1))
      .join('')
  );
  //or:
  // const strArr = str.split("");
  // return strArr
  //   .map((el, index) => {
  //     if (el == "-" || el == "_") {
  //       el = strArr[index + 1].toUpperCase();
  //       strArr.splice(index + 1, 1);
  //     }
  //     return el;
  //   })
  //   .join("");
  //or clever solution:
  // return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
console.log(toCamelCase('The_Stealth_Warrior')); //TheStealthWarrior
console.log(toCamelCase('the-stealth-warrior')); //theStealthWarrior

// =================================================================================

// Counting Duplicates
// ...return the count of distinct case-insensitive alphabetic characters
// and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.

//me:
function duplicateCount(text) {
  let arr = text.toLowerCase().split('');
  let duplicate = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr.filter((el) => arr[index] === el).length > 1) {
      arr = arr.filter((el) => arr[index] !== el);
      duplicate += 1;
    }
  }
  return duplicate;
}

console.log(duplicateCount('ab555cd5e5')); //1 --> '5' 5 times
console.log(duplicateCount('aabBcde')); //2 --> 'a' and 'b'
console.log(duplicateCount('evergreen')); //2 --> 'e' 4 times and 'r' 2 times

// =================================================================================

// Your order, please
// Sort given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string.
// The words in the input string will only contain valid consecutive numbers.

//me:
function order(words) {
  // me:
  // const result = words
  //   .split(" ")
  //   .map((element) => {
  //     return `${element.split("").filter((el) => /[0-9]/.test(el))}${element}`;
  //   })
  //   .sort()
  //   .map((el) => el.split("").slice(1).flat().join(""))
  //   .join(" ");

  // return result;

  // or:
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');
}

console.log(order('mine6 of5 is2 Thi1s T4est 3a')); // Thi1s is2 3a T4est of5 mine6
console.log(order('wr3ong Som1ething is2')); // Som1ething is2 wr3ong
console.log(order('4of Fo1r pe6ople g3ood th5e the2')); // Fo1r the2 g3ood 4of th5e pe6ople
console.log(order('')); //

// =================================================================================

// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a,e,i,o,u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  return str.split('').filter((el) => /[aeiou]/.test(el)).length;
}

//best practice:
// return (str.match(/[aeiou]/ig)||[]).length;

console.log(getCount('abracadabra')); //5
console.log(getCount('most of us')); //3

// ===============================================================================================================================================
// ===============================================================================================================================================
// ===============================================================================================================================================
// ===============================================================================================================================================
// *My own path:

// ===============================================================================================================================================
// Reverse the words
// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(' ')
    .map((el) => el.split('').reverse().flat().join(''))
    .join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //ehT kciuq nworb xof spmuj revo eht yzal .god

// ===============================================================================================================================================
// Leap Years
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
}

console.log(isLeapYear(2023)); //

// ===============================================================================================================================================
// Count the divisors of a number
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  // me:
  // let sumDivisors = 0;
  // for (let index = 1; index <= n; index++) {
  //   n % index === 0 ? sumDivisors++ : sumDivisors;
  // }
  // return sumDivisors;

  //best practice:
  let count = 0;
  if (n % Math.sqrt(n) === 0) {
    count++;
  }
  for (let index = 1; index < Math.sqrt(n); index++) {
    n % index === 0 ? (count += 2) : count;
  }
  return count;
}

console.log(getDivisorsCnt(30)); //8

// ===============================================================================================================================================

// Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  return friends.filter((el) => el.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Mark'])); //

// ===============================================================================================================================================

// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  // find number of iterations to create the oddNumbers:
  const right = (num) => {
    if (num === 1) return 1;
    let res = num + right(num - 1);
    return res;
  };
  // create the odd array:
  function oddNumbers(left, right) {
    let arr = [];
    for (let index = 0; index < right; index++) {
      arr.push(left);
      left += 2;
    }
    return arr.filter((num) => num % 2).slice(-n);
  }
  // row of the odd array pyramid:
  const arrRes = oddNumbers(1, right(n));
  // sum of the row:
  return arrRes.reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(rowSumOddNumbers(3)); //27

// ===============================================================================================================================================

// Smooth numbers

// The concept of "smooth number" is applied to all those numbers whose prime factors are lesser than or equal to 7: 60 is a smooth number (2 * 2 * 3 * 5), 111 is not (3 * 37).
// More specifically, smooth numbers are classified by their highest prime factor and your are tasked with writing a isSmooth/is_smooth function that returns a string with this classification as it follows:
// 2-smooth numbers should be all defined as a "power of 2", as they are merely that;
// 3-smooth numbers are to return a result of "3-smooth";
// 5-smooth numbers will be labelled as "Hamming number"s (incidentally, you might appreciate this nice kata on them);
// 7-smooth numbers are classified as "humble number"s;
// for all the other numbers, just return non-smooth.
// Examples:

// isSmooth(16) === "power of 2"
// isSmooth(36) === "3-smooth"
// isSmooth(60) === "Hamming number"
// isSmooth(98) === "humble number"
// isSmooth(111) === "non-smooth"
// The provided input n is always going to be a positive number > 1.

const isSmooth = (number) => {
  // https://www.youtube.com/watch?v=QY_uOUhct7k&ab_channel=uklasicomua
  let arr = [];
  const number0 = number;

  while (number % 2 === 0) {
    number = number / 2;
    arr.push(2);
  }
  while (number % 3 === 0) {
    number = number / 3;
    arr.push(3);
  }
  while (number % 5 === 0) {
    number = number / 5;
    arr.push(5);
  }
  while (number % 7 === 0) {
    number = number / 7;
    arr.push(7);
  }
  if (arr.length === 1 || arr.length === 0) {
    arr.push(number);
  }
  console.log(arr); //

  const numNumber = arr.reduce((acc, currentValue) => acc * currentValue, 1);
  console.log(numNumber);

  const numMax = arr.reduce((acc, currentValue) => {
    return acc > currentValue ? acc : currentValue;
  });

  if (numNumber !== number0) {
    return 'non-smooth';
  }

  return numMax === 2
    ? 'power of 2'
    : numMax === 3
    ? '3-smooth'
    : numMax === 5
    ? 'Hamming number'
    : numMax === 7
    ? 'humble number'
    : 'non-smooth';

  //best practice:
  // var primes = {
  //   2: "power of 2",
  //   3: "3-smooth",
  //   5: "Hamming number",
  //   7: "humble number",
  // };

  // for (var key in primes)
  //   while (n % key == 0) if ((n /= key) == 1) return primes[key];

  // return "non-smooth";
};

console.log(isSmooth(16)); //power of 2

// ===============================================================================================================================================

// FizzBuzz

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

const fizzbuzz = (n) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      arr.push('Fizz');
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      arr.push('Buzz');
    }
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      arr.push(i);
    }
  }
  return arr;

  //best practice:
  // fizzify = fizzbuzz;
  // function fizzbuzz(n) {
  //   return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
  // }
};

console.log(fizzbuzz(15)); //

// ===============================================================================================================================================

// A Needle in the Haystack

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex(
    (el) => el === 'needle'
  )}`;

  //best practice:
  // return "found the needle at position " + haystack.indexOf("needle");
}
console.log(
  findNeedle([
    '3',
    '123124234',
    undefined,
    'needle',
    'world',
    'hay',
    2,
    '3',
    true,
    false,
  ])
); //

// ===============================================================================================================================================

// ASCII Total

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal(string) {
  return string
    ? string
        .split('')
        .map((el) => el.charCodeAt(0))
        .reduce((acc, curr) => acc + curr)
    : 0;

  //best practice:
  // const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

console.log(uniTotal('aaa')); //291

// ===============================================================================================================================================

// ASCII letters from Number

// You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.

// All ASCII characters have their numerical order in table.

// For example,

// from ASCII table, character of number 65 is "A".
// Numbers will be next to each other, So you have to split given number to two digit long integers.

// Examples (input -> output)
// '658776' -> 'AWL' (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
// '73327673756932858080698267658369' ->'I LIKE UPPERCASE'

function convert(number) {
  let arr = [];
  for (let i = 0; i < number.length; i += 2) {
    arr.push(number.slice(i, i + 2));
  }

  return arr.map((el) => String.fromCharCode(el)).join('');

  //best practice:
  // return String.fromCharCode(...number.match(/../g));
}

console.log(convert('656667')); //ABC
// ===============================================================================================================================================

// Sexy Primes <3

// Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function which returns true if x & y are sexy, false otherwise.

// Examples
// 5, 11   -->  true
// 61, 67  -->  true
// 7, 13   -->  true
// 5, 7    -->  false
// 1, 7    -->  false  (1 is not a prime)
// Note: x & y are always positive integers, but they are not always in order of precendence... For example you can be given either (5, 11) or (11, 5) - both are valid.

function sexy_prime(x, y) {
  if (x === 1 || y === 1) return false;
  for (let i = 2; i < x; i++) if (x % i === 0) return false;
  for (let i = 2; i < y; i++) if (y % i === 0) return false;
  return Math.abs(x - y) === 6;
}

//best practice:
// const sexy_prime = (x, y) =>
//   (fn => Math.abs(x - y) === 6 && fn(x) && fn(y))
//   (val => !Array(val).fill(1).join(``).match(/^1?$|^(11+?)\1+$/));

console.log(sexy_prime(1, 7)); //

// ===============================================================================================================================================

// Arithmetic Sequence!

// A sequence is usually a set or an array of numbers that has a strict way for moving from the nth term to the (n+1)th term.
// If f(n) = f(n-1) + c where c is a constant value, then f is an arithmetic sequence.
// An example would be (where the first term is 0 and the constant is 1) is [0, 1, 2, 3, 4, 5, ... and so on] )
// Else if (pun) f(n) = f(n-1) * c where c is a constant value, then f is a geometric sequence.
// Example where the first term is 2 and the constant is 2 will be [2, 4, 8, 16, 32, 64, ... to infinity ... ]
// There are some sequences that aren't arithmetic nor are they geometric.
// Here is a link to feed your brain : Sequence !

// You're going to write a function that's going to return the value in the nth index of an arithmetic sequence.(That is, adding a constant to move to the next element in the "set").

// The function's name is nthterm/Nthterm, it takes three inputs first,n,c where:

// first is the first value in the 0 INDEX.
// n is the index of the value we want.
// c is the constant added between the terms.
// Remember that first is in the index 0 .. just saying ...

var nthterm = function (first, n, c) {
  return first + c * n;
};

console.log(nthterm(1, 2, 3)); //7

// ===============================================================================================================================================

// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  let res = 0;
  if (a > b) {
    for (let i = 0; i <= a - b; i++) {
      res = res + b + i;
    }
  } else if (b > a) {
    for (let i = 0; i <= b - a; i++) {
      res = res + a + i;
    }
  } else {
    return a;
  }
  return res;

  //best practice:
  // let min = Math.min(a, b),
  //     max = Math.max(a, b);
  // return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(5, -1)); //14

// ===============================================================================================================================================

// Arguments to Binary addition

// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
// This is a modification on the Kata: Array2Binary addition hope you like it

function arr2bin(arr) {
  return arr
    ? arr
        .filter((el) => typeof el === 'number')
        .reduce((acc, currentValue) => acc + currentValue, 0)
        .toString(2)
    : 0;

  //best practice:
  // return arr.reduce((x,y)=>x+(typeof y=="number"?y:0),0).toString(2);
}

console.log(arr2bin([1, 2, 3, 4, 5])); //1111
console.log(arr2bin([1, 2, 'a'])); //11
console.log(arr2bin([1, 10, 100, 1000])); //10001010111
console.log(arr2bin([true, true, false, 15])); //1111
console.log(arr2bin([null])); //

// ===============================================================================================================================================

// To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
  return array.map((el) =>
    Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el ** 2
  );

  //best practice:
  // return array.map(x => {
  //   const r = Math.sqrt(x);
  //   return (r % 1 == 0) ? r : (x*x);
  // });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // [2,9,3,49,4,1]

// ===============================================================================================================================================

// Laxative Shot Roulette

// Peter enjoys taking risks, and this time he has decided to take it up a notch!
// Peter asks his local barman to pour him n shots, after which Peter then puts laxatives in x of them.
//He then turns around and lets the barman shuffle the shots. Peter approaches the shots and drinks a of them one at a time.
//Just one shot is enough to give Peter a runny tummy. What is the probability that Peter doesn't need to run to the loo?

// Task
// You are given:
// n - The total number of shots.
// x - The number of laxative laden shots.
// a - The number of shots that peter drinks.
// return the probability that Peter won't have the trots after drinking. n will always be greater than x, and a will always be less than n.
// You must return the probability rounded to two decimal places i.e. 0.05 or 0.81

function getChance(n, x, a) {
  if (n >= 170) {
    function factorial(num) {
      let res = 1;
      for (let i = 2; i <= num; i++) res = BigInt(res) * BigInt(i);
      return res;
    }

    const rightVariant =
      BigInt(factorial(x)) / (BigInt(factorial(0)) * BigInt(factorial(x - 0)));

    const allVariants =
      BigInt(factorial(n)) / BigInt(factorial(a) * BigInt(factorial(n - a)));
    const rightVariants =
      BigInt(factorial(n - x)) /
      BigInt(factorial(a - 0) * BigInt(factorial(n - x - (a - 0))));

    const result =
      (Number(rightVariants) * Number(rightVariant)) / Number(allVariants);

    // console.log("rightVariant:", rightVariant); //
    // console.log("allVariants:", allVariants); //
    // console.log("rightVariants:", rightVariants); //
    // console.log("result:", result); //

    return +result.toFixed(2);
  } else {
    function factorial(num) {
      var res = num;
      if (num === 0 || num === 1) return 1;
      while (num > 1) {
        num--;
        res *= num;
      }
      return res;
    }

    const allVariants = factorial(n) / (factorial(a) * factorial(n - a));
    const rightVariant = factorial(x) / (factorial(0) * factorial(x - 0));
    const rightVariants =
      factorial(n - x) / (factorial(a - 0) * factorial(n - x - (a - 0)));
    const result = (rightVariants * rightVariant) / allVariants;

    return +result.toFixed(2);
  }
}

//best practice:
// https://github.com/Chhunneng/CodeWars-1
// function getChance(n, x, a) {
//   let res = 1;
//   for (let i = 0; i < a; i++) {
//     res = res * (1 - x / (n - i));
//   }
//   return parseFloat(res.toFixed(2));
// }

// function getChance(n, x, a){
//   let chance = 1;
//   while (a > 0) {
//       chance = (n - x) / n * chance;
//       n--;
//       a--;
//   }
//   return Math.round(chance * 100) / 100;
// }

console.log(getChance(2, 1, 1)); //0.5
console.log(getChance(4, 1, 3)); //0.25
console.log(getChance(100, 10, 10)); //0.33
console.log(getChance(1000, 150, 20)); //0.04
console.log(getChance(4000, 200, 30)); //0.21
console.log(getChance(1798, 59, 22)); //0.48

// ===============================================================================================================================================

// Grasshopper - Array Mean

// Find Mean
// Find the mean (average) of a list of numbers in an array.
// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
// For an example list of 1, 3, 5, 7
// 1. Add all of the numbers
// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
// 16/4 = 4
// 3. The mean (or average) of this list is 4

var findAverage = function (nums) {
  return (
    nums.reduce((acc, currentValue) => acc + currentValue, 0) / nums.length
  );
};

console.log(findAverage([1])); //1
console.log(findAverage([1, 3, 5, 7])); //4

// ===============================================================================================================================================

// Gravity Flip

// If you've completed this kata already and want a bigger challenge, here's the 3D version
// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip = (d, a) =>
  d === 'R' ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);

//best practice:
// const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

console.log(flip('R', [3, 2, 1, 2])); //[1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5])); //[5, 5, 4, 3, 1]
// ===============================================================================================================================================

// Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
  return str.split(' ').map((el) => `${el} ${el.length}`);
}

console.log(addLength('apple ban')); //["apple 5", "ban 3"]

// ===============================================================================================================================================

// FIXME: Replace all dots

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

var replaceDots = function (str) {
  return str.replace(/\./g, '-');
};

console.log(replaceDots('one.two.three')); //one-two-three

// ===============================================================================================================================================

// Growth of a Population

// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

function nbYear(p0, percent, aug, p) {
  let i = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    i++;
  }
  return i;
}

//best practice:
// function nbYear(p0, percent, aug, p) {

//   for (var years = 0; p0 < p; years++) {
//     p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//   }
//   return years
// }

console.log(nbYear(1500, 5, 100, 5000)); //15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); //10
// ===============================================================================================================================================

// //regExp

// //find all after 'like':
// const str = "like likeeeee";
// console.log(str.match(/like*/g)); //[ 'like', 'likeeeee' ]

// //find 'hello00':
// const str1 = "hello00000 helloOleksii! hello000000";
// console.log(str1.match(/hello?0{1,3}/g)); //[ 'hello000', 'hello000' ]

// //find all the digits:
// const str2 = "12345648safadkgjkg156";
// console.log(str2.match(/\d/g).join("")); //12345648156

// ===============================================================================================================================================

// Product of the main diagonal of a square matrix.

// Given a list of rows of a square matrix, find the product of the main diagonal.

// Examples:

//   [[1, 0], [0, 1]] should return 1
//   [[1, 2, 3], [4, 5, 6], [7, 8, 9]] should return 45

function mainDiagonalProduct(mat) {
  let i = 0;
  return mat.reduce((acc, currValue) => acc * currValue[i++], 1);
}

//best practice:
function mainDiagonalProduct(mat) {
  return mat.reduce(function (n, v, i) {
    return n * v[i];
  }, 1);
}

console.log(
  mainDiagonalProduct([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //45

// ===============================================================================================================================================

// Required Data I

// We need a function that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented below:
// [(1), (2), (3), [[(4)], 5]]
// (1) - Total amount of received integers.
// (2) - Total amount of different values the array has.
// (3) - Total amount of values that occur only once.
// (4) and (5) both in a list
// (4) - It is (or they are) the element(s) that has (or have) the maximum occurrence.
// If there are more than one, the elements should be sorted (by their value obviously)
// (5) - Maximum occurrence of the integer(s)

// Let's see some cases:

// for list [-3, -2, -1, 3, 4, -5, -5, 5, -1, -5] ----> [10, 7, 5, [[-5], 3]]
// (1) - The list has ten elements (10 numbers)
// (2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)
// (3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)
// (4) and (5) - The number -5 occurs three times (3 occurrences)

// for list [4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5] ----> [14, 8, 4, [[2, 4], 3]]
// Enjoy it and happy coding!!

// max repeated elements
// max amount of repeated elements

function countSel(array) {
  const a = array.length;
  const b = [...new Set(array)].length;
  const c = array.filter(
    (el) => array.filter((el2) => el === el2).length === 1
  ).length;

  //max:
  const counts = {};
  array.forEach(function (el) {
    // If count[el] isn’t set yet, then 0 is set as the value of count[el]:
    counts[el] = (counts[el] || 0) + 1;
  });

  const arrMax = Object.values(counts);
  const max = Math.max(...arrMax);

  // elements of maximum occurrence:
  const arrNew = [];
  Object.entries(counts)
    .filter((el) => el[1] === max)
    .forEach((el) => arrNew.push(+el[0]));
  const d = arrNew.sort((a, b) => a - b);
  return [a, b, c, [d, max]];
}

//best practice:
function countSel(lst) {
  var h = {},
    r = [],
    max = 0,
    once = 0,
    count = 0;
  lst.map((a) => (h[a] = h[a] ? h[a] + 1 : 1));
  for (var o in h) {
    if (h[o] >= max) {
      if (h[o] > max) r = [];
      max = h[o];
      r.push(+o);
    }
    if (h[o] == 1) once++;
    else count++;
  }
  return [lst.length, once + count, once, [r.sort((a, b) => a - b), max]];
}
//or:
countSel = (
  a,
  b = (a) => a.length,
  c = [...new Set(a)].map((c) => [c, b(a.filter((a) => a == c))])
) => [
  b(a),
  b(c),
  b(a.filter((b) => a.indexOf(b) == a.lastIndexOf(b))),
  c
    .reduce(
      ([a, b], [c, d]) => (d > b ? [[c], d] : d == b ? [[...a, c], b] : [a, b]),
      [[], 0]
    )
    .map((a, b) => (b ? a : a.sort((a, b) => a - b))),
];

console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5])); // [ 10, 7, 5, [ -5 ], 3 ]
console.log(countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5])); // [ 14, 8, 4, [ 2, 4 ], 3 ]

// ===============================================================================================================================================

// Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  //max:
  const counts = {};
  arr.forEach(function (el) {
    // If count[el] isn’t set yet, then 0 is set as the value of count[el]:
    counts[el] = (counts[el] || 0) + 1;
  });

  const arrMax = Object.values(counts);
  const max = Math.max(...arrMax);

  // elements of maximum occurrence:
  const arrNew = [];
  Object.entries(counts)
    .filter((el) => el[1] === max)
    .forEach((el) => arrNew.push(+el[0]));
  const maxOfMostFrequentElements = Math.max(...arrNew.sort((a, b) => a - b));

  return maxOfMostFrequentElements;
}

//best practice:
// const highestRank = (arr) =>
//   arr.sort(
//     (a, b) =>
//       arr.filter((val) => val === b).length -
//         arr.filter((val) => val === a).length || b - a
//   )[0];

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); //12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); //12
// ===============================================================================================================================================

// Is it a number?

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
  return s.trim() !== '' && !isNaN(Number(s.trim()));
}

//best practice:
function isDigit(s) {
  return s == parseFloat(s);
}

console.log(isDigit('s2324')); //false
console.log(isDigit('-234.4')); //true
console.log(isDigit(' ')); //false

// ===============================================================================================================================================

// Is n divisible by (...)?

// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

function isDivisible(...args) {
  return (
    [...args].filter((el) => args[0] % el === 0).length === [...args].length
  );
}

//best practice:
function isDivisible(firstN, ...otherN) {
  return otherN.every((n) => firstN % n === 0);
}

console.log(isDivisible(3, 3, 4)); //false
console.log(isDivisible(8, 3, 4, 2, 5)); //false
console.log(isDivisible(12, 3, 4)); //true

// ===============================================================================================================================================

// Simple Fun #88: Sort By Height

// Task
// Some people are standing in a row in a park. There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// Example
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output
// [input] integer array a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Constraints:
// 5 ≤ a.length ≤ 30,
// -1 ≤ a[i] ≤ 200.
// [output] an integer array
// Sorted array a with all the trees untouched.

function sortByHeight(a) {
  const res = [...a];
  let j = 0;
  const arrSortPeople = a.filter((el) => el !== -1).sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      res.splice(i, 1, arrSortPeople[j]);
      j++;
    }
  }
  return res;
}

//best practice:
function sortByHeight(a) {
  var na = a
      .slice()
      .sort((a, b) => a - b)
      .filter((a) => a != -1),
    p = 0;
  return a.map((a) => (a == -1 ? -1 : na[p++]));
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); //[-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight([-1, -1, -1, -1, -1])); //[-1, -1, -1, -1, -1]
console.log(sortByHeight([4, 2, 9, 11, 2, 16])); //[2, 2, 4, 9, 11, 16]

// ===============================================================================================================================================

// Total amount of points

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings.
// Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  return games.reduce(
    (acc, cV) =>
      acc + ([...cV][0] > [...cV][2] ? 3 : [...cV][0] < [...cV][2] ? 0 : 1),
    0
  );
}

//best practice:
const points2 = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
); //30
console.log(
  points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'])
); //10
console.log(
  points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4'])
); //0

// ===============================================================================================================================================

// Dividers of primes

// Find all the dividers!
// You are given a list of prime numbers (e.g. [5, 7, 11]) and a list of their associated powers (e.g. [2, 1, 1]).
// The product of those primes at their specified power forms a number x (in our case x = 5^2 * 7^1 * 11^1 = 1925).

// Your goal is to find all of the dividers for this number!
// To do so, you have to multiply each prime number, from its power 0 to its power p in the power list, to every other prime, from their power 0 to their associated power p.

// Each result of those products is a divider of x!

// In our example: [1, 5, 7, 11, 25, 35, 55, 77, 175, 275, 385, 1925]

// Once you find those dividers, sort them in ascending order, and VOILA!

function getDividers(values, powers) {
  let aarDividers = [];
  let primeNumber = 1;
  for (let i = 0; i < values.length; i++) {
    primeNumber = primeNumber * Math.pow(values[i], powers[i]);
  }
  for (let j = 1; j <= primeNumber; j++) {
    if (primeNumber % j === 0) {
      aarDividers.push(j);
    }
  }
  return aarDividers;
}

//best practice:
getDividers = (values, powers) => {
  let n = values.map((x, i) => x ** powers[i]).reduce((a, b) => a * b, 1),
    ans = [];
  for (let i = 1; i <= n / 2; i++) {
    n % i == 0 ? ans.push(i) : null;
  }
  ans.push(n);
  return ans;
};

console.log(getDividers([2, 5, 11], [2, 1, 1])); // [1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110, 220]

// ===============================================================================================================================================

// Reverse or rotate?

// The input is a string str of digits.
// Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position.
// Put together these modified chunks and return the result as a string.

// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

function revrot(str, sz) {
  const reg = new RegExp(`.{${sz}}`, `g`);
  const strRev = str.match(reg);
  function checkChunk(chunk) {
    const sumChunk = [...chunk].reduce((acc, cV) => acc + cV ** 3, 0);
    return sumChunk % 2 === 0
      ? [...chunk].reverse().join('')
      : `${chunk.slice(1)}${[...chunk][0]}`;
  }
  return str === '' || sz <= 0 || str.length < sz
    ? ''
    : strRev.map((el) => checkChunk(el)).join('');
}

//best practice:
const revrot2 = (str, sz) =>
  (str.match(new RegExp(`.{${sz}}`, `g`)) || [])
    .map((val) =>
      val.replace(/[02468]/g, ``).length % 2
        ? val.replace(/(.)(.+)/, `$2$1`)
        : [...val].reverse().join(``)
    )
    .join(``);

console.log(revrot('1234', 0)); //""
console.log(revrot('', 0)); //""
console.log(revrot('1234', 5)); //""
console.log(revrot('733049910872815764', 5)); // "330479108928157"

// ===============================================================================================================================================

// Binary Contiguous Array
// 5kyu

// An array consisting of 0s and 1s, also called a binary array, is given as an input.

// Task
// Find the length of the longest contiguous subarray which consists of equal number of 0s and 1s.

// Example
// s = [1,1,0,1,1,0,1,1]
//          |_____|
//             |
//          [0,1,1,0]

//          length = 4
// Note
// 0 <= length(array) < 120 000

// Contiguous Subarray means any part of array where no elements are skipped. [1,2,3,4,5] has  [3,4,5] as contiguous subarray
// but [1,4,5] is not Contiguous Subarray.

//plan:
//1. get count
//2. add indexes to count
//3. subtract last index - first index
//4. find max subtraction

//not optimal but my own:
function binarray(a) {
  if (a.length <= 1) {
    return 0;
  }

  let count = 0;
  const result = a.map((el, i) => hashTable(el, i));
  function hashTable(el, i) {
    return el === 0 ? `${--count}:${i}` : `${++count}:${i}`;
  }
  // console.log(result); //
  // https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
  const groupBy = (arr, f) =>
    arr.reduce((a, b, i) => ((a[f(b, i, arr)] ||= []).push(b), a), {});
  //======================================================================================================
  const result2 = groupBy(result, (v) => v.match(/^-?\d*(?<=)/));
  // console.log(result2); //object

  let zeroCase = 0;
  if (result2.hasOwnProperty(0)) {
    zeroCase = +result2['0'].at(-1).match(/(?<=:)\d*/) + 1;
    delete result2['0'];
    // console.log(`zeroCase: ${zeroCase}`); //
  }

  const result3 = [];
  for (const key in result2) {
    if (result2[key].length > 1) {
      result3.push(result2[key].map((el) => el.match(/(?<=:)\d*/)[0]));
    }
    // console.log(`element: ${element}`); //
  }

  // console.log(result3); //
  const result4 = result3.map((el) => el.at(-1) - el.at(0));
  return Math.max(...result4, zeroCase);
}

//best practice:

// function binarray(a) {
//   const hash = {};
//   let max_length = 0;
//   let count = 0;

//   for (let i = 0; i < a.length; i++) {
//     const current = a[i];
//     if (current === 0) {
//       // if the current element is 0, then we decrement the count
//       count--;
//     } else if (current === 1) {
//       // if the current element is 1, then we increment the count
//       count++;
//     }

//     if (count === 0) {
//       // if the count is equal to o then we have a contiguous subarray of length equal to i+1
//       max_length = i + 1;
//     }

//     if (count in hash) {
//       max_length = Math.max(max_length, i - hash[count]); // update our max length
//     } else {
//       hash[count] = i;
//     }
//   }
//   return max_length;
// }

// const binarray = a => {
//   const first = {0: -1};
//   let [acc, max] = [0, 0];

//   a.forEach((bit, idx) => {
//     acc += 2 * bit - 1;

//     if(!(acc in first)) first[acc] = idx;

//     max = Math.max(max, idx - first[acc]);
//   });

//   return max;
// }

console.log(binarray([1, 0])); //2
console.log(binarray([1, 1, 0, 1, 1, 0, 1, 1])); //4
console.log(binarray([0, 1, 1, 0, 1, 1, 1, 0])); //4
console.log(binarray([0, 0, 0, 1, 1, 0, 1, 1, 1, 0])); //10
console.log(binarray([0, 1, 1, 0, 1, 1, 1, 0, 0, 0])); //10
console.log(binarray([0, 0, 1, 1, 1, 0, 0, 0, 0, 0])); //6
console.log(
  binarray([
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ])
); //4
console.log(
  binarray([
    1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
  ])
); //8

// ===============================================================================================================================================

//Find the Integral

// Create a function that finds the integral of the expression passed.
// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
// Notes:

// The output should be a string.
// The coefficient and exponent is always a positive integer.

function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}

console.log(integrate(3, 2)); //"1x^3"
console.log(integrate(12, 5)); //"2x^6"
console.log(integrate(20, 1)); //"10x^2"
console.log(integrate(40, 3)); //"10x^4"
console.log(integrate(90, 2)); //"30x^3"

// ===============================================================================================================================================

// Smallest value of an array

// Write a function that can return the smallest value of an array or the index of that value.
// The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates.
// Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
  return toReturn === 'value'
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

console.log(min([1, 2, 3, 4, 5], 'value')); //1
console.log(min([1, 2, 3, 4, 5], 'index')); //0
// ===============================================================================================================================================

// Integer depth

// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.
// example:
// let see n=42
// Multiple         value         digits     comment
// 42*1              42            2,4
// 42*2              84             8         4 existed
// 42*3              126           1,6        2 existed
// 42*4              168            -         all existed
// 42*5              210            0         2,1 existed
// 42*6              252            5         2 existed
// 42*7              294            9         2,4 existed
// 42*8              336            3         6 existed
// 42*9              378            7         3,8 existed
// Looking at the above table under digits column you can find all the digits from 0 to 9,
// Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9.
// Write a function named computeDepth which computes the depth of its integer argument.
// Only positive numbers greater than zero will be passed as an input.

function computeDepth(x) {
  let counter = 1;
  let arr = [];
  while (arr.length < 10) {
    const value = x * counter;
    const arrNew = String(value)
      .split('')
      .map((el) => +el);
    arrNew.forEach((el) => {
      return arr.includes(el) ? '' : arr.push(el);
    });
    counter++;
  }
  return counter - 1;
}

//best practice:
function computeDepth(x) {
  var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var depth = 0;
  var multiple;

  while (digits.length) {
    multiple = (x * ++depth).toString();
    digits = digits.filter((v) => multiple.indexOf(v) === -1);
  }

  return depth;
}

console.log(computeDepth(1)); //10
console.log(computeDepth(42)); //9

// ===============================================================================================================================================

// Count the number of Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let arrUnique = [];
  let arrDuplicates = [];
  [...text.toLowerCase()].forEach((el) =>
    arrUnique.includes(el) ? arrDuplicates.push(el) : arrUnique.push(el)
  );

  return Array.from(new Set(arrDuplicates)).length;
}

//best practice:
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length; //two characters next one by one
}

console.log(duplicateCount('')); //0
console.log(duplicateCount('abcde')); //0
console.log(duplicateCount('aabbcde')); //2
console.log(duplicateCount('aabBcde')); //2
console.log(duplicateCount('Indivisibility')); //1
console.log(duplicateCount('Indivisibilities')); //2

// ===============================================================================================================================================

// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  let arrUnique = [];
  [...string.toLowerCase()].forEach((el) =>
    !arrUnique.includes(el) && el.match(/[a-z]|\S[\.]/)
      ? arrUnique.push(el)
      : ''
  );
  return arrUnique.length === 26;
}

//best practice:
function isPangram(string) {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

console.log(isPangram('The quick brown fox, jumps over the lazy dog.')); //true
console.log(isPangram('This is not a pangram.')); //false

// ===============================================================================================================================================

//What century is it?

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
  const century =
    Math.floor(+year / 100) !== +year / 100
      ? Math.floor(+year / 100) + 1
      : Math.floor(+year / 100);

  function nth(n) {
    return (
      ['st', 'nd', 'rd'][(((((n < 0 ? -n : n) + 90) % 100) - 10) % 10) - 1] ||
      'th'
    );
  }
  console.log((((93 % 100) - 10) % 10) - 1); //
  return `${century}${nth(century)}`;
}

//best practice:
function whatCentury(year) {
  var century = Math.ceil(year / 100);
  return (
    century +
    (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th')
  );
}

console.log(whatCentury('1999')); //20th
console.log(whatCentury('2011')); //21st
console.log(whatCentury('2154')); //22nd
console.log(whatCentury('2259')); //23rd
console.log(whatCentury('1234')); //13rd
console.log(whatCentury('1023')); //11th
console.log(whatCentury('2000')); //20th

// ===============================================================================================================================================

// String array duplicates

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
  return s.map((el) => {
    let arrNew = [];
    for (let i = 0; i < el.length; i++) {
      if (el[i] !== el[i + 1]) arrNew.push(el[i]);
    }
    return arrNew.join('');
  });
}

//best practice:
function dup(s) {
  return s.map((x) => x.replace(/(.)\1+/g, '$1'));
  //$1 refers to the first group (captured by the ())
  // \1 matches the same text as most recently matched by the 1st capturing group
  // + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
}

console.log(dup(['abracadabra', 'allottee', 'assessee'])); // ["abracadabra", "alote", "asese"]

// ===============================================================================================================================================

// Traverse array elements diagonally

// In this kata you're given an n x n array and you're expected to traverse the elements diagonally from the bottom right to the top left.

// Example
//   1 6 7
//   7 2 4
//   3 5 9
// your solution should return elements in the following order

// 9
// 4 5
// 7 2 3
// 6 7
// 1
//=> [9, 4, 5, 7, 2, 3, 6, 7, 1]

// Your task is to write the function diagonal() that returns the array elements in the above manner.

// Another Example
// arr = [
//  [4, 5, 7],
//  [3, 9, 1],
//  [7, 6, 2]
// ]

// diagonal(arr) //=> [2, 1, 6, 7, 9, 7, 5, 3, 4]
// You can assume the test cases are well formed.

function diagonal(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  let arrToRearrange = [];

  //right hand:
  for (let index = 1; index < arr.length - 1; index++) {
    let y = index;
    let arrToReverse = [];

    for (let x = arr.length - 1; x > 0; x--) {
      if (y < arr.length) {
        arrToReverse.push(arr[y][x]); //
        y++;
      }
    }
    y = index;
    arrToRearrange.unshift(arrToReverse);
  }

  //left hand:
  for (let index = 1; index < arr.length; index++) {
    let i = 0;
    for (let j = arr.length - index; j >= 0; j--) {
      arrToRearrange.push(arr[i][j]); //
      i++;
    }
  }

  // finally:
  arrToRearrange.unshift(arr[arr.length - 1][arr.length - 1]);
  arrToRearrange.push(arr[0][0]);
  return [].concat(...arrToRearrange); //equal to flat method of array
}

//best practice:
function diagonal(arr) {
  let n = arr.length - 1;
  let result = [];

  while (arr[0].length) {
    arr.forEach((innerArr, index) => {
      if (!innerArr.length) {
        return;
      }
      if (index >= n) {
        result.push(innerArr.pop());
      }
    });

    n--;
  }

  return result;
}

console.log(diagonal([[7]])); //[7]
console.log(
  diagonal([
    [4, 5, 7],
    [3, 9, 1],
    [7, 6, 2],
  ])
); //[2, 1, 6, 7, 9, 7, 5, 3, 4]
console.log(
  diagonal([
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ])
); //[15,11,14,7,10,13,3,6,9,12,2,5,8,1,4,0]
console.log(
  diagonal([
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
  ])
); //[24,19,23,14,18,22,9,13,17,21,4,8,12,16,20,3,7,11,15,2,6,10,1,5,0]
console.log(
  diagonal([
    [0, 0, 12, 8],
    [8, 11, 10, 11],
    [13, 0, 11, 1],
    [9, 10, 11, 12],
  ])
); //[2, 1, 6, 7, 9, 7, 5, 3, 4]

// ===============================================================================================================================================

// Best travel
// 5kyu

// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60].
// John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// Example:
// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0),
// k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element).
// The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language.
// In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

// Examples:
// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// Notes:
// try not to modify the input list of distances ls
// in some languages this "list" is in fact a string (see the Sample Tests).

function chooseBestSum(t, k, ls) {
  if (k > ls.length) {
    return null;
  }

  const arrDistances = [];
  //recursive approach from chatGPT:
  //===============================================================
  // base case:
  function generateCombinations(
    ls,
    k,
    currentCombination = [],
    startIndex = 0
  ) {
    if (currentCombination.length === k) {
      return currentCombination.length > 0
        ? arrDistances.push(currentCombination.reduce((acc, cV) => acc + cV, 0))
        : null;
    }
    // recursive case:
    for (let i = startIndex; i < ls.length; i++) {
      const updatedCombination = [...currentCombination, ls[i]];
      generateCombinations(ls, k, updatedCombination, i + 1);
    }
  }
  generateCombinations(ls, k);
  //===============================================================
  const arrAllowedDistance =
    arrDistances.length > 0 ? arrDistances.filter((el) => el <= t) : null;

  return arrAllowedDistance.length > 0
    ? arrAllowedDistance.reduce((acc, cV) => (acc > cV ? acc : cV))
    : null;
}

//best practice:
function chooseBestSum(t, k, ls) {
  let arr = [];

  function rec(sum, ar, n) {
    if (n == 0) {
      arr.push(sum);
    } else {
      for (let i = 0; i < ar.length; i++) {
        rec(sum + ar[i], ar.slice(i + 1), n - 1);
      }
    }
  }

  rec(0, ls, k);

  var sol = arr.sort((a, b) => b - a).find((a) => a <= t);
  return typeof sol === 'undefined' ? null : sol;
}

// rec takes 3 arguments : 'sum' - which in this case acts kind of like the accumulator in a reduce function.
//'ar' - which is the current array to work on, starts off as the given array
//'n' - maximum number of elements a combination could have

// The rec function could be split into 2 parts : 'base case' - You return if n==0 meaning, you finished dealing with a combination of size 'n', and have it's accumulated sum.
// In that case, you just push your sum to the 'arr' variable.

// 'recursive case' - The heart of the recursion is in the for loop.
// What it basically does is call the function again, adding the current variable you are on to the sum,
// then basically slicing the array without that number you added, and of course decreasing n, because you only want groups of n size.
// So each time, you add your number to the sum, then continue with the next number in groups of 3.
// This way he doesn't have duplicates. every time a single group finishes (from the very last bottom group) the function goes up and makes the other groups.

// for example : if ar = [10, 25, 12, 20, 1],
// n = 3 you enter the for loop and call your function again: i = 0; i < 5 ; i++ rec(0 + 10, [25, 12, 20, 1], 3-1)
// You are still on the for loop so you continue until n = 0: --i = 0; i < 4 ; i++ --rec(10 + 25, [12, 20, 1], 2-1)
// ----i = 0; i < 3 ; i++ ----rec(35 + 12, [20, 1], 1-1) ------
// here you reach the if statement, push the sum which is 47 and return
// ------arr = [47]; ------return; ----
// now you are back here ----i = 1; i < 3 ; i++ ----rec(35 + 20, [20, 1], 1-1) ------arr = [47, 55]; ------return
// ----i = 2; i < 3 ; i++ ----rec(35 + 1, [20, 1], 1-1) ------arr = [47, 55, 36]; ------return;
// ----return; --i = 1; i < 4 ; i++ --rec(10 + 12, [12, 20, 1], 2-1) . . .

// It continues like this until the first loop we got into finishes.
// So it goes from the inner most for loop (the botom one) back up to the first one
// so everytime it just sums the value with the rest of the values up to 3 to make all possible unique combination and store their sum.

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58])); //163
console.log(
  chooseBestSum(
    331,
    4,
    [228, 145, 13, 473, 288, 133, 354, 217, 332, 289, 486, 248, 238, 485, 278]
  )
); //null

// ===============================================================================================================================================

// Simple Fun #14: Line Up

// Task
// To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise:

// when the coach says 'L', he instructs the students to turn to the left.
// Alternatively, when he says 'R', they should turn to the right.
// Finally, when the coach says 'A', the students should turn around.
// Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.

// Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.

// Example
// For commands = "LLARL", the output should be 3.

// Let's say that there are 4 students, and the second one can't tell left from right. In this case, only after the second, third and fifth commands will the students face the same direction.

// Input/Output
// [input] string commands

// String consisting of characters 'L', 'R' and 'A' only.
// Constraints: 0 ≤ commands.length ≤ 35
// [output] an integer

// The number of commands after which students face the same direction.

function lineUp(commands) {
  let counter = 0;
  let arrNew = [0, 0];
  [...commands].forEach((el) => rotate(el));

  function rotate(el) {
    switch (el) {
      case 'L':
        arrNew[0] += 90;
        arrNew[1] -= 90;
        break;
      case 'R':
        arrNew[0] -= 90;
        arrNew[1] += 90;
        break;
      default:
        arrNew[0] -= 0;
        arrNew[1] += 0;
        break;
    }

    if ((arrNew[0] % 180 === 0 || 0) && (arrNew[1] % 180 === 0 || 0)) {
      counter++;
    }
  }
  return counter;
}

//best practice:
// const lineUp = (commands, flag = true) =>
//   [...commands].reduce(
//     (pre, val) => pre + (flag = val !== `A` ? !flag : flag),
//     0
//   );

//or:
function lineUp(commands) {
  return commands.replace(/[RL]A*[RL]|[RL][RL]/g, 'A').replace(/[LR]A*/g, '')
    .length;
}
//or:

console.log(lineUp('LLARL')); //3
console.log(lineUp('RLR')); //1
console.log(lineUp('')); //0
console.log(lineUp('L')); //0
console.log(lineUp('A')); //1
console.log(lineUp('AAAAAAAAAAAAAAA')); //15
console.log(lineUp('RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL')); //16
console.log(lineUp('AALAAALARAR')); //5

// ===============================================================================================================================================

//Array Helpers

// This kata is designed to test your ability to extend the functionality of built-in classes.
// In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

Array.prototype.square = function () {
  return this.map((el) => el ** 2);
};
Array.prototype.cube = function () {
  return this.map((el) => el ** 3);
};
Array.prototype.average = function () {
  return this.reduce((acc, cV) => acc + cV, 0) / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((acc, cV) => acc + cV, 0);
};
Array.prototype.even = function () {
  return this.filter((el) => el % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((el) => el % 2 !== 0);
};

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); //[1, 4, 9, 16, 25]
console.log(numbers.cube()); //[1, 8, 27, 64, 125]
console.log(numbers.average()); //3
console.log(numbers.sum()); //15
console.log(numbers.even()); //[2, 4]
console.log(numbers.odd()); //[1, 3, 5]

// ===============================================================================================================================================

// 5kyu
//Sort - one, three, two

// Hey You !
// Sort these integers for me ...

// By name ...

// Do it now !

// Input
// Range is 0-999

// There may be duplicates

// The array may be empty

// Example
// Input: 1, 2, 3, 4
// Equivalent names: "one", "two", "three", "four"
// Sorted by name: "four", "one", "three", "two"
// Output: 4, 1, 3, 2
// Notes
// Don't pack words together:
// e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
// e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
// Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
// e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
// e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"

function sortByName(ary) {
  const numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  };

  const newArr =
    ary.length === 0
      ? []
      : ary
          .map((item) => digits2words(item))
          .map(JSON.parse)
          .sort()
          .map((el) => el[1]);

  function digits2words(item) {
    // for 000:
    if (item.toString().length === 3) {
      const hundreds =
        item / 100 >= 1
          ? numbersToWords[Math.floor(item / 100)] + '-hundred'
          : '';

      const dozens =
        +item.toString().slice(1) / 10 > 0
          ? numbersToWords[+item.toString().slice(1)] ||
            numbersToWords[Math.floor(+item.toString().slice(1) / 10) * 10]
          : '';

      const single =
        +item.toString().slice(2) > 0 &&
        numbersToWords[+item.toString().slice(1)] === undefined
          ? numbersToWords[+item.toString().slice(2)]
          : '';
      const result = `${hundreds}-${dozens}-${single}`;
      return `["${result.replace(/--/g, '-').replace(/-$/g, '')}", ${item}]`;
      //for 00:
    } else if (item.toString().length === 2) {
      const dozens =
        item / 10 >= 1
          ? numbersToWords[item] || numbersToWords[Math.floor(item / 10) * 10]
          : '';

      const single =
        +item.toString().slice(1) > 0 && numbersToWords[item] === undefined
          ? numbersToWords[+item.toString().slice(1)]
          : '';

      const result = `${dozens}-${single}`;
      return `["${result.replace(/--/g, '-').replace(/-$/g, '')}", ${item}]`;
      //for 0:
    } else if (item.toString().length === 1) {
      return `["${numbersToWords[item]}", ${item}]`;
    }
  }
  return newArr;
}

//best practice:
function sortByName(arr) {
  return arr.sort((a, b) => num2word(a).localeCompare(num2word(b)));
}

function num2word(n) {
  let a = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  let b = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  if (n >= 0 && n < 20) return a[n];
  if (n >= 20 && n < 100)
    return b[Math.floor(n / 10) - 2] + (n % 10 ? '-' + a[n % 10] : '');
  if (n >= 100 && n < 1000)
    return (
      a[Math.floor(n / 100)] +
      ' hundred' +
      (n % 100 ? ' ' + num2word(n % 100) : '')
    );
}

console.log(sortByName([1, 2, 3, 4])); //[4,1,3,2]
console.log(sortByName([8, 8, 9, 9, 10, 10])); //[8, 8, 9, 9, 10, 10]
console.log(sortByName([9, 99, 999])); //[9, 999, 99]

// ===============================================================================================================================================
// 7 kyu
// Slice the middle of a list backwards
// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

function reverseMiddle(array) {
  return array.length % 2 === 0
    ? [array[array.length / 2 - 1], array[array.length / 2]].reverse()
    : [
        array[Math.floor(array.length / 2) - 1],
        array[Math.floor(array.length / 2)],
        array[Math.floor(array.length / 2 + 1)],
      ].reverse();
}

//best practice:
function reverseMiddle(a) {
  let n = a.length,
    k = n >> 1;
  return a.slice(k - 1, k + 1 + (n % 2)).reverse();
}

console.log(reverseMiddle([1, 2, 3, 4, 5, 6])); // [4, 3]
console.log(reverseMiddle([1, 2, 3, 4, 5])); // [4, 3, 2]

// ===============================================================================================================================================
// 5kyu
// Basic Nico variation

// Task
// Write a function nico/nico() that accepts two parameters:

// key/$key - string consists of unique letters and digits
// message/$message - string to encode
// and encodes the message using the key.

// First create a numeric key basing on a provided key by assigning each letter position
// in which it is located after setting the letters from key in an alphabetical order.

// For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
// Let's encode secretinformation using our crazy key.

// 2 3 1 5 4
// ---------
// s e c r e
// t i n f o
// r m a t i
// o n
// After using the key:

// 1 2 3 4 5
// ---------
// c s e e r
// n t i o f
// a r m i t
//   o n

function nico(key, message) {
  // dcieslak: ACRYZ - 12345 A - 1, C - 2, R - 3, Y - 4, Z - 5. => C(2)R(3)A(1)Z(5)Y(4)
  const arrCharNum = [...key].sort().map((el, index) => [el, index + 1]);
  const arrCharNumToNum = [...key].map((el) => {
    const foundPair = arrCharNum.find((pair) => pair[0] === el);
    return foundPair ? foundPair[1] : null;
  });

  const newChunk = [];
  while (message.length > 0) {
    const newTempChunk = [];
    const chunk = message.slice(0, key.length).split('');

    function mergeArraysToArrayOfObjects(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        newTempChunk.push(`${arr1[i]}:${arr2[i]}`);
      }
    }
    mergeArraysToArrayOfObjects(arrCharNumToNum, chunk);

    message = message.slice(key.length);

    newChunk.push(
      newTempChunk
        .sort((a, b) => {
          const firstDigitA = parseInt(a.split(':')[0]);
          const firstDigitB = parseInt(b.split(':')[0]);

          return firstDigitA - firstDigitB;
        })
        .join('-')
        .replace(/-*\d+:/g, '')
        .replace(/undefined/g, ' ')
    );
  }

  return newChunk.join('');
}

//best practice:
function nico(key, message) {
  let k = key.length,
    m = message.length;

  if (m % k) message += ' '.repeat(k - (m % k));

  let cipher = [...key]
    .map((char, i) => [char, i])
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((a, i) => a.concat(i))
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[2]);

  let result = [...message]
    .map((char, i) => [char, Math.floor(i / k) * k + cipher[i % k]])
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[0])
    .join('');

  return result;
}

console.log(nico('crazy', 'secretinformation')); //"cseerntiofarmit on  "
console.log(nico('abc', 'abcd')); //"abcd  "
console.log(nico('ba', '1234567890')); //"2143658709"
console.log(nico('p2xl8raoie', '44r55k6w9mb')); //"456m95w4kr       b  "
// ===============================================================================================================================================

// 6 kyu
// Follow that Spy
// We are diligently pursuing our elusive operative, Matthew Knight, who also goes by the alias Roy Miller.
// He employs a nomadic lifestyle to evade detection, constantly moving from one location to another, with each of his journeys following a perplexing and non-standard sequence of itineraries.
// Our mission is to decipher the routes he will undertake during each of his voyages.

// Task
// You've been provided with an array of itinerary routes, decipher the precise destinations he will visit in the correct sequence according to his meticulously planned itineraries.

// Example
// Based on the provided routes:

// [ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
// The correct sequence of destinations is:

// "USA, BRA, UAE, JPN, PHL"
// Note:

// You can safely assume that there will be no duplicate locations with distinct routes.
// All routes provided will have non-empty itineraries.
// There will always be at least one (1) route connecting one waypoint to another.

// we need to find initial point

function findRoutes(routes) {
  let initialPoint = [...routes];

  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes.length; j++) {
      if (routes[i][0] === routes[j][1]) {
        initialPoint = initialPoint.filter((item) => item !== routes[i]);
      }
    }
  }

  const arrTofill = [...initialPoint];

  for (let i = 0; i < routes.length - 1; i++) {
    if (routes.find((el) => el[0] === arrTofill[arrTofill.length - 1][1])) {
      arrTofill.push(
        routes.find((el) => el[0] === arrTofill[arrTofill.length - 1][1])
      );
    }
  }

  const result = [].concat(...arrTofill);
  //recursion should be used because `[].concat(...arrTofill)` - just for 1 level fletting:
  return [...new Set(result)].join(', ');
}

//best practice:

console.log(
  findRoutes([
    ['MNL', 'TAG'],
    ['CEB', 'TAC'],
    ['TAG', 'CEB'],
    ['TAC', 'BOR'],
  ])
); // "MNL, TAG, CEB, TAC, BOR"
console.log(
  findRoutes([
    ['Chicago', 'Winnipeg'],
    ['Halifax', 'Montreal'],
    ['Montreal', 'Toronto'],
    ['Toronto', 'Chicago'],
    ['Winnipeg', 'Seattle'],
  ])
); // "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"
// ===============================================================================================================================================
// 7 kyu
// Running out of space

// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array) {
  const arrNew = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const element = arrNew[i - 1] + array[i];
    arrNew.push(element);
  }
  return arrNew;
}

//best practice:
function spacey(array) {
  let string = '';
  return array.map((e) => (string += e));
}

console.log(spacey(['kevin', 'has', 'no', 'space'])); //['kevin','kevinhas','kevinhasno','kevinhasnospace']
// ===============================================================================================================================================

// 6 kyu
// Rotten Oranges

// Wait long enough and a single rotten orange can turn a whole box of oranges to trash.

// You will be given a box of oranges. Find out how long it takes until all oranges are rotten.

// a rotten orange will rot every neighboring orange (use Von Neumann neighborhood)
// a box of oranges will be given to you as an int[][] orangeBox (or a list of lists orange_box in Python)
// all inner lists have an equal length
// rotten oranges are represented by 2
// fresh oranges are represented by 1
// empty spaces are represented by 0
// return an int value noting the time needed to fully rot the box
// return -1 in case the box will never completely rot
// Example:
// orangeBox:

// 2 1 1
// 1 1 1
// orangeBox after 1 time unit:

// 2 2 1
// 2 1 1
// orangeBox after 2 time units:

// 2 2 2
// 2 2 1
// orangeBox after 3 time units:

// 2 2 2
// 2 2 2
// The box is now fully rotten. Result: 3.

function calcRotTime(box) {
  isRottenItem = box.flat().find((element) => element === 2);
  if (isRottenItem) {
    // while (box.flat().find((element) => element === 1)) {
    const indexRotten = box.map((el) =>
      el.findIndex((element) => element === 2)
    );
    return indexRotten;

    // }
  } else {
    return -1;
  }

  console.log(isRottenItem); //
  return;
}
//best practice:

console.log(
  calcRotTime([
    [2, 1, 1],
    [1, 1, 1],
  ])
); //3
// ===============================================================================================================================================
// 7 kyu
// Number Pairs

// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.
// Note: Both arrays have the same dimensions.

// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = ;
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

//var1
const getLargerNumbers = (arr1, arr2) => {
  const arrNew = [];
  for (let i = 0; i < arr1.length; i++) {
    arrNew.push(arr1[i] > arr2[i] ? arr1[i] : arr2[i]);
  }
  return arrNew;
};

// var2
const getLargerNumbers2 = (arr1, arr2) => {
  const arr = arr1.map((el, index) => {
    if (el > arr2[index]) {
      return el;
    } else {
      return arr2[index];
    }
  }, arr2);
  return arr;
};

//best practice:
const getLargerNumbers3 = (a, b) => a.map((v, i) => Math.max(v, b[i]));

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); //[ 23, 64, 53, 17, 88 ]
console.log(getLargerNumbers2([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); //[ 23, 64, 53, 17, 88 ]
console.log(getLargerNumbers3([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); //[ 23, 64, 53, 17, 88 ]

// ===============================================================================================================================================
// 6 kyu
// Simple Fun #97: Video Part

// You have been watching a video for some time.
// Knowing the total video duration find out what portion of the video you have already watched.

// Example
// For part = "02:20:00" and total = "07:00:00", the output should be [1, 3].
// You have watched 1 / 3 of the whole video.

// Input/Output
// [input] string part
// A string of the following format "hh:mm:ss" representing the time you have been watching the video.

// [input] string total
// A string of the following format "hh:mm:ss" representing the total video duration.

// [output] an integer array
// An array of the following format [a, b] (where a / b is a reduced fraction).

function videoPart(part, total) {
  function getConvertedTime(str) {
    const arr = str.split(':').map((el) => +el);
    arr[0] *= 60 * 60;
    arr[1] *= 60;
    const seconds = arr.reduce((acc, currValue) => {
      return acc + currValue;
    }, 0);
    return seconds;
  }
  let a = getConvertedTime(part);
  let b = getConvertedTime(total);

  function nod(aa, bb) {
    while (aa !== 0 && bb !== 0) {
      if (aa > bb) {
        aa = aa % bb;
      } else {
        bb = bb % aa;
      }
    }
    return aa + bb;
  }
  const nodResult = nod(a, b);
  return [a / nodResult, b / nodResult];
}

//best practice:
function videoPart(part, total) {
  const n = ((t) => t[0] * 3600 + t[1] * 60 + t[2] * 1)(part.split(':'));
  const d = ((t) => t[0] * 3600 + t[1] * 60 + t[2] * 1)(total.split(':'));
  const gcd = (function g(a, b) {
    return b ? g(b, a % b) : a;
  })(n, d);
  return [n / gcd, d / gcd];
}

console.log(videoPart('02:20:00', '07:00:00')); //[1, 3]
console.log(videoPart('25:26:20', '25:26:20')); //[1, 1]
console.log(videoPart('00:02:20', '00:10:00')); //[7, 30]

// ===============================================================================================================================================
// 6 kyu
// Only Duplicates

// Given a string, remove any characters that are unique from the string.

// Example:
// input: "abccdefee"
// output: "cceee"

function onlyDuplicates(str) {
  const arrNew = [];

  [...str].forEach((el) => {
    const moreElements = [...str].filter((char) => char === el);
    if (moreElements.length > 1) {
      arrNew.push(el);
    }
  });

  return arrNew.join('');
}

//best practice:
function onlyDuplicates(str) {
  return str
    .split('')
    .filter((e) => str.indexOf(e) != str.lastIndexOf(e))
    .join('');
}

console.log(onlyDuplicates('abccdefee')); //'cceee'
console.log(onlyDuplicates('hello')); //'ll'
console.log(onlyDuplicates('foundersandcoders')); //'ondersndoders'

// ===============================================================================================================================================
// 6 kyu
//T.T.T.#6: nth user

// Story
// A product to do market research, n users to participate in the activities.
// The researchers assigned each user a number.
// The first user's number is 1, the second users numbered 2, and so on...

// Strangely, there are no digits 4 and 9 in the user's numbers,
// that is to say the number of 3rd users is 3, the number of 4th users is 5... the number of 8th users is 10... like this:

// user   1st 2nd 3rd 4th 5th 6th 7th 8th 9th 10th ........ nth
// number  1   2   3   5   6   7   8  10   11  12  ........ ??
// Please calculate, what is the number of the nth user?

// Rules
// Write a function that takes an argument n (meaning the nth user), and returns the user's number in string format.

// Examples
// n =  1 : Your function should return "1"
// n =  4 : Your function should return "5"
// n =  8 : Your function should return "10"
// n = 10 : Your function should return "12"
// n = 20 : Your function should return "25"

// function userNumber(n) {
//   let arrNew = [];

//   // ==========================
//   let arrLength = n + n;
//   // ==========================

//   function getLength(arrLength) {
//     for (let i = 0; i < arrLength; i++) {
//       arrNew.push(i);
//     }
//   }
//   getLength(arrLength);
//   let result = arrNew.filter((el) => !el.toString().match(/[49]/g));

//   // ==========================
//   while (result.length <= n) {
//     arrLength = arrLength + n;
//     arrNew = [];
//     getLength(arrLength);
//     result = arrNew.filter((el) => !el.toString().match(/[49]/g));
//   }
//   // ==========================
//   return result[n].toString();
// }

// best practice:
function userNumber(n) {
  let count = 0;
  let number = 0;

  while (count < n) {
    number += 1;
    if (!number.toString().match(/[49]/g)) {
      count += 1;
    }
  }

  return number.toString();
}

console.log(userNumber(1)); //"1"
console.log(userNumber(4)); //"5"
console.log(userNumber(8)); //"10"
console.log(userNumber(10)); //"12"
console.log(userNumber(20)); //"25"
console.log(userNumber(500)); //"875"
console.log(userNumber(1000)); //"1860"
console.log(userNumber(100000)); // "303250"
// console.log(userNumber(7385994)); //"35131712"
// console.log(userNumber(2660289)); //"12113801"

// ===============================================================================================================================================
// 6 kyu
//If you can read this...

// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

const NATO = {
  A: 'Alfa',
  B: 'Bravo',
  C: 'Charlie',
  D: 'Delta',
  E: 'Echo',
  F: 'Foxtrot',
  G: 'Golf',
  H: 'Hotel',
  I: 'India',
  J: 'Juliett',
  K: 'Kilo',
  L: 'Lima',
  M: 'Mike',
  N: 'November',
  O: 'Oscar',
  P: 'Papa',
  Q: 'Quebec',
  R: 'Romeo',
  S: 'Sierra',
  T: 'Tango',
  U: 'Uniform',
  V: 'Victor',
  W: 'Whiskey',
  X: 'X-ray',
  Y: 'Yankee',
  Z: 'Zulu',
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
};

function toNato(words) {
  return words
    .toUpperCase()
    .split('')
    .map((char) => NATO[char] || char)
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ');
}

// best practice:
function to_nato(words) {
  return words
    .split('')
    .filter((c) => c !== ' ')
    .map((c) => NATO[c.toUpperCase()] || c)
    .join(' ');
}

console.log(toNato('If you can read')); //"India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
console.log(toNato('Did not see that coming')); //"Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"

// ===============================================================================================================================================
// 6 kyu
// Lottery Ticket

// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  return ticket
    .map((el) =>
      el[0]
        .split('')
        .map((el2) => el2.charCodeAt(0) === el[1])
        .filter((item) => item === true)
    )
    .filter((item2) => item2[0] === true).length >= win
    ? 'Winner!'
    : 'Loser!';
}

// best practice:
function bingo(ticket, win) {
  if (
    ticket.filter((a) => a[0].split('').some((b) => b.charCodeAt(0) == a[1]))
      .length >= win
  ) {
    return 'Winner!';
  }
  return 'Loser!';
}

console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2
  )
); // 'Loser!'
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1
  )
); // 'Winner!'

// ===============================================================================================================================================
// 6 kyu
// Good vs Evil

// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil) {
  const goodSquadSkills = [1, 2, 3, 3, 4, 10];
  const evilSquadSkills = [1, 2, 2, 2, 3, 5, 10];

  const ArmyStrength = (army) =>
    army
      .split(' ')
      .filter((el) => el !== ' ')
      .map((item, index) =>
        army === good
          ? +item * goodSquadSkills[index]
          : +item * evilSquadSkills[index]
      )
      .reduce((acc, currVal) => acc + currVal, 0);

  const goodArmyStrength = ArmyStrength(good);
  const evilArmyStrength = ArmyStrength(evil);
  if (goodArmyStrength > evilArmyStrength) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (goodArmyStrength < evilArmyStrength) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}

// best practice:
function goodVsEvil(good, evil) {
  var getWorth = function (side, worth) {
    return side.split(' ').reduce(function (result, value, index) {
      return result + worth[index] * value;
    }, 0);
  };

  var result =
    getWorth(good, [1, 2, 3, 3, 4, 10]) -
    getWorth(evil, [1, 2, 2, 2, 3, 5, 10]);

  return result > 0
    ? 'Battle Result: Good triumphs over Evil'
    : result < 0
    ? 'Battle Result: Evil eradicates all trace of Good'
    : 'Battle Result: No victor on this battle field';
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')); //'Battle Result: Evil eradicates all trace of Good'
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')); //'Battle Result: Good triumphs over Evil'
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')); //'Battle Result: No victor on this battle field'

// ===============================================================================================================================================
// 6 kyu
// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""

// function solution(str) {
//   return [...str]
//     .map((el) =>
//       el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90 ? ' ' + el : el
//     )
//     .join('');
// }

// best practice:
// function solution(string) {
//   return string.replace(/([A-Z])/g, ' $1');
// }

console.log(solution('camelCasing')); //camel Casing
console.log(solution('camelCasingTes')); //camel Casing Test

// ===============================================================================================================================================
// 6 kyu
//Vector Affinity

// Calculate the number of items in a vector that appear at the same index in each vector, with the same value.

//   ([1 2 3 4 5], [1 2 2 4 3]) => 0.6
//   ([1 2 3], [1 2 3]) => 1.0
// Affinity value should be realized on a scale of 0.0 to 1.0, with 1.0 being absolutely identical. Two identical sets should always be evaluated as having an affinity of 1.0.

// Hint: The last example test case holds a significant clue to calculating the affinity correctly.

function vectorAffinity(xs, ys) {
  const maxArrLength = Math.max(xs.length, ys.length);
  const matchItemsQty = xs
    .map((el, index) => el === ys[index])
    .filter((el2) => el2 === true).length;
  return matchItemsQty === maxArrLength ? 1 : matchItemsQty / maxArrLength;
}

// best practice:
function vectorAffinity(xs, ys) {
  let y = Math.max(xs.length, ys.length);
  return y ? xs.filter((x, i) => x === ys[i]).length / y : 1;
}

console.log(vectorAffinity([1, 2, 3, 4, 5], [1, 2, 2, 4, 3])); // 3/5
console.log(vectorAffinity([], [])); // 1

// ===============================================================================================================================================
// 6 kyu
//Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  if (words === '') return '';
  return words
    .split(' ')
    .map((el) => el.match(/\d/g) + el)
    .sort()
    .map((el2) => el2.replace(/^\d/g, ''))
    .join(' ');
}

// best practice:
function order(words) {
  return words
    .split(' ')
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(' ');
}

console.log(order('is2 Thi1s T4est 3a')); // "Thi1s is2 3a T4est"

// ===============================================================================================================================================
// 6 kyu
//WeIrD StRiNg CaSe

// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased. The indexing just explained is zero based,
// so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words.
// Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  return string
    .split(' ')
    .map((el) =>
      el
        .split('')
        .map((el2, index) =>
          index % 2 === 0 ? el2.toUpperCase() : el2.toLowerCase()
        )
        .join('')
    )
    .join(' ');
}

console.log(toWeirdCase('This is a test')); //'ThIs Is A TeSt'
// ===============================================================================================================================================
// 5 kyu
//Find the unique string

// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
  arr = arr.map((el) => el.replace(/' '/g, ''));
  console.log(arr); //
  const arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr.length; k++) {
        const a = arr[k].includes(arr[i][j]);
        if (a === false) {
          arrNew.push(arr[k]); //
        }
      }
    }
  }
  function mode(arrNew) {
    return arrNew.sort(
      (a, b) =>
        arrNew.filter((v) => v === a).length -
        arrNew.filter((v) => v === b).length
    );
  }
  mode(arrNew);
  return arrNew.pop();
}

// console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])); //'BbBb'
// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); //'foo'
// console.log(findUniq(['a', 'b', 'b', 'b'])); //'a'
// console.log(findUniq(['', '', '', 'a', '', ''])); //'a'
// console.log(findUniq(['    ', 'a', ' '])); //'a'

// 1) get an element[0] from array[0];
// 2) compare the element every array in the array;
// 3) find array with false;
