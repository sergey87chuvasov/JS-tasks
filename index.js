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
