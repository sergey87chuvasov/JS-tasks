' use strict';
console.log(10 === 10.0); // true
// проблема хранения в бинарном формате
console.log(0.1 + 0.2 === 0.3); // false
// Формат и не точность работы js с числами
console.log(0.1 + 0.2); // 0.30000000000000004
// но
console.log(0.2 + 0.2); // 0.4

// преобразование строки в число
console.log(Number('10')); // 10
console.log(Number('10s')); // NaN
console.log(+'33'); // 33
console.log(Number.parseInt('10')); // 10
// или со вторым опциональн параметром - в какой системе
console.log(Number.parseInt('11', 2)); // 3
console.log(Number.parseInt('11', 3)); // 4
console.log(Number.parseInt('11', 10)); // 11
// но
console.log(Number.parseInt('11 sec')); // 11
console.log(Number.parseInt('sec 11', 10)); // NaN

// parseFloat
console.log(Number.parseFloat('11.5', 10)); // 11.5
console.log(Number.parseFloat('11.5 sec')); // 11.5
console.log(Number.parseFloat('sec 11.5', 10)); // NaN

// !!! лучше Number.parseFloat() чем просто parseFloat()

// isNaN - Функция isNaN() определяет является ли литерал или переменная нечисловым значением (NaN) или нет
console.log(Number.isNaN(Number('test 10'))); //true   ЭТО ЯВЛЯЕТСЯ ДЕЙСТВИТЕЛЬНО NaN те не числом? - Да
// но
console.log(Number.isNaN(Number(10 / 0))); // false (infinite) - но тяжело работать с infinite
// поэтому Вы можете использовать эту функцию там, где требуется определить, является ли аргумент конечным числом
console.log(Number.isFinite(10 / 0)); // false
console.log(Number.isFinite(Number('test 10'))); // false тк NaN
console.log(Number.isFinite(10)); // true

// isInteger Метод Number.isInteger() определяет, является ли переданное значение целым числом.
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.7)); // false

// Math. - Объект Math является встроенным объектом, хранящим в своих свойствах и методах различные математические константы и функции

// кв корень
console.log(Math.sqrt(36)); // 6
console.log(36 ** (1 / 2)); // 6
// кубич корень
console.log(Math.cbrt(27)); // 3
// степень
console.log(16 ** 1 / 4); // 4

// math.sign() -  возвращает знак числа, указывающий на то, является ли число отрицательным, положительным или нулём.
console.log(Math.sign(-100)); // -1
console.log(Math.sign(100)); // 1

// math.abs() - возвращает абсолютное значение числа - типа по модулю
console.log(Math.abs(-100)); // 100
console.log(Math.abs(100)); // 100

// получение max или min числа
console.log(Math.max(1, -2, -7, 4, 2, 333, 33)); // 333
console.log(Math.max(1, -2, -7, '4', 2, '333', 33)); // 333
console.log(Math.max(1, -2, -7, '4', true, '333', 33)); // 333
// но если он не сможет что-нибудь сконвертировать
console.log(Math.max(1, -2, -7, '4', 2, 'xxx333', 33)); // NaN
// min
console.log(Math.min(1, -2, -7, '4', true, '333', 33)); // -7

// на практике
const arr = [1, -3, 4, 6, -10, 331];
console.log(Math.max(arr)); // NaN
// выручает ...spread
console.log(Math.max(...arr)); // 331

// random 0 -1
console.log(Math.random());

// ОКРУГЛЕНИЕ
// random() - до ближайшего целого числа
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.6)); // 2
console.log(Math.round(1.5)); // 2

// ceil() - до верхнего значения - до потолка
console.log(Math.ceil(1.4)); // 2
console.log(Math.ceil(1.0)); // 1
console.log(Math.ceil(0.1)); // 1

// floor() - до ближайшего нижнего целого - до пола
console.log(Math.floor(1.4)); // 1
console.log(Math.floor(1.8)); // 1
console.log(Math.floor(0.4)); // 0

// trunc() - Обрезание до integer до целого числа
console.log(Math.trunc(1.433)); // 1
console.log(Math.trunc(1.84)); // 1
console.log(Math.trunc(0.4232)); // 0

// до определенного знака .toFixed(указываем до какого знака) - но ПОЛУЧАЕМ СТРОКУ!!!
console.log((1.433).toFixed(1)); // 1.4
console.log((1.843434534324).toFixed(5)); // 1.84343
console.log((0.4232).toFixed(3)); // 0.423

// конверт в число
console.log(Number((1.433).toFixed(1))); // 1.4
console.log(+(0.4232).toFixed(3)); // 0.423 - - под капотом это число преобр в объект - берем методы - конверт - и преобр в число

// упражнение функция случайного числа от 1 - 20 случайным образом
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(1, 20));

// оператор остатка от деления
console.log(15 / 2); // 7.5
console.log(15 % 2); // 1
console.log(14 % 2); // 0

// четность числа
const isEven = (n) => n % 2 === 0;
console.log(isEven(2)); // true
console.log(isEven(3)); // false

// не четность числа
const isOdd = (n) => n % 2 !== 0;
console.log(isOdd(2)); // false
console.log(isOdd(3)); // true

// разделитель чисел
const bigNum1 = 350_500_000; // такая запись лучше для восприятия
const bigNum2 = 350500000;
// ещё вариант
const bigNum3 = 2_0.1_0;

// но следует помнить
console.log(Number('350_500_000')); // NaN
console.log(Number('350500000')); // 350500000

// работа с BigInt
// макс доступное число для чисел
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// или
console.log(2 ** 53 - 1); // 9007199254740991

// мин доступное число
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// BIGiNT
console.log(123243453243252523532412256235n);
// или
console.log(BigInt(123243453243252523532412256235)); // 123243453243252519895801266176n
console.log(10n + 10n); // 20n
console.log(10n * 10n); // 100n
console.log(10n * BigInt(10)); // 100n
console.log(10n === 10); // false
console.log(typeof 10n); // bigint

// интернализация чисел
const options1 = {
  style: 'currency',
  currency: 'RUB',
};

const options2 = {
  style: 'currency',
  currency: 'USD',
};

const options3 = {
  style: 'decimal',
};

const options4 = {
  style: 'percent',
};

const options5 = {
  style: 'unit',
  unit: 'celsius',
};

console.log(new Intl.NumberFormat('ru-RU', options1).format(23000)); // 23 000,00 ₽
console.log(new Intl.NumberFormat('en-US', options2).format(23000)); // $23,000.00
console.log(new Intl.NumberFormat('ru-RU', options3).format(100)); // 100
console.log(new Intl.NumberFormat('ru-RU', options4).format(0.1)); // 10 %
console.log(new Intl.NumberFormat('ru-RU', options5).format(25)); // 25 °C

// задача на конвертор валют
function convert(sum, initCurr, convertCurr) {
  const allCurrencies = [
    { name: 'USD', mult: 1 },
    { name: 'RUB', mult: 1 / 60 },
    { name: 'EUR', mult: 1.1 },
  ];

  const initial = allCurrencies.find((c) => c.name === initCurr);
  if (!initial) {
    return null;
  }

  const convert = allCurrencies.find((c) => c.name === convertCurr);
  if (!convert) {
    return null;
  }

  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: convert.name,
  }).format((sum * initial.mult) / convert.mult);
}

console.log(convert(10000, 'RUB', 'USD')); // 166,67 $
console.log(convert(10000, 'RUB', 'EUR')); // 151,52 €
console.log(convert(100, 'USD', 'RUB')); // 6 000,00 ₽
console.log(convert(100, 'USD', 'EUR')); // 90,91 €
console.log(convert(100, 'EUR', 'RUB')); // 6 600,00 ₽
console.log(convert(100, 'TTTT', 'RUB')); // null
console.log(convert(100, 'EUR', 'TTTT')); // null
