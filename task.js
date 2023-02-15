// 1. Создайте объект пользователя с паролем. С помощью функции удалить пароль сделав функцию сброса пароля
// сделать пользователя как объект и созд новую функц котор будет связана с этим пользователем и по умолчанию бы сбрасывала пароль -  reset = true

// функция сброса пароля
function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}

// созд пользователя
const user = {
  login: '123@.by',
  password: '123qwe',
};

// связываем
const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log('task 1 ', user); // { login: '123@.by', password: undefined }

// 2 IIFE
//  IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена. у нее внутренний скоуп
(function () {
  console.log('test IIFO');
})();

// 3 Замыкания
// Замыкание это функция у которой есть доступ к своей внешней функции по области видимости, даже после того, как внешняя функция прекратилась

function changeBalance(params) {
  let balance = 0;
  return function (sum) {
    balance += sum;
    console.log(`Баланс: ${balance}`);
  };
}

const change = changeBalance();
change(100); // Баланс: 100
change(-75); // Баланс: 25
change(15); // Баланс: 40

// 4 Замыкания
// сделать функц пользователя, котор на основе userInfo и за счет замыкания созд нов объект, с которым можно работать как user1().increse

const userInfo4 = {
  balance: 0,
  operations: 0,
  increse(sum) {
    this.balance += sum;
    this.operations++;
  },
};

function user4() {
  const userObj = {
    balance: 0,
    operations: 0,
    increse(sum) {
      this.balance += sum;
      this.operations++;
    },
  };
  return function () {
    return userObj;
  };
}

const newUser4_1 = user4();
newUser4_1().increse(100);
newUser4_1().increse(100);
console.log('task 4 ', newUser4_1()); // { balance: 200, operations: 2, increse: [Function: increse] }
const newUser4_2 = user4();
newUser4_2().increse(25);
newUser4_2().increse(175);
newUser4_2().increse(45);
console.log('task 4 ', newUser4_2()); // { balance: 245, operations: 3, increse: [Function: increse] }

// 5 Оператор нулевого слияния
// Nullish coalescing operator (??)
const username = 'Serge';
console.log('task 5 ', username || 'Default Username'); // Serge

let username5_1;
console.log('task 5_1 ', username5_1 || 'Default Username'); // Default Username

let username5_2 = null;
console.log('task 5_2 ', username5_2 || 'Default Username'); // Default Username
console.log('task 5_2_2 ', username5_2 ?? 'Default Username'); // Default Username

let username5_3 = undefined;
console.log('task 5_3 ', username5_3 || 'Default Username'); // Default Username
console.log('task 5_3_3 ', username5_3 ?? 'Default Username'); // Default Username

let username5_4 = ''; // !!!
console.log('task 5_4 ', username5_4 || 'Default Username'); // Default Username

// Nullish coalescing operator (??) - это логический оператор, возвращающий значение правого операнда
console.log('task 5_4_4 ', username5_4 ?? 'Default Username'); // ''

let age5 = 0; // !!!
console.log('task5_age ', age5 || 18); // 18
console.log('task5_age ', age5 ?? 18); // 0

// 6 Условия
const x6 = 10;
let isOdd6;

if (x6 % 2 === 0) {
  isOdd6 = false;
} else {
  isOdd6 = true;
}

console.log('task 6 ', isOdd6); // false тк 10/2 = 5.0

// 7  цикл while
// Дан массив чисел. В цикле while обойдите массив и значения всех элементов с нечетным индексом умножьте на 2.
const numbers7 = [2, 7, 19, 22, 38, 9, 11, 10, 12];
let i7 = 0;

while (i7 < numbers7.length) {
  if (i7 % 2 !== 0) {
    numbers7[i7] *= 2;
  }
  i7++;
}

console.log('task 7 ', numbers7); //  [ 2, 14, 19, 44, 38, 18, 11, 20, 12 ]

// 8  цикл for
// Обойдите массив циклом for. Значение каждого элемента с четным индексом увеличьте на 3.
const numbers8 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers8.length; i++) {
  if (i % 2 === 0) {
    numbers8[i] += 3;
  }
}

console.log('task 8 ', numbers8); // [ 4, 2, 6, 4, 8, 6 ]

// 9  цикл + условие
const numbers9 = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15];

const evenNumbers9 = [];

for (let i = 0; i < numbers9.length; i++) {
  if (numbers9[i] % 2 === 0) {
    evenNumbers9.push(numbers9[i]);
  }

  if (evenNumbers9.length === 3) {
    break;
  }
}

console.log('task 9 ', evenNumbers9); // [ 2, 2, 18 ]

// 10 объект
// Дан объект person. Добавьте ему два метода:
const person_10 = {
  name: 'Anna',
  surname: 'Dance',
  age: 18,
  greeting() {
    console.log('Hello');
  },
  changeSurname(newName) {
    this.surname = newName;
  },
};

person_10.greeting(); // Hello
person_10.changeSurname('Dog'); // surname: 'Dog'

console.log('task 10 ', person_10);

// 11 -  5 однострочных функций в JavaScript, которые упростят разработку
// 5.1 - перемешка массива в случайном порядке не меняя основной массив
const mixArr = (arr) => arr.sort(() => Math.random() - 0.5);
const arr11 = [1, 2, 3, 4, 5, 6, 7];
console.log('task 11_2', mixArr([...arr11]));
console.log('task 11_1 ', arr11);
// 5.1.2
const arr11_2 = [1, 2, 3, 4, 5, 6, 7];
const mixArr11_2 = (arr) => arr.slice().sort(() => Math.random() - 0.5);
console.log('task 11_2-2', mixArr11_2([...arr11_2]));
console.log('task 11_1-1 ', arr11_2);

// 5.2 - Рандомное число в диапазоне
const randomInRange = (from, to) =>
  Math.floor(from + Math.random() * (to - from + 1));
console.log('task 11_5-2 ', randomInRange(10, 25));

// 5.3 - Трансформаация массива с разными значениями в уникальные
const arr5_3 = [1, 2, 3, 4, 5, 6, 7];
const unic = (arr) => [...new Set(arr)];
const arrRepeat = arr5_3.concat(1, 2, 2, 6, 7);
console.log('task 11_5-3 ', arrRepeat);
console.log('task 11_5-3arr ', unic(arrRepeat));

// 5.4 - Делаем первую ббукыу в строке заглавной
const ucfirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log('task 11_5-4 ', ucfirst('hello there')); // Hello there

// 5.5 - Создание уникальных id
const uniqueId = () => Math.random().toString(36).slice(2);
console.log('task 11_5-5 ', uniqueId()); // mxqw1n9ddvp итд ...

// 12 -  Тернарный оператор. Switch case
let a12 = 'test';
switch (a12) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default: // other
    console.log('other');
    break;
}

let a12_1 = 'test2';

a12_1 === 'block'
  ? console.log('block')
  : a12_1 === 'none'
  ? console.log('none')
  : a12_1 === 'inline'
  ? console.log('inline')
  : console.log('other2'); // other2

let b12 = 'hidden';
b12 === 'hidden' ? (b12 = 'visible') : (b12 = 'hidden');
console.log('task 12 ', b12); // task 12  visible

let c12 = 0;
c12 === 0 ? (c12 = 1) : c12 < 0 ? (c12 = 'less then zero') : (c12 *= 10);
console.log('task 12_3 ', c12); // 1

// 13 - Деструктуризация

const student13 = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85,
  },
};

function displaySummary({
  name,
  scores: { maths = 0, english = 0, science = 0 },
}) {
  console.log('Hello, ' + name); // Hello, John Doe
  console.log('Your Maths score is ' + maths); // Hello, John Doe
  console.log('Your English score is ' + english); // Your English score is 63
  console.log('Your Science score is ' + science); // Your Science score is 85
}

displaySummary(student13);
////////////////////////////////////////////

const student13_1 = {
  firstname: 'Glad',
  lastname: 'Chinda',
  country: 'Nigeria',
};

const { firstname, lastname, country } = student13_1;
console.log(firstname, lastname, country); // Glad Chinda Nigeria
////////////////////////////////////////////////

const person13 = {
  name: 'John Doe',
  country: 'Canada',
};
const { name, country, age = 25 } = person13;
console.log(`I am ${name} from ${country} and I am ${age} years old.`); // I am John Doe from Canada and I am 25 years old.

/////////////////////////////////////////////////
const person13_2 = {
  name: 'John Doe',
  country: 'Canada',
};

const { name: fullname, country: place, age: years = 25 } = person13_2;
console.log(`I am ${fullname} from ${place} and I am ${years} years old.`); // I am John Doe from Canada and I am 25 years old.

//////////////////////////////////////
const student13_2 = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
  },
};

const {
  name,
  scores: { maths, science = 50 },
} = student13_2;

console.log(
  `${name} scored ${maths} in Maths and ${science} in Elementary Science.`
); // John Doe scored 74 in Maths and 50 in Elementary Science.

///////////// МАССИВЫ //////////////////////////

const rgb13 = [255, 200, 0];
const [red, green, blue] = rgb13;
console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0

////////////////////////////
const rgb13_1 = [200];
const [red = 255, green, blue = 255] = rgb13_1;
console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 200, G: undefined, B: 255

//////////////////////
const rgb13_2 = [200, 255, 100];
const [, , blue] = rgb13_2;
console.log(`Blue: ${blue}`); // Blue: 100

///////////////////////////////
let width13 = 300;
let height13 = 400;
const landscape13 = true;
console.log(`${width13} x ${height13}`); // 300 x 400
if (landscape13) {
  // Меняем значения переменных
  [width13, height13] = [height13, width13];
  console.log(`${width} x ${height}`); // 400 x 300
}

///////////////////////////////
const color13 = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];
// Используем вложенную деструктуризацию назначая red, green и blue
const [hex13, [red13, green13, blue13]] = color13;
console.log(hex13, red13, green13, blue13); // #FF00FF 255 0 255

////////////Новый оператор расширения (…) был добавлен в ES6,/////////////////////
const rainbow13 = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];
const [red, , yellow, ...otherColors13] = rainbow13;
console.log(otherColors13); // ['green', 'blue', 'indigo', 'violet']

/////////////////////////кЛОНИРОВАНИЕ///////////////////////
const rainbow13_1 = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];
const rainbowClone13 = rainbow13_1.slice();
console.log(rainbow13_1 === rainbowClone13); // false
console.log(rainbowClone13); // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

////////////////////////
const rainbowClone13_1 = rainbow13_1.concat();
console.log(rainbow13_1 === 13_1); // false

/////////////////////////
// Клонируем с деструктуризацией и оператором расширения
const rainbow13_3 = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];
const [...rainbowClone13_3] = rainbow13_3;
console.log(rainbow13_3 === rainbowClone13_3); // false

// 14 - Object descriptor
const car14 = {
  brand: 'Audi',
  year: 2019,
  get age() {
    return `Машина выпущена в ${this.year}`;
  },
  set age(value) {
    this.year = value;
  },
};

Object.defineProperty(car14, 'age', {
  // configurable: false, // не можем удалть св-во year
  // enumerable: false, // делает не перебираемый год
  // writable: false, // запрещает запись этого св-ва те year мы не перезапишем
  //////////// геттеры и сеттеры //////////////
  // get: function () {
  //   return `Машина выпущена в ${this.year}`;
  // },
});

console.log(car14.age); // Машина выпущена в 2019
