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
