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

console.log('task31 ', organize31(user31)); // { id: 300, pass: 'Pass', name: 'Serge' }

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
const arr106 = [10, 12, 15, 21];
for (let i = 0; i < arr106.length; i++) {
  setTimeout(() => {
    console.log('task 106 ', i); // 0 1 2 3
  }, 0);
}

// 107- Что выведет консоль
const sayHello107 = () => {
  console.log('Hey');
};
setTimeout(sayHello107, 1000); // hey 1 sec !!! setTimeout(sayHello107(), 1000) - TYPEERROR
