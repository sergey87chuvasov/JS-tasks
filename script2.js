'use strict';

// 1 - Что выведет консоль
// Set (множество) — коллекция для хранения уникальных значений любого типа. Одно и то же значение нельзя добавить в Set больше одного раза. это неиндексированная коллекция, положить элемент в коллекцию можно, но достать нельзя. По элементам коллекции можно итерироватьс

// !!! массивы упорядочены Set не упорядочен

/*
Основные методы для работы с коллекцией:

add() — добавить элемент.
delete() — удалить элемент.
has() — проверить, есть ли элемент в коллекции.
clear() — очистить коллекцию.
forEach() — выполнить функцию для каждого элемента в коллекции, аналогично одноимённому методу массива.
size -  для получения количества элементов в коллекции.
 */
const arr1 = [
  'USA',
  'London',
  'Canada',
  222,
  true,
  'London',
  'Canada',
  222,
  222,
  'USA',
];

const setUnic = new Set(arr1);
console.log('task 1 ', setUnic); // Set(5) { 'USA', 'London', 'Canada', 222, true }
console.log('task 1 ', setUnic.size); // 5
console.log('task 1 ', setUnic.has(333)); // false
console.log('task 1 ', setUnic.has('Canada')); // true
setUnic.add('Toronto');
console.log('task 1 ', setUnic); // Set(6) { 'USA', 'London', 'Canada', 222, true, 'Toronto' }
setUnic.delete(222);
console.log('task 1 ', setUnic); // Set(5) { 'USA', 'London', 'Canada', true, 'Toronto' }

// перебор
for (const item of setUnic) {
  console.log(item); // USA London Canada true Toronto
}

// обратно вернуться в массив с уникальными данными - ...spread
console.log('task 1-1 ', [...setUnic]); // [ 'USA', 'London', 'Canada', true, 'Toronto' ]

// сами по себе объекты не явл простым типом - их уникализировать нельзя
const setObj = new Set([{ a: 1 }, { b: 2 }, { b: 2 }]);
console.log('task 1-3 ', setObj); // Set(3) { { a: 1 }, { b: 2 }, { b: 2 } }
// значение в нутри должно быть итеррабельно
console.log('task 1-4 ', new Set('abcdfgtaaaa')); // Set(7) { 'a', 'b', 'c', 'd', 'f', 'g', 't' }

// не иттерабельн значение
// console.log('task 1-4 ', new Set(false)); // TypeError: boolean false is not iterable
// console.log('task 1-5 ', new Set({ a: 1 })); // TypeError: object is not iterable

// 2 - Что выведет консоль
// Map — упорядоченная коллекция для хранения данных любого типа в виде пар [ключ, значение], то есть каждое значение сохраняется по уникальному ключу, который потом используется для доступа к этому значению. Причём в качестве ключей тоже принимаются значения любого типа.

/*
Основные методы для работы с коллекцией Map:

set(ключ, значение) — устанавливает значение;
get(ключ) — возвращает значение;
has(ключ) — проверяет наличие переданного ключа;
values() — возвращает итератор всех значений коллекции;
keys() — возвращает итератор всех ключей коллекции;
entries() — возвращает итератор пар [ключ, значение];
delete(ключ) — удаляет конкретное значение;
clear() — полностью очищает коллекцию;
forEach(колбэк) — перебирает ключи и значения коллекции.
size - для получения количества значений в коллекции.
 */

const weatherMap = new Map();
console.log(weatherMap); // Map(0) {}
weatherMap.set('London', '10');
weatherMap.set('Paris', '15');
// chaining
weatherMap.set('Mexico', '22').set('Minsk', '14');
console.log('task 2 ', weatherMap); // task 2  Map(4) { 'London' => '10', 'Paris' => '15', 'Mexico' => '22', 'Minsk' => '14'}

// получить по ключу значение
console.log('task 2-1', weatherMap.get('Paris')); // 15
console.log('task 2-1', weatherMap.get('ParisSSSS')); // undefined
// проверка
console.log('task 2-2', weatherMap.has('Paris')); // true
console.log('task 2-2', weatherMap.has('ParisSSSS')); // false
// удаление
weatherMap.delete('Mexico');
console.log(weatherMap); // Map(3) { 'London' => '10', 'Paris' => '15', 'Minsk' => '14' }
// очистка
weatherMap.clear();
console.log(weatherMap); // Map(0) {}

// ключи могут быть и не строками
weatherMap.set(1, 5).set(true, 'yes').set(false, 'false');
console.log(weatherMap); // Map(3) { 1 => 5, true => 'yes', false => 'false' }

// одинаковый ключ перезаписывает последнее значение
weatherMap.set(1, 55555);
console.log('task 3-2 ', weatherMap); // Map(3) { 1 => 55555, true => 'yes', false => 'false' }
// добавим целый массив
const arr2 = [1, 2, 3, 4, 5];
weatherMap.set(arr2, 'arr');
console.log('task 3-3 ', weatherMap); // Map(4) { 1 => 55555, true => 'yes', false => 'false',[ 1, 2, 3, 4, 5 ] => 'arr'}
// добавим объект
weatherMap.set({ a: 1 }, 'obj');
console.log('task 3-4 ', weatherMap.size); // 5

// проблема ссылочных ключей [], {}
console.log('task 3-4 ', weatherMap.get([1, 2, 3, 4, 5])); // undefined
console.log('task 3-4 ', weatherMap.get({ a: 1 })); // undefined

// решение  - сначала мы создадим этот ключ отдельно - а потом его получим
// const arr2 = [1, 2, 3, 4, 5];
console.log('task 3-4 ', weatherMap.get(arr2)); // arr

// быстрое создание Map
const weatherMap2 = new Map([
  ['Brest', '22'],
  ['Grodno', '34'],
]);
console.log('task 3-5 ', weatherMap2); // Map(2) { 'Brest' => '22', 'Grodno' => '34' }

// из объекта в Map
const weatherObject2 = {
  london: 10,
  belarus: 14,
  greece: 33,
};

console.log('task 3-6 ', Object.entries(weatherObject2)); // [ [ 'london', 10 ], [ 'belarus', 14 ], [ 'greece', 33 ] ]
// итого
const wheatherMap2 = new Map(Object.entries(weatherObject2));
console.log('task 3-7 ', wheatherMap2); // Map(3) { 'london' => 10, 'belarus' => 14, 'greece' => 33 }

// Итерация Map
const weatherMap3 = new Map([
  ['Brest', '22'],
  ['Grodno', '33'],
  ['Gomel', '14'],
  ['Vitebsk', '5'],
]);

// добавим деструктур
for (const [key, value] of weatherMap3) {
  console.log(key);
  console.log(value);
}

// конвертация из Map в массив - spread
console.log([...weatherMap3]); // [ [ 'Brest', '22' ], [ 'Grodno', '33' ], [ 'Gomel', '14' ], [ 'Vitebsk', '5' ] ]

// 2
console.log(weatherMap3.keys()); // { 'Brest', 'Grodno', 'Gomel', 'Vitebsk' }
console.log(weatherMap3.values()); // { '22', '33', '14', '5' }
// перевод в массив spread синтак
console.log([...weatherMap3.keys()]); // [ 'Brest', 'Grodno', 'Gomel', 'Vitebsk' ]
console.log([...weatherMap3.values()]); // [ '22', '33', '14', '5' ]

// упражнение swap ключей и значений (поменять местами)
let weatherMap4 = new Map([
  ['Nesvizh', '24'],
  ['Kopyl', '31'],
  ['Lida', '19'],
  ['Minsk', '2'],
]);

//1 преобр в массив массивов
weatherMap4 = new Map([...weatherMap4].map((el) => el.reverse()));
console.log(weatherMap4);
/*
Map(4) {
  '24' => 'Nesvizh',
  '31' => 'Kopyl',
  '19' => 'Lida',
  '2' => 'Minsk'
}
 */

// WeakMap - не очень популярны в основном для работы с КЕШ
let a5 = { a: 1 };
let b5 = { b: 1 };
const map5 = new WeakMap();

// 1ое отличие методов меньше и ключи только объекты или []
map5.set(a5, 'testA');
map5.set(b5, 'testB');
console.log(map5); // WeakMap {{…} => 'test'}
console.log(map5.get(a5)); // test
console.log(map5.has(a5)); // true
// console.log(map5.delete(a5)); // true

// !!! WeakMap - хранит наш ключ - значение ровно до того момента когда объект существует, как только мы теряем ссылку на наш объект WeakMap - очищается и удаляет ссылку на этот объект - ТЕ ВОЗМОЖНОСТЬ БЫСТРО ХРАНИТЬ ЗНАЧЕНИЯ И ИХ ПОТОМ САМООЧИЩАТЬ

console.log(map5); // WeakMap {{…} => 'testB', {…} => 'testA'}

a5 = null;
console.log(map5); // WeakMap {{…} => 'testB'}

// trainy
let a6 = { a: 1 };
let cache = new WeakMap();
function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 1; /* сложный расчет */
    cache.set(obj, res);
  }

  return cache.get(obj);
}

const res1 = getValue(a6);
console.log(res1); // 1
const res2 = getValue(a6);
console.log(res2); // 1

// WeakSet() - хранят исключительно объекты
let a7 = { a: 1 };
let b7 = { b: 2 };
const set7 = new WeakSet([a7, b7]);
console.log(set7); // WeakSet {{…}, {…}}
a7 = null;
setTimeout(() => {
  console.log(set7);
}, 1000);
