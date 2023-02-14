// 1 - Задача. Условие: Найти самый маленький элемент - число в массиве

findSmallestEl = (arg) => {
  /*  

  1 - способ: Math.min() - не принимает массив => ...spread (раздел массив на эл)
    return Math.min(...arg);

  */

  // 2 - способ: лучше + for

  let currentMin = arg[0];

  // i = 1 !!!
  for (let i = 1; i < arg.length; i++) {
    if (arg[i] < currentMin) {
      currentMin = arg[i];
    }
  }

  return currentMin;
};

/* --- test
console.log(findSmallestEl([55, 77, 2, 555, 1, 9])); // 1
console.log(findSmallestEl([55, 77, 222, 555, 4, 9])); // 4
console.log(findSmallestEl([55, 77, 10, 555, 12, 19])); // 10
*/

// 2 - Задача. Условие: Найти среднее арифметическое в массиве - округленное вниз до ближайшего целого числа - Math.floor()

function getAverage(arr) {
  /* 

  // 1 - способ - reduce
  return Math.floor(arr.reduce((acc, curElem) => acc + curElem) / arr.length);

  */

  // 2 - способ:  forEach или for

  let acc = 0;
  arr.forEach((el) => {
    acc += el;
  });
  return Math.floor(acc / arr.length);
}

/* --- test
console.log(getAverage([51, 79, 2, 595, 1, 9])); // 122
console.log(getAverage([5, 77, 22, 55, 4, 9])); // 28
console.log(getAverage([55, 7, 10, 5, 1, 1])); // 13
*/

// 3 - Задача. Условие: Развернуть последовательность и вернуть массив чисел

// 1 - способ - for + push()
const reverseSeq = (n) => {
  const arr = [];

  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

/*  --- test
console.log(reverseSeq(5)); // [ 5, 4, 3, 2, 1 ]
console.log(reverseSeq(3)); // [ 3, 2, 1 ]
console.log(reverseSeq(9)); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1]
*/

// 4 - Задача. Условие: вывести определнные числа исходя из условия - if, else if

function finalGrade(e, p) {
  if (e > 90 || p > 10) {
    return 100;
  } else if (e > 75 && p >= 5) {
    return 90;
  } else if (e > 50 && p >= 2) {
    return 75;
  } else {
    return 0;
  }
}

/*  --- test
console.log(finalGrade(100, 12)); // 100
console.log(finalGrade(85, 5)); // 90
console.log(finalGrade(60, 3)); // 75
console.log(finalGrade(30, 1)); // 0
*/

// 5 - Задача. Условие: нарисовать квадратик и прямоугольник с помощью звездочек

function getRectangleString(w, h) {
  // перенос строки
  const rn = '\r\n';
  // top bottom (2 строки верхняя и нижняя)
  const tb = '*'.repeat(w) + rn;
  // центр часть
  const center =
    w > 1 ? ('*' + ' '.repeat(w - 2) + '*' + rn).repeat(h - 2) : '';

  return h > 1 ? tb + center + tb : tb.repeat(h);
}

/*  --- test
console.log(getRectangleString(3, 3))
***
* *
***
*/

// 6 - Задача. Условие: трансформирование, конвектирование в двоичное число. К нам приходит положительное целое число - нам его нужно возвращать в двоичном формате
// Метод toString() возвращает строку, представляющую объект.- ОНА ПРИНИМАЕТ АРГУМЕНТОМ ОСНОВАНИЕ ВО ЧТО НУЖНО ПЕРЕВЕСТИ

function toBinary(n) {
  return Number(n.toString(2));
  // return +(n.toString(2));
}

// => func

const toBinary1 = (n) => +n.toString(2);

/*  --- test
console.log(toBinary(1)); // 1
console.log(toBinary(3)); // 11
console.log(toBinary(6)); // 110
console.log(toBinary(11)); // 1011
*/

// 7 - Задача. Условие:  Найти пропущенный элемент между двумя массивами

//Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

function findMissing(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let index; // будем искать индекс внутри второго массива
    // наша логика  - нужно взять элемент в первом массиве и если мы его находим во тором то там же и удаляем - если нет то возвр этот элемент как пропущенный
    index = arr2.indexOf(arr1[i]);
    if (index > -1) {
      arr2.splice(index, 1);
    } else {
      return arr1[i];
    }
  }
}

/*  --- test
console.log(findMissing([1, 2, 3, 4], [1, 3, 4])); // 2
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])); // 8
*/

// 8 - Задача. Условие: Вернуть ТИП суммы 2-х аргументов

function typeOfSum(a, b) {
  return typeof (a + b);
}

/*  --- test
console.log(typeOfSum(12, 1)); // number
console.log(typeOfSum('d', 1)); // string
console.log(typeOfSum('dd', '')); // string
console.log(typeOfSum(true, 1)); // number
console.log(typeOfSum('s', false)); // string
console.log(typeOfSum(null, 1)); // number
console.log(typeOfSum('s', null)); // string
console.log(typeOfSum(null, undefined)); // number
*/

// 9 - Задача. Условие: Посчитать количество нечетных чисел до n (n/2 и округляем вниз)

function oddCount(n) {
  return Math.floor(n / 2);
}

/*  --- test
console.log(oddCount(15)); // 7
console.log(oddCount(22)); // 11
*/

// 10 - Задача. Условие: Повторить строку - Метод строк str.repeat(count)

function repeatStr(n, str) {
  return str.repeat(n);
}

/*  --- test
console.log(repeatStr(3, '*')); // ***
console.log(repeatStr(8, '#')); // ########
*/

// 11 - Задача. Условие: Поcчитать лучше ли средний балл у студентов чем у одного конкретного - reduce()
// знак < или > возвращает true или false
function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, item) => acc + item, 0) / classPoints.length <
    yourPoints
  );
}

/*  --- test
console.log(betterThanAverage([3, 5, 6, 6], 7)); // true
console.log(betterThanAverage([6, 6, 8, 9, 10], 7)); // false
*/

// 12 - Задача. Условие: есть персонаж и его пароль, и если он представляется своим именем и паролем то возвращаем "Ho Ho Ho!" если что-то не так то false

function Sleigh(name, pass) {
  return name === 'Santa Claus' && pass === 'Hey';
}

/*  --- test
console.log(Sleigh('Santa Claus', 'Hey')); // true
console.log(Sleigh('Santa', 'Hey')); // false
*/

// 13 - Задача. Конвертировать число в массив в обратном порядке

function digitize(n) {
  // Метод toString() возвращает строковое представление указанного объекта Number.
  // num to string to arr revers return
  // Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
  // reverse и map работает только с массивами
  return n
    .toString()
    .split('')
    .reverse()
    .map((el) => +el);
  // .map(Number);
}

/*  --- test
console.log(digitize(348597)); // [ 7, 9, 5, 8, 4, 3 ]
console.log(digitize(35231)); //  [ 1, 3, 2, 5, 3 ]
*/

// 14 - Задача. Развернуть строку
// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
function solution(str) {
  // 1 opt - not best practice
  // return str.split('').reverse().join('');

  // 2 opt
  // str.length - 1 - последний индекс
  let s = '';
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}

// /*  --- test
console.log(solution('world')); // dlrow
console.log(solution('InVaSiOn')); // nOiSaVnI
// */

// 15 - Задача. Найти сумму элементов массива - for
const arr15 = [1, 2, 2, 4, 5, 66];
let sum15 = 0;

for (let i = 0; i < arr15.length; i++) {
  sum15 += arr15[i];
}

console.log('task 15 ', sum15); // 80

// 16 - Задача. Найти сумму элементов массива - reduce
const arr16 = [1, 2, 2, 4, 5, 66, 88];
let sum16 = arr16.reduce((acc, item) => acc + item, 0);

console.log('task 16 ', sum16); // 168

// 17 - Задача. Найти сумму элементов массива - eval()
// Функция eval() выполняет код, переданный ей в виде строки
const arr17 = [1, 2, 2, 4, 5, 66, 88, 145];
console.log(arr17.join('+')); // 1+2+2+4+5+66+88+145
console.log('task 17 ', eval(arr17.join('+'))); // 313

// 18 - Задача. Найти макс элемент в массиве - for + if
const arr18 = [1, 2, 2, 4, 5, 66, 88, 145];
let max18 = arr18[0];

for (let i = 1; i < arr18.length; i++) {
  if (arr18[i] > max18) {
    max18 = arr18[i];
  }
  // max18 = arr18[i] > max18 ? arr18[i] : max18
}

console.log('task 18 ', max18); // 145

// 19 - Задача. Найти макс элемент в массиве - ternarn
const arr19 = [1, 2, 2, 333, 4, 5, 66, 88, 145];
let max19 = arr19[0];

for (let i = 1; i < arr19.length; i++) {
  max19 = arr19[i] > max19 ? arr19[i] : max19;
}

console.log('task 19 ', max19); // 333

// 20 - Задача. Найти макс элемент в массиве - Math.max()
// Метод Math.max() возвращает наибольшее из нуля или более чисел.
const arr20 = [1, 2, 2, 333, 4, 454, 5, 66, 88, 145];
let max20 = arr20[0];

for (let i = 1; i < arr20.length; i++) {
  max20 = Math.max(arr20[i], max20);
}

console.log('task 20 ', max20); // 454

// 21 - Задача. Найти макс элемент в массиве - reduce
const arr21 = [1, 2, 2, 333, 4, 454, 777, 5, 66, 88, 145];

let max21 = arr21.reduce((acc, item) => Math.max(acc, item));
console.log('task 21 ', max21); // 777

// 22 - Задача. Найти макс элемент в массиве - sort()
// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
const arr22 = [1, 2, 2, 333, 4, 454, 5, 66, 881, 88, 145];
arr22.sort((x1, x2) => x1 - x2);
let max22 = arr22[arr22.length - 1];

console.log('task 22 ', max22); // 881

// 23- Задача. Найти макс элемент в массиве - pop()
// Метод pop() удаляет последний элемент из массива и возвращает его значение.
const arr23 = [1, 2, 2, 333, 4, 454, 5, 66, 881, 88, 145];
arr23.sort((x1, x2) => x1 - x2);
let max23 = arr23.pop();

console.log('task 23 ', max23); // 881

// 24- Задача. Найти макс элемент в массиве - ...spread
// spread-оператор (оператор ...) позволяет разложить массив на отдельные значения. Для этого перед массивом ставится многоточие:

const arr24 = [1, 2, 2, 333, 4, 454, 5, 66, 881, 88, 145, 999];

console.log('task 24_1 ', Math.max(...arr24)); // 999
console.log('task 24_2 ', Math.max.apply(null, arr24)); // 999

// 25- Задача. Сортировка arr
// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
const arr25 = [1, 2, 2, 333, 4, 454, 5, 66, 881, 88, 145, 999];
arr25.sort((x1, x2) => {
  if (x1 < x2) {
    return -1;
  }
  if (x1 === x2) {
    return 0;
  }
  return 1;
});

// arr25.sort((x1,x2) => x1-x2)

console.log('task 25 ', arr25); //  [ 1,   2,   2,   4,   5, 66,  88, 145, 333, 454, 881, 999]

// 26- Задача. Сортировка {}
const users26 = [
  {
    name: 'Serge',
    age: 20,
  },
  {
    name: 'Ivan',
    age: 50,
  },
  {
    name: 'Cloe',
    age: 40,
  },
];

users26.sort((u1, u2) => u1.age - u2.age);
console.log('task 26 ', users26); // [{ name: 'Serge', age: 20 },{ name: 'Cloe', age: 40 },{ name: 'Ivan', age: 50 }]

// 27- Задача. Сортировка {} по имени
// Описание Метод localeCompare() сравнивает одну строку с другой и возвращает одно из трех значений (число)
const users27 = [
  {
    name: 'Serge',
    age: 20,
  },
  {
    name: 'Ivan',
    age: 50,
  },
  {
    name: 'Cloe',
    age: 40,
  },
];
users27.sort((u1, u2) => {
  return u1.name.localeCompare(u2.name);
});
console.log('task 27 ', users27); // [{ name: 'Cloe', age: 40 },{ name: 'Ivan', age: 50 },{ name: 'Serge', age: 20 }]

// 28- Задача. Развернуть массив
const arr28 = [1, 2, 3, 4, 5, 6, 7, 8];
const revers28 = arr28.map((e, index, arr) => arr[arr.length - index - 1]);
console.log('task 28 ', revers28); //  [8, 7, 6, 5,4, 3, 2, 1]

// 29- Задача. Отфильтровать falsy значения в массиве
const arr29 = [2, 'abc', 0, false, 99, NaN, ''];
const notFalsy = [];

for (let i = 0; i < arr29.length; i++) {
  if (!!arr29[i]) {
    notFalsy.push(arr29[i]);
  }
}
console.log('task 29 ', notFalsy); // [ 2, 'abc', 99 ]

// 30- Задача. Отфильтровать falsy ~ filter()
const arr30 = [2, 'abc', 0, false, 99, NaN, ''];
const notFalsy30 = arr30.filter((n) => !!n);
// const notFalsy30 = arr30.filter(Boolean);
console.log('task 30 ', notFalsy30); // [ 2, 'abc', 99 ]

// 31- Задача. Найти разницу между объемами кубов
// Метод Math.abs возвращает модуль числа, то есть из отрицательного числа делает положительное.
// V cube = a*b*c
function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

console.log('task 31_1 ', findDifference([3, 2, 5], [1, 4, 6])); // 6
console.log('task 31_2 ', findDifference([7, 5, 5], [1, 2, 6])); // 163

// 32- Задача. Персонализированное приветствие
function greet(name, owner) {
  // if (name === owner) {
  //   return 'Hello Boss';
  // } else {
  //   return 'Hello guest';
  // }

  // return name === owner ? 'Hello boss' : 'Hello guest';

  // return 'Hello ' + (name === owner ? 'boss' : 'guest');

  return `Hello ${name === owner ? 'boss' : 'guest'}`;
}

// const greet = (name, owner) => `Hello ${(name === owner ? 'boss' : 'guest')}`

console.log('task 32_1 ', greet('Serge', 'Serge')); // hello Boss
console.log('task 32_2 ', greet('Serge', 'Petya')); // Hello guest

// 33- Задача. Таблица умножения
function multiTable(number) {
  let res = '';
  for (let i = 1; i <= 10; i++) {
    res += `${i} * ${number} = ${i * number}`;
    if (i < 10) res += '\n';
  }
  return res;
}

console.log('task 33_1 ', multiTable(5)); //
console.log('task 33_2 ', multiTable(1)); //

// 34- Задача. Суммирование разницы
function sumOfDiff(arr) {
  const sorted = arr.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 1; i < sorted.length; i++) {
    sum += sorted[i - 1] - sorted[i];
  }

  return sum;
}

console.log('task 34', sumOfDiff([1, 2, 10])); // 9 (10-2) + (2-1)

// 35- Задача. Дана строка слов, верните длину самого короткого слова.

function findShort(s) {
  const arr = s.split(' ');
  console.log(arr); // [ "Let's", 'travel', 'abroad', 'shall', 'we' ]

  const lengths = arr.map((word) => word.length);
  console.log(lengths); // [ 5, 6, 6, 5, 2 ]
  console.log(...lengths); // 5 6 6 5 2

  // Метод Math.min() возвращает наименьшее из нуля или более чисел.
  return Math.min(...lengths); // 2
}

console.log('task 35', findShort("Let's travel abroad shall we"));

// 36 - Задача. Учитывая не пустой массив целых чисел, верните результат умножения этих значений.
function grow(arr) {
  return arr.reduce((prev, curr) => prev * curr, 1);
}

console.log('task 36 ', grow([2, 3, 4, 5])); // 2*3*4*5 = 120

// 37 - Задача. Учитывая набор чисел, верните аддитивную инверсию каждого из них.
function invert(arr) {
  return arr.map((item) => -item);
}

console.log('task 37 ', invert([1, 2, 3, 4, 5])); // [-1,-2,-3,-4,-5]

// 38 - Задача. написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленной к каждому элементу.Строка будет иметь хотя бы один элемент; слова всегда будут разделены пробелом.
function addLength(str) {
  const output = [];
  const strArr = str.split(' ');
  console.log(strArr); // [ 'you', 'will', 'win' ]

  for (const value of strArr) {
    output.push(value, value.length); // [ 'you', 3, 'will', 4, 'win', 3 ]
    // output.push(${value} ${value.length})
  }

  return output;
}

console.log('task 38 ', addLength('you will win')); // ["you 3", "will 4", "win 3"]

// 39 - Задача. Вам дано время в часах, и вам нужно вернуть количество литров, которое выпьет User, округлив его до наименьшего значения. User выпивает 0,5 литра воды за час езды на велосипеде
// Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log('task 39_1 ', litres(6)); // 3
console.log('task 39_2 ', litres(4.3)); // 2

// 40 - Задача. Функция принимает 1 параметр: n, n — это количество хот-догов, которые купит клиент, за покупку нескольких штук предусмотрены скидки. Сколько денег потратит клиент, чтобы купить указанное количество хот-догов?

function saleHotDogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

console.log('task 40_1 ', saleHotDogs(4)); // 400
console.log('task 40_2 ', saleHotDogs(8)); // 760
console.log('task 40_3 ', saleHotDogs(12)); // 1080

// 41 - Задача. Напишите функцию, которая удаляет все восклицательные знаки из заданной строки
function removeExclamatMarks(s) {
  return s.replaceAll('!', '');
  // return s.split('').filter(s => s !== '!').join('');
}

console.log('task 41_1 ', removeExclamatMarks('Hello World!')); // Hello World
console.log('task 41_2 ', removeExclamatMarks('!Hello! !World!')); // Hello World

// 42 - Задача. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
let str42 = 'i am in the easycode';
let newStr42 = str42.split(' ');
let new42 = '';
console.log(newStr42); // [ 'i', 'am', 'in', 'the', 'easycode' ]
for (let i = 0; i < newStr42.length; i++) {
  new42 += newStr42[i][0].toUpperCase() + newStr42[i].slice(1) + ' ';
}

console.log('task 42 ', new42); // I Am In The Easycode

// 43 - Задача. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
let str43 = 'tseb eht ma i';
let res43 = '';

for (let i = str43.length; i--; ) {
  res43 += str43[i];
}

console.log('task 43 ', res43); // i am the best

// 44 - Задача. Факториал числа - произведение всех натуральных чисел от 1 до n
let res44 = 1;

for (let i = 1; i <= 5; i++) {
  res44 *= i;
}

console.log('task 44 ', res44); // 120 1*2*3*4*5

// 45 - Задача. Создать функцию, которая удаляет первый и последний символы строки

function removeChar(str) {
  // console.log(str.slice(1)); // erge
  // console.log(str.slice(-1)); // e
  return str.slice(1, -1);
}

console.log('task 45_1 ', removeChar('serge')); // erg
console.log('task 45_2 ', removeChar('Lorem Ipsun')); // orem Ipsu

// 46 - Задача. В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
function highAndLow(numbers) {
  const splitedNums = numbers.split(' ');
  // console.log(splitedNums); // [ '1', '2', '3', '4', '5' ]
  // console.log(...splitedNums); // 1 2 3 4 5
  return `${Math.max(...splitedNums)} ${Math.min(...splitedNums)}`;
}
console.log('task 46_1 ', highAndLow('1 2 3 4 5')); // 5 1
console.log('task 46_2 ', highAndLow('1 2 -3 4 5')); // 5 -3
console.log('task 46_3 ', highAndLow('1 9 3 4 -5')); // 9 -5

// 47 - Задача
// Переменная, объявленная с помощью let имеет блочную область видимости, то есть является локальной. Это значит, что переменная value, объявленная внутри блока if, видна только в его пределах.
let value47 = 5;

if (value47 > 10) {
  let value = 15;
}
const result47 = value47;

console.log('task 47 ', result47); // 5

// 48 - Задача Создайте функцию args_count, которая возвращает количество предоставленных аргументов.

function args_count() {
  return arguments.length;
}

console.log('task 48 ', args_count(1, 2, 4, 5, 7)); // 5

// 49 - Задача. Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку из этих чисел в виде номера телефона
function createPhoneNumbers(numbers) {
  const codeСity = numbers.slice(0, 3).join('');
  console.log(codeСity, typeof codeСity); // '123' - string - Метод join() объединяет все элементы массива в строку
  const phone = `${numbers.slice(3, 6).join('')}-${numbers
    .slice(6, 10)
    .join('')}`;

  return `(${codeСity}) ${phone}`;
}

console.log('task 49 ', createPhoneNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890

// 50 - Задача. На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let str50 = 'JavaScript is a pretty good language';
str50 = str50.split(' ');
console.log(str50); // [ 'JavaScript', 'is', 'a', 'pretty', 'good', 'language' ]
console.log(str50.length); // 6

for (let i = 0; i < str50.length; i++) {
  str50[i] = str50[i].charAt(0).toUpperCase() + str50[i].slice(1);
  // console.log(
  //   (str50[i] = str50[i].charAt(0).toUpperCase() + str50[i].slice(1))
  // );
  // console.log(
  //   (str50[2] = str50[i].charAt(0).toUpperCase() + str50[i].slice(1))
  // );
}

let res50 = str50.join('');
console.log('task 50 ', res50); // JavaScriptIsAPrettyGoodLanguage

// 51 - Задача. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
let arr51 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let newArr51 = [];
for (let i of arr51) {
  if (i % 2 !== 0) {
    newArr51.push(i);
  }
}
console.log('task 51 ', newArr51); // task 51  [ 1,  3,  5,  7, 9, 11, 13, 15 ]

// 52 - Задача. Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list52 = {
  name: 'denis',
  work: 'easycode',
  age: 29,
};

for (let key in list52) {
  console.log(key);
  console.log(list52[key]);
  if (typeof list52[key] === 'string') {
    list52[key] = list52[key].toUpperCase();
    console.log(list52[key]);
  }
}

console.log('task 52 ', list52); // { name: 'DENIS', work: 'EASYCODE', age: 29 }

// 53 - Задача. Дается число, нужно сделать его отрицательным
// Метод Math.abs() возвращает абсолютное значение числа. то есть
function makeNegative53(num) {
  return -Math.abs(num);
}

console.log(
  'task 53 ',
  makeNegative53(1),
  makeNegative53(-5),
  makeNegative53(0.12)
); // -1, -5, -0.12

// 54 - Задача. Первый век охватывает период с 1-го года до 100-го года включительно, второй век — с 101-го года до 200-го года включительно и т.д.Задав год, верните век, в котором он находится.
// Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
function century54(year) {
  return Math.ceil(year / 100);
}
console.log('task 54 ', century54(1986)); // 20
console.log('task 54 ', century54(1555) + ' century'); // 16 century

// 55 - Задача. Напишите функцию, которая преобразует любое предложение в строку где все буквы заглавные и есть 2 пробела между каждой буквой (или специальным символом).
// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку

function stringToUpper55(string) {
  let firstStage = string.split('');
  console.log(firstStage); // [ 'h', 'e', 'r', 'e', ' ', 'a', 'r', 'e', ' ', 'w', 'e', ' ','g', 'o']
  let secondStage = firstStage.filter((s) => s !== ' ');
  let thirdStage = secondStage.map((item) => item.toUpperCase());
  return thirdStage.join(' ');

  // return string
  //   .split('')
  //   .filter((s) => s !== ' ')
  //   .map((item) => item.toUpperCase())
  //   .join(' ');
}

console.log('task 55 ', stringToUpper55('here are we go')); // H E R E A R E W E G O

// 56 - Задача. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение

function multiply56() {
  // console.log(arguments); // { '0': 2, '1': 4, '2': 5, '3': 6 } объект

  if (arguments.length === 0) return 0;

  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]); // 2 4 5 6
    result *= arguments[i];
  }

  return result;
}

console.log('task 56', multiply56());
console.log('task 56_2', multiply56(2, 4, 5, 6)); // 240

// 57 - Задача. Создать функцию, которая принимает строку и возвращает строку-перевертыш:

function reverseString57(str) {
  if (typeof str != 'string') {
    // console.log(str, typeof str);
    str = String(str);
  }
  console.log(str, typeof str);

  return str.split('').reverse().join('');
}

console.log('task 57_1', reverseString57('test')); // tset
console.log('task 57_2', reverseString57('')); // ''
console.log('task 57_3', reverseString57(null)); // llun
console.log('task 57_4', reverseString57(undefined)); // denifednu
console.log('task 57_4', reverseString57()); // denifednu

// 58 - Задача. Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу
// Метод trim() удаляет пробельные символы с начала и конца строки

function getCodeStringFromText58(str) {
  let result = '';
  let firstStage = String(str).split('');
  // console.log(firstStage); // [ '4', '5' ]
  for (let i = 0; i < firstStage.length; i++) {
    result += firstStage[i].charCodeAt() + ' ';
  }

  // console.log(typeof result); // string
  return result.trim();
}
console.log('task 58', getCodeStringFromText58('hello world')); //
console.log('task 58', getCodeStringFromText58(45));
console.log('task 58', getCodeStringFromText58(null));

// 59 - Задача. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
function guessTheNumber59(num) {
  if (num <= 0 || num >= 11) {
    return new Error('Please provide number in range 0 - 10');
  }

  if (typeof num !== 'number') {
    return new Error('Please provide a valid number');
  }

  let guessNum = Math.floor(Math.random() * 10) + 1;
  // console.log(guessNum);

  if (guessNum === num) {
    return 'You win!';
  } else {
    return `You are lose, your number is ${num}, the random number is ${guessNum}`;
  }
}

console.log('task 59', guessTheNumber59(2));

// 60 - Задача. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:

function getArray60(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

console.log('task 60 ', getArray60(10));

// 61 - Задача. Cоздать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.

function doubleArray61(arr) {
  return arr.concat(arr);
}

console.log('task 61 ', doubleArray61([1, 2, 3]));

// 62 - Задача. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. (те массив из массивов)

function changeCollection62() {
  // console.log(arguments); // { '0': [ 1, 2, 3 ], '1': [ 'a', 'b', 'c' ] }  // { '0': [ 1, 2, 3 ] }

  let newArr = [];

  for (let i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i]);
  }

  for (let i = 0; i < newArr.length; i++) {
    newArr[i].shift();
  }

  return newArr;
}

console.log('task 62_1 ', changeCollection62([1, 2, 3], [5, 6, 7])); // [ [ 2, 3 ], [ 6, 7 ] ]
console.log('task 62_2 ', changeCollection62([1, 2, 3])); // [ [ 2, 3 ] ]

// 63 - Задача. Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу проверять указанное поле. Проверять что все аргументы переданы. Если что то не переданно то возвращать объект ошибки return new Error('Error message'). Возвращать новый массив с пользователями соответсвующие указанным параметрам.

const users63 = [
  {
    _id: '5e36b779dc76fe3db02adc32',
    balance: '$1,955.65',
    picture: 'http://placehold.it/32x32',
    age: 33,
    name: 'Berg Zimmerman',
    gender: 'male',
  },
  {
    _id: '5e36b779d117774176f90e0b',
    balance: '$3,776.14',
    picture: 'http://placehold.it/32x32',
    age: 37,
    name: 'Deann Winters',
    gender: 'female',
  },
  {
    _id: '5e36b779daf6e455ec54cf45',
    balance: '$3,424.84',
    picture: 'http://placehold.it/32x32',
    age: 36,
    name: 'Kari Waters',
    gender: 'female',
  },
];

function filterUsers63(arr, key, value) {
  let newArr = [];
  if (!arr || !key || !value) return new Error('Error message');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]['age'] === 36) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log('task 63 ', filterUsers63(users63, 'age', 36));

// 64 - Задача. Написать функцию, которая принимает массив чисел и возвращает сумму чисел. Если массив не содержит чисел, вы должны вернуть 0.

function sum64(numbers) {
  return numbers.length > 0 ? numbers.reduce((acc, el) => acc + el, 0) : 0;
}

console.log('task 64_1 ', sum64([1, 4, 7, 9, 0, 22])); // 43
console.log('task 64_1 ', sum64([])); // 0

// 65 - Задача
/*
Создать функции:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
Первая функция возвращает строку “New value: ” и результат обработки:
 */
function firstFunc65(arr, fn) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    result += fn(arr[i]);
    // console.log(result);
  }
  return `New value: ${result}`.trim();
}

function handler1_65(el) {
  return el.charAt(0).toUpperCase() + el.substr(1);
}

console.log(
  'task 65_1 ',
  firstFunc65(['my', 'name', 'is', 'Trinity'], handler1_65)
);
console.log(typeof firstFunc65(['my', 'name', 'is', 'Trinity'], handler1_65));

//////////////////////
function handler2_65(el) {
  return Number(el) * 10 + ', ';
}

console.log('task 65_2 ', firstFunc65([10, 20, 30], handler2_65));

////////////////////////
function handler3_65(el) {
  return `${el.name} is ${el.age}, `;
}

console.log(
  firstFunc65(
    [
      { age: 45, name: 'Jhon' },
      { age: 20, name: 'Aaron' },
    ],
    handler3_65
  )
);

//////////////////////////////////
function handler4_65(el) {
  return el.split('').reverse().join('') + ', ';
}

console.log('task 65_4 ', firstFunc65(['abs', '123'], handler4_65));

// 66 - Задача. Заданы длина и ширина 4-стороннего многоугольника. Многоугольник может быть либо прямоугольником, либо квадратом.Если это квадрат, верните его площадь. Если это прямоугольник, верните его периметр.

function areaOrPerimeter(l, w) {
  return l === w ? l * w : l * 2 + w * 2;
}

console.log('task 66 ', areaOrPerimeter(4, 4)); // 16
console.log('task 66 ', areaOrPerimeter(3, 9)); // 24  (P = a + b + c + d)

// 67 - Задача Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция). Если передан один из аргументов не удовлетворяет условию то функция должна вернуть new Error("с произвольным сообщением.") функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.
// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

function every(arr, fn) {
  if (typeof fn !== 'function' || !fn) return new Error('need a function!!!');
  if (!Array.isArray(arr)) return new Error('need an array!!!');

  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }

  return true;
}

function func67(el) {
  return el > 5;
}

console.log('task 67 ', every([111, 4, 44, 58, 77], func67)); // false
console.log('task 67 ', every([111, 444, 44, 58, 77], func67)); // true

// 68 - Задача Преобразование хэша в массив. Примечание: выходной массив должен быть отсортирован в алфавитном порядке по имени ключа.
// Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]

const convertHashToArray = (hash) => Object.entries(hash).sort();
console.log(
  'task 68 ',
  convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })
); // [ [ 'age', 24 ], [ 'name', 'Jeremy' ], [ 'role', 'Software Engineer' ]]

// 69 - Задача Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
const rectangle69 = {
  width: 3,
  height: 12,
  getSquare: function () {
    return this.width * this.height;
  },
};

console.log('task 69 ', rectangle69.getSquare()); // 36

// 70 - Задача. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
const price70 = {
  price: 10,
  discount: '15%',
  getPrice: function () {
    return this.price;
  },
  getPriceWithDiscount: function () {
    return this.price - this.price * (parseInt(this.discount) / 100);
  },
};

console.log('task 70_1 ', price70.getPrice()); // 10
console.log('task 70_2 ', price70.getPriceWithDiscount()); // 8.5

// 71 - Задача. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
const object71 = {
  height: 0,
  inc: function () {
    return this.height++;
  },
};

object71.height = 10;
object71.inc();
console.log('task 71 ', object71.height); // 11;

// 72 - Задача. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:

const numerator72 = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this;
  },
  plusOne: function () {
    this.value += 1;
    return this;
  },
  minusOne: function () {
    this.value -= 1;
    return this;
  },
};
numerator72.double().plusOne().plusOne().minusOne();
console.log('task 72 ', numerator72.value); // 3

// 73 - Задача. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const price73 = {
  price: 15,
  count: 10,
  getFullPrice: function () {
    return this.price * this.count;
  },
};

console.log('task 73 ', price73.getFullPrice()); // 150

// 74 - Задача. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.
const price74 = {
  price: 15,
  count: 10,
  getFullPrice: function () {
    return this.price * this.count;
  },
};

const anotherPrice74 = {
  price: 2,
  count: 18,
};

console.log('task 74 ', price74.getFullPrice.call(anotherPrice74)); // 36

// 75 - Задача. Даны объект и функция: Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
let sizes75 = { width: 5, height: 10 };
const getSquare75 = function () {
  return this.width * this.height;
};

console.log('task 75 ', getSquare75.apply(sizes75, [5, 10])); // 50
console.log('task 75_2 ', getSquare75.call(sizes75)); // 50

// 76 - Задача. Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
// Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. Bind также позволяет привязывать к функции аргументы
let element76 = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};
let getElementHeight76 = element76.getHeight.bind(element76);

console.log('task 76 ', getElementHeight76()); // 25

// 77 - Задача. Отбросьте пробелы в начале и конце строки, при этом оставьте ровно один пробел между каждым словом. Знаки препинания должны рассматриваться как часть слова.

function reverse77(str) {
  return (
    str
      .split(' ')
      // console
      //   .log(str.split(' ')) // [ 'Reverse', 'this', 'string,', 'please!' ] // 0 1 2 3
      .map((word, index) =>
        index % 2 !== 0 ? word.split('').reverse().join('') : word
      )
      .join(' ')
      .trim()
  );
}
console.log('task 77 ', reverse77('Reverse this string, please!')); // Reverse siht string, !esaelp

// 78 - Задача Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
const sum78 = (...params) => {
  console.log(...params, typeof params); // 1 2 3 4 object

  if (!params.length) return 0;

  return params.reduce((prev, next) => prev + next);
};

console.log('task 78_1 ', sum78(1, 2, 3, 4)); // 10
console.log('task 78_2 ', sum78()); // 0

// 79 - Задача Переделать функцию с использованием функции-стрелки
const convertToObject79 = (num) => ({
  value: num,
  isOdd: Boolean(num % 2),
});

console.log('task 79 ', convertToObject79(8)); // { value: 8, isOdd: false }

// 80 - Задача На основе массива [1,2,3,5,8,9,10] сформировать новый массив,каждый элемент которого будет хранить информацию о числе и его четности

const arr80 = [1, 2, 3, 5, 8, 9, 10];
const newArr80 = arr80.map((num) => ({
  digit: num,
  odd: num % 2 === 0 ? true : false,
}));

console.log('task 80 ', newArr80); // task 80  [{ digit: 1, odd: false },{ digit: 2, odd: true },{ digit: 3, odd: false },{ digit: 5, odd: false },{ digit: 8, odd: true },{ digit: 9, odd: false },{ digit: 10, odd: true }]

// 81 - Задача Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
const arr81 = [12, 4, 50, 1, 0, 18, 40];
const newArr81 = arr81.some((num) => num === 0);

console.log('task 81 ', newArr81); // true

// 82 - Задача Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
const arr82 = ['yes', 'hello', 'no', 'easycode', 'what'];
const newArr82 = arr82.every((num) => num.length > 3);
console.log('task 82 ', newArr82); // false

// 83 - Задача Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}: Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

const arr83 = [
  { char: 'a', index: 12 },
  { char: 'w', index: 8 },
  { char: 'Y', index: 10 },
  { char: 'p', index: 3 },
  { char: 'p', index: 2 },

  { char: 'N', index: 6 },
  { char: ' ', index: 5 },
  { char: 'y', index: 4 },
  { char: 'r', index: 13 },
  { char: 'H', index: 0 },

  { char: 'e', index: 11 },
  { char: 'a', index: 1 },
  { char: ' ', index: 9 },
  { char: '!', index: 14 },
  { char: 'e', index: 7 },
];

const newFunc83 = () => {
  const cloned = arr83.slice();
  // console.log(cloned); // copy arr

  return (
    cloned
      .sort((prev, next) => prev.index - next.index)
      // console.log(cloned.sort((prev, next) => prev.index - next.index)); //
      /* 
  [
  { char: 'H', index: 0 },
  { char: 'a', index: 1 },
  { char: 'p', index: 2 },
  { char: 'p', index: 3 },
  { char: 'y', index: 4 },
  { char: ' ', index: 5 },
  { char: 'N', index: 6 },
  { char: 'e', index: 7 },
  { char: 'w', index: 8 },
  { char: ' ', index: 9 },
  { char: 'Y', index: 10 },
  { char: 'e', index: 11 },
  { char: 'a', index: 12 },
  { char: 'r', index: 13 },
  { char: '!', index: 14 }
]
*/
      .reduce((acc, { char }) => acc + char, '')
  );
};
console.log('task 83 ', newFunc83(arr83)); // Happy New Year!

// 84 - Задача Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const arr84 = [[14, 45], [1], ['a', 'c', 'd']];
const newArr84 = arr84.sort((prev, next) => prev.length - next.length);
console.log('task 84 ', newArr84); // [ [ 1 ], [ 14, 45 ], [ 'a', 'c', 'd' ] ]

// 85 - Задача Есть массив объектов: Отсортировать их по возрастающему количеству ядер (cores).

const arr85 = [
  {
    cpu: 'intel',
    info: { cores: 2, сache: 3 },
  },
  {
    cpu: 'intel',
    info: { cores: 4, сache: 4 },
  },
  {
    cpu: 'amd',
    info: { cores: 1, сache: 1 },
  },
  {
    cpu: 'intel',
    info: { cores: 3, сache: 2 },
  },
  {
    cpu: 'amd',
    info: { cores: 4, сache: 2 },
  },
];

const newArr85 = arr85.sort((prev, next) => prev.info.cores - next.info.cores);
console.log('task 85 ', newArr85);

// 86 - Задача  - Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products86 = [
  { title: 'prod1', price: 5.2 },
  { title: 'prod2', price: 0.18 },
  { title: 'prod3', price: 15 },
  { title: 'prod4', price: 25 },
  { title: 'prod5', price: 18.9 },
  { title: 'prod6', price: 8 },
  { title: 'prod7', price: 19 },
  { title: 'prod8', price: 63 },
];

const func86 = (arr, num1, num2) => {
  return arr
    .filter((item) => item.price >= num1 && item.price <= num2)
    .sort((prev, next) => prev.price - next.price);
};

console.log('task 86 ', func86(products86, 15, 30));

// 87 - Задача - Создайте функцию которая бы умела делать: minus(10)(6); // 4

function minus87(num1 = 0) {
  return function (num2 = 0) {
    return num1 - num2;
  };
}

console.log('task 87 ', minus87(10)(6)); // 4
console.log('task 87 ', minus87(5)(6)); // -1
console.log('task 87 ', minus87(10)()); // 10
console.log('task 87 ', minus87()(6)); // -6
console.log('task 87 ', minus87()()); // 0

// 88 - Задача Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker88(num1 = 2) {
  return function (num2 = 1) {
    return (num1 *= num2);
  };
}

const multiply88 = multiplyMaker88(2);

console.log('task 88 ', multiply88(2)); //  2 * 2 = 4
console.log('task 88 ', multiply88(1)); //  4 * 1 = 4
console.log('task 88 ', multiply88(3)); //  4 * 3 = 12
console.log('task 88 ', multiply88(10)); // 12 * 10 = 120

// 89 - Задача Реализовать модуль, который работает со строкой и имеет методы: a. установить строку i. если передано пустое значение, то установить пустую строкуii. если передано число, число привести к строкеb. получить строкуc. получить длину строки d. получить строку-перевертыш

function strModule89() {
  let str = '';

  function setStr(val = '') {
    str = String(val);
  }

  function getStr() {
    return str;
  }

  function getStrLength() {
    return str.length;
  }

  function getReverseStr() {
    return str.split('').reverse().join('');
  }

  return {
    setStr,
    getStr,
    getStrLength,
    getReverseStr,
  };
}

const firstString89 = strModule89();
firstString89.setStr('Test');
console.log(firstString89.getStr()); // Test
console.log(firstString89.getStrLength()); // 4
console.log(firstString89.getReverseStr()); // tseT

// 90 - Задача - Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
function calc90() {
  let number = 0;

  return {
    setNumber: function (value = 0) {
      number = value;
      return this;
    },
    add: function (value = 0) {
      number += value;
      return this;
    },
    sub: function (value = 0) {
      number -= value;
      return this;
    },
    mult: function (value = 1) {
      number *= value;
      return this;
    },
    div: function (value = 1) {
      number /= value;
      return this;
    },
    exp: function (value = 1) {
      number = Math.pow(number, value);
      return this;
    },
    getNumber: function (value = 0) {
      return number.toFixed(2);
    },
  };
}

const calculator = calc90();

console.log(calculator.setNumber(11).exp(2).add(14).getNumber()); // 135.00

// 91 - Задача - Чтобы быть Senior, представителю должно быть не менее 55 лет и иметь гандикап больше, чем 7. В этом крокетном клубе, гандикапы варьируются от -2 до +26; тем лучше игрок ниже гандикап. Вывод будет состоять из списка строковых значений (Open или Senior), указывающих, должен ли соответствующий член быть помещен в категорию Senior или Open уровня.
/**
input =  [[61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Senior", "Open", "Open", "Senior"]
 */
const input91 = [
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

const openOrSenior91 = (data) =>
  data.map((el) => (el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open'));

console.log('task 91 ', openOrSenior91(input91)); // [ 'Senior', 'Open', 'Open', 'Senior' ]

// 92 - Задача - Вам дана строка. Вы должны заменить любое вхождение последовательности coverage на covfefe, однако, если вы не найдете слово coverage в строке, вы должны добавить covfefe в конец строки с пробелом.
function covfefe92(str) {
  if (!str.includes('coverage')) {
    return `${str} covfefe`;
  }
  return str.replaceAll('coverage', 'covfefe');
}

console.log('task 92 ', covfefe92('coverage')); // 'covfefe'
console.log('task 92 ', covfefe92('nothing')); // 'nothing covfefe'

// 93 - Задача - Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число числа повторений 2го аргумента в первом. Если повторений не обнаружено, нужно вернуть 0.

// Метод split осуществляет разбиение строки в массив по указанному разделителю.

const strCounter93 = (str, letter) => {
  console.log(str.split(letter));
  str.split(letter).length - 1;
};

console.log('task 93 ', strCounter93('Hello', 'o')); // 1
console.log('task 93 ', strCounter93('Hello', 'l')); // 2
console.log('task 93 ', strCounter93('', 'z')); // 0

// 94 - Задача - Если ваше имя начинается с буквы "R" или "r", вы играете на банджо! Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
// Метод startsWith() помогает определить, начинается ли строка с символов указанных в скобках, возвращая, соответственно, true или false.

const areYouPlayingBanjo94 = (name) =>
  name.startsWith('R') || name.startsWith('r')
    ? name + ' plays banjo'
    : name + ' does not play banjo';

console.log('task 94 ', areYouPlayingBanjo94('Roma')); //  Roma plays banjo
console.log('task 94 ', areYouPlayingBanjo94('Serge')); // Serge does not play banjo

// 95 - Задача -  Купон больше не действителен на следующий день после даты истечения срока действия. Все даты будут передаваться как строки в этом формате: «MONTH DATE, YEAR».

const checkCoupon95 = (
  enteredCode,
  correctCode,
  currentDate,
  expirationDate
) => {
  const date = new Date(currentDate).getTime();
  console.log(date); // 1436389200000
  const expDate = new Date(expirationDate).getTime();
  console.log(expDate); // 1436389200000
  return date - expDate > 0 || enteredCode !== correctCode ? false : true;
};

console.log(
  'task 95 ',
  checkCoupon95('123', '123', 'July 9, 2015', 'July 9, 2015') // true
);
console.log(
  'task 95 ',
  checkCoupon95('123', '123', 'July 9, 2015', 'July 2, 2015') // false
);

// 96 - Задача -  Следует исключить из списка а все значения, которые присутствуют в списке Ь, сохраняя их порядок.
// Метод массива .filter() позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции

const arrayDiff96 = (a, b) => a.filter((num) => !b.includes(num));

console.log('task 96 ', arrayDiff96([1, 2], [1])); // [2]
console.log('task 96 ', arrayDiff96([1, 2, 2, 2, 3], [2])); // [1,3]

// 97 - Задача - Дан массив чисел. Отсортировать нечетные числа в порядке возрастания а четные числа в иходном положениии

function sortArray97(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  // console.log(odd); // нечетные [ 1, 7 ] , [ 3, 5 ], [ 1, 3, 5, 7, 9 ]
  // console.log(array); массив не изменялся
  return array.map((x) => (x % 2 ? odd.shift() : x));
}

console.log('task 97 ', sortArray97([7, 1])); // [ 1, 7 ]
console.log('task 97 ', sortArray97([5, 8, 6, 3, 4])); // [ 3, 8, 6, 5, 4 ]
console.log('task 97 ', sortArray97([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [ 1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// 98 - Задача - Создайте функцию, возвращающую сумму двух наименьших положительных чисел, если задан массив из 4 положительных целых чисел.
function sumTwoSmallestNumbers98(numbers) {
  let numSort = numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numSort); // [ 2, 5, 19, 42, 77 ] ------- [ 1, 2, 3, 4 ]

  return numSort[0] + numSort[1];
}

console.log('task 98 ', sumTwoSmallestNumbers98([19, 5, 42, 2, 77])); // 7
console.log('task 98 ', sumTwoSmallestNumbers98([1, 2, 4, 3])); // 3
