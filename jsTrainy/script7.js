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
