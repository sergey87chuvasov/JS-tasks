// oop

// operator new - ИСПОЛЬЗУЕТСЯ НЕ ЧАСТО
// constructor - всё что мы описываем внутри функции
const User = function (email, password) {
  this.email = email;
  this.password = password + '****';
};

// get some user
const user1 = new User('tut@by', 'qweerty');
console.log(user1); // User {}

const user2 = new User('ya@by', '123345');
console.log(user2);

// проверка на то что созданный объект был создан из пользователя User Оператор instanceof проверяет, принадлежит ли объект к определённому классу.
console.log(user2 instanceof User); // true

// созд пустой объект - вызываетcя функция User и она начинает исполнятся - тут же this становится = пустому {} те уже не undefined в который мы можем что-то добавлять (email) - потом наш созданный объект связывается с прототипом (prototype) - и последнее - возвращается объект автомат - хоть мы и ничего не вернули с нашей функции

// Prototype
const Book = function (title, author) {
  this.author = author;
  this.title = title;
  this.isRead = false;

  // так НЕЛЬЗЯ
  // this.isRead() = function() {
  //   this.read = true
  // }
};

// мs будем дополнять наш прототип Book
Book.prototype.read = function () {
  this.isRead = true;
};

Book.prototype.cover = 'Paper';

// create a book
const lordOfTheRing = new Book('Lord of the Ring', 'Tolkien');
lordOfTheRing.read();
lordOfTheRing.cover;
console.log(lordOfTheRing); // { author: 'Tolkien', title: 'Lord of the Ring', isRead: true }

// спец св-во __proto__ - увидим что находится в prototype
console.log(lordOfTheRing.__proto__); // { read: [Function (anonymous)] }
console.log(lordOfTheRing.__proto__ === Book.prototype); // true

// !!!
console.log(Book.prototype.isPrototypeOf(lordOfTheRing)); // true
console.log(Book.prototype.isPrototypeOf(Book)); // false

// !!
console.log(lordOfTheRing.hasOwnProperty('cover')); // false
console.log(lordOfTheRing.hasOwnProperty('author')); // true

// УПРАЖНЕНИЕ - КОРЗИНА ТОВАРОВ (функции + протоатипы) - корзина товаров которая принимает продукты
const product = { id: 1, name: 'Bread', count: 1 };

// созд корзину
const Cart = function () {
  this.products = [];
};

Cart.prototype.addProduct = function (product) {
  // проверка на одинаковый товар по id
  if (this.products.find((product) => product.id === product.id)) {
    return;
  }
  this.products.push(product);
};

// увеличен товара по id
Cart.prototype.increaseAmount = function (id) {
  this.products = this.products.map((product) => {
    if (product.id == id) {
      product.count++;
      return product;
    }
    return product;
  });
};

// уменьше товара по id
Cart.prototype.decreaseAmount = function (id) {
  this.products = this.products
    .map((product) => {
      if (product.id == id) {
        product.count--;
        return product;
      }
      return product;

      // далее уберем те которые стали нулем
    })
    .filter((product) => product.count > 0);
};

const cart = new Cart();
cart.addProduct(product);
console.log(cart); // Cart { products: [ { id: 1, name: 'Bread', count: 1 } ] }
// увеличим по (id)
cart.increaseAmount(1);
console.log(cart); // Cart { products: [ { id: 1, name: 'Bread', count: 2 } ] }
// уменьшим
cart.decreaseAmount(1);
console.log(cart); // Cart { products: [ { id: 1, name: 'Bread', count: 1 } ] }
// уберем то что с нулем
cart.decreaseAmount(1);
console.log(cart); // Cart { products: [] }

// ЦЕПОЧКИ PROTOTYPE

// КЛАССЫ - лучше использовать - синт сахар
// у классов хостинга нет, тело класса всегда в use strict даже если он не объявлен

class BookClass {
  isRead = false;
  constructor(title, author) {
    this.author = author;
    this.title = title;
  }

  read() {
    this.isRead = true;
  }
}

const lordOfTheRing2 = new BookClass('lost', 'Tolkien');
console.log(lordOfTheRing2); // BookClass { isRead: false, author: 'Tolkien', title: 'lost' }
// !!!
console.log(lordOfTheRing2.__proto__); // {constructor: ƒ, read: ƒ}
console.log(lordOfTheRing2 instanceof BookClass); // true
lordOfTheRing2.read();
console.log(lordOfTheRing2); // BookClass { isRead: true, author: 'Tolkien', title: 'lost' }

// getters and setters - возможность использовать свойства как методы - но называя как свойство - изменение внутренней логики присвоения и получения что бы что-то поменять
// РАБОТА В ОБЪЕКТАХ
const task = {
  title: 'Task1',
  dueTo: new Date('2023/01/01'),

  // метод - проверки просрочки
  isOverdue() {
    return this.dueTo < new Date();
  },

  // геттер - получить значение - обращение как к свойству а не как к функции - по сути это некоторое скрытие за собой реализации получения некторых данных
  // сеттер установить значение - сеттер всегда принимает одно значение - то чему оно должго быть присовено

  get isOverdue2() {
    return this.dueTo < new Date();
  },

  set isOverdue3(isOverdueTask) {
    if (!isOverdueTask) {
      this.dueTo = new Date();
    }
  },
};

console.log(task.isOverdue()); // true
console.log(task.isOverdue2); // true - геттер
task.isOverdue3 = false;
console.log(task); // {title: 'Task1', dueTo: Tue Apr 04 2023 21:57:31 GMT+0300 (Москва, стандартное время), isOverdue: ƒ}

// геттер и сеттер так же работают и в классах
// РАБОТА В КЛАССАХ (запятых нет)

class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }

  get isOverdue() {
    return this.dueTo < new Date();
  }

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    this._dueDate = date;
  }
}

const newTask = new Task('Task2', new Date());
console.log(newTask.isOverdue); // false
console.log((newTask.dueDate = new Date('2024/1/1')));
console.log(newTask);

// Static

// статичное св-во числа
Number.MAX_SAFE_INTEGER; // статичн метод
new Number();

class Test {
  static a = 1; // статическое св-во

  static hello() {
    console.log('Hello'); // статический метод
  }

  // статичный блок
  static {
    let b = 5;
    this.a = 5;
  }
}

Test.hello(); // Hello
console.log(Test.a); // 5 (без блока a = 1)

// Приватные методы и св-ва  # - доступные только внутри

class Car {
  #vin = 6;

  #changeVin() {
    console.log('changed');
  }

  test() {
    this.#changeVin();
  }

  static #field = 3;
}

const car = new Car();
// car.   - нет св-в
car.test(); // changed
// car. field - нет такого метода

// УПРАЖНЕНИЕ - КЛАСС ПОЛЬЗОВАТЕЛЯ реализ (логин и пароль)

class UserX {
  // созд приватные поля
  #login;
  #_password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  set #password(pass) {
    this.#_password = pass.split('').reverse().join('');
  }

  get #password() {
    return this.#_password.split('').reverse().join('');
  }

  get login() {
    return this.#login;
  }

  // методы
  checkPassword(pass) {
    return this.#password === pass;
  }

  changePassword(oldPass, newPass) {
    if (!this.checkPassword(oldPass)) {
      return false;
    }
    this.#password = newPass;
    return true;
  }
}

const userX = new UserX('aa@aa.ru', '12345');
// console.log(userX); // UserX {#login: 'aa@aa.ru', #_password: '5,4,3,2,1'}
// console.log(userX.login);
// userX.login = '111@tut.by';
// console.log(userX); // не можем поменять логин
console.log(userX.checkPassword('12345')); // true
console.log(userX.checkPassword('7777')); // false
console.log(userX.changePassword('12345', '99999')); // true
console.log(userX); // UserX {#login: 'aa@aa.ru', #_password: '99999'}

// Object.create

const UserY = {
  init(email, password) {
    this.email = email;
    this.password = password;
  },

  log() {
    console.log('Log');
  },
};

const user3 = Object.create(UserY);
console.log(user3); // {}
// prototype нашего пользователя стал объектом user3
user3.log();
// user3.email = '123@ru';
// user3.password = '12234';
// console.log(user3.__proto__ == UserY); // true
// console.log(user3); // { email: '123@ru', password: '12234' }

user3.init('11@2.ru', 'qwerry');
console.log(user3); // { email: '11@2.ru', password: 'qwerry' }

// ПРИНЦИПЫ ООП В КЛАССАХ
// Абстракция vs ИНкапсюляция
// фильм - название режиссер рейтинг длительность страна актёры трейлер итд 1000 хар-к

// наборы св-в абстракция над реальным объектом
// ИНКАПСЮЛЯЦИЯ - заключение св-в внутри класса без возможности доступа снаружи - снаружи публичные вещи которые мы хотим те она определяет что внутреннее а что внешнее
class Film {
  #name;
  #author;
  raiting;
  #length;

  // факты о фильме при конструировании; raiting может быть публичным св-ом а остальные приватные
  constructor(name, author, length) {
    this.#name = name;
    this.#author = author;
    this.#length = length;
  }

  // геттер - получить значение - обращение как к свойству а не как к функции - по сути это некоторое скрытие за собой реализации получения некторых данных
  // МОЖЕМ ЧИТАТЬ НО НЕ УСТАНАВЛИВАТЬ
  get name() {
    return this.#name;
  }

  get author() {
    return this.#author;
  }

  get length() {
    return this.#length;
  }
}

const film = new Film('Avatar', 'Cameron', 240);
console.log(film); // Film {raiting: undefined, #name: 'Avatar', #author: 'Cameron', #length: 240}

// Наследование
// создадим класс книги - проектируем книгу
const Book2 = function (title, author) {
  this.title = title;
  this.author = author;
};

// сделаем метод
Book2.prototype.buy = function () {
  console.log('Bue'); // Bue
};

// созд аудио книгу - в ней уже видны повторения
const AudioBook2 = function (title, author, lenMin) {
  // this.title = title;
  // this.author = author;

  // вызовем функции с контекстом
  Book2.call(this, title, author);
  this.lenMin = lenMin;
};

// нужно полноценно связать контексты что бы и отрабатывал метод и у Book
AudioBook2.prototype = Object.create(Book2.prototype);
// дополнительно и конструткор
AudioBook2.prototype.constructor = AudioBook2;

AudioBook2.prototype.log = function () {
  console.log(`${this.title} - ${this.lenMin}`); // TTH - 333
};

const book2 = new AudioBook2('TTH', 'Gray', 333);
book2.log();
book2.buy();
console.log(book2); // увидим все цепочки прототипов
///

// Оператор instanceof - позволяет узнать принадлежит ли объект классу или классу наследующему от него.
console.log(book2 instanceof AudioBook2); // true
console.log(book2 instanceof Book2); // true

// Наследование ES6 - перепишем - 99% НАПИСАНИЯ КОДА
class Book3 {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log('Buy');
  }
}

// 1 - решаем проблему со связыванием
class AudioBook3 extends Book3 {
  constructor(title, author, lenMin) {
    // super - метод который вызывает конструктор исходного класса
    super(title, author);
    this.lenMin = lenMin;
  }

  log() {
    console.log(`${this.title} - ${this.lenMin}`); //
  }
}

const book3 = new AudioBook3('Money', 'B.G', 111);

// тестируем методы
book3.log(); // Money - 111
book3.buy(); // Buy
console.log(book3); // AudioBook3 { title: 'Money', author: 'B.G', lenMin: 111 }

// Override методов и св-в которые позволяет менять методы и св-ва в классе который отнаследовался от нашего исходного
class Book4 {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    console.log(`${this.title} - ${this.author}`);
  }
}

const book4 = new Book4('qwerty', 'asdfg');
book4.info(); // qwerty - asdfg

class Ebook extends Book4 {
  constructor(title, author, pages) {
    super(title, author);
    this.pages = pages;
  }

  // override
  info() {
    console.log(`${this.title} - ${this.author} - ${this.pages}`);
  }
}

// фактичесик мы перезаписали метод info() - сделали ему override - поменяли поведение метода
const book4_1 = new Ebook('aaaddd', 'bbbnnn', 777);
book4_1.info(); // aaaddd - bbbnnn - 777

// УПРАЖНЕНИЕ -  сделать класс врага со здоровьем и методом получения урона  - сделать класс меча который имеет силу и метод нанесения урона  - сделатькласс орка который в 50% случаев не получает урон

class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }

  recieveDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health);
  }
}

class Sword {
  damage;
  constructor(damage) {
    this.damage = damage;
  }

  strike(enemy) {
    enemy.recieveDamage(this.damage);
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }

  recieveDamage(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    console.log(this.health);
  }
}

const enemy = new Enemy(10);
const sword = new Sword(3);
sword.strike(enemy); //
sword.strike(enemy); //
sword.strike(enemy); //

// ПОЛИМОРФИЗМ

// ПАТТЕРН Builder И chaining

class Wallet {
  balance = 0;

  add(sum) {
    this.balance += sum;
    return this;
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet = new Wallet();
const res = wallet.add(100).remove(10);
console.log(res); // Wallet { balance: 90 }

class Builder {
  house = {};

  addRoof() {
    this.house.roof = 'Roof';
    return this;
  }

  addFloor() {
    this.house.floor = 'Floor';
    return this;
  }

  execute() {
    return this.house;
  }
}

const result2 = new Builder().addRoof().addFloor().execute();
console.log(result2); //  roof: 'Roof', floor: 'Floor' }
