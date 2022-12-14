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
