/** ЗАДАЧА 1 - Объявление переменной
 *
 * 1. Объявите переменную "myCountry" и присвойте ей значение -
 * строку с вашей страной
 *
 * 2. В дальнейшем не планируется присваивание нового значения этой переменной
 *
 * 3. Выведите значение переменной в консоль
 */

const myCountry = 'Ukraine';
console.log(myCountry); //Ukraine

/** ЗАДАЧА 2 - Присваивание нового значения переменной
 *
 * 1. Объявите переменную "isStudent" без присваивания значения
 *
 * 2. Присвойте переменной "isStudent" правдивое логическое значение
 *
 * 3. Выведите значение переменной в консоль
 *
 * 4. Присвойте переменной "isStudent" ложное логическое значение
 *
 * 5. Выведите значение переменной в консоль
 */

let isStudent;
isStudent = true;
console.log(isStudent); //true
isStudent = false;
console.log(isStudent); //false

/** ЗАДАЧА 3 - Умножение двух чисел
 *
 * 1. Объявите две переменные и присвойте им любые числа
 *
 * 2. Объявите еще одну переменную и присвойте ей результат
 * умножения двух предыдущих переменных
 *
 * 3. Выведите значение последней переменной в консоль
 */

const a = 10;
const b = 150;
const c = a * b;
console.log(c); //1500

/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Denys';
const mySurename = 'Lysenko';
const myJob = 'Web developer';
const aboutMe =
  'My name is ' + myName + ' ' + mySurename + ' and I am a ' + myJob;
console.log(aboutMe); //

const aboutMe2 = `My name is ${myName} ${mySurename} and I am a ${myJob}`;
console.log(aboutMe2); //

/** ЗАДАЧА 5 - Комментарии
 *
 * 1. Добавьте однострочный комментарий
 *
 * 2. Объявите любую переменную и опишите ее
 * с помощью комментария в той же строке
 *
 * 3. Создайте многострочный комментарий
 */

// comment
const myName2 = 'Dysa'; //that is my name
/* dkjfdslk;ldskgg
 sdjzlkdsz;ksd;lv*/

/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const myString = 'Jack';
const myNumber = 36;
const isStudento = true;
const myInput = null;
const myUndefined = undefined;
const myObj = { name: 'Vasya', age: 45 };
const myArray = [1, 2, 3, 'six', [1, 2], null, { name: 'Volodya', age: 67 }];

console.log(typeof myString); //string
console.log(typeof myNumber); //number
console.log(typeof isStudento); //boolean
console.log(typeof myInput); //object
console.log(typeof myUndefined); //undefined
console.log(typeof myObj); //object
console.log(typeof myArray); //object

/** ЗАДАЧА 7 - Объявление и вызов функции
 *
 * 1. Объявите функцию, использую ключевое слово "function"
 *
 * 2. Не указывайте параметры функции
 *
 * 3. Внутри функции выведите в консоль своё имя
 *
 * 4. Вызовите функцию
 */

function myFn() {
  console.log('Denys'); //
}
myFn();

/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */

const myName1 = function (name) {
  return 'Hello, ' + name;
};

console.log(myName1('Denys')); //
console.log(myName1('Bogdan')); //

/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */

const myWorld = () => {
  return 'hello world';
};
const myWorld2 = () => 'hello world 2';

console.log(myWorld()); //
console.log(myWorld2()); //

/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */

/**  many strings of comments:
1st returns subtract between two numbers
2nd parametres is numbers
3rd returns number
4th subtraction between the numbers
@param {number} a
@param {number} b
@returns {number} Разница чисел
*/
const numbersSubtraction = (num1, num2) => {
  return num1 - num2;
};

console.log(numbersSubtraction(3, 2)); //

/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

// setTimeout(() => {
//   return console.log('Hello World');
// }, 5000); //

/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObject = {
  name: 'Egor',
  surename: 'Lysenko',
  favoriteNumber: 41,
};

const myObjecto = `My name is ${myObject.name} ${myObject.surename} and my favorite number is ${myObject.favoriteNumber}`;
console.log(myObjecto); //

/** ЗАДАЧА 13 - Длина строки
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Виведите в консоль длину этой строки
 */

const myNewStr = 'job is cooming';
console.log(myNewStr.length); //15

/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const myNewStr2 = 'happiness is cooming';
console.log(myNewStr2 instanceof String); //
console.log(typeof myNewStr2); //
const myNewStr3 = myNewStr2.toUpperCase();
console.log(myNewStr3); //

/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

const greetengsMorning = 'Good Morning';
const greetengsEvening = greetengsMorning.replace('Morning', 'Evening');
console.log(greetengsEvening); //Good Evening

/** ЗАДАЧА 16 - Создание массива
 *
 * 1. Создайте массив с тремя элементами разных типов
 *
 * 2. Выведите в консоль первый элемент массива
 *
 * 3. Выведите в консоль длину массива
 */

const myArray1 = [1, 'six', { name: 'Volodya', age: 67 }];
console.log(myArray1[0]); //
console.log(myArray1.length); //

/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

const myArray2 = [1, 'six', { name: 'Volodya', age: 67 }];
console.log(myArray2); //[ 1, 'six', { name: 'Volodya', age: 67 } ]
myArray2[1] = 'seven';
console.log(myArray2); //[ 1, 'seven', { name: 'Volodya', age: 67 } ]

/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

const myArray3 = [2, 'six', { name: 'Volodya', age: 70 }];
myArray3.forEach((el) => console.log(el));

/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const myArray4 = [2, 'six', { name: 'Volodya', age: 70 }];
myArray4.push('abc', 123, true);
console.log(myArray4); //[ 2, 'six', { name: 'Volodya', age: 70 }, 'abc', 123, true ]
console.log(myArray4.length); //6

/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const currentTime = new Date().getTime();
console.log(currentTime); //1715626816624

/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = '5';

// Напишите код здесь
console.log(+myVariable1 <= +myVariable2); //false

myVariable1 = '20';
myVariable2 = 100;

// Напишите код здесь
console.log(+myVariable1 <= +myVariable2); //true

//suggested solution:
console.log(parseInt(myVariable1) <= parseInt(myVariable2)); //true

/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3;

console.log(myNumber1 % myNumber2); //1

// Ассоциативность оператора % - left-to-right
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(((100 % 23) % 5) % 3); //0

/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false); //3

//suggested solution:
/** ШАГ 1
 * (true && null)
 *  null
 */

/** ШАГ 2
 * 3 || null || false
 * 3
 */

console.log(true && null && 10); // <-- null
console.log(true && 'abc' && 10); // <-- 10

console.log(10 || false); // <-- 10

/** ЗАДАЧА 24 - Альтернативные бинарные операторы
 *
 * В каждом выражении замените два оператора на один бинарный
 */

let a1 = 10;

// a = a + 1;
a1 += 1;
console.log(a1); // 11

// a = a * 2;
a1 *= 2;
console.log(a1); // 22

// a = a - 5;
a1 -= 5;
console.log(a1); // 17

// a = a / 2;
a1 /= 2;
console.log(a1); // 8.5

/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// expression statement
15;

// statement
const myObject1 = {
  // Object literal is expression
  x: 10,
  y: true,
};

// expression statement
myObject.z = 'abc'; // <-- expression

// expression statement
delete myObject.x;

// statement
let newVariable;

// expression statement
newVariable = 30 + 5; // <-- expression

// expression statement
console.log(newVariable);
/**             ^
 *          expression
 */

// statement
if (newVariable > 10) {
  /**       ^
   *    expression
   */

  // expression statement
  console.log(`${newVariable} больше 10`); // <-- newVariable is expression
  /**         _________________________
   *                      ^
   *                 expression
   */
}

/** ЗАДАЧА 26 - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
  console.log('Привет из функции fn');

  return function (a) {
    console.log(a);
  };
}

fn()(true);
//Привет из функции fn
//true

/** ЗАДАЧА 27 - Const
 *
 * Ответьте на следующие вопросы:
 *   1. Почему после 13 строки не выдается ошибка?
 *   2. Почему после строки 18 генерируется TypeError?
 *
 * Измените одну строку кода, чтобы эта ошибка исчезла.
 * Не меняйте строки 13, 18
 */

let arr13 = [1, 2]; // <-- Объявление переменной используя const

arr13.push(3);

console.log(arr13);
// [1, 2, 3]

arr13 = [1, 2, 3, 4];
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr13);
// [1, 2, 3, 4]

// because arr13 is a constant REFERENCE
// because we try to assign arr13 new REFERENCE in const
// we change let

/** ЗАДАЧА 28 - Let
 *
 * Измените код так, чтобы ошибка исчезла
 */

// const myFavoriteAnimal = 'Monkey';

// console.log(myFavoriteAnimal);
// // 'Monkey'

// const myFavoriteAnimal = 'Cat';

// console.log(myFavoriteAnimal);
// // 'Cat'

let myFavoriteAnimal2 = 'Monkey';
console.log(myFavoriteAnimal2);
// 'Monkey'
myFavoriteAnimal2 = 'Cat';
console.log(myFavoriteAnimal2);
// 'Cat'

/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

('use strict');

function myFunction() {
  const a2 = 2;
  return a2;
}

myFunction();

// if cancel use strict JS assign a by itself

/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

// setTimeout(function () {
//   console.log('Привет из функции myFn'); //Привет из функции myFn
// }, 2000);

// myFn(); // we don`t need to call nyFn()

/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// v1
// function showMessage(num) {
//   console.log(`Сообщение номер ${num}`);
//   let timer = setTimeout(showMessage, 2000, ++num);
//   if (num === 6) {
//     clearTimeout(timer);
//   }
// }

// setTimeout(showMessage, 1000, 1);

// v2
// let res = 0;
// function showMessage(num3) {
//   res += num3;
//   console.log(`Сообщение номер ${res}`);
//   if (res === 5) {
//     clearInterval(timer2);
//   }
// }

// let timer2 = setInterval(showMessage, 1000, 1);

//suggested solution:
// let i = 1;

// const messageIntervalId = setInterval(() => {
//   console.log('Сообщение номер ' + i);
//   i = i + 1;
// }, 2000);

// setTimeout(() => clearInterval(messageIntervalId), 11000);

/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray13 = [true, null];

// Напишите код здесь
myArray13.unshift('Hello');
myArray13.unshift(100);

console.log(myArray13); // [100, "Hello", true, null]

/** ЗАДАЧА 33 - Добавление элемента по определенному индексу
 *
 * 1. Добавить элемент "abc" с индексом 10.
 *
 * 2. Выведите результирующий массив в консоль. Объясните результаты.
 *
 * 3. Какова длина конечного массива?
 */

const myArray14 = [1, 2];
myArray14[10] = 'abc';
console.log(myArray14); //[ 1, 2, <8 empty items>, 'abc' ]
console.log(myArray14.length); //11 --> there are 8 empty slots without data

/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  { carBrand: 'toyota', price: 20000, isAvailableForSale: false },
  { carBrand: 'honda', price: 25000, isAvailableForSale: true },
  { carBrand: 'dodge', price: 50000, isAvailableForSale: true },
];

cars.push({ carBrand: 'mercedes', price: 80000, isAvailableForSale: true });
console.log(cars); //

/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject2 = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
};

for (const key in myObject2) {
  if (key === 'key1' || key === 'key3') {
    console.log(myObject2[key]); //true, abc
  }
}

//suggested solution:
const objectKeys = Object.keys(myObject);

objectKeys.forEach((key) => {
  if (key === 'key1' || key === 'key3') {
    console.log(myObject[key]);
  }
});

/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

function genRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function addNewNumberToArray(num) {
  if (myNumbers.find((el) => el !== num)) {
    myNumbers.push(num);
  }
}

const randomNum = genRandomNumber(MIN, MAX);
console.log(randomNum); //
addNewNumberToArray(randomNum);
console.log(myNumbers); //

//suggested solution:
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addRandomNumberToArray = (arr, min, max) => {
  let newRandomNumber;
  const updatedArr = [...arr];

  do {
    newRandomNumber = randomNumber(min, max);
    // console.log(newRandomNumber)
  } while (updatedArr.includes(newRandomNumber));

  updatedArr.push(newRandomNumber);

  return updatedArr;
};

const updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX);

console.log('UPDATED ARRAY', updatedArray);
console.log('ORIGINAL ARRAY', myNumbers);

/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject4 = {
  name: 'Mike',
  age: 30,
  city: 'London',
};

Object.prototype.country = 'England';

for (let key in myObject4) {
  if (myObject4.hasOwnProperty(key)) {
    console.log(myObject4[key]);
  }
}

/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой';
  } else {
    return 'Массив пустой';
  }
}

function isArrayEmpty2(inputArray) {
  if (inputArray.length > 0) {
    return 'Array is not empty';
  }
  if (inputArray.length === 0) {
    return 'Array is empty';
  }
}

const isArrayEmpty3 = (inputArray) =>
  inputArray.length > 0 ? 'Array is not empty' : 'Array is empty';

console.log(isArrayEmpty([1, 3])); //Массив не пустой
console.log(isArrayEmpty([])); //Массив пустой
console.log(isArrayEmpty2([1, 3])); //Array is not empty
console.log(isArrayEmpty2([])); //Array is empty
console.log(isArrayEmpty3([1, 3])); //Array is not empty
console.log(isArrayEmpty3([])); //Array is empty

/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore'];

const cityInfo = (item, index) => {
  return console.log(`${item} is at the index ${index} in the myCities array`); //;
};

myCities.forEach((el, index) => cityInfo(el, index));

//suggested solution:
const cityInfo2 = (city, index) =>
  `${city} is at the index ${index} in the myCities array`;

myCities.forEach((city, index) => console.log(cityInfo2(city, index)));

/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];

//1
const postsJsonConverted = postsJSON.map((el) => JSON.parse(el));
// OPTION 2
const postsJS = postsJSON.map(JSON.parse);
//2
console.log(postsJsonConverted); //
//3
console.log(postsJsonConverted[1].postId); //5131
//4
console.log(postsJsonConverted[postsJsonConverted.length - 1].commentsQuantity); //8

/** ЗАДАЧА 41 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

const findPostById = (postId, arrPosts) => {
  return arrPosts.find((el) => el.postId === postId);
};

console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }
console.log(findPostById(4511, posts)); // undefined

/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a14 = [5, 'abc', 10, 1];
const b14 = [4, 10, 14, 25, 25, 50];
const c14 = [150, 132, 80, 40];
const d14 = [15, 26, 10, 23, 85];

const arraySortInfo = (inputArray) => {
  if ([...inputArray].find((el) => typeof el !== 'number')) {
    return 'some of elements of the array are not numbers';
  }
  if (
    [...inputArray].join('') === [...inputArray].sort((a, b) => a - b).join('')
  ) {
    return 'the array is sorted by ascend';
  }
  if (
    [...inputArray].join('') === [...inputArray].sort((a, b) => b - a).join('')
  ) {
    return 'the array is sorted by descend';
  }
  return 'the array is not sorted';
};

//suggested solution:
const arraySortInfo2 = (inputArray) => {
  if (inputArray.some((element) => typeof element !== 'number')) {
    return 'Некоторые элементы не являются числами';
  }

  if (
    inputArray.every((element, index) =>
      index > 0 ? element >= inputArray[index - 1] : true
    )
  ) {
    return 'Массив отсортирован по возрастанию';
  }

  if (
    inputArray.every((element, index) =>
      index > 0 ? element <= inputArray[index - 1] : true
    )
  ) {
    return 'Массив отсортирован по убыванию';
  }

  return 'Массив не отсортирован';
};
//  Подсказка 1: Используйте метод массивов "every"
//  Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
//  Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим

console.log(arraySortInfo(a14), 1); // Некоторые элементы не являются числами
console.log(arraySortInfo(b14), 2); // Массив отсортирован по возрастанию
console.log(arraySortInfo(c14), 3); // Массив отсортирован по убыванию
console.log(arraySortInfo(d14), 4); // Массив не отсортирован

/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a15 = [1, 2, 3];
const b15 = [1, 2, 3];

console.log(a15 === b15); // false (Почему?) --> becuse of REF in different area of memory

const c15 = [2, 1, 3];
const d15 = [1, 2, 3, 4];

//v1
const areArraysEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  return firstArray.join('') === secondArray.join('');
};

//v2
const areArraysEqual2 = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  return firstArray
    .map((element, index) => {
      return element === secondArray[index];
    })
    .every((el) => el === true);
};

//suggested solution:
const areArraysEqual3 = (firstArray, secondArray) => {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((element, index) => element === secondArray[index])
  ) {
    return true;
  }

  return false;
};

console.log(areArraysEqual(a15, b15)); // true
console.log(areArraysEqual(a15, c15)); // false
console.log(areArraysEqual(a15, d15)); // false

console.log(areArraysEqual2(a15, b15)); // true
console.log(areArraysEqual2(a15, c15)); // false
console.log(areArraysEqual2(a15, d15)); // false

/** ЗАДАЧА 44 - Поиск элементов примитивных типов в массиве
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane'];

const isElementInArray = (inputArray, searchElement) => {
  return inputArray.find((el) => el === searchElement) ? true : false;
};

const isElementInArray2 = (inputArray, searchElement) => {
  return inputArray.includes(searchElement);
};

console.log(isElementInArray(transports, 'Bus')); // true
console.log(isElementInArray(transports, 'Phone')); // false
console.log(isElementInArray(transports, 'Airplane')); // true

console.log(isElementInArray2(transports, 'Bus')); // true
console.log(isElementInArray2(transports, 'Phone')); // false
console.log(isElementInArray2(transports, 'Airplane')); // true

/** ЗАДАЧА 45 - Поиск элементов в массивах
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 *
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 *
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
];

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
];

const primitiveTypesArray = [25, 'x', true, undefined, null];

const isElementInArray4 = (searchElement, inputArray) => {
  if (typeof searchElement !== 'object') {
    return inputArray.includes(searchElement);
  } else {
    const convertedArray = inputArray.map((el) => JSON.stringify(el));
    return convertedArray.includes(JSON.stringify(searchElement));
  }
};

console.log(isElementInArray4(['css', 'flexbox'], tags)); // true
console.log(isElementInArray4(['flexbox', 'css'], tags)); // false
console.log(isElementInArray4({ title: 'Apple', quantity: 25 }, fruits)); // true
console.log(isElementInArray4({ title: 'Banana' }, fruits)); // false
console.log(isElementInArray4(25, primitiveTypesArray)); // true

/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

const myNumbers1 = [123, 50, 27];

function pushIfUnique(inputArray, newElement) {
  if (inputArray.includes(newElement)) {
    return console.log(`${newElement} is already exists in the array`); //
  }
  myNumbers1.push(newElement);
}

pushIfUnique(myNumbers1, 50); // "50 уже в массиве"
console.log(myNumbers1); // [123, 50, 27]

pushIfUnique(myNumbers1, 80);
console.log(myNumbers1); // [123, 50, 27, 80]

pushIfUnique(myNumbers1, 80); // "80 уже в массиве"
console.log(myNumbers1); // [123, 50, 27, 80]

pushIfUnique(myNumbers1, 77);
console.log(myNumbers1); // [123, 50, 27, 80, 77]

/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
];

//v1
function popularPostsIds(posts, minimalComentsQty) {
  const arrNew = [];
  posts.map((el) =>
    el.comments >= minimalComentsQty ? arrNew.push(el.postId) : ''
  );
  return arrNew;
}

//v2
function popularPostsIds2(posts, minimalComentsQty) {
  return posts.reduce(
    (acc, curValue) =>
      curValue.comments >= minimalComentsQty
        ? acc.concat([curValue.postId])
        : acc,
    []
  );
}

console.log(popularPostsIds(inputPosts, 10)); // [3421, 8135]
console.log(popularPostsIds(inputPosts, 15)); // [3421]
console.log(popularPostsIds(inputPosts, 50)); // []

console.log(popularPostsIds2(inputPosts, 10)); // [3421, 8135]
console.log(popularPostsIds2(inputPosts, 15)); // [3421]
console.log(popularPostsIds2(inputPosts, 50)); // []

/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
];

const quantitiesByCategories = (products) => {
  return products.reduce(
    (acc, currValue) =>
      Object.assign(acc, {
        [currValue.category]: acc.hasOwnProperty(currValue.category)
          ? (acc[currValue.category] += currValue.quantity)
          : currValue.quantity,
      }),
    {}
  );
};

//suggested solution:
function quantitiesByCategories2(products) {
  return products.reduce((qtysByCategories, product) => {
    const { category, quantity } = product;

    qtysByCategories[category] = (qtysByCategories[category] || 0) + quantity;

    return qtysByCategories;
  }, {});
}

//suggested solution mode:
function quantitiesByCategories3(products) {
  return products.reduce((qtysByCategories, product) => {
    qtysByCategories[product.category] =
      (qtysByCategories[product.category] || 0) + product.quantity;

    return qtysByCategories;
  }, {});
}

//suggested solution mode2:
function quantitiesByCategories4(products) {
  return products.reduce((acc, cv) => {
    acc[cv.category] = (acc[cv.category] || 0) + cv.quantity;

    return acc;
  }, {});
}

console.log(quantitiesByCategories(inputProducts)); //{ Accessories: 3, Phones: 1, Watches: 2 }
console.log(quantitiesByCategories2(inputProducts)); //{ Accessories: 3, Phones: 1, Watches: 2 }
console.log(quantitiesByCategories3(inputProducts)); //{ Accessories: 3, Phones: 1, Watches: 2 }
console.log(quantitiesByCategories4(inputProducts)); //{ Accessories: 3, Phones: 1, Watches: 2 }
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */

/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

const inputProducts2 = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
];

function sortProductsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

const sortedProducts = sortProductsByPrice(inputProducts2);

console.log(sortedProducts); // sorted array

console.log(inputProducts2); // original array

/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

function templateLiteral(num) {
  return `
  the number: ${num}.
  ${
    num < 10
      ? 'the number is less than 10'
      : 'the number is greater or equal 10'
  }.
  a square of the number is - ${Math.sqrt(num)}.
  `;
}

//suggested solution:
const templateLiteral2 = (num) => {
  return `Число ${num}.
Это число ${num < 10 ? 'меньше' : 'больше или равно'} 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.`;
};

// ТЕСТ 1
const myNumber4 = 9;
console.log(templateLiteral(myNumber4));
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/

/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

function meanScore(...arguments) {
  const isAnyOfArgsNotANumber = [...arguments].find(
    (el) => typeof el !== 'number'
  );
  if (isAnyOfArgsNotANumber) {
    return 'Every of arguments should be numbers';
  }
  return (
    Math.round(
      ([...arguments].reduce((acc, cv) => acc + cv, 0) /
        [...arguments].length) *
        100
    ) / 100
  );
}

//suggested solution:
// function meanScore(...numbers) {
//   if (numbers.some((num) => typeof num !== 'number')) {
//     console.error('Все аргументы в вызове функции должны быть числами!');
//     return;
//     // throw new Error('Все аргументы в вызове функции должны быть числами!')
//   }

//   return numbers
//     .reduce((mean, num) => mean + num / numbers.length, 0)
//     .toFixed(2);
// }

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ['abc', 1.3, true, 2.5, 1.9];

console.log(meanScore(...scores1)); // 1.93
console.log(meanScore(...scores1, ...scores2)); // 2.8
console.log(meanScore(...scores1, ...scores2, ...scores3)); // 2.59
console.log(meanScore(...scores4)); // Все аргументы в вызове функции должны быть числами!

/** ЗАДАЧА 52 - Параметры функции по умолчанию
 *
 * 1. Создайте функцию "weatherForecast" с двумя параметрами "city" и "weather"
 *
 * 2. Если второй аргумент отсутствует,
 * параметр "weather" должен получить значение "Отличная погода!"
 *
 * ВАЖНО:
 *  - Сначала решите это БЕЗ параметра функции по умолчанию
 *  - Закомментируйте предыдущее решение
 * и решите ту же задачу с параметром функции по умолчанию
 *
 * ПРИМЕЧАНИЕ:
 * Внимательно сравните свои результаты с результатами тестовых вызовов
 */

function weatherForecast(city, weather = 'perfect weather') {
  // return weather !== undefined
  //   ? `weather forcast for ${city}: ${weather}`
  //   : `weather forcast for ${city}: perfect weather`;

  return `weather forcast for ${city}: ${weather}`;
}

console.log(weatherForecast('Dubai', 'Солнечно')); // Прогноз погоды для города Dubai: Солнечно
console.log(weatherForecast('London', 'Небольшой дождь')); // Прогноз погоды для города London: Небольшой дождь
console.log(weatherForecast('Paris')); // Прогноз погоды для города Paris: Отличная погода!
console.log(weatherForecast('Miami', '')); // Прогноз погоды для города Miami:
console.log(weatherForecast('Las Vegas', undefined)); // Прогноз погоды для города Las Vegas: Отличная погода!

/** ЗАДАЧА 53 - Сокращенное написание свойств объектов
 *
 * 1. Исправьте все ошибки в коде.
 *
 * 2. Измените объект, возвращаемый функцией "photosGallery", используя:
 *  - Сокращенные имена свойств
 *  - Сокращенные имена методов
 *  - Также нужно изменить одно свойство объекта
 * и сделать его вычисляемым свойством
 *
 * 3. Сообщения в консоли должны быть точно такими же,
 * как и в конце этой задачи
 */

const photosGallery = (title, dimensions, date) => {
  return {
    title,
    info() {
      console.log(`Фото "${title}" имеет разрешение ${dimensions}`);
    },
    [dimensions]: true,
    publishInfo() {
      console.log(
        `Фото было опубликовано ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} секунды назад`
      );
    },
    date,
  };
};

const myDogPhoto = photosGallery('My dog', '1920x1080', new Date());

const testDimension1 = '1920x1080';
const testDimension2 = '1080x720';

myDogPhoto.info(); /* Фото "My dog" имеет разрешение 1920x1080 */

// setTimeout(
//   () => myDogPhoto.publishInfo(),
//   2000
// ); /* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
к параметрам функции "photosGallery" (например "date")? */

// maybe because of event loop

console.log(myDogPhoto[testDimension1]); // true
console.log(myDogPhoto[testDimension2]); // undefined

console.log(Object.keys(myDogPhoto));

/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */

const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defaultQty); // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty;
};

const inputQuantities1 = [8, 29, 10];
console.log(processQuantities(inputQuantities1)); // 31

const inputQuantities2 = [8, 29];
console.log(processQuantities(inputQuantities2)); // 21

/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */

let min, max;

function minMax(...params) {
  min = Math.min(...params);
  max = Math.max(...params);
  return [min, max];
}

/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
minMax(24, 5, 34, 10);
console.log(min, max); // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
minMax(18, 23, 103, 70, 80, 25);
console.log(min, max); // 18, 103

//suggested solution:
function minMax2(...nums) {
  return [Math.min(...nums), Math.max(...nums)];
}

[min, max] = minMax2(24, 5, 34, 10);
console.log(min, max); // 5, 34

[min, max] = minMax2(18, 23, 103, 70, 80, 25);
console.log(min, max); // 18, 103

/** ЗАДАЧА 56 - Деструктуризация объектов
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const personInfo = ({
  name,
  age: personAge,
  country: origin,
  city: homeCity,
}) => {
  const objNew = {
    name,
    personAge,
    origin,
    homeCity,
  };
  objNew.friendsQty = 0;
  objNew.createdAtYear = new Date().getFullYear();
  return objNew;
};

//suggested solution:
const personInfo2 = (person) => {
  const {
    name,
    age: personAge,
    location: { country: origin, city: homeCity },
    friendsQty = 0,
    createdAtYear = new Date().getFullYear(),
  } = person;

  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    createdAtYear,
  };
};

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
};

const result = personInfo(person);
const result2 = personInfo2(person);

console.log(result);
console.log(result2);
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/

/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
];

function processPosts(posts) {
  const arrNew = posts.map((el) => {
    return {
      postId: ({ ...el }.postId += 1000),
      postAuthor: { ...el }.author,
      postCommentsQty: { ...el }.commentsQty || 0,
    };
  });
  return arrNew;
}

//suggested solution:
const processPosts2 = (posts) => {
  return posts.map((post) => {
    const {
      postId,
      author: postAuthor,
      commentsQty: postCommentsQty = 0,
    } = post;

    return {
      postAuthor,
      postCommentsQty,
      postId: postId + 1000,
    };
  });
};

const processedPosts = processPosts(testPosts);
console.log(processedPosts);
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts);
// оригинальный массив должен остаться без изменений

/** ЗАДАЧА 58 - Удаление свойств объекта
 *
 * 1. Используйте деструктуризацию объекта вместе с rest опертором,
 * чтобы быстро удалить определенные свойства из объекта.
 *
 * 2. Убедитесь, что переменные, которые будут использоваться для деструктуризации удаленных свойств,
 * не будут доступны после операции деструктуризации.
 */

let person2 = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
};

const deleteSomePerson2Info = (objPerson) => {
  const { index, email, name, cartId } = objPerson;
  return { index, email, name, cartId };
};
console.log(deleteSomePerson2Info(person2)); //

//suggested solution:
// OPTION: Delete operator
// delete person._id;
// delete person.processed;
// delete person.cart;

console.log(person2);
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/

/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, cv) => acc + cv, 0);
  }
  onlyNumbers() {
    return this.filter((el) => typeof el === 'number');
  }
}

const arrNew4 = new ExtendedArray(1, 2, 3);
console.log(arrNew4); //[ 1, 2, 3 ]
console.log(arrNew4.sum()); //6
//4
console.log(arrNew4.map((el) => el * 2)); //[ 2, 4, 6 ]
console.log(arrNew4.find((el) => el > 2)); //3
console.log(arrNew4.forEach((el) => console.log(el * 3))); //3,6,9

const arrNew5 = new ExtendedArray(1, 2, 'abc', null, true, 5);
console.log(arrNew5); //[ 1, 2, 'abc', null, true, 5 ]
console.log(arrNew5.onlyNumbers()); //[ 1, 2, 5 ]

/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */

// v1
class CustomArray extends Array {
  customPush(newElement) {
    const arrNew = this;
    arrNew.splice(arrNew.length, 0, newElement);
    console.log(`a new element ${newElement} have been added to the array`); //
    return arrNew;
  }
}

// v2
class CustomArray2 extends Array {
  // push make the same effect:
  customPush2(newElement) {
    const arrNew = this;
    this[this.length] = newElement;
    //alt:
    // this.length += 1;
    // this[this.length - 1] = newElement;
    console.log(`a new element ${newElement} have been added to the array`); //
    return arrNew;
  }
}

const arrNew6 = new CustomArray(1, 2, 1);
console.log(arrNew6.customPush(3)); //a new element 3 have been added to the array -->CustomArray(4) [ 1, 2, 1, 3 ]
console.log(`push: ${arrNew6.push(3)}`); //push: 5
console.log(arrNew6); //CustomArray(5) [ 1, 2, 1, 3, 3 ]

const arrNew7 = new CustomArray2(1, 2, 1); //a new element 3 have been added to the array -->CustomArray(4) [ 1, 2, 1, 3 ]
console.log(arrNew7.customPush2(3)); // 'push of custom' has a prioritet than embedded 'push'
console.log(`push: ${arrNew7.push(3)}`); //push: 5
console.log(arrNew7); //CustomArray2(5) [ 1, 2, 1, 3, 3 ]

/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

function sumNumbers(...params) {
  return console.log([...params].reduce((acc, cv) => acc + cv)); //
}

//suggested solution:
function sumNumbers2() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log('Sum of all arguments is ', sum);

  return sum;
}

sumNumbers(1, 3); // 4
sumNumbers(10, 20, 5); // 35
sumNumbers(2, 5, 80, 1, 10, 12); // 110

sumNumbers2(1, 3); // 4
sumNumbers2(10, 20, 5); // 35
sumNumbers2(2, 5, 80, 1, 10, 12); // 110

/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

console.log(firstFunction(5, 5)); //25

function firstFunction(a, b) {
  return a + b;
}

function firstFunction(a, b) {
  return a * b;
}

// console.log(secondFunction(6, 6)); //ReferenceError: Cannot access 'secondFunction' before initialization

const secondFunction = function (a, b) {
  return a + b;
};

// const secondFunction = function (a, b) {
//   return a + b;
// };

console.log(secondFunction(6, 6)); //36

// 1 function declaration:
// - can be redeclared and reaasigned it hoistable (we can call it before declaration)
// 2 function expression:
// - can`t be redeclared and not hoistable (we can`t call it before declaration - will have an error)

/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

const b1 = 2;
let d = 15;

function myFn1(a) {
  let b1;
  let d = 10;
  myFn2(b);
}

function myFn2(a) {
  let c = 5;
  console.log(a, b1, c, d); //undefined, 2, 5, 15
}

myFn1();

/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 2484.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a17 = 5;
const b17 = 10;

if (b17 > a17) {
  let c17 = 2;
  c17 = a17 + b17 + c17;
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  console.log(c17); //17
  // 17
}

// console.log(c17);
// Uncaught ReferenceError: c is not defined
// because of 'c17' is only in the block scope

/** ЗАДАЧА 65 - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */

function isNumber(a) {
  return typeof a === 'number' ? `${a} - это число` : `${a} - это не число`;
}

console.log(isNumber(10)); // 10 - это число
console.log(isNumber('Привет')); // Привет - это не число
console.log(isNumber(true)); // true - это не число

/** ЗАДАЧА 66 - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */

const mult = (a, b) => a * b;

// setTimeout(() => console.log(mult(5, 10)), 1000); // 50

/** ЗАДАЧА 67 - Параметры функции по умолчанию
 *
 * 1. Ответьте на следующий вопрос:
 *  - Почему в строке 12 мы не можем просто использовать оператор ИЛИ?
 *    mult = mult || 2
 *
 * 2. Перепишите функцию с использованием значения по умолчанию
 * для параметра mult в "multiplyBy"
 */

function multiplyBy(a, mult = 2) {
  // mult = mult !== undefined ? mult : 2;
  // mult = mult || 2 --> we CAN do this!
  console.log(a * mult);
}

multiplyBy(2); // 4
multiplyBy(2, undefined); // 4
multiplyBy(2, 0); // 0
multiplyBy(5, 10); // 50

/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
  a === undefined
    ? console.log(
        `Uncaught Error: the function cannot be invoked without arguments`
      )
    : console.log(a * a);
}

//suggested solution:
if (arguments.length === 0) {
  throw new Error('Функция "square" не может быть вызвана без аргумента');
}

square(10);
// 100

square();
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
};

// Создайте функцию здесь:

// v1:
function mult2({ x, y, z }) {
  return x * y * z;
}

// v2:
function mult3(object) {
  const { x, y, z } = object;
  return x * y * z;
}

//suggested solution:
const mult4 = ({ x, y, z }) => x * y * z;

const result3 = mult2(objectWithNumbers);
console.log(result3); // 300
const result4 = mult3(objectWithNumbers);
console.log(result4); // 300

/** ЗАДАЧА 70 - Деструктуризация массивов и "rest" оператор
 *
 * Присвойте переменным "a", "b" и "с" значения, используя
 * деструктуризацию массивов и "rest" оператор
 *
 * Значения переменных должны быть такими как в выводах в консоли
 */

const arr19 = [1, 2, 3, 4, 5, 6, 7];

// Напишите код здесь:
const [a19, b19, ...c19] = arr19;

console.log(a19); // 1
console.log(b19); // 2
console.log(c19); // [3, 4, 5, 6, 7]

/** ЗАДАЧА 71 - Spread Operator
 *
 * Используя оператор "spread" создайте новый массив
 * Вывод в консоли должен быть таким же как в конце задания
 */

const a20 = [1, 2];
const b20 = [4, 5];
const c20 = [8, 9, 10];
const d20 = 11;

// Напишите код здесь
const combinedArray = [0, ...a20, 3, ...b20, 6, 7, ...c20, d20];

console.log(combinedArray);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a21 = [1, 2, 3];

// Напишите код здесь
// v1:
const b21 = [...a21];
// v2:
const strB22 = a21.join('').toString();
const b22 = [...strB22].map((el) => +el);
// v3:
const b23 = JSON.parse(JSON.stringify(a21));
//suggested solution:
const b24 = Array.from(a21);

b21.push('newElement');
b22.push('newElement');
b23.push('newElement');
b24.push('newElement');

console.log(a21); // [1, 2, 3]
console.log(b21); // [1, 2, 3, "newElement"]
console.log(b22); // [1, 2, 3, "newElement"]
console.log(b23); // [1, 2, 3, "newElement"]
console.log(b24); // [1, 2, 3, "newElement"]

/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

const cars1 = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
];

// Создайте функцию "carInfo" здесь
function carInfo({ brand, price }) {
  return price > 20000
    ? `Price of ${brand} - ${price} and it is a rich car`
    : `Price of ${brand} - ${price} and it is a cheap car`;
}

//suggested solution:
function carInfo({ brand, price }) {
  return `Цена автомобиля ${brand} - ${price}$ и это ${
    price > 20000 ? 'дорогая' : 'дешёвая'
  } машина`;
}

cars1.forEach((car) => console.log(carInfo(car)));
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина

/** ЗАДАЧА 74 - Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */

const person11 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
};

const person22 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
};

// Напишите функцию "shortPerson" здесь:

function shortPerson(obj23) {
  const {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0,
  } = obj23;
  return { n, c, a, p };
}

//suggested solution:
const shortPerson2 = ({
  name: n,
  info: { country: c, age: a },
  postsQuantity: p = 0,
}) => ({
  n,
  c,
  a,
  p,
});

console.log(shortPerson(person11)); // { n: "Mike", c: "Spain", a: 23, p: 100 }
console.log(shortPerson(person22)); // { n: "Alice", c: "Italy", a: 25, p: 0 }

/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const str = 'Today is the best day of my life';

// Напишите код здесь:

// v1:
for (const char of str) {
  if (vowels.includes(char)) {
    vowelsCount++;
  }
}

// v2:
const getVowQty = (str) => [...str].filter((el) => vowels.includes(el)).length;

//suggested solution:
// str.split('').forEach((char) => {
//   if (vowels.includes(char)) {
//     vowelsCount += 1;
//   }
// });

console.log(vowelsCount); // 9
console.log(getVowQty(str)); //9

/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * Поменяйте местами значения переменных "a" и "b".
 * Не используйте для этого какие-либо новые переменные.
 */

let aa = 'first';
let ba = 'second';

console.log(aa, ba); // first second

// Напишите код здесь
[aa, ba] = [ba, aa];

console.log(aa, ba); // second first

/** ЗАДАЧА 77 - Замыкания
 *
 * 1. Создайте функцию "createGreeting", внутри которой создайте:
 *  - переменную "greetingString" с значением "Hey, this is"
 *    (объявите ее используя "let")
 *  - функцию "greet" с одним параметром, которая должна возвращать
 *    строку-приветствие на основании "greetingString" и параметра,
 *    например, "Hey, this is Bob"
 *  - функцию "changeGreeting" с одним параметром, которая должна
 *    изменять значение переменной "greetingString"
 *
 * 2. Функция "createGreeting" должа вернуть объект с двумя методами:
 *  - greet
 *  - changeGreeting
 */

function createGreeting() {
  let greetingString = 'Hey, this is';

  return {
    greet(greetName) {
      return `${greetingString} ${greetName}`;
    },
    changeGreeting(newGreetName) {
      greetingString = newGreetName;
    },
  };
}

//suggested solution:
function createGreeting2() {
  let greetingString = 'Hey, this is';
  function greet(greetName) {
    return `${greetingString} ${greetName}`;
  }
  function changeGreeting(newGreetName) {
    greetingString = newGreetName;
  }
  return {
    greet,
    changeGreeting,
  };
}

const greeting1 = createGreeting();

console.log(greeting1.greet('Bob')); // Hey, this is Bob

greeting1.changeGreeting('Good Morning from');

console.log(greeting1.greet('Emily')); // Good Morning from Emily

/* ____________  */

const greeting2 = createGreeting();

console.log(greeting2.greet('Emily')); // Hey, this is Emily

/** ЗАДАЧА 78 - Классы
 *
 * 1. Создайте класс "Fruit"
 *
 * 2. У каждого экземпляра этого класса должно быть
 * два собственных свойства:
 *  - title
 *  - price
 *
 * 3. Также нужно добавить метод "priceInfo", который
 * будет возвращать строку, содержащую название и цену фрукта
 *
 * 4. Выводы в консоли должны совпасть
 */

class Fruit {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  priceInfo() {
    return `Price of the ${this.title} is ${this.price}$`;
  }
}

const apple = new Fruit('Apple', 2);
console.log(apple.priceInfo());
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3);
console.log(orange.priceInfo());
// Price of the Orange is 3$

/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировaть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers1 = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
};

// Создайте функцию здесь
function sumObjectValues(obj) {
  const arrNew = [];

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'number') {
        arrNew.push(obj[key]);
      }
    }
  }
  return arrNew.reduce((acc, cv) => acc + cv, 0);
}

//suggested solution:
function sumObjectValues(nums) {
  let sum = 0;

  Object.keys(nums).forEach((key) => {
    if (typeof nums[key] === 'number') {
      sum += nums[key];
    }
  });

  return sum;
}

const result5 = sumObjectValues(objectWithNumbers1);
console.log(result5); //42

/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Создайте функцию "sumPositiveNegative" здесь
function sumPositiveNegative(arr) {
  const sumPositive = arr
    .filter((el) => el >= 0)
    .reduce((acc, cv) => acc + cv, 0);

  const sumNegative = arr
    .filter((el) => el < 0)
    .reduce((acc, cv) => acc + cv, 0);
  return { positive: sumPositive, negative: sumNegative };
}

//suggested solution:
function sumPositiveNegative(arr) {
  return arr.reduce(
    (sums, num) => {
      if (num > 0) {
        return {
          ...sums,
          positive: sums.positive + num,
        };
      }

      return {
        ...sums,
        negative: sums.negative + num,
      };
    },
    { positive: 0, negative: 0 }
  );
}

const result22 = sumPositiveNegative(nums);

console.log(result22);
// { positive: 74, negative: -54 }
