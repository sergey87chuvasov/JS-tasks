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