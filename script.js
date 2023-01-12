// разбор задач с собеседований

// 1 - Что выведет консоль?
const arr = [1, 2, 3];
const result = arr.reduce((b, c) => b + c, 1);
// console.log(result); // 1(идет старт с 1 и далее +) + 1 + 2 + 3 = 7

// 2 - Что выведет консоль?
//Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const arr2 = [1, 2];
const result2 = arr2.map((b) => b + '1');
console.log(result2); // [ '11', '21' ] тк 1 + '1' = '11'; 2 + '1' = '21' итого '11', '21'

// 3 - Что выведет консоль?
// Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
// Метод slice() возвращает новый массив, содержащий копию части исходного массива.

const string3 = 'a,b,c,d,e,f';
console.log(string3.split(',')); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(string3.split(',').slice(-1)); // [ 'f' ]
console.log(string3.split(',').slice(-2)); // [ 'e', 'f' ]
console.log(string3.split(',').slice(2)); // [ 'c', 'd', 'e', 'f' ]
console.log(string3.split(',').slice(2, 4)); // [ 'c', 'd' ]
console.log(string3.split(',').slice()); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(string3.split(',').slice(1, -1)); // [ 'b', 'c', 'd', 'e' ]

// 4- Что выведет консоль?
// Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.shift()); // 1 - удал перв эл из массива и возвр его знач
console.log(arr4); // [ 2, 3, 4, 5 ] - Этот метод изменяет длину массива.

// 5- Что выведет консоль?

const car = {
  name: 'Bmv',
};
const moto = car;
console.log(moto); // { name: 'Bmv' }
console.log(car); // { name: 'Bmv' }
moto.name = 'Harley';
console.log(moto); // { name: 'Harley' }
console.log(car); // { name: 'Harley' }
console.log(car.name); // Harley

// 6- Что выведет консоль?
let a6 = [1, 2, 3, 4];
let b6 = [1, 2, 3, 4];
console.log(a6 == b6); // false
console.log(a6 === b6); // false
a6 = b6;
console.log(a6 == b6); // true
console.log(a6 === b6); // true

// 7- Что выведет консоль?

function test7() {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  setTimeout(() => console.log(3), 0);
  console.log(4);
  setTimeout(() => console.log(5), 1000);
}

// test7(); // 1 4 2 3 5

// 8- Что выведет консоль?

let a8 = [1, 2, 3, 4, 5];
let b8 = a8;
console.log(a8); // [ 1, 2, 3, 4, 5 ]
console.log(b8); // [ 1, 2, 3, 4, 5 ]
console.log(a8 == b8); // true
console.log(a8 === b8); // true
b8[0] = 4;
console.log(a8); // [ 4, 2, 3, 4, 5 ]
console.log(b8); // [ 4, 2, 3, 4, 5 ]
console.log(a8 == b8); // true
console.log(a8 === b8); // true

// 9- Что выведет консоль?
let test9 = [1, 2, 3, 4, 5];
test9[10] = 99;
console.log(test9); // [ 1, 2, 3, 4, 5, <5 empty items>, 99 ]
console.log(test9.length); // 11 - в длинну входят все ячейки

// 10- Что выведет консоль? В книге встре страницы пронумерованы  от 1 до 500. Сколько раз встречается фира 8

// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

// метод indexOf() позволяет возвратить индекс искомого элемента в массиве при первом совпадении, или -1 если элемент не найден

let arr10 = [];
for (let i = 1; i <= 500; i++) {
  arr10.push(i);
}

let newArr10 = arr10.filter((n) => String(n).indexOf(8) != -1);
// console.log(newArr10); // [] все цифры с 8
// console.log(typeof newArr10); // object
console.log(newArr10.length); // 95

// 11- Что выведет консоль? Сколько единиц содержит двоичное представление десятичного числа 130

const toBinary11 = (n) => +n.toString(2);
let result11 = toBinary11(130);
console.log(result11); // 10000010
console.log(typeof result11); // number

// 12- Что выведет консоль? Ответ: 4 3
switch (1) {
  case 2:
    console.log(2);
    break;
  default:
    console.log(4);
  case 3:
    console.log(3);
}

// 13- Что выведет консоль? Даны множества А={4,5,1,2,3} и В={-1,0,1,3,7} Найти пересечение множеств

/*
Объединение двух множеств – это множество, в котором каждый элемент является элементом одного из исходных множеств те чтобы составить объединение двух числовых множеств, имеющих конечное количество элементов, необходимо записать все элементы одного множества и дописать к ним недостающие элементы из второго множества;
Определим объединение исходных множеств:
Заишем все элементы множества А={4,5,1,2,3} и добавим к ним недостоющие элементы множества В={-1,0,1,3,7} и упорядочим
А ∪ B = {4,5,1,2,3,-1,0,7} => {-1,0,1,2,3,4,5,7}
Определим пересичение исходных множеств:
Пересечение множеств – это множество, которое состоит из всех общих элементов исходных множеств те - чтобы составить пересечение двух числовых множеств, необходимо элементы первого множества один за другим проверить на принадлежность второму множеству. Те из них, которые окажутся принадлежащими обоим множествам и будут составлять пересечение.
А ∪ B = {1,3}
*/

// 14- Что выведет консоль?
let count = 2;
console.log('14 task = ', count++); //2
console.log(count); //3
console.log(++count); //4 - выполняется сразу
console.log(count); // 4

// 15- Что выведет в консоль?
// Оператор typeof позволяет определить тип параметра (число, строка, объект). Оператор возвращает строку, содержащую тип ('number', 'string', 'object').
console.log('15 task ', typeof typeof null); // string
console.log(typeof null); // 'object' Оператор возвращает строку

// 16- Что выведет в консоль?

const point = [1, 3];
const segment = [point, [5, 5]];
console.log(segment); // [ [ 1, 3 ], [ 5, 5 ] ]
console.log(...segment); // [ 1, 3 ] [ 5, 5 ]
const result16 = [...segment, [1, 8]];
console.log('16 task ', result16); // [ [ 1, 3 ], [ 5, 5 ], [ 1, 8 ] ]

// 17- Что выведет в консоль?

let n17 = 3;
let b17 = true;
// n17 = n17.toString(2);
console.log(n17, typeof n17); //11 , string
console.log(Number(b17)); // 1
console.log(!Number(b17)); // false !1 = false
console.log(typeof n17.toString(), n17.toString()); // string 3
n17 = n17.toString(2) + Number(b17) + n17.toString() - 3 + !Number(b17); // '1113' - 3 => '1110'
console.log('task 17 ', n17);

// 18- Что выведет в консоль?
let arr18 = [1, 2, 3, 4, 5];
console.log(arr18.push(99)); // 6 Метод .push возвращает новую длину массива, а не сам массив!
console.log(arr18); // [ 1, 2, 3, 4, 5, 99 ]

// 19- Что выведет в консоль?
// Объект Set является коллекцией unique значений: значение может появляться только один раз в наборе.
const set19 = new Set([1, 1, 2, 2, 3, 4, 5]);
console.log('task 19 ', set19); // Set(5) { 1, 2, 3, 4, 5 }

// 20- Что выведет в консоль?
// Объект Number является объектом-обёрткой, позволяющей вам работать с числовыми значениями. Объект Number создаётся через конструктор Number().
console.log(typeof new Number(1), new Number(1)); // object [Number: 1]
console.log('task 20', new Number(1) === 1); // false
console.log('task 20', new Number(1) == 1); // true

// 21- Что выведет в консоль?
// Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
// Функция parseInt имеет 2 параметра, вторым параметром является система исчисления, к которой нужно привести строку.
// Восьмери́чная систе́ма счисле́ния — позиционная целочисленная система счисления с основанием 8. Для представления чисел в ней используются цифры от 0 до 7
let num21;
console.log(num21); // undefined
num21 = parseInt('08', 8) + parseInt('05', 8);
console.log('task21', num21); //5

// 22- Что выведет в консоль?
// С помощью оператора || мы можем вернуть первый истинный операнд. Если все значения ложны, последний операнд возвращается.
const one22 = false || {} || null; // {} true
const two22 = null || false || ''; // last false ''
const three22 = [] || 0 || true; // first true
console.log(one22, two22, three22); // {} "" []

// 23- Что выведет в консоль?
// Если вы не передадите необязательный аргумент initialValue методу reduce, аккумулятор будет равен первому элементу при первом вызове.
const arr23 = [1, 2, 3, 4];
// x - akk y - curr val;
arr23.reduce((x, y) => console.log('task 23 ', x, y)); // 1 2, undefined 3, undefined 4 тк нет return

// 24- Что выведет в консоль?
// [Object Object] — строковая версия экземпляра объекта. Это значение возвращается программой JavaScript, если вы пытаетесь распечатать объект без предварительного форматирования объекта как строки.
// {name: 'Serge'} является объектом. Ни число, ни объект не являются строкой, поэтому они приводятся к строке. Всякий раз, когда мы приводим обычный объект, он становится "[object Object]". "[object Object]", объединенный с "2", становится "[object Object]2".
const set24 = new Set();
set24.add(1);
set24.add('test');
set24.add({ name: 'Serge' });

for (let item of set24) {
  console.log('task 24', item + 2); // 3 (2+1) test2 ('test'+2='test2) [object Object]2 ('[object Object]'+2 = '[object Object]2')
}

// 25- Что выведет в консоль?
console.log('task25 ', '❤' === '❤'); // true
console.log('task25 ', '❤' == '❤'); // true

// 26- Что выведет в консоль?
const numbers26 = [1, 2, 3, 4, 5, 6];
const [y, z] = numbers26;
console.log('task 26 ', y, z); // 1 2

// 27- Что выведет в консоль?
//&& оператор вернёт значение первого ложноподобного операнда при вычислении, либо значение последнего операнда, если все операнды оказались истиноподобными.
const output27 = `Java ${[] && 'Script'} very ${
  'stronger' && 'simple'
} language`;
console.log('task 27 ', output27); // Java Script very simple language

// 28- Что выведет в консоль?
//set.size – возвращает количество элементов в множестве.

const set28 = new Set(['1', '0', '3', '4', '0', '5']);
console.log('task 28', set28.size); // 5 (а эл 6 - повтор)

// 29- Что выведет в консоль?
const values29 = ['', null, undefined, NaN, false];
for (let i = 0; i < values29.length; i++) {
  console.log('task 29', Boolean(values29[i])); // false false false false false false
}

// 30- Что выведет в консоль?
console.log('task 30 ', ![]); // false
console.log('task 30 ', !['test30']); // false

// 31- Что выведет в консоль?
const user31 = {
  pass: 'Pass',
  name: 'Serge',
  id: 300,
};

const organize31 = (obj) => ({
  id: undefined,
  ...obj,
});

console.log('task31 ', organize31(user31)); // { id: 300, pass: 'Pass', name: 'Serge' } - перезатер

// 32- Что выведет в консоль?
// Метод toString() возвращает строку, представляющую объект.
const obj32 = {};
console.log('task 32 ', typeof obj32.toString(), obj32.toString()); // string ,[object Object]

// 33- Что выведет в консоль?
class Something {}
console.log(typeof Something); // function
const someObj33 = new Something();
console.log(typeof someObj33); // object
console.log('task 33 ', typeof someObj33 === typeof Something); // false

// 34- Что выведет консоль?
// Метод Number. isNaN() определяет, является ли значение NaN (Not-A-Number).
// Функция isNaN() определяет является ли литерал или переменная нечисловым значением ( NaN ) или нет
console.log('task 34 ', Number.isNaN('string')); // false
console.log('task 34 ', isNaN('string')); // true

// 36- Что выведет консоль?
// Объект arguments — это подобный массиву объект, который содержит аргументы, переданные в функцию.
// console.log(typeof arguments); // 'object'
console.log(
  (function () {
    return typeof arguments;
  })()
); // object

// 35- Что выведет консоль?
let arr35 = ['a', 'l', 'p', 'h'];
console.log(arr35.length); // 4
arr35.length = 10;
console.log(arr35.length); // 10
console.log(arr35); // [ 'a', 'l', 'p', 'h', <6 empty items> ]
delete arr35[0];
console.log(arr35); //[ <1 empty item>, 'l', 'p', 'h', <6 empty items> ]
console.log(arr35.length); // 10

// 37- Что выведет консоль?
//Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции
// Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки
let str37 = 'MyTestingString';
console.log(str37.slice(2, 8)); // Testin (c 2 инд но по 7 инд вкл)
console.log(str37.substr(2, 8)); // TestingS (c 2 инд по 8 инд вкл)
console.log(str37.substring(2, 8)); // Testin (c 2 инд по 7 инд вкл)

// 38- Что выведет консоль?
// Выражение x='x0ff ' - 1 равно NaN. Проверка x!=x есть ничто иное как проверка на NaN
var x38;
x38 = 'x0ff ' - 1;
if (x38 != x38) {
  console.log(true); // true тк NaN
} else {
  console.log(x38);
}

// 39- Что выведет консоль?
const obj39 = {
  name: 'Serge',
  age: 25,
  car: true,
};
for (var i in obj39) {
  console.log('task 39 ', obj39[i]); // serge 25 true
}
for (var i in obj39) {
  console.log('task 39 ', i); // name age car
}

// 40- Что выведет консоль?
let x40 = 5;
console.log(x40++); // 5
console.log(x40); // 6

// 41- Что выведет консоль?
console.log('task 41 ', typeof ([] + false), [] + false); // string, 'false'
console.log('task 41 ', typeof ([] + false - null), [] + false - null); // number, NaN

// 42- Что выведет консоль?
console.log('task 42 ', typeof ([] + 1), [] + 1); // string '1'
console.log('task 42 ', [] + 1 + 2); // '12'

// 43- Что выведет консоль?
let y43 = 1;
let x43 = (y43 = 2);
console.log(y43, x43); // 2 2

// 44- Что выведет консоль?
console.log('task 44 ', num44); // undefined
var num44 = '123';

// 45- Что выведет консоль?
function sum45(num1, num2 = num1) {
  console.log(num1 + num2); // 10 + 10 = 20
}
sum45(10); // 20

// 46- Что выведет консоль?
let a46 = 1;
let c46 = a46++ + 1;
console.log('task 46 ', c46); // 2  тк a+++1 = a++ +1

// 47- Что выведет консоль?
function func47(a) {
  return '1';
}
console.log('task 47 ', func47()); // 1
console.log('task 47 ', func47(1, 2)); // 1
console.log('task 47 ', func47('1')); // 1
console.log('task 47 ', func47(func47())); // 1
console.log('task 47 ', func47(new Object())); // 1

// 48- Что выведет консоль?
let a48 = isNaN('2020');
console.log('task 48 ', a48); // false тк "2020" преобразуется в число которое не NaN

// 49- Что выведет консоль?
console.log(typeof +false, +false); // number 0
console.log(typeof +true, +true); // number 1
console.log(typeof +null, +null); // number 0

// 50- Что выведет консоль?
console.log('----------50--------');
console.log(typeof ('' + 1 + 0), '' + 1 + 0); // string, '10'
console.log(typeof (true + false), true + false); // number, 1
console.log(Boolean(-1)); // false
console.log(null + 1); // 1
console.log(typeof ('-9' - 5), '-9 ' - 5); // number , -14
console.log(undefined + 1); // NaN
console.log('-9' + 5); // -95
console.log(4 + 5 + 'px'); // 9px
console.log('4px' - 2); // NaN
console.log(undefined == null); // true
console.log(undefined === null); // false

// 51- Что выведет консоль?
let a51 = 1;
let b51 = ++a51 + a51;
console.log('task 51 ', b51); //4 (сначала 1 +1(увеличенн сразу) +2 (переменная обновл))

// 52- Что выведет консоль?
// Вторым необязательным параметром можно указать максимальное количество элементов в получившемся массиве
let s52 = 'myteststring';
// console.log('task 52 ', s52.split(',')); // [ 'myteststring' ]
console.log('task 52 ', s52.split(',', 6)); // [ 'myteststring' ]

// 53- Что выведет консоль?
let a53 = isNaN('2014');
console.log('task 53 ', a53); // false  - JS авт. переводит "2014" в число 2014 и возвращает false, так как это число.

// 54- Что выведет консоль?
let dog54 = {
  species: 'setter',
};
dog54.weight = 33;
dog54['age'] = 8;
console.log('task 54', dog54); // { species: 'setter', weight: 33, age: 8 }

// 55- Что выведет консоль?
let result55 = 0;
function addValue(x) {
  result55 = result55 + x;
  return result55;
}

console.log('task 55 ', addValue(10)); //10
console.log('task 55 ', addValue(addValue(10))); // 40 тк уже 10 +10+20

// 56- Что выведет консоль?
const arr56 = [1, 2, 3, 4];
let test56 = arr56.reduce((pr, i) => pr + i, '1');
console.log('task 56 ', typeof test56, test56); // string '11234'
// console.log(typeof ('' + 1)); // string

// 57- Что выведет консоль?
const arr57 = [1, 2, 3, 4];
let test57 = arr57.reduce((pr, i) => pr + i);
console.log('task 57 ', test57); // 10 тк 1 идет в акк сразу + 2 +3 +4

// 58- Что выведет консоль?
// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
const arr58 = [1, 2, 3, 4];
let test58 = arr58.indexOf(2, 3);
console.log('task 58 ', test58); // -1
console.log('task 58 ', arr58.indexOf(2)); // 1

// 59- Что выведет консоль?
// Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.
const arr59 = [1, 2, 3, 4];
let test59 = arr59.find((item) => item > 2);
console.log('task 59 ', test59); // 3

// 60- Что выведет консоль?
const arr60 = [1, 2];
let test60 = ([, , ...rest] = arr60);
console.log('task 60, ', rest); // []

// 61- Что выведет консоль?
// console.log('task 61 ', square61(7)); // ReferenceError
const square61 = function (number) {
  return number * number;
};
console.log('task 61 ', square61(4)); // 16

// 62- Что выведет консоль?
function sum62() {
  return arguments[0] + arguments[1] + arguments[2];
}
console.log('task 62 ', sum62(1, 2, 10)); // 13

// 63- Что выведет консоль?
function myFun63(a, b, ...manyMoreArgs) {
  return a + b + manyMoreArgs[0];
}
console.log('task 63 ', myFun63(1, 2, 3, 4, 5, 6, 7, 8)); // 6

// 64- Что выведет консоль?
console.log(sayHello64()); // undefined - тк функц ничего не возвращает
function sayHello64() {
  console.log('hello');
}

// 65- Что выведет консоль?
// console.log('task 65 ', sum65(1, 3)); // ReferenceError
const sum65 = (a, b) => {
  return a + b;
};

// 66- Что выведет консоль?
// Рекурсия в программировании — это вызов функции из этой же самой функции
// РЕКУРСИЯ - В 90% БЕЗ НЕЕ МОЖНО ОБОЙТИСЬ, - ЭТО ВОЗМОЖНОСТЬ ФУНКЦИИ ВЫЗВАТЬ САМУ СЕБЯ, основная ее опасность переполнить стек вызова
const func66 = (n) => {
  if (n !== 1) {
    console.log(typeof (n !== 1)); // 4x boolean
    return n * func66(n - 1);
  } else {
    return 1;
  }
};

console.log('task 66 ', func66(5)); // 5 * 4 * 3 * 2 = 120 (1 !== 1 false)

// 67- Что выведет консоль?
function fn67() {
  console.log('Привет из функции fn'); // 1 вывод - Привет из функции fn

  return function (a) {
    console.log(a); // 2 вывод - true
  };
}

fn67()(true); // таким способом сразу можем вызвать функц возвр fn67

// 68- Что выведет консоль
var a68 = 'a,b'.split(',');
console.log('task 68 ', a68); // [ 'a', 'b' ]
var a688 = new Array('a', 'b');
console.log('task 68 ', a688); // [ 'a', 'b' ]

// 69- Что выведет консоль
const compare69 = (a, b) => {
  return a > b;
};
console.log('task 69 ', compare69('f', 'k')); // false чем дальше в алфатит тем больше

// 70- Что выведет консоль
const str70 = (a, b) => {
  return a - b;
};
console.log('task 70 ', str70('a', 'b')); // NaN

// 71- Что выведет консоль
const expression71 = (a, b, c) => {
  return a + b - c;
};
console.log('task 71 ', expression71('j', 's', 1)); // NaN 'js' - 1 так нельзя

// 72- Что выведет консоль
const arr72 = [1, 2, 3, 4, 5];
console.log('task ', arr72.toString(), typeof arr72.toString()); // 1,2,3,4,5 string

// 73- Что выведет консоль
// Метод slice() возвращает новый массив, содержащий копию части исходного массива.
const str73 = 'Не люблю учить JS';
console.log(str73.length); // 17
console.log('task 73 ', str73.slice(3, str73.length)); // люблю учить JS
console.log('task 73 ', str73.slice(3, 8)); // люблю
console.log('task 73 ', str73.slice(-2)); // JS
console.log('task 73 ', str73.slice(-4)); // ь JS

// 74- Что выведет консоль
let a74 = [],
  b74 = 1,
  c74 = false,
  d74 = [];

console.log('task 74 ', typeof (b74 == c74) + ' ' + (a74 == d74)); // boolean false 2) [ ] == [ ], [ ] === [ ] -> false

// 75- Что выведет консоль
const myNumbers75 = ['55', '66', '77'];

for (let item in myNumbers75) {
  console.log('task 75 for in ', item); // 0 1 2
}

for (let item of myNumbers75) {
  console.log('task 75 for of ', item); // 55  66 77
}

// 76- Что выведет консоль
let num76 = 13;
const minusEight = (x) => x - 8;
num76 = (num76--, (num76 *= 3), (num76 = minusEight(num76)), (num76 -= 4)); // 13, 12*3 = 36, 36-8, 28 - 4
console.log(num76); // 24

// 77- Что выведет консоль
// Метод Object.assign() копирует из исходных объектов в целевой объект только перечисляемые и собственные свойства
const obj77 = {
  a: 1,
};

const copy77 = Object.assign({}, obj77);
console.log('task 77 ', copy77); // { a: 1 }

// 78- Что выведет консоль
// Выражение do...while создаёт цикл, который выполняет указанное выражение до тех пор, пока условие не станет ложным.
let result78 = 0;

do {
  result78 += 10;
} while (result78 <= 25);
console.log('task 78 ', result78); // 30

// 79- Что выведет консоль
// Метод Math.sqrt() возвращает квадратный корень числа, то есть
const numbers79 = [1, 4, 9];
const roots79 = numbers79.map(Math.sqrt);
console.log('task 79 ', roots79); // [ 1, 2, 3 ]

// 80- Что выведет консоль
// Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
const str80 = 'Mozilla';
console.log('task 80 ', str80.substring(3, 0)); // Moz
console.log('task 80 ', str80.substring(3, 1)); // oz
console.log('task 80 ', str80.substring(6, 3)); // ill
console.log('task 80 ', str80.substring(1, 5)); // ozil
console.log('task 80 ', str80.substring(0, 2)); // Mo

// 81- Что выведет консоль
const str81 = 'array';
console.log('task 81 ', str80.split('')); // [ 'M', 'o', 'z', 'i', 'l', 'l', 'a' ]

// 82- Что выведет консоль
// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false
const str82 = 'Быть или не быть вот в чем вопрос';
console.log('task 82 ', str82.includes('Вопрос')); // false
console.log('task 82 ', str82.includes('вопрос')); // true

// 83- Что выведет консоль
const str83 = 'string';
console.log(
  'task 83 ',
  str83.toLocaleLowerCase() === str83.toLocaleUpperCase() // false,  == false
);

// 84- Что выведет консоль
// str.replace(str|regexp, str|func) - Это универсальный метод поиска-и-замены,
const str84 = 'aaa bbb ccc';
console.log('task 84 ', str84.replace(/b/g, 'j')); // aaa jjj ccc

// 85- Что выведет консоль
let a85 = 3;
let b85 = new Number(3);
let c85 = 3;
console.log(a85 == b85); // true
console.log(a85 === b85); // false
console.log(a85 == c85); // true
console.log(a85 === c85); // true

// 86- Что выведет консоль
const arr85 = [{ firstName: 'Petr' }];
const arr855 = [...arr85];
console.log('task 86 ', arr855); //  [ { firstName: 'Petr' } ]
arr855[0].firstName = 'Serge';
console.log('task 86 ', arr85); //  [ { firstName: 'Serge' } ] - Проблема поверхностного копирования
console.log('task 86 ', arr855); //  [ { firstName: 'Serge' } ]

// 87- Что выведет консоль
const obj87 = {
  a: 1,
};
console.log('task 87- 1 ', obj87); // { a: 1 }

(function (obj) {
  obj = {
    a: 2,
  };
})(obj87);
console.log('task 87- 1 ', obj87); // { a: 1 }

(function (obj) {
  obj.a = 3;
})(obj87);
console.log('task 87- 1 ', obj87); // { a: 3 }

// 88- Что выведет консоль
let a88 = [];
console.log(typeof a88); // object
console.log(typeof !a88); // boolean
console.log(typeof (a88 == a88)); // boolean
console.log(typeof (a88 == !a88)); // boolean
console.log(Boolean(a88)); // true
console.log(Boolean(!a88)); // false
console.log(Boolean(a88 == a88)); // true
console.log(Boolean(a88 === a88)); // true
console.log(Boolean(a88 == !a88)); // true
console.log(Boolean(a88 === !a88)); // false
// А во втором операнд "!a" преобразовывается к boolean и соответственно порождает преобразование к boolean операнда "a". []==false (пустой массив => false), ![]==false (ссылка на объект (в данном случае на массив) с оператором ! => false) т.е. [] == ![]
console.log('task 88 ', (a88 == a88) + ' ' + (a88 == !a88)); //  1part: true тк [] = [] true 2part: true
console.log('task 88 ', typeof ((a88 == a88) + ' ' + (a88 == !a88))); // string

// 89- Что выведет консоль
let a89 = 0.1;
let b89 = 0.2;
let c89 = 0.3;

console.log(a89 + (b89 + c89)); // number 0.6
console.log('task 89 ', a89 + (b89 + c89) === a89 + b89 + c89); // false   (== false)
console.log('task 89 ', typeof (a89 + (b89 + c89) === a89 + b89 + c89)); // boolean
console.log(1 + 2 + 3 == 3 + 2 + 1);

// 90- Что выведет консоль
const arr90 = [1, 2, 3];
const arr901 = arr90;
arr901.push(4);
console.log(arr90); // [ 1, 2, 3, 4 ]
console.log(arr901); // [ 1, 2, 3, 4 ]
console.log('task 90 ', arr90 === arr901); // true

// 91- Что выведет консоль
const arr91 = [1, 2, 3];
const arr911 = [...arr91];
arr911.push(4);
console.log(arr91); // [ 1, 2, 3 ]
console.log(arr911); // [ 1, 2, 3, 4 ]
console.log('task 91 ', arr91 === arr911); // false

// 92- Что выведет консоль
// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
// Метод toString() возвращает строку, представляющую объект.
const arr92 = [1, 2, 3];
const arr921 = [...arr92];
arr921.push(4);
console.log(arr92); // [ 1, 2, 3 ]
console.log(arr921); // [ 1, 2, 3, 4 ]
const arr923 = arr921.concat();
console.log(arr923); // [ 1, 2, 3, 4 ]
console.log(typeof arr923.toString()); // string
console.log(arr923.toString()); // '1,2,3,4'
console.log('task 92 ', arr923.toString() === arr921.toString()); //true

// 93- Что выведет консоль
// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
const words93 = [
  'spray',
  'limit',
  'elite',
  'exubernat',
  'destruction',
  'present',
];
console.log(
  'task 93 ',
  words93.filter((word) => word.length > 11)
); // []

// 94- Что выведет консоль
const numbers94 = [1, 2, 3, 4, 5];
console.log(numbers94.reduce((acc, current) => acc + current, 5)); // 20 тк 5 + 1 + 2 + 3 + 4 + 5

// 95- Что выведет консоль
const numbers95 = [6, 1, 20, 3, 7, 8];
console.log(
  'task 95 ',
  numbers95.sort((a, b) => b - a)
); // [ 20, 8, 7, 6, 3, 1 ] тк b-a
console.log(
  'task 95 ',
  numbers95.sort((a, b) => a - b)
); // [ 1, 3, 6, 7, 8, 20 ]

// 96- Что выведет консоль
const arr96 = [1, 4, 5, 7, 7, 8, 3, 1];
console.log(
  'task 96 ',
  arr96.find((item) => item === 10)
); // undefined
console.log(
  'task 96 ',
  arr96.find((item) => item === 1)
); // 1

// 97- Что выведет консоль
const person1_97 = {
  name: 'Bob',
  age: 21,
};
const person2_97 = person1_97;
delete person2_97.age;
console.log('task 97', person1_97); // { name: 'Bob' }
console.log('task 97', person2_97); // { name: 'Bob' }

// 98- Что выведет консоль
const person98 = {
  name: 'Bob',
  age: 21,
};

const person98_2 = person98;
const person98_3 = { ...person98 };

console.log('task 98 ', person98 === person98_2); // true
console.log('task 98 ', person98 === person98_3); // false

// 99- Что выведет консоль
let options99 = { width: 200, height: 300 };
let { width: w, height: h } = options99;
// console.log('task 99 ', width); // ReferenceError: width is not defined
console.log(w, h); // 200 300

// 100- Что выведет консоль
// Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
// Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, что и цикл for...in
// Метод Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in
let person100 = {
  name: 'serge',
  surname: 'ivanov',
  age: '21',
  lang: 'java',
};
console.log('task 100 ', Object.entries(person100)); // [[ 'name', 'serge' ],[ 'surname', 'ivanov' ],[ 'age', '21' ],[ 'lang', 'java' ]]
console.log('task 100 ', Object.keys(person100)); // [ 'name', 'surname', 'age', 'lang' ]
console.log('task 100 ', Object.values(person100)); // [ 'serge', 'ivanov', '21', 'java' ]

// 101- Что выведет консоль
// Метод Object. fromEntries() преобразует список пар ключ-значение в объект.
const person101 = [
  ['name', 'serge'],
  ['surname', 'ivanov'],
  ['age', '21'],
  ['lang', 'java'],
];
console.log('task 101 ', Object.fromEntries(person101)); // { name: 'serge', surname: 'ivanov', age: '21', lang: 'java' }

// 102- Что выведет консоль
// Метод Object.freeze() замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, настраиваемости и записываемости

let person102 = {
  name: 'serge',
  surname: 'ivanov',
  age: '21',
  lang: 'java',
};

Object.freeze(person102);
person102.name = 'Bob';
console.log('task 102 ', person102); // { name: 'serge', surname: 'ivanov', age: '21', lang: 'java' }

// 103- Что выведет консоль
// Метод Object.isFrozen() определяет, был ли объект заморожен.

let person103 = {
  name: 'serge',
  surname: 'ivanov',
};
Object.freeze(person103);
const person103_2 = { ...person103 };
console.log('task 103 ', Object.isFrozen(person103)); // true
console.log('task 103 ', Object.isFrozen(person103_2)); // false

// 104- Что выведет консоль
// Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
const number104 = 1.56;
console.log('task 104 ', Math.floor(number104)); // 1

// 105- Что выведет консоль
// Метод Math.min возвращает минимальное число из группы чисел, переданных параметрами.Если параметрами ничего не передано, то будет возращено Infinity.По умолчанию метод не работает с массивами
const arr105 = [-1, 2, 4, -10, 5, 6, 0];
console.log('task 105 ', Math.min(arr105)); // NaN тк массив?

// 106- Что выведет консоль
/** 
const arr106 = [10, 12, 15, 21];
for (let i = 0; i < arr106.length; i++) {
  setTimeout(() => {
    console.log('task 106 ', i); // 0 1 2 3
  }, 0);
}
*/

// 107- Что выведет консоль
/** 
const sayHello107 = () => {
  console.log('Hey');
};
setTimeout(sayHello107, 1000); // hey 1 sec !!! setTimeout(sayHello107(), 1000) - TYPEERROR
*/

// 108- Что выведет консоль
let arr108 = [2, 3, 4];
let arr108_2 = arr108.map((item) => console.log(item * 2)); // 4 6 8
console.log('task 108 ', arr108_2); // [ undefined, undefined, undefined ]

// 109- Что выведет консоль
// Объект arguments — это подобный массиву объект, который содержит аргументы, переданные в функцию.
// Оператор распространения (...args) возвращает массив с аргументами. Массив это объект, поэтому typeof args возвращает "object".
function getAge109(...args) {
  console.log(typeof args); // object
  console.log(args); // [ 21, 22 ] - это подобный массиву объект
}
getAge109(21, 22);

// 110- Что выведет консоль
// Используя "use strict", можно быть уверенным, что мы по ошибке не побъявим глобальные переменные. Мы ранее нигде не объявляли переменную age, поэтому с использованием "use strict" возникнет ReferenceError. Без использования "use strict" ошибки не возникнет, а переменная age добавится в глобальный объект.
function getAge110() {
  ('use strict');
  age = 21;
  // console.log(age); // ReferenceError: age is not defined
}
getAge110();

// 111- Что выведет консоль
// Метод eval() выполняет JavaScript-код, представленный строкой.
const sum111 = eval('10*10+5');
console.log('task ', sum111, typeof sum111); // 105 number
const sum111_1 = eval(10 * 10 + 5);
console.log('task ', sum111_1, typeof sum111_1); // 105 number

// 112- Что выведет консоль
// С помощью ключевого слова var можно определять сколько угодно переменных с одним и тем же именем. Переменная будет хранить последнее присвоенное значение.
// Но такой трюк нельзя проделать с let и const, т.к. у них блочная область видимости.
var num112 = 10;
var num112 = 9;
console.log('task 112 ', num112); // 9

// 113- Что выведет консоль
// Set (по-русски говорят множество) — коллекция для хранения уникальных значений любого типа. Одно и то же значение нельзя добавить в Set больше одного раза.
/**
 * Основные методы для работы с коллекцией:
add() — добавить элемент.
delete() — удалить элемент.
has() — проверить, есть ли элемент в коллекции.
clear() — очистить коллекцию.
forEach() — выполнить функцию для каждого элемента в коллекции, аналогично одноимённому методу массива.
Содержит свойство size для получения количества элементов в коллекции.
 */

// Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство

// Все ключи объектов (кроме Symbols) являются строками, даже если заданы не в виде строк
// Но это не работает для set. Значения '1' нет в set
const obj113 = { 1: 'a', 2: 'b', 3: 'c' };
const set113 = new Set([1, 2, 3, 4]);

console.log('task 113 ', obj113.hasOwnProperty('1')); // true
console.log('task 113 ', obj113.hasOwnProperty('1')); // true
console.log('task 113 ', set113.has('1')); // false
console.log('task 113 ', set113.has(1)); // true

// 114- Что выведет консоль
// Если есть два ключа с одинаковым именем, то ключ будет перезаписан. Его позиция сохранится, но значением будет последнее указанное
const obj114 = { a: 'one', b: 'two', a: 'three' };
console.log('task 114 ', obj114); // { a: 'three', b: 'two' }

// 115- Что выведет консоль
function sayHi115() {
  console.log(name); // undefined
  // console.log(age); // ReferenceError: tdz
  var name = 'Serge';
  let age = 21;
}

console.log('task 115 ', sayHi115());

// 116- Что выведет консоль
// Тем не менее, когда мы приводим объект к строке, он становится "[object Object]".
const a116 = {};
const b116 = { key: 'b' };
const c116 = { key: 'c' };
// a116[5] = 123; // { '5': 123 } - example
a116[b116] = 123;
console.log(a116); // { '[object Object]': 123 }
a116[c116] = 456;
console.log(a116); // { '[object Object]': 456 }
console.log('task 116 ', a116[b116]); // 456

// 117- Что выведет консоль
// В обоих случаях мы передаем объект, на который будет указывать this. Но .call выполняется сразу же!.bind возвращает копию функции, но с привязанным контекстом. Она не выполняется незамедлительно.
const person117 = { name: 'serge' };
function sayHi117(age) {
  console.log('task 117 ', `${this.name} is ${age}`);
}

sayHi117.call(person117, 21); // serge is 21
sayHi117.bind(person117, 21); // function ??

// 118- Что выведет консоль
// Возведение в степень (**) (en-US)	справа налево
console.log('task 118 ', 2 ** (3 ** 2)); // 512 (2**(3**2) // Ассоциативность

// 119- Что выведет консоль
// Метод Math.max() возвращает наибольшее из нуля или более чисел.
let a119 = 10;
let b119 = 29;
console.log('task 119 ', Math.max(a119, b119)); // 29

// 120- Что выведет консоль
console.log(
  'task 120 ',
  (function () {
    var a = true + false;
    return a;
  })()
); // 1
console.log(typeof (true + false), true + false); // number 1  ( 1 + 0)

// 121- Что выведет консоль
console.log(0 == 0); // true
console.log(0 == '0'); // true
console.log(0 === '0'); // false
console.log(false == 'false'); // false
console.log(false === 'false'); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.log(false == '0'); // true
console.log(false === '0'); // false
console.log(false == undefined); // false
console.log(false === undefined); // false
console.log(false == null); // false
console.log(false === null); // false

// 122- Что выведет консоль
let a122 = new Array();
a122['key'] = 'value';
console.log('task 122 ', a122, a122.length); // [ key: 'value' ] length = 0

// 123- Что выведет консоль
// С помощью оператора || мы можем вернуть первый истинный операнд. Если все значения ложны, последний операнд возвращается.
// && оператор вернёт значение первого ложноподобного операнда при вычислении, либо значение последнего операнда, если все операнды оказались истиноподобными.
let a123 = '' || 0 || 2 || true || false; // 2
let b123 = 3 && true && false && null; // false

console.log('task 123 ', a123, b123); // 2 false

// 124- Что выведет консоль
// Функция sayHi возвращает значение, возвращаемое из немедленно вызываемого функционального выражения (IIFE). Результатом является 0 типа "number".
function sayHi124(params) {
  return (() => 0)();
}

console.log('task 124 ', typeof sayHi124()); // number

// 125- Что выведет консоль
// typeof 1 возвращает "number". typeof "number" возвращает "string"
console.log('task 125 ', typeof 1); // number
console.log('task 125 ', typeof typeof 1); // string

// 126- Что выведет консоль
let a126 = 0;
for (let i = 0; i < 5; i++) {
  a126++;
}
console.log('task 126 ', 5); // 5 ЗАДАЧА ПРОСТО НА ВНИМАТЕЛЬНОСТЬ
console.log('task 126 ', a126); // 5

// 127- Что выведет консоль
// Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, что и цикл for...in
// Метод Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in
// Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in
let obj127 = {
  10: 'a',
  20: 'b',
  30: 'c',
  40: 'd',
};
console.log('task 127 ', Object.keys(obj127)); // [ '10', '20', '30', '40' ]
console.log('task 127 ', Object.values(obj127)); // [ 'a', 'b', 'c', 'd' ]
console.log('task 127 ', Object.entries(obj127)); // [ [ '10', 'a' ], [ '20', 'b' ], [ '30', 'c' ], [ '40', 'd' ] ]

// 128- Что выведет консоль
// Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива
const arr128 = [true, 'js_test', 3, Infinity];
const result128 = arr128.unshift(NaN);
console.log('task 128 ', result128); // 5  возвращает новую длину массива
console.log(arr128); // [ NaN, true, 'js_test', 3, Infinity ] - массив изменился

// 129- Что выведет консоль
const numbers129 = [1, 2, 3, 4, 5];
const [y129] = numbers129;
console.log('task 129 ', y129); //1

// 130- Что выведет консоль
console.log(Promise.resolve(5)); // Promise {<fulfilled>: 5} В этом случае мы просто передали числовое значение 5. Возвращается разрешенное обещание со значением 5.

// 131- Что выведет консоль
/*
Унарный оператор ++ сперва возвращает значение операнда, затем приращивает значение операнда. Значение num1 равно 10, так как функция увеличений вначале возвращает значение num, которое равно 10, и только затем увеличивает значение num.
num2 - это 10, так как мы передали num1 в incpasePassedNumber. number равно 10 (значение num1. Опять же, унарный оператор ++ сначала возвращает значение операнда, затем увеличивает значение операнда. Значение number равно 10, поэтому num2 равно 10.
 */
let num131 = 10;
const increaseNumber = () => num131++;
// console.log(num131); // 10
const increasePassedNumber = (number) => number++; // passed number - пройденный номер
// console.log(num131); // 10
const num1_131 = increaseNumber();
console.log(num131); // 11
console.log(num1_131); // 10 - ответ
const num2_131 = increasePassedNumber(num1_131);
console.log(num2_131); // 10 - ответ
console.log(num131); // 11

// 132- Что выведет консоль
const getlist132 = ([x, ...y]) => [x, y];
const list132 = [1, 2, 3, 4];
console.log('task 132 ', getlist132(list132)); // [ 1, [ 2, 3, 4 ] ]

// 133- Что выведет консоль
// Оператор delete удаляет свойство объекта. После удаления это свойство будет иметь значение undefined.
// Однако переменные, объявленные с ключевым словом var, const или let, не могут быть удалены с помощью оператора delete.
const name133 = 'Serge';
age133 = 27; // Когда мы устанавливаем age равным 21, мы фактически добавляем свойство с именем age к глобальному объекту.
console.log(age133); // 27

console.log('task 133 ', delete name133); // false Переменная name была объявлена ​​с ключевым словом const, поэтому ее удаление не было успешным: возвращается false
console.log('task 133 ', delete age133); // true Вы можете успешно удалить свойства из объектов, в том числе из глобального объекта, поэтому delete age возвращает true.
console.log(name133); // Serge
// console.log(age133); // ReferenceError  !!! age133 is not defined

// 134- Что выведет консоль
function nums134(a, b) {
  if (a > b) {
    console.log('a больше');
  } else {
    console.log('b больше');
  }
  return a + b; // если бы a+b было на след строке то return = undefined
}

console.log('task 134 ', nums134(4, 2)); // a больше 6
console.log('task 134 ', nums134(1, 2)); // b больше 3

// 135- Что выведет консоль
console.log('task 135 ', Number(2) == Number(2)); // true;  == true   =='2' true
console.log('task 135 ', Boolean(false) === Boolean(false)); // true  ==true  'false' == false
console.log('task 135 ', Symbol('foo') === Symbol('foo')); // false Каждый Symbol совершенно уникален.

// 136- Что выведет консоль
// Object.entries(person) возвращает массив вложенных массивов, содержащий ключи и объекты: [ [ 'name', 'Serge' ], [ 'age', 33 ] ]
// Используя цикл for-of, мы можем перебирать каждый элемент массива, в данном случае подмассивы. Мы можем мгновенно деструктурировать подмассивы в цикле for, используя const [x, y]. x равен первому элементу в подмассиве, y равен второму элементу в подмассиве.
const person136 = {
  name: 'Serge',
  age: 33,
};

for (const [x, y] of Object.entries(person136)) {
  console.log(x, y); // name Serge  age 33
}

// 137- Что выведет консоль
let name137 = 'Serge';

function getName137() {
  // console.log(name137); // ReferenceError: Cannot access 'name137' before initialization TDZ
  let name137 = 'Bob';
}

console.log('task 137 ', getName137());

// 138- Что выведет консоль
// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
const arr138_1 = ['a', 'b', 'c'];
const arr138_2 = ['b', 'c', 'a'];
console.log('task 138 ', arr138_1.sort() === arr138_1); // true
console.log('task 138 ', arr138_2.sort() === arr138_2); // true
console.log('task 138 ', arr138_1.sort() === arr138_2.sort()); // false

// 139- Что выведет консоль
for (var i = 0; i < 2; i++) {
  setTimeout(() => {
    // console.log(i); // 2 2
  }, 1000);
}

// 140- Что выведет консоль
// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
// Метод возвращает true, если хотя бы для одного элемента массива переданная функция вернет true, в противном случае метод возвращает false.
const arr140 = [3, 8, 12];
const even140 = (elem) => elem % 2 === 0;
console.log('task 140 ', arr140.some(even140)); // true

// 141- Что выведет консоль
// Метод pop() удаляет последний элемент из массива и возвращает его значение.
let myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
console.log(myFish); // [ 'ангел', 'клоун', 'мандарин', 'хирург' ]
let popped = myFish.pop();
console.log(myFish); // [ 'ангел', 'клоун', 'мандарин' ]
console.log(popped); // хирург

// 142- Что выведет консоль
// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
const words142 = ['a', 'b', 'c'];
const result142 = words142.concat(1, [2, [3]]);
console.log('task 142 ', result142); // [ 'a', 'b', 'c', 1, 2, [ 3 ] ]

// 143- Что выведет консоль
// Rest оператор - Например, с его помощью можно разложить массив на первый элемент и все остальные:
// Строка является итерируемой сущностью. Оператор распространения преобразовывает каждый символ в отдельный элемент
console.log('task 143 ', [...'HellO']); // [ 'H', 'e', 'l', 'l', 'O' ]

// 144- Что выведет консоль
// В JavaScript строки являются неизменяемыми (immutable).
let str144 = 'Hello World';
str144[0] = 'W';
console.log('task 144 ', str144); // Hello World

// 145- Что выведет консоль
// [1, 2] - начальное значение, с которым инициализируется переменная acc. После первого прохода acc будет равно [1,2], а cur будет [0,1]. После конкатенации результат будет [1, 2, 0, 1].Затем acc равно [1, 2, 0, 1], а cur равно [2, 3]. После слияния получим [1, 2, 0, 1, 2, 3].
console.log(
  'task 145 ',
  [
    [0, 1],
    [2, 3],
  ].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2]
  )
); // [ 1, 2, 0, 1, 2, 3 ]

// 146- Что выведет консоль
// Объекты взаимодействуют посредством ссылок при установке их равными друг другу. Когда вы назначаете ссылку из одной переменной в другую, вы создаете копию этой ссылки. (обратите внимание, что у них не одинаковые ссылки!)
// Мы изменили только значение переменной person, а не первый элемент в массиве, поскольку этот элемент имеет другую (скопированную) ссылку на объект. Первый элемент в members по-прежнему содержит ссылку на исходный объект.
let person146 = { name: 'Serge' };
const members146 = [person146];
person146 = null;
console.log('task 146 ', person146); // null
console.log('task 146 ', members146); // [ { name: 'Serge' } ]

// 147- Что выведет консоль
const person147 = {
  name: 'Serge',
  age: 22,
};
for (const item in person147) {
  console.log(item); // name age
}
for (const item in person147) {
  console.log(person147[item]); // serge 22
}

// 148- Что выведет консоль
// Функция parseInt преобразует строку в целое число.
// Преобразование произойдет, если только целое число стоит в начале строки, иначе будет выведено NaN.
console.log('task 148 ', parseInt('abc')); // NaN
console.log('task 148 ', parseInt('12abc')); // 12
console.log('task 148 ', parseInt('12.2abc')); // 12 - дробная часть будет отброшена
console.log('task 148 ', parseInt(null)); // NaN
console.log('task 148 ', parseInt(true)); // NaN
console.log('task 148 ', parseInt(0 / 0)); // NaN
console.log('task 148 ', parseInt('10a' * 10)); // NaN
console.log('task 148 ', parseInt('7*6', 10)); // 7, тк * не является допустимым числом. Он только разбирает "7" в десятичную 7. num теперь содержит значение 7

// 149- Что выведет консоль
console.log(!!null, Boolean(null)); // false, false  ~~~ !null - true
console.log(undefined, Boolean(undefined), !undefined, !!undefined); // undefined false true false

// 150- Что выведет консоль
const set150 = new Set(['1', '0', '3', '4', '0', '5']);
console.log('task 150 ', [...set150]); // [ '1', '0', '3', '4', '5' ]
console.log('task 150 ', ...set150); // [ '1', '0', '3', '4', '5' ]

// 151- Что выведет консоль
// Объект arguments является локальной переменной, которая доступна во всех функциях, за исключением стрелочных, она позволяет ссылаться внутри функции на аргументы функции с помощью объекта arguments.
const someFunc151 = function () {
  return arguments;
};

console.log('task 151 ', someFunc151()); // [Arguments] {}

// 152- Что выведет консоль
function iHateThis() {
  console.log(this); // [object Window]
}
// iHateThis();

// 153- Что выведет консоль
(function () {
  // console.log(this); // [object Window]
})();

// 154- Что выведет консоль
// Функция isNaN проверяет, является ли переданный параметр числом или нет. Вернет true, если параметр не является числом и false, если является.
console.log(isNaN(String('a'))); // true - параметр не является числом
console.log(isNaN({})); // true - параметр не является числом
console.log(isNaN(() => {})); // true - параметр не является числом

// 155- Что выведет консоль
console.log('task 155 ', false && 1 && []); // false
console.log('task 155 ', ' ' && true && 5); // 5 !!! любые непустые строки, даже из пробелов - true!

// 156- Что выведет консоль
function myFunc156() {
  let a = (b = 33); // let a = b = 33 => a = ref error
}
myFunc156();
console.log('task 156 ', b); // 33

// 157- Что выведет консоль
console.log('task 157 ', 3 + 4 + '5', typeof (3 + 4 + '5')); // 75, string

// 158- Что выведет консоль
console.log(
  'task 158 ',
  [1, 2, 3].map((num) => {
    if (typeof num === 'number') return; // [ undefined, undefined, undefined ]
    return num * 2;
  })
); // Когда мы не возвращаем значение из функции, функция возвращает значение undefined.
// но если бы было return num то результат [ 1, 2, 3 ]

// 159- Что выведет консоль
// Когда мы устанавливаем y равным 10, мы фактически добавляем свойство y к глобальному объекту (window в браузере, global в Node). В браузере window.y теперь равен 10.
// Переменные, объявленные с ключевым словом let, имеют блочную видимость, они определены только в блоке
(() => {
  let x160 = (y160 = 10);
  /**
   y = 10
   let x = y
   */
})();
console.log('task 159 ', typeof x160); // undefined
console.log('task 159 ', typeof y160); // number

// 160- Что выведет консоль
console.log('task 160 ', [] + false - null + true); // NaN
console.log('task 160 ', [] + false); // false
console.log('task 160 ', [] + false - null); // NaN

// 161- Что выведет консоль
// Функция Array.from() создаёт новый массив на основе переданного объекта. Объект должен быть либо массивоподобным (как строка или объект arguments), либо итерируемым (как Set или Map).
const arr161 = [NaN, 10, false];
console.log(
  'task 161 ',
  Array.from(arr161, (x) => x + x) // [ NaN, 20, 0 ]
);

// 162- Что выведет консоль
// Метод массива find() вернёт первый найденный в массиве элемент, который подходит под условие в переданной колбэк-функции.
const arr162 = [2, 5, 7, 15];
const func162 = (el) => {
  if (el > 6) return true;
};

console.log('task 162 ', arr162.find(func162)); // 7

// 163- Что выведет консоль
// Элемент будет равен возвращаемому значению. 1 + 2 вернет 3, 1 * 2 вернет 2, а 1 / 2 вернет 0.5.
const list163 = [1 + 2, 1 * 2, 1 / 2];
console.log('task 163 ', list163); // task 163  [ 3, 2, 0.5 ]

// 164- Что выведет консоль
// По умолчанию аргументы имеют значение undefined, если только значение не было передано функции. В этом случае мы не передали значение для аргумента name. name равно логгируемому undefined.
function sayHi164(name) {
  return `Hi there , ${name}`;
}
console.log('task 164 ', sayHi164()); //  Hi there , undefined

// 165- Что выведет консоль
// Переменные с ключевыми словами const и let имеют блочную видимость. Вы не можете ссылаться на переменную за пределами блока, в котором она объявлена, вызывается ReferenceError.
function checkAge165(age) {
  if (age < 18) {
    const msg = 'Sorry';
  } else {
    const msg = 'Yay!';
  }
  return msg;
}
// console.log('task 165 ', checkAge165(21)); // ReferenceError: msg is not defined

// 166- Что выведет консоль
// Метод charAt() возвращает указанный символ из строки
// Чтобы получить символ по определенному индексу в строке, вы можете использовать скобочную нотацию
console.log('task 166 ', 'I want pizza'[0]); // I

// 167- Что выведет консоль
function sum167(num1, num2 = num1) {
  console.log('task 167 ', num1 + num2);
}
sum167(10); //  20

// 168- Что выведет консоль
class Person168 {
  constructor(name) {
    this.name = name;
  }
}
const member168 = new Person168('Serge');
console.log('task 168 ', member168, typeof member168, typeof Person168); // { name: 'Serge' } object function

// 169- Что выведет консоль
// Метод .push возвращает новую длину массива, а не сам массив!
let newList169 = [1, 2, 3].push(4);
console.log(newList169); // 4
// console.log('task 169 ', newList169.push(5)); // TypeError: newList169.push is not a function

// 170- Что выведет консоль
// ... args - прочие параметры. Значение прочих параметров - это массив, содержащий все оставшиеся аргументы и может быть передан только последним!
// function getItems170 (fruitList, ...args, favoriteFruit) {
//   return [...fruitList, ...args, favoriteFruit]
// }

// getItems170(['banana', 'apple'], 'pear', 'orange') // SyntaxError: Rest parameter must be last formal parameter

function getItems170_1(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

console.log(
  'task 170_1 ',
  getItems170_1(['banana', 'apple'], 'pear', 'orange') // [ 'banana', 'apple', 'orange', 'pear' ]
);

// 171- Что выведет консоль
// Когда вы возвращаете свойство, значение свойства равно возвращаемому значению, а не значению, установленному в функции конструктора.
function Car171() {
  this.make = 'Lamba';
  return { make: 'Maserati' };
}
const myCar171 = new Car171();
console.log('task 171 ', myCar171.make); // Maserati

// 172- Что выведет консоль
// Мы передаем значение 'I love' в качестве аргумента стрелочной функции x => x. x равно 'I love', которое и возвращается. Это приводит к I love to program.
console.log('task 172 ', `${((x) => x)('i love')} to program`); // i love to program

// 173- Что выведет консоль
// sumValues принимает три аргумента:x, y и z. ...[1, 2, 3] приведет к перечню 1, 2, 3, который мы передаем функции sumValues.
function sumValues173(x, y, z) {
  return x + y + z;
}
console.log('task 173 ', sumValues173(...[1, 2, 3])); // 6

// 174- Что выведет консоль
// typeof name возвращает "строку". Строка "string" является истинным значением, поэтому !typeof name возвращает логическое значение false. false === "object" и false === "string" оба возвращают false.
const name174 = 'Ivan Ivanov';
console.log('task 174 ', !typeof name === 'object'); // false
console.log('task 174 ', !typeof name === 'string'); // false

// 175- Что выведет консоль
// Первая функция получает аргумент x со значением 4. Мы вызываем вторую функцию, которая получает аргумент y со значением 5. Затем мы вызываем третью функцию, которая получает аргумент z со значением 6
//  Когда мы пытаемся получить доступ к значениям x, y и z в функции последней стрелки, движок JS поднимается вверх по цепочке областей видимости, чтобы найти значения для x и y соответственно. Это возвращает 4 5 6.
const add175 = (x) => (y) => (z) => {
  console.log('task 175 ', x, y, z); // 4 5 6
  return x + y + z;
};
add175(4)(5)(6);

// 176- Что выведет консоль
// Используя метод splice, мы модифицируем исходный массив, удаляя, заменяя или добавляя элементы. В этом случае мы удалили 2 элемента. map, filter и slice возвращают новый массив, find возвращает элемент, а reduce возвращает аккумулированное значение.
const arr176 = [1, 2, 3, 4, 5, 6, 7];
console.log('task 176 ', arr176.splice(1, 2)); // [ 2, 3 ]
console.log(arr176); // [ 1, 4, 5, 6, 7 ]

// 177- Что выведет консоль
// Когда ты изменяешь один объект, то изменяются значения всех ссылок, указывающих на этот объект.
let c177 = { greeting: 'hey!' };
let d177;

d177 = c177;
c177.greeting = 'HELLO';
console.log('task 177 ', d177.greeting); // HELLO

// 178- Что выведет консоль
console.log('task 178 ', +true); // 1
console.log('task 178 ', !'Serge'); // false

// 179- Что выведет консоль
// Функция — это специальный тип объекта, который можно вызвать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, так как оно не является функцией.
function bark179() {
  console.log('Woof');
}
bark179.animal = 'dog';
console.log('task 179 ', bark179); // [Function: bark179] { animal: 'dog' }

// 180- Что выведет консоль
// В этом примере JavaScript сконвертировал число 1 в строку, чтобы операция внутри функции имела смысл и вернула значение. Во время сложения числа (1) и строки ('2') число преобразовывается к строке.
function sum180(a, b) {
  return a + b;
}
console.log('task 180 ', sum180(1, '2')); // 12
console.log('task 180 ', sum180('2', '2')); // 22
console.log('task 180 ', sum180(true, '2')); // true2
console.log('task 180 ', sum180(true, false)); // 1

// 181- Что выведет консоль
// Оператор запятой оценивает каждый из своих операндов(слева направо) и возвращает значение последнего операнда. В нашем случае это 5
const func181_1 = () => true;
const func181_2 = () => 'Hey world';
const func181_3 = () => 5;
const func_test181 = (func181_1(), func181_2(), func181_3());
console.log('task 181 ', func_test181); // 5

// 182- Что выведет консоль
let a182 = [1, 2];
(function () {
  console.log(a182); // [ 1, 2 ]
})();

// 183- Что выведет консоль
let obj183 = {
  1: 1,
  0: 0,
};
for (let key in obj183) {
  console.log('task 182 ', key); //0 1
  console.log('task 182_2 ', obj183[key]); //0 1
}

// 184- Что выведет консоль
// eval выполняет код, переданный в виде строки
const sum184 = eval('10*10+5');
console.log('task 184 ', sum184); // 105

// 185- Что выведет консоль
const user185 = { name: 'Serge', age: 35 };
const admin185 = { admin: true, ...user185 };
console.log('task 185 ', admin185); // { admin: true, name: 'Serge', age: 35 }

// 186- Что выведет консоль
// Метод toString() возвращает строковое представление указанного массива и его элементов.
const monthNames186 = ['янв', 'фев', 'мар', 'апр'];
const myVar186 = monthNames186.toString();
console.log('task 186 ', myVar186, typeof myVar186); // 'янв,фев,мар,апр' , string

// 187- Что выведет консоль
// JavaScript метод sort() позволяет отсортировать массив путём преобразования его элементов в строки и сравнения этих строк в порядке следования кодовых символов Unicode (сортирует массив по алфавиту).
let arr187 = [5, 3, 22, true];
arr187.sort();
console.log('task 187 ', arr187); // [ 22, 3, 5, true ]

// 188- Что выведет консоль
// Свойство length определяет количество аргументов, ожидаемых функцией.
console.log(Function.length); // 1
console.log(function () {}.length); // 0
console.log(function (a) {}.length); // 1
console.log(function (a, b) {}.length); // 2
console.log(function (a, b, c, d) {}.length); // 4
console.log(function (...args) {}.length); // 0

// 189- Что выведет консоль
// В строгом режиме объект arguments не отражает изменения параметров. В нестрогром режиме объект arguments отражает измениня параметров функции, если параметры были переданы при вызове.
// В данной задаче используется строгий режим, следовательно, параметры не изменятся.
function func189(a, b) {
  'use strict';
  a = 30;
  b = 17;
  const js_test = arguments[1];
  console.log('task 189 ', js_test); // 15
}
func189(5, 15);

// 190- Что выведет консоль
// Метод join объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива).
const arr190 = ['first', 'second', 'third'];
const result190 = arr190.join(' + ');
console.log('task 190 ', result190, typeof result190); // first + second + third,  string

// 191- Что выведет консоль
// mетод hasOwnProperty - проверяет, принадлежит ли указанное свойство самому объекту или нет.
let obj191 = {
  name: 'Serge',
};
console.log('task 191 ', obj191.hasOwnProperty('name')); // true

// 192- Что выведет консоль
// Метод apply() принимает аргументы в виде массива.
// чтобы найти максимальное число в списке значений, достаточно воспользоваться методом Math.max():
// Первый аргумент служит контекстом вызо­ва и становится значением ключевого слова this в теле функции.
const arr192 = [0, 15, 5];
const result192 = Math.max.apply(20, arr192);
console.log('task 192 ', result192, this); // 15

// 193- Что выведет консоль
// В данном случае вызов Object.assign({}, obj193) означает, что мы копируем данные из объекта obj193 в пустой объект {}. Результатом этого копирования стал объект copy193. Причем это совсем другой объект, нежели obj193. И любые изменения с константой copy193 здесь никак не затронут константу obj193.
var obj193 = { a: 1 };
var copy193 = Object.assign({}, obj193);
console.log('task 193 ', copy193); // { a: 1 }

// 194- Что выведет консоль
function newArr194(value) {
  return [value];
}
console.log('task 194 ', newArr194(5)); // [ 5 ]

// 195- Что выведет консоль
// JavaScript метод isNaN()ECMAScript 2015 определяет, является ли передаваемое значение NaN (англ. Not-a-Number, "не число") и возвращает логическое значение.
function func195(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log('task 195 ', func195('1'), typeof func195('1')); // 1 string
console.log('task 195 ', func195('abc')); // NaN
console.log('task 195 ', func195(1)); // 1
console.log('task 195 ', func195(true), typeof func195(true)); // true boolean

// 196- Что выведет консоль
// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
// Метод call() это предопределенный метод JavaScript. Он может использоваться для вызова любого метода с любым владельцем объекта в качестве аргумента (параметра)
function f196(a, b, c) {
  const s = Array.prototype.join.call(arguments);
  console.log('task ', s, typeof s); // 1,a,true string
}
f196(1, 'a', true);

// 197- Что выведет консоль
const animals197 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const result197 = animals197.slice(1, 5);
console.log('task 197 ', result197); // [ 'bison', 'camel', 'duck', 'elephant' ]

// 198- Что выведет консоль
// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. Метод every() не изменяет массив, для которого он был вызван.
function isBigEnough(element, inde, array) {
  return element >= 10;
}
console.log('task 198 ', [12, 5, 8, 130, 44].every(isBigEnough)); // false
console.log('task 198 ', [12, 55, 85, 130, 44].every(isBigEnough)); // true

// 199- Что выведет консоль
let arr199 = [1, 2, 3];
for (i = 0; i < arr199.length; arr199[i++] = 0);
console.log('task 199 ', arr199); // [ 0, 0, 0 ]

// 200- Что выведет консоль
// Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.
console.log('task 200 ', Math.trunc(12.23)); // 12
console.log('task 200 ', Math.trunc(0.123)); // 0
console.log('task 200 ', Math.trunc(NaN)); // NaN
console.log('task 200 ', Math.trunc('abc')); // NaN

// 201- Что выведет консоль
let js_tests201 = 10;
const func201 = (x = 100) => {
  js_tests201 = x;
};
func201(true);
console.log('task 201 ', js_tests201); // true

// 202- Что выведет консоль
// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
// Первым параметром метод принимает номер элемента массива, который нужно удалить. Вторым параметром - сколько элементов массива следует удалить. Если его поставить в 0 - то элементы удалены не будут (только добавлены новые).Дальше через запятую идут элементы, которые нужно добавить в массив (являются необязательными параметрами). Эти элементы добавятся вместо удаленных элементов массива.

const nums202 = ['one', 'two', 'three', 'four']; // [ 'one', 'two', 'ten', 'four' ]
const removed202 = nums202.splice(2, 1, 'ten'); // [ 'three' ] - номер элемента массива, который нужно удалить
console.log('task 202, ', nums202, removed202);

// 203- Что выведет консоль
// JavaScript метод max() объекта Math позволяет найти и возвратить наибольшее из переданных чисел.
const arr203 = [0, 15, 5];
const result203 = Math.max.apply(20, arr203);
console.log('task 203 ', result203, typeof result203); // 15 number

// 204- Что выведет консоль
const a204 = (c) => c;
const b204 = (c) => c;
console.log('task 204 ', a204 === b204); // false
console.log('task 204 ', a204 == b204); // false
console.log('task 204 ', a204(4) === b204(4)); // true
console.log('task 204 ', a204(4) == b204(4)); // true

// 205- Что выведет консоль
const a205 = {
  name: 'serge',
};
const b205 = {
  name: 'serge',
};
console.log('task205 ', a205.name === b205.name); // true

// 206- Что выведет консоль
var a206 = 5;
function test206() {
  a206 = 10;
  console.log(a206); // 10
  if (false) {
    var a206 = 20;
  }
}
test206();
console.log('task 206 ', a206); // 5

// 207- Что выведет консоль
// Вызов метода clear() удаляет все значения из коллекции Set.
const numbers207 = new Set();
numbers207.add(2).add(3).add(5);
console.log('task 207 ', numbers207.size); // 3
numbers207.clear();
console.log('task 207_2 ', numbers207.size); // 0

// 208- Что выведет консоль
//Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
const str208 = 'JavaScript';
console.log('task 208 ', str208.indexOf('rip')); // 6

// 209- Что выведет консоль
// Оператор instanceof проверяет, принадлежит ли объект к определённому классу.
class User209 {}
class Admin209 extends User209 {}
const admin209 = new Admin209();
console.log('task 209_1 ', admin209 instanceof Admin209); // true
console.log('task 209_2 ', admin209 instanceof User209); // true

// 210- Что выведет консоль
console.log('task 210 ', Boolean('5') + 9); // 10 тк true + 1 = 10

// 211- Что выведет консоль
console.log('task 211 ', String('10') - 5 + Boolean('') + '1'); // 51

// 212- Что выведет консоль
// приоритетность операторов сначала + (14), потом присваение (2)
let a212;
let b212;
b212 = a212 = 100 + 50;
console.log('task 212_1 ', b212); // 100+50 = 150 и 150=a212 // 150
console.log('task 212_2 ', a212); //  a212 = b121 // 150

// 213- Что выведет консоль
// Метод .push() возвращает длину нового массива!
// Метод push изменяет исходный массив. Если вы хотите вернуть массив из функции, а не длину массива, вы должны были вернуть list после добавления в нее item.
function addToList213(item, list) {
  return list.push(item);
}
const result213 = addToList213('apple', ['banana']);
console.log('task 213 ', result213); // 2

// 214- Что выведет консоль
const a214 = 5;
if (a214 > 0) {
  console.log('Yes!'); // Yes!
} else if (a214 == 5) {
  console.log('No!');
}

// 215- Что выведет консоль
const a215 = '5';
if (a215 == 5) {
  console.log('equal'); // equal
}
if (a215 === 5) {
  console.log('strict equal');
}

// 216- Что выведет консоль   a216=== строгое равенство в switch
const a216 = 5;
switch (a216) {
  case '5':
    console.log('1');
  case 5:
    console.log('2'); // 2
  case 4:
    console.log('2'); // 2 тк нет break
}

// 217- Что выведет консоль
const a217 = 3;
switch (a217) {
  case 5:
    console.log('1');
    break;
  case 4:
    console.log('2');
    break;
  default:
    console.log('3'); // 3
  case 2:
    console.log('4'); // 4 тк нет break
}

// 218- Что выведет консоль
const a218 = 5;
console.log(a218 > 6 ? a218 < 3 : a218 > 5); // false

// 219- Что выведет консоль
const a219 = 3;
console.log(
  'task 219 ',
  a219 < 6 ? (a219 > 4 ? 'Yes' : a219 <= 4 ? 'No' : '!!!') : '???' // No
);

// 220- Что выведет консоль
console.log(Number('10-1')); // NaN
console.log(Boolean('5') + 9); // 10  ( true + 9 = 10)
console.log(String('10') - 5 + Boolean('') + '1'); // 51 ( '10' - 5 + false + '1') => (5 + 0 + '1')

// 221- Что выведет консоль
console.log((true && false) || false); // false
console.log(!(true && false) && !(false && true)); // true
console.log((!'' && 'Yes') || !('No' && 'false')); // Yes
console.log(!'' && true && 'Yes' && Boolean('true') && 'PS'); // 'PS'
console.log('' ?? 'Yes'); // '' оператор нулевого слияния для 0 и ''
// console.log(true && 'd' ?? ''); // error одновременно нельзя - нужны скобки
console.log((true && 'd') ?? ''); // 'd'
console.log('' ?? (true && 'd')); // ''

// 222- Что выведет консоль
// Когда мы распаковываем свойство name из правого объекта, мы присваиваем его значение "Lydia" переменной с именем myName.С помощью {name: myName} мы сообщаем JavaScript, что хотим создать новую переменную с именем myName со значением свойства name в правой части.Поскольку мы пытаемся зарегистрировать name, переменную, которая не определена, выдается ReferenceError.

const { name: myName } = { name: 'Serge' };
// console.log('task 222 ', name); // ReferenceError: name is not defined

// 223- Что выведет консоль
function getUser223(id = 1, name) {
  console.log('task 223 ', id + ' ' + name);
}
getUser223('Антон'); // Антон undefined

// 224- Что выведет консоль
function isAdmin224(userId) {
  if (userId === 10) {
    return true;
  } else {
    return isAdmin224(10);
  }
}
console.log('task 224 ', isAdmin224(5)); // true

// 225- Что выведет консоль
function start225() {
  return 'start';
}
function run225() {
  return start225() + ' finish ' + start225();
}
console.log('task 225 ', run225()); // start finish start

// 226- Что выведет консоль
function a226() {
  return c226();
}
function b226() {
  return 'Yes';
}
function c226() {
  return b226;
}
console.log('task 226 ', a226()); // [Function: b226] - тк функция b без вызова

// 227- Что выведет консоль
// Как проверить существует ли свойство в объекте?
const user227 = {
  name: 'Serge',
};
console.log('task 227 ', 'name' in user227); // true
console.log('task 227 ', 'age' in user227); // false
console.log('task 227 ', !('age' in user227)); // true

// hasOwnProperty
console.log('task 227 ', user227.hasOwnProperty('name')); // true
console.log('task 227 ', user227.hasOwnProperty('age')); // false

// сравнение с undefined
console.log('task 227 ', user227.name !== undefined); // true
console.log('task 227 ', user227.name === undefined); // false

// 228- Что выведет консоль
const list228 = [1 + 2, 1 * 2, 1 / 2];
console.log('task 228 ', list228); // [ 3, 2, 0.5 ]

// 229- Что выведет консоль
let hello229 = 'Hello';
hello229 += ' world';
console.log('task 229 ', hello229); // 'Hello world'

// 230- Что выведет консоль
let hello230 = ['Hello'];
hello230.push(' world');
console.log('task 230 ', hello230); // [ 'Hello', ' world' ]

// 231- Что выведет консоль
const arr231 = [1, 2, 3, 4, 5, 6];
console.log('task 231 ', arr231.at(0)); // 1
console.log('task 231 ', arr231.at(3)); // 4
console.log('task 231 ', arr231.at(-1)); // 6

// 232- Что выведет консоль
// Функция Array.from() создаёт новый массив на основе переданного объекта. Объект должен быть либо массивоподобным (как строка или объект arguments), либо итерируемым (как Set или Map).
console.log('task 232 ', Array.from('foo')); // [ 'f', 'o', 'o' ]
// с callback функцией Array.from( arr, function( currentValue, index ));
console.log(
  'task232_2 ',
  Array.from([1, 2, 3], (x) => x + x) // [ 2, 4, 6 ]
);

// 233- Что выведет консоль
const arr233 = [1, 2, 3, 4, 5, 6];
const res233 = arr233.slice(2);
console.log('task 233 ', arr233); // [ 1, 2, 3, 4, 5, 6 ] - массив не меняется
console.log('task 233 ', res233); // [ 3, 4, 5, 6 ] - 2 инд включ отрезал кусок
const res233_2 = arr233.slice(2, 4);
console.log('task 233_2 ', arr233); // [ 1, 2, 3, 4, 5, 6 ]
console.log('task 233_2 ', res233_2); //  [ 3, 4 ] - начальный и конечный индекс не включая последн элем
const res233_3 = arr233.slice(-1);
console.log('task 233_3 ', arr233); // [ 1, 2, 3, 4, 5, 6 ]
console.log('task 233_3 ', res233_3); // [ 6 ] - послдений эл массива
const res233_4 = arr233.slice(1, -2);
console.log('task 233_4 ', arr233); // [ 1, 2, 3, 4, 5, 6 ]
console.log('task 233_4 ', res233_4); // [ 2, 3, 4 ] когда минус отсчет идет с конца

// 234- Что выведет консоль
const arr234 = [1, 2, 3, 4, 5, 6];
const res234 = arr234.splice(2);
console.log('task 234 ', arr234); // [ 1, 2 ] - что осталось в массиве
console.log('task 234 ', res234); // [ 3, 4, 5, 6 ]  - вырезанное
const arr234_2 = [1, 2, 3, 4, 5, 6];
const res234_2 = arr234_2.splice(2, 4); // 2 арг это длинна элементов котор нужно взять
console.log('task 234_2 ', arr234_2); // [ 1, 2 ]
console.log('task 234_2 ', res234_2); // [ 3, 4, 5, 6 ] - 4 элемента со второго эл
const arr234_3 = [1, 2, 3, 4, 5, 6];
const res234_3 = arr234_3.splice(-1); // удаляет с конца
console.log('task 234_3 ', arr234_3); // [ 1, 2, 3, 4, 5 ]
console.log('task 234_3 ', res234_3); // [ 6 ]

// 235- Что выведет консоль
const arr235 = [1, 2, 3, 4, 5, 6];
const res235 = arr235.reverse(); // модифицирует исходный массив
console.log('task 235 ', arr235); // [ 6, 5, 4, 3, 2, 1 ]
console.log('task 235 ', res235); // [ 6, 5, 4, 3, 2, 1 ]

// 236- Что выведет консоль
const arr236 = [1, 2, 3, 4, 5, 6];
const arr236_2 = [11, 22, 33, 44, 55, 66];
const res236 = arr236.concat(arr236_2);
console.log('task 236 ', res236); // [ 1,  2,  3,  4,  5, 6, 11, 22, 33, 44, 55, 66 ]

// 237- Что выведет консоль
// Функция isFinite для проверки параметра на то, что он является конечным числом (то есть не строкой, массивом и т.п. и не плюс или минус бесконечностью).Как работает эта функция: она вернет false, если число является плюс или минус бесконечностью (то есть Infinity) или не числом (то есть NaN), в остальных случаях вернет true. То есть строки, массивы и т.п. будут преобразованы в NaN и соответственно вернут false.Однако есть исключения: пустая строка '' возвращает true, строка с пробелами '    ' также возвращает true, null возвращает true, для значений true и false также возвращается true.
function div237(x) {
  if (isFinite(1000 / x)) {
    return 'num is not inf';
  }
  return 'num is inf';
}
console.log('task 237 ', div237(0)); // num is inf
console.log('task 237 ', div237(1)); // num is not inf

// 238- Что выведет консоль
const arr238 = [1, 2, 3, 4, 5];
function getNum238() {
  return [1, 2, 3, 4, 5];
}
console.log('task 238 ', getNum238()[0]); // 1
console.log('task 238 ', getNum238()[4]); // 5

// 239- Что выведет консоль
// Как получить из массива цифру 4?
const arr239 = [1, 2, 3, 4, 5];
console.log('task 239 ', arr239[3]); // 4
console.log('task 239 ', arr239[arr239.length - 1]); // 5 (тк 5-1 получаем 4 индекс = 5)

// 240- Что выведет консоль
let array240 = [1, 2, 3, 4];
const res240 = array240.push(5);
console.log('task 240 ', array240); // [ 1, 2, 3, 4, 5 ]
console.log('task 240 ', res240); // 5

// 241- Что выведет консоль
let arr241 = ['1', '2', '3'];
console.log('task 241 ', arr241.indexOf(1)); // -1 тк такого нетц
console.log('task 241 ', arr241.indexOf('1')); // 0

// 242- Что выведет консоль
let arr242 = ['1', '2', '3'];
console.log('task 242 ', arr242.includes('2')); // true
console.log('task 242 ', arr242.includes(2)); // false

// 243- Что выведет консоль
let arr243 = ['1', '2', '3', '4'];
console.log('task 243 ', arr243.splice(1, 2)); // [ '2', '3' ] удаляет два эл с первого индекса вкл
console.log('task 243 ', arr243); // [ '1', '4' ] - массив меняется

// 244- Что выведет консоль
let arr244 = ['1', '2', '3', '4'];
console.log('task 244 ', arr244.slice(2, -1)); // [ '3' ]

// 245- Что выведет консоль
let arr245 = ['1', '2', '3', '4'];
let [one245, , three245] = ['1', '2', '3', '4'];
console.log('task 245 ', one245, three245, typeof three245); // 1 3 string

// 246- Что выведет консоль
let arr246 = ['1', '2', '3', '4'];
// let [one246, , ...three246, four] = ['1', '2', '3', '4'];
// console.log(three246); // error только в конце рест оператор

// 247- Что выведет консоль
// Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено. Метод indexOf() является регистрозависимым. Например, следующее выражение вернёт -1:
const mainStr247 = 'hello';
const subStr247 = 'hel';
console.log('task 247 ', mainStr247.indexOf(subStr247)); // 0
console.log('task 247 ', mainStr247.indexOf(subStr247) !== -1); // true  0 !== -1

// 248- Что выведет консоль
var number248 = 10;
var display248 = function () {
  console.log('task 248 ', number248); // undefined
  var number248 = 20;
};
display248();

// 249- Что выведет консоль
const arr249 = [1, 2, 3, 4];
for (let i = 0; i < arr249.length; i++) {
  if (arr249[i] === 2) {
    continue; // переход к след итерации
  }
  console.log('task 249 ', arr249[i]); // 1 3 4
}

// 250- Что выведет консоль
const arr250 = ['!', 'JS', 'люблю', 'Я'];
const res250 = [];
for (let i = arr250.length - 1; i >= 0; i--) {
  res250.push(arr250[i]);
}
console.log('task 250 ', res250.join(' ')); // Я люблю JS !
console.log('task 250_2 ', arr250.reverse().join(' ')); // Я люблю JS !

// 251- Что выведет консоль
// цикл while
const arr251 = [1, 2, 3, 4, 8, 9, 10];
let i251 = 0;
while (arr251[i251] <= 5 && i251 < arr251.length) {
  console.log('task 251 ', arr251[i251]); // 1 2 3 4
  i251++;
}

// 252- Что выведет консоль
for (let i = 1; i < 9; i++) {
  console.log('task 252 ', i); // 1 2 3 4 5 6
  if (i > 5) {
    console.log('br', i); // 6
    break;
  }
}

// 253- Что выведет консоль
for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 3; j++) {
    console.log('task 253 ', i); // 1 1 2 2
  }
}

// 254- Что выведет консоль
// const a254 = 0;
// while (a254 < 3) {
//   // console.log('task 254 ', a254); // бесконечный цикл тк нет условия выхода из него
// }

// 255- Что выведет консоль
const arr255 = [1, 2, 3];
for (const el in arr255) {
  console.log('task 255 ', el); // 0 1 2
}

// 256- Что выведет консоль
const arr256 = [1, 2, 3];
for (const el of arr) {
  console.log('task 256 ', el); // 1 2 3
}

// 257- Что выведет консоль
// Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
console.log('task 257 ', Math.floor(5.99)); // 5
console.log('task 257 ', Math.floor(5)); // 5
console.log('task 257 ', Math.floor(-5)); // -5
console.log('task 257 ', Math.floor(-5.05)); // -6
console.log('task 257 ', Math.floor(0)); // 0
console.log('task 257 ', Math.floor(0.2)); // 0

// 258- Что выведет консоль
function power250(pow) {
  return function (num) {
    return num ** pow;
  };
}
const powerOfTwo = power250(2);
const powerOfThree = power250(3);
console.log('task 258 ', powerOfTwo(5)); // 25
console.log('task 258 ', powerOfThree(5)); // 125
// !!!
console.log('task 258 ', power250(5)(4)); // 1024  --> 4 в 5 степени

// 259- Что выведет консоль
function a259(num, b) {
  return b(num);
}
console.log(a259(1, (n) => n + 5)); // 6

// 260- Что выведет консоль
function tax260(percent) {
  return function (sum) {
    return percent * sum;
  };
}
const taxUser260 = tax260(0.13);
console.log(taxUser260(1000)); // 130

// 261- Что выведет консоль
let cube261 = (x) => (y) => (z) => x * y * z;
console.log('task 261 ', cube261(2)(2)(2)); // 8

// 262- Что выведет консоль
// let sq262 = x => y + x => z + y
// console.log('task 262 ', sq262(2)(2)(2)); // error

// 263- Что выведет консоль
var g263 = 0;
g263 = 1 && g263++;
console.log(typeof (g263 = 1 && g263++)); // number
// console.log(g263 = 1 && g263++); // 0
console.log('task 263 ', g263); // 0

// 264- Что выведет консоль
var a264 = true;

console.log(
  (a264 = function () {
    return a264;
  })()
); // [Function: a264]

// 265- Что выведет консоль
const fun265 = (val) => !--val;
const a265 = 1;
const b265 = 2;
console.log('task 265 ', fun265(a265)); // true ( !0 => true)
console.log('task 265 ', fun265(b265)); // false (!1 => false)

// 266- Что выведет консоль
// в третьей строке мы создаем новый объект и firtObj265 теперь ссылается на другой объект (мы изменили значение переменной firstObj265, теперь там ссылка на другой объект), а secondObj265 хранит ссылку на старый объект
let firstObj265 = { name: 'Hello' };
let secondObj265 = firstObj265;
firstObj265 = { name: 'Bye' };
console.log('task 266 ', secondObj265.name); // Hello

// 267- Что выведет консоль
const person267 = {
  name: 'Serge',
  age: 99,
};
let city267 = person267.city267;
console.log(city267); // undefined
console.log(person267); // { name: 'Serge', age: 99 }
city267 = 'London';
console.log(city267); // London
console.log('task 267 ', person267); // { name: 'Serge', age: 99 }

// 268- Что выведет консоль
const str268 = 'redev';
console.log('task 268 ', str268[0].toUpperCase() + str268.slice(1)); // Redev (R + edev)

// 269- Что выведет консоль
const str269 = '6e6';
console.log('task 269 ', parseInt(str269)); // 6

// 270- Что выведет консоль
// Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
const str270 = 'JavaScript';
console.log('task 270 ', str270.slice(1, 4)); // ava
console.log('task 270 ', str270.substring(4, 1)); // ava

// 271- Что выведет консоль
const arr271 = [1, 2, 3];
Object.prototype.rev = function () {
  console.log('task 271 ', this); // [ 1, 2, 3 ]
  return this.reverse();
};
console.log(arr271.rev()); // [ 3, 2, 1 ]

// 272- Что выведет консоль
// entries() возвращает массив, элементами которого являются массивы, соответствующие перечисляемому свойству пары [key, value], найденной прямо в object
const score272 = [5, 10, 0, 15];
for (const [ind, el] of score272.entries()) {
  console.log(`task 272 - Раунд: ${ind + 1}: ${el}`); // Раунд: 1: 5 итд...
}

// 273- Что выведет консоль
// Внутри функции создаётся локальная переменная x, в которую изначально попадет ссылка на obj, но позже эта переменная переписывается на числовое значение 1
var obj273 = {};
function func273(x) {
  x = 1;
  return x;
}

console.log(func273(obj273)); // 1
console.log('task 273 ', obj273); // {}

// 274- Что выведет консоль
console.log('task 274 ', new Array(1, 2, 3, 4)); // [ 1, 2, 3, 4 ]
console.log('task 274_2 ', new Array(4)); // [ <4 empty items> ]
console.log(
  'task 274_3 ',
  new Array(4).map((el) => el + 1) // [ <4 empty items> ] - map не работает тк нужно заполнить его
); // [ <4 empty items> ]
console.log('task 274_4 ', new Array(4).fill(1)); // [ 1, 1, 1, 1 ]
console.log('task 274_4 ', new Array(4).fill(1, 0, 3)); // [ 1, 1, 1, <1 empty item> ]
console.log(
  'task 274_5 ',
  Array.from({ length: 5 }, () => 5)
); // [ 5, 5, 5, 5, 5 ]
console.log(
  'task 274_6 ',
  Array.from({ length: 5 }, (cur, i) => i + 1)
); // [ 1, 2, 3, 4, 5 ]

// 275- Что выведет консоль
let arr275 = [1, 2];
let agg275 = 0;
arr275.forEach((el, i) => (agg275 += el + i));
console.log('task 275 ', agg275); // 4  ( 1 + 0 и 2 + 1 итого 4)

// 276- Что выведет консоль
let arr276 = [1, 2];
let res276 = arr276.map((e) => e * 2).filter((e) => e > 3);
console.log('task 276 ', res276); // [ 4 ]

// 277- Что выведет консоль
let arr277 = [1, 2];
// let res277 = arr277.reduce((acc, el) => (acc += el)).map((e) => e * 2);
// console.log((res277 = arr277.reduce((acc, el) => (acc += el)))); // 3
// console.log('task 277 ', res277); // 3.map() - error typeof number

// 278- Что выведет консоль
let arr278 = [1, 2, 3];
let res278 = arr278.map((e) => e * 2).find((e) => e < 5);
console.log('task 278 ', res278); // 2

// 279- Что выведет консоль
let arr279 = [1, 2, 3];
let res279 = arr279
  .map((e) => [e * 2])
  .flat()
  .reduce((acc, el) => (acc -= el), 0);
console.log('task 279 ', res279); // -12

// 280- Что выведет консоль
let arr280 = [1, 2, 10, 15];
arr280.sort();
console.log('task 280 ', arr280); // [ 1, 10, 15, 2 ]

// 281- Что выведет консоль
let str281 = 'Hi 😄! How are you?';
console.log('task 281 ', str281[7]); // H

// 282- Что выведет консоль
let str282 = 'How are you?';
console.log('task 282 ', str282.toUpperCase().indexOf('A')); // 4

// 283- Что выведет консоль
let str283 = 'How are you?';
console.log('task 283 ', str283.split(' ')[1]); // are

// 284- Что выведет консоль
let str284 = 'How are you?';
str284 = str284.padStart(1, '%');
console.log('task 284 ', str284); // How are you?

// 285- Что выведет консоль
let str285 = 'How are you?';
str285 = str285.padStart(15, '%');
console.log('task 285 ', str285); //  %%%How are you?

// 286- Что выведет консоль
const card286 = '1234567812346789';
console.log('task 286 ', card286.slice(-4).padStart(16, '*')); // ************6789

// 287- Что выведет консоль
const film287 = 'Звездные войны';
console.log('task 287 ', film287.padStart(30)); //                 Звездные войны
console.log('task 287_2 ', film287.padEnd(30, '*')); //  Звездные войны****************
console.log('task 287_3 ', film287.repeat(7)); //  Звездные войныЗвездные войныЗвездные войныЗвездные войныЗвездные войныЗвездные войныЗвездные войны

// 288- Что выведет консоль
function Cars288(brand) {
  this.brand = brand;
  return 'BMW';
}
const auto288 = new Cars288('Tesla');
console.log('task 288 ', auto288); //  { brand: 'Tesla' }

// 289- Что выведет консоль
const obj289 = {
  1: 1,
  2: 2,
  3: 3,
};
console.log('task 289 ', Object.keys(obj289) === Object.values(obj289)); // false  // Object.value => false

// 290- Что выведет консоль
const myArray290 = ['a', 'b', 'c'];
const myObj290 = { a: 1, b: 2, c: 3 };
const result290 = myArray290.map((item) => myObj290[item]);
console.log('task 290 ', result290); // [ 1, 2, 3 ]

// 291- Что выведет консоль
const nums291 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenOnly = nums291.filter(function (n) {
  const remainder = n % 2;
  return remainder === 0;
});
console.log('task 291 ', evenOnly); // [ 2, 4, 6, 8, 10 ]

// 292- Что выведет консоль
let isPrime292 = true;
const startWatching292 = () => {
  return 'Started Watching!';
};

console.log('task 292 ', isPrime292 && startWatching292()); // Started Watching!  // let isPrime292 = false => false

// 293- Что выведет консоль
let person293 = { name: 'Jack' };
// если свойство "age" равно "undefined", устанавливает значение 35
let age293 = person293.age || 35;
console.log('task 293 ', `Age of ${person293.name} is ${age293}`); // Age of Jack is 35

// 294- Что выведет консоль
let newList294 = [1, 2, 3].push(4);
// console.log('task 294 ', newList294.push(5)); // error 4.push(5)

// 295- Что выведет консоль
const name295 = 'Serge Ivanov';
console.log('task 295 ', name295.replace(/e/g, 'j')); // Sjrgj Ivanov
console.log('task 295_2 ', name295.replace(/e/, 'j')); // Sjrge Ivanov

// 296- Что выведет консоль
const users296 = [
  { name: 'Петя', age: 22 },
  { name: 'Катя', age: 27 },
  { name: 'Вова', age: 12 },
  { name: 'Леха', age: 66 },
];

console.log(
  'task 296 ',
  users296.sort((a, b) => {
    return a.age - b.age;
  })
); // 12 22 27 66

// 297- Что выведет консоль
let greetings297 = (name, message = 'Hello,') => {
  return `${message} ${name}`;
};

console.log('task 297', greetings297('Jack')); // Hello, Jack
console.log('task 297_2', greetings297('Jack', 'Hola!'));

// 298- Что выведет консоль
const user298 = {
  name: 'Serge',
  surname: 'Techno',
  age: 77,
  getFullName: function () {
    console.log(this); // it's our object {}
    return this.name + ' ' + this.surname;
  },
};
console.log('task 298 ', user298.getFullName()); // Serge Techno

// 299- Что выведет консоль
let obj299 = {
  a: {
    b: 1,
  },
};
console.log('task 299 ', obj299.a['b']); // 1

// 300- Что выведет консоль
let arr300 = [{ name: 'Вася' }, { name: 'Петя' }];
console.log(
  'task 300 ',
  arr300.map((e) => e.name).reduce((acc, e) => (acc += e[0]), '') // ВП
);

// 301- Что выведет консоль
let a301 = {
  b: 1,
  add: function (num) {
    this.b += num;
  },
};
a301.add(2);
console.log('task 301 ', a301.b); // 3

// 302- Что выведет консоль
let a302 = {
  b: 1,
  add: function (num) {
    a302.num += this.b;
  },
};
a302.add(2);
console.log('task 302 ', a302.num); // NaN

// 303- Что выведет консоль
let a303 = 'a';
console.log(a303); // a
a303 = { a303 };
console.log(a303); // { a303: 'a' }
console.log('task 303 ', a303.a303); // a

// 304- Что выведет консоль
let obj304 = {
  a: {
    b: {
      d: 1,
    },
  },
};
console.log('task 303 ', obj304.a?.c?.d); // undefined
// console.log('task 303 ', obj304.a?.c.d); // error

// 305- Что выведет консоль
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000); // 10 10 10 10 10 10 10 10 10 10 - сразу
// }

// 306- Что выведет консоль
// В JavaScript оператор запятой используется для оценки каждого из операндов слева направо и возврата значения последнего операнда
let val306 = (12, 32);
console.log('task 306 ', val306); // 32

// 307- Что выведет консоль
let count307 = 1;
let ret307 = (count307++, count307);
console.log('task 307 ', ret307); // 2

// 308- Что выведет консоль
for (var i = 0, j = 5; i <= 5; i++, j--) {
  console.log('task 308_1_i ', i); // 0 1 2 3 4 5
  console.log('task 308_2_j ', j); // 5 4 3 2 1 0
}

// 309- Что выведет консоль
let a309 = { name: 'Антон' };
let b309 = a309;
b309.id = 1;
console.log(a309); // { name: 'Антон', id: 1 }

// 310- Что выведет консоль
const user310 = {
  name: 'Serge',
  id: 1,
  roles: ['admin'],
};
const newUser310 = {
  ...user310,
};
newUser310.name = 'Petr';
newUser310.roles.push('leader');
// тк ...spread
console.log('task 310_1 ', user310); // { name: 'Serge', id: 1, roles: [ 'admin', 'leader' ] }
console.log('task 310_2 ', newUser310); // task 310_2  { name: 'Petr', id: 1, roles: [ 'admin', 'leader' ] }

// 311- Что выведет консоль
// То, что объявили через let, появляется только на этапе исполнения, а к моменту вывода до переменной дело ещё не дошло.
// alert(str311); // ?
let str311 = 'Hello'; // str is not defined

// 312- Что выведет консоль
// let name312 = 'Вася';
// function sayHi() {
//   console.log('task 312 ', name312); // вася
// }
// setTimeout(function () {
//   let name312 = 'Петя';
//   sayHi();
// }, 1000);

// 313- Что выведет консоль
let a313 = new Array(1, 2);
console.log(a313); // [ 1, 2 ]
let b313 = new Array(3);
console.log(b313); // [ <3 empty items> ]
console.log('task 313 ', a313[0] + b313[0]); // NaN

// 314- Что выведет консоль
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log('task 314 ', i); // 0 1 2 3 4 5 6 7 8 9
//   }, 100);
// }

// 315- Что выведет консоль
console.log('task 315 ', 2 && 1 && null && 0 && undefined); // null

// 316- Что выведет консоль
let a316 = (1, 5 - 1) * 2;
console.log(1, 5 - 1);
console.log('task 316 ', a316); // 8  тк ( 1, 5 - 1 => 1, 4 - берет последний элем  и => 4 * 2)

// 317- Что выведет консоль
console.log([] + 1, typeof ([] + 1)); // 1 string
console.log('task 317 ', [] + 1 + 2); // 12

// 318- Что выведет консоль
[] == ''; // -> true
[] == 0; // -> true
[''] == ''; // -> true
[0] == 0; // -> true
[0] == ''; // -> false
[''] == 0; // -> true
[null] == ''; // true
[null] == 0; // true
[undefined] == ''; // true
[undefined] == 0; // true
[[]] == 0; // true
[[]] == ''; // true
Number(); // -> 0
Number(undefined); // -> NaN

// 319- Что выведет консоль
// При таком способе сравнения JavaScript берёт первые символы каждой строки и сравнивает их коды между собой. Получается U+0451 против U+044F, то есть код буквы «ё» больше, чем код буквы «я».
console.log('task 319 ', 'ёжик' > 'яблоко'); // true

// 320- Что выведет консоль
// Наборы — это новый тип объекта, который был представлен в JavaScript с ES6
let text320 = 'Qwertye';
let mySet320 = new Set(text320);
console.log('task 320 ', mySet320); // { 'Q', 'w', 'e', 'r', 't', 'y' }

// 321- Что выведет консоль
arr321_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr321_2 = [1, 3, 5, 7, 9];

let union321 = [...new Set([...arr321_1, ...arr321_2])];

console.log('task 321', union321); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 322- Что выведет консоль
// В данном примере представлены разные операторы присваивания, все они представляют собой короткие записи для других выражений. Logical OR assignment (||=) присваивает значение если правый операнд ложный, это короткая запись для x || (x = y). Logical AND assignment (&&=) присваивает значение если правый операнд правдивый, это короткая запись для x && (x = y). Nullish coalescing assignment (??=) присваивает значение если правый операнд равен null или undefined, это короткая запись для x ?? (x = y).
let a322 = 0;
let b322 = 1;
let c322 = null;

a322 ||= 42;
b322 &&= 22;
c322 ??= 55;
console.log('task 322 ', a322, b322, c322); //  42 22 55

// 323- Что выведет консоль
let fire323 = 1;
let fruit323 = 2;

[fruit323, fire323] = [fire323, fruit323];
console.log(fire323, fruit323); // 2 1

// 324- Что выведет консоль
let obj324 = {
  for: '1',
  let: 2,
  return: 3.2,
};
console.log('task 324 ', obj324.for + obj324.let + obj324.return); // 123.2

// 325- Что выведет консоль
function arrDiff325(a, b) {
  return a.filter((e) => !b.includes(e));
}
console.log('task 325 ', arrDiff325([1, 2, 3, 5, 4, 6, -1, 9], [1, 5, 9])); // [ 2, 3, 4, 6, -1 ]

// 326- Что выведет консоль
Array.prototype.onlyStrings = function () {
  return this.filter((item) => typeof item === 'string');
};

const items326 = ['Hello', 123, true, 'world'];
console.log('task 326 ', items326.onlyStrings()); // [ 'Hello', 'world' ]

// 327- Что выведет консоль
const obj327 = { name: 'Serge', age: 25 };
const result327 = Object.values(obj327);
console.log('task 327 ', result327); // [ 'Serge', 25 ]

// 328- Что выведет консоль
const obj328 = { name: 'Serge', age: 25 };
const result328 = Object.keys(obj328);
console.log('task 328 ', result328); // [ 'name', 'age' ]

// 329- Что выведет консоль
const obj329 = { name: 'Serge', age: 25 };
const result329 = JSON.stringify(obj329, ['age']);
console.log('task 329 ', result329); // {"age":25}

// 330- Что выведет консоль
const arrDiff320 = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};
console.log('task 320 ', arrDiff320([1, 2, 3, 4], [2, 3])); // [ 2, 3 ]

// 331- Что выведет консоль
// Метод unshift() добавляет один или несколько элементов в начало массива и возвращает новую длину массива.
const arr331 = [5, 'Hello', true];
const result331 = arr331.unshift(NaN);

console.log(result331); // 4

// 332- Что выведет консоль
let emojis332 = ['', '️', '', ''];
console.log(Array.isArray(emojis332)); // true

let obj332 = {};
console.log(Array.isArray(obj332)); // false

// 333- Что выведет консоль
function sumNum333(num1, num2) {
  // console.log(this); // Object [global]
  console.log(arguments); // [Arguments] { '0': 1, '1': 4 }
  return num1 + num2;
}
console.log('task 333 ', sumNum333(1, 4)); // 5

// 334- Что выведет консоль
// arguments - это массиво подобный объект, содержащий переданные функцией аргументы
function sum334() {
  let total = 0;
  for (const i of arguments) {
    total += i;
  }
  return total;
}

console.log('task 334 ', sum334(1, 2, 3)); // 6

// 335 Что выведет консоль
// arguments - это массиво подобный объект, содержащий переданные функцией аргументы
// Array. from() позволяет вам создавать массивы из: массивоподобных объектов
function sum335() {
  return Array.from(arguments).reduce((acc, cur) => acc + cur);
}

console.log('task 335 ', sum335(1, 2, 3, 4, 5)); // 15  ( 1нач + 2 + 3 ...)

// 336- Что выведет консоль
// arguments - это массиво подобный объект, содержащий переданные функцией аргументы
function sum336() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log('task 336 ', sum336(1, 2, 3, 4)); // 10

// 337- Что выведет консоль
// написать три метода для получения имени компании - сео - сотрудника
const company337 = {
  name: 'OOO BEST',
  employess: [
    {
      name: 'Serge',
      getName: function () {
        return this.name;
      },
    },
  ],
  ceo: {
    name: 'Peter',
    getName: function () {
      return this.name;
    },
  },
  /// methods
  getName: function () {
    return this.name;
  },
};

console.log('task 337 ', company337.getName()); // OOO BEST
console.log('task 337 ', company337.ceo.getName()); // Peter
console.log(
  'task 337 ',
  company337.employess.map((employee) => employee.getName())
); // [ 'Serge' ]

// 338- Что выведет консоль
function a338() {
  console.log(i338);
}
function b338() {
  let i338 = 0;
  a338();
}
// console.log('task 338 ', b338()); // i338 is not defined

// 339- Что выведет консоль
// console.log('task 339 ', a339(1)); // Cannot access 'a339' before initialization
const a339 = () => b + 1;

// 340- Что выведет консоль
function a340() {
  function b340() {
    // console.log('task 340', this); // Object [global]
  }
  b340();
}
a340();

// 341- Что выведет консоль
let a341 = {
  c341: 1,
  getName: function () {
    console.log('task 341 ', this.c341); // 1
  },
};
a341.getName();

// 342- Что выведет консоль
let a342 = {
  c: 1,
  b: () => {
    console.log('task 342 ', this.c); // undefined
  },
};

// 343- Что выведет консоль
function a343() {
  console.log('task a343 ', arguments[0]); // 1
}
a343(1);

// 344- Что выведет консоль
const b344 = 1;
const a344 = {
  b344,
  // getB: function () {
  //   return this.b344;
  // },
  getAltB() {
    return this.b344;
  },
};

// console.log('task 344 ', a344.getB()); // 1
console.log('task 344 ', a344.getAltB()); // 1

// 345- Что выведет консоль
const sum345 = (x) => (y) => x + y;
console.log('task 345 ', sum345(2)(5)); // 7

// 346- Что выведет консоль
// Object.entries()  метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
const obj346 = {};
console.log('task 346 ', Object.entries(obj346).length === 0); // true

// 347- Что выведет консоль
const array347 = [1, 1, 2, 3, 5, 5, 1];
const uniqueArray347 = [...new Set(array347)];
console.log('task 347 ', uniqueArray347); // [ 1, 2, 3, 5 ]

// 348- Что выведет консоль
let employee348 = {
  firstname: 'Jon',
  lastname: 'Snow',
  datebirth: '1888',
};
let { firstname: fn, lastname: ln, datebirth: dob } = employee348;
console.log('task 348 ', fn, ln, dob); // Jon Snow 1888

// 349- Что выведет консоль
let a349 = {
  b: 1,
};
function c349() {
  console.log(this.b);
}

console.log('task 349 ', c349.call(a349)); // 1

// 350- Что выведет консоль
function a350() {
  let c = 1;
  return function b() {
    return c++;
  };
}
a350()();
console.log('task 350 ', a350()()); // 1

// 351- Что выведет консоль
(() => console.log('task 351 ', 'Yes'))(); // Yes

// 352- Что выведет консоль
(function () {
  console.log('task 352 ', this);
}.apply(0)); // [Number: 0]

// 353- Что выведет консоль
function a353() {
  let c = 1;
  return function b() {
    return c++;
  };
}
const d353 = a353();
d353();
console.log(d353());

// 353- Что выведет консоль
const captLet353 = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log('task 353 ', captLet353('taddy')); // Taddy  ( t.T + addy)

// 354- Что выведет консоль
let arr354_1 = [55, 33, 2, 6, 87];
let arr354_2 = arr354_1.map(myFunc354);

function myFunc354(value, index, array) {
  return value * 1.5;
}

console.log('task 354 ', arr354_2); // [ 82.5, 49.5, 3, 9, 130.5 ]

// 355- Что выведет консоль
function f355(arr) {
  return arr.filter((item) => item !== null).map((item) => item * 2);
}

console.log('task 355 ', f355([1, 2, null, 35, null, 0, 4, undefined])); // [ 2, 4, 70, 0, 8, NaN ]

// 356- Что выведет консоль
// Что выведется в консоль, если ключа 'a' нет в localStorage?
// console.log('task 356 ', localStorage.getItem('a')); // null

// 357- Что выведет консоль
const capital357 = ([a, ...other]) => a.toUpperCase() + other.join('');
let result357 = capital357('hello');
// [a, ...other] = 'hello'  => a = h - other = e l l o
console.log('task 357 ', result357); // Hello

// 358- Что выведет консоль
console.log('task 358 ', (isTrue = !0)); // true
console.log('task 358_2 ', (isFalse = !1)); // false
console.log('task 358_3 ', (alsoFalse = !!0)); // false

// 359- Что выведет консоль
const val359 = 1 + '';
console.log(val359); // "1"
console.log(typeof val359); // "string"

// 360- Что выведет консоль
//  __proto__ — это ссылка на prototype, а prototype — это собственно свойство
const obj360_1 = { a: 1 };
const obj360_2 = { a: 2, __proto__: obj360_1 };
function sum360(a) {
  console.log(a); // 2
  return this.a + a;
}
console.log('task 360 ', sum360.call(obj360_2, 2)); // 4

// 361- Что выведет консоль
const arr361 = ['Tesla', 'Mercedes', 'BMW'];
const result361 = arr361.map((item) => item[0]);
console.log('task 361 ', result361); // [ 'T', 'M', 'B' ]

// 362- Что выведет консоль
const arr362 = ['Tesla', 'Mercedes', 'BMW'];
const result362 = arr362.map((item) => item[0]).reverse();
console.log('task 362 ', result362); // [ 'B', 'M', 'T' ]

// 363- Что выведет консоль
const d363_1 = new Date();
const d363_2 = new Date(d363_1);
console.log('task 363 ', d363_1.getTime() === d363_2.getTime()); // true - возвращаемые значения
console.log('task 363_2 ', d363_1 === d363_2); // false - сравниваем сами объекты

// 364- Что выведет консоль
const sum364 = (a, b, c) => +a + +b + +c;
console.log('task 364 ', sum364(1, '1', true)); // 3
console.log('task 364 ', sum364(0, '', [])); // 0   [] = 0
console.log('task 364 ', sum364.length); // 3

// 365- Что выведет консоль
const country365 = ['canada', 'usa', 'denmark', 'belarus'];
console.log(
  'task 365 ',
  country365.map((country) => country.length) // [ 6, 3, 7, 7 ]
);

// 366- Что выведет консоль
const arr366 = [3, 14, 15.8, true, '', 0, false];
const arr366_2 = arr366.filter(Boolean);
console.log('task 366 ', arr366_2); // [ 3, 14, 15.8, true ]

// 367- Что выведет консоль
// более быстрый способ обрезать число с плавающей точкой до целого числа, используя | оператор побитового ИЛИ.
console.log('task 367 ', 23.9 | 0); // 23
console.log('task 367_2', -23.9 | 0); // -23

// 368- Что выведет консоль
console.log('task 368_1 ', true || 2 > 5 || 4 === '4'); // true
console.log('task 368_2 ', 2 == '2' && 2 === '2'); // false
console.log(
  'task 368_3 ',
  108 >= 110 || (1000 < 2000 && 3 !== 2) || 18 === '18' // true
);

// 369- Что выведет консоль
const str369_1 = 'Hello';
const str369_2 = 'World';
console.log('task 369 ', str369_1.concat(' ', str369_2)); // Hello World
console.log('task 369 ', str369_2.concat(', ', str369_1)); // World, Hello

// 370- Что выведет консоль
// те мы находим 'is' - убираем из строки и формируем массив из двух строк, а если передаем пустую строку то это массив из отдельных символов
const str370 = 'Today is the best day of my life';
console.log('task 370 ', str370.split('is')); //  [ 'Today ', ' the best day of my life' ]

// 371- Что выведет консоль
const a371 = 'js_tests';
const b371 = new String(a371);
console.log('task 371 ', a371 === b371); // false

// 372- Что выведет консоль
const arr372 = [1, 2, 3, 4, 5];
console.log('task 372_1 ', arr372[arr372.length - 1]); // 5
console.log('task 372_2 ', arr372.at(-1)); // 5

// 373- Что выведет консоль
for (let i = 0; i < 7; i += 2) {
  console.log('task 273 ', 'Yo'); // 4 раза ( 0 2 4 6 - и потом отбой false)
}

// 374- Что выведет консоль
let i374 = 0;
do {
  i374 += 1;
  console.log('task 374 ', i374);
} while (i374 < 3); // 1 2 3

// 375- Что выведет консоль
// создание массива
console.log('task 375_1 ', new Array(1, 2, 3, 4)); // [ 1, 2, 3, 4 ]
console.log('task 375_2 ', Array.of(1, 2, 4, 5, 6, 7)); // [ 1, 2, 4, 5, 6, 7 ]
const array375_1 = [1, 2, 3];
const array375_2 = array375_1.slice();
console.log('task 375 ', array375_2); // [ 1, 2, 3 ]
const arr375_3 = Array.from('дока');
console.log('task 375_3 ', arr375_3); // [ 'д', 'о', 'к', 'а' ]

// 376- Что выведет консоль
// Как можно сделать глубокую копию этого объекта?
const user376 = {
  name: 'Sonya',
  age: 28,
  friends: ['Vasilisa', 'Snow', 'Zlata'],
};

let userDeepCopy376 = { ...user376, friends: [...user376.friends] };
console.log('task 376 ', userDeepCopy376); // { name: 'Sonya', age: 28, friends: [ 'Vasilisa', 'Snow', 'Zlata' ] }

// 377- Что выведет консоль
console.log('task 377 ', typeof NaN); // number

// 378- Что выведет консоль
const obj378 = { id: 'e1fd960b', values: ['a', 'b'] };
// const clone378 = structuredClone(obj378);
// console.log('task 378 ', clone378); // { id: 'e1fd960b', values: ['a', 'b'] }; - пока не работает в Node ?

// 379- Что выведет консоль
function showMessage379(form, text) {
  return form + ': ' + text;
}
console.log('task 379 ', showMessage379('Serge', 'Hi')); // Serge: Hi

// 380- Что выведет консоль
console.log('task 380_1 ', Math.max(1, 3, 2)); // 3
console.log('task 380_2 ', Math.max(-1, -3, -2)); // -1
const arr380 = [1, 2, 3];
console.log('task 380_3 ', Math.max(...arr380)); // 3

// 381- Что выведет консоль
console.log('task 381_1 ', Math.min(1, 3, 2)); // 1
console.log('task 381_2 ', Math.min(-1, -3, -2)); // -3
const arr381 = [1, 2, 3];
console.log('task 381_3 ', Math.min(...arr381)); // 1

// 382- Что выведет консоль
console.log('task 382_1', [] + false, typeof ([] + false), typeof []); // false string object
console.log('task 382_2', 'false' - null, typeof (false - null)); // NaN number
console.log('task 382_3', [] + false - null + true); // NaN

// 383- Что выведет консоль
let a383 = 2;
let x383 = 1 + (a383 *= 2); // a383 = a383 * 2
console.log('task 383 ', a383, x383); // 4 5

// 384- Что выведет консоль
let arr384_1 = [1, 2];
let arr384_2 = [3, 4];
let arr384_3 = [5, 6];
let nums384 = arr384_1.concat(arr384_2, arr384_3);
console.log('task 384 ', nums384); // [ 1, 2, 3, 4, 5, 6 ]

// 385- Что выведет консоль
console.log('task 385 ', null || (2 && 3) || 4); // 3  // null  || 2 (first true = 2) 2 && 3 (last true 3) 3  || 4 (first true 3)

// 386- Что выведет консоль
let map386 = new Map();
// Maps позволяют нам устанавливать, получать и искать значения (и многое другое).
map386.set('name', 'david');
console.log('task 386_1 ', map386.get('name')); // david
console.log('task 386_2 ', map386.has('name')); // true

// 387- Что выведет консоль
// Переменная как таковая существует, вот только на момент запуска функции она равна undefined.
say387('Вася');
var phrase387 = 'Hello';
function say387(name) {
  console.log(name + ', ' + phrase387); // Вася, undefined
}

// 388- Что выведет консоль
let bool388 = new Boolean(false);
console.log('task 388 ', typeof bool388); // object
// выполнется несмотря на false тк {} всегда true
if (bool388) {
  console.log(
    'task 388 ',
    'В объекте фалс но он выведется тк объект всегд тру'
  );
}

// 389- Что выведет консоль
// как проверить что строка начинается с другой строки?
console.log('task 389_1 ', 'Good Morning'.startsWith('Good')); // true
console.log('task 389_2 ', 'Good Morning'.startsWith('morning')); // false

// 390- Что выведет консоль
// Оператор delete удаляет свойство из объекта.
// Если результат вычисления выражения не является свойством (объекта), delete ничего не делает.
console.log(
  'task 390 ',
  (function (x) {
    delete x;
    return x;
  })(1)
); // 1

// 391- Что выведет консоль
// with создает новую область видимости «scope» и представляет свойства объекта «object» как локальные переменные выражения «statement»
var a391 = 1;
var obj391 = {
  b: 2,
};
with (obj391) {
  var b;
  console.log('task 391 ', a391 + b); // 3
}

// 392- Что выведет консоль
let name392 = 'Ilya';
console.log('task 392_1', `hello ${1}`); // hello 1
console.log('task 392_2', `hello ${'name392'}`); // hello name392
console.log('task 392_3', `hello ${name392}`); // hello Ilya

// 393- Что выведет консоль
// SET
const setExample = new Set();
setExample.add(123);
setExample.add(456);
setExample.add(111);
setExample.add(123);

console.log('task 393_1 ', setExample.size); // 3
console.log('task 393_2 ', setExample.has(111)); // true
console.log('task 393_3 ', setExample.delete(111)); // true
console.log('task 393_4 ', setExample.size); // 2
console.log('task 393_5 ', setExample.clear()); // undefined
console.log('task 393_6 ', setExample.size); // 0

// 394- Что выведет консоль
// оператор break обрывает цикл и продолжает выполнять код после цикла
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log('task 394 ', i); // 0 1 2
}

// 395- Что выведет консоль
// Как представить число 568 в двоичной системе счисления?
console.log('task 395 ', (568).toString(2)); // 1000111000

// 396- Что выведет консоль
console.log('task 396 ', 'foo' + +'bar'); // 'fooNaN'
console.log('task 396_1 ', [] + []); // '' - пустая строка
console.log('task 396_2 ', [] + [1]); // '1'
console.log('task 396_3 ', 1 - [1]); // 0 number
console.log('task 396_4 ', [1] + [1], typeof ([1] + [1])); // '11' string
console.log(
  'task 396_5 ',
  {} + {},
  {} - {},
  typeof ({} + {}),
  typeof ({} - {})
); // [object Object][object Object] NaN string number

// 397- Что выведет консоль
console.log('task 397_1 ', 123 + '', typeof (123 + '')); // 123 string
console.log('task 397_2 ', String(123), typeof String(123)); // 123 string
console.log('task 397_3 ', String(undefined), typeof String(undefined)); // undefined string
console.log('task 397_4 ', String(false), typeof String(false)); // false string
console.log(
  'task 397_5 ',
  String(Symbol('my symbol')),
  typeof String(Symbol('my symbol'))
); // Symbol(my symbol) string
// console.log('task 397_6 ', '' + Symbol('my symbol')); // TypeError is thrown
console.log('task 397_6 ', (2018).toString(), typeof (2018).toString()); // 2018 string
console.log('task 397_7 ', Boolean(2), typeof Boolean(2)); // true boolean
console.log('task 397_8 ', !!2, typeof !!2); // true boolean
console.log(
  'task 397_9 ',
  Boolean(''),
  Boolean(0),
  Boolean(-0),
  typeof (Boolean(''), Boolean(0), Boolean(-0))
); // false false false boolean
console.log(
  'task 397_10 ',
  Boolean(NaN),
  Boolean(null),
  Boolean(undefined),
  Boolean(false)
); // false false false false
console.log(
  'task 397_11 ',
  Boolean({}),
  Boolean([]),
  Boolean(Symbol()),
  !!Symbol(),
  Boolean(function () {})
); // true true true true true
console.log('task 397_12 ', '12' > 2, typeof ('12' > 2)); // true boolean
console.log('task 397_13 ', true < 2, typeof (true < 2)); // true boolean
console.log('task 397_14 ', false == 0, typeof (false == 0)); // true boolean
console.log('task 397_15 ', undefined == false, typeof (undefined == false)); // false boolean
console.log('task 397_16 ', null == false, typeof (null == false)); // false boolean
console.log('task 397_17 ', 2 || 'hello', typeof (2 || 'hello')); // 2 number
console.log('task 397_18 ', 123 != '456', typeof (123 != '456')); // true boolean
console.log('task 397_19 ', Number('123'), +'123'); // 123 123 number number
console.log('task 397_20 ', 4 > '5', typeof (4 > '5')); // false boolean
console.log('task 397_21 ', 5 / null, typeof (5 / null)); // Infinity number
console.log('task 397_22 ', true | 0, typeof (true | 0)); // 1 number - бинарные операторы (| & ^ ~)
console.log('task 397_23 ', null == 0, typeof (null == 0)); // false boolean - null is not converted to 0
console.log(
  'task 397_24 ',
  Number(undefined),
  Number(' 12 '),
  Number('-12.34')
); // NaN 12 -12.34 - all number
console.log('task 397_25 ', Number('\n'), Number(' 12s ')); //  0 NaN - all number
console.log('task 397_26 ', 30 * '5', 30 - '5', true + 10); //  150 number 25 number 11 number
console.log('task 397_26 ', Number([1, 2, 3])); //  NaN number

// 398- Что выведет консоль
console.log('task 398_1 ', 5 && 4 && 3); // 3
console.log('task 398_2 ', 0 && 4 && 3); // 0
console.log('task 398_3 ', 5 && 0 && 3); // 0

// 399- Что выведет консоль
const arr399 = [1, 2, 3];
Object.prototype.rev = function () {
  return this.reverse();
};

console.log('task 399 ', arr399.rev()); // [ 3, 2, 1 ]

// 400- Что выведет консоль
const obj400 = {
  name: 'Serge',
  adress: {
    city: 'Minsk',
  },
};

const obj400_2 = { ...obj400 };
obj400_2.name = 'Anna';
obj400_2.adress.city = 'Brest';

console.log('task 400_1 ', obj400.name); // Serge
console.log('task 400_2 ', obj400.adress.city); // Brest
console.log('task 400_3', obj400_2.name); // Anna
console.log('task 400_4', obj400_2.adress.city); // Brest

// 401- Что выведет консоль
// основы числа
// Метод Math.round() возвращает число, округлённое к ближайшему целому.
// Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
// Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
// Метод toFixed() форматирует число, используя запись с фиксированной запятой.
console.log('task 401_1 ', Math.round(5.5)); // 6
console.log('task 401_2 ', Math.round(5.1)); // 5
console.log('task 401_3 ', Math.floor(20.1)); // 20
console.log('task 401_4 ', Math.floor(20.6)); // 20
console.log('task 401_5 ', Math.ceil(11.5)); // 12
console.log('task 401_6 ', Math.ceil(11.2)); // 12
console.log(
  'task 401_7 ',
  (100.1235678).toFixed(2),
  typeof (100.1235678).toFixed(2)
); // 100.12 string

// 402- Что выведет консоль
console.log('task 402 ', +(0.6 + 0.7).toFixed(4)); // 1.3 number
console.log('task 402_2 ', (0.6 + 0.7).toFixed(4)); // 1.3000 string

// 403- Что выведет консоль
// Функция isNaN проверяет, является ли переданный параметр числом или нет. Вернет true, если параметр не является числом и false, если является.
// Функция isFinite для проверки параметра на то, что он является конечным числом (то есть не строкой, массивом и т.п. и не плюс или минус бесконечностью).
console.log('task 403 ', 1 / 0); // Infinity
console.log('task 403_1 ', 0 / 0, 2 * '10px', 1 - 'string'); // NaN NaN NaN
console.log('task 403_2', isNaN('string')); // true
console.log('task 403_3', isFinite(123)); // true
console.log('task 403_4', isFinite('123')); // true
console.log('task 403_5', isFinite('abc')); // false

// 404- Что выведет консоль
// Функция parseInt() принимает строку в качестве аргумента и возвращает целое число
// Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)
console.log('task 404 ', parseInt('200.5px')); // 200
console.log('task 404_2 ', parseFloat('200.5%')); // 200.5
console.log('task 404_3 ', parseFloat('abc200.5%')); // NaN
