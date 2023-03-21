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
