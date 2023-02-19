// регулярные выражения мощный способ поиска и замены для строк (способ поиска совпадений шаблона с текстом)

// синтаксис
// 1. let regexp = new RegExp('pattern', flags);
// 2. let regexp = /pattern/flags

// let tag = prompt('Введите html тег', 'h2');
// let regexp = new RegExp(`<${tag}>`);
// console.log(regexp); // /<h2>/

// flags
/* 
i; // мы хотим выполнить поиск который не зависит от регистра
g; // ищем все совпадения а не только первое
m; // позволяет включить многострочный режим
s; // включает режим dot при котором точка может соответств символу перевода строки /n
u; // включает полную поддержку юникода
y; // режим поиска на конкретной позиции в тексте
*/

// спецсимволы
// . - любой одиночный символ найти шаблон соответств букве и любому другому символу b. или b.. или b...
// [] - любой из них те [Bb] большое либо маленькое. Диапазон [a-d], [0-9], дробь [0-9].[0-9], [sw].., не содержат [^sw]..
// $ - конец
// \ - обратный слеш это экранирование \.$ - найти точку и конец строки
// ^ начало строки - новая строка ^T- буквы начин с большой букв T
// \n - перенос строки
// \d - любая единичная цифра  \d\d - 2; \d\d\d - три любых цифры подряд [0-9][0-9][0-9]

// ^[^b] - найти строки которые начинаются не с b

// examples
let str = 'Строка, ещё одна строка';
console.log(str.match(/Строка/gi)); // данный метод позволяет найти что-то в строке, но может и искать регулярное выражение = ['Строка', 'строка']
console.log(str.match(/Строка/g)); // ['Строка'] - только первое вхождение
console.log(str.match(/Строка/)); // ['Строка', index: 0, input: 'Строка, ещё одна строка', groups: undefined, lenght: 1]
console.log(str.match(/Стка/)); // null - те не существует
// замена
console.log(str.replace(/строка/gi, 'Новая строка')); // Новая строка, ещё одна Новая строка
console.log(str.replace(/строка/gi, '$& 1')); // к нашему слову которое ищем добавляем через пробел 1
console.log(str.replace(/строка/gi, '$& ку-ку ')); // Строка ку-ку , ещё одна строка ку-ку
console.log(/строка/gi.test(str)); // true
console.log(/стр2ока/gi.test(str)); // false

let str2 = document.querySelector('a').textContent;
let regexp2 = /\d/g; // \d - позволяет искать цифры 0-9, символный класс
let number2 = str2.match(regexp2).join('');
console.log(number2); // ['7', '9', '9', '5', '1', '2', '5', '7', '8', '9', '6']
// console.log(number2.join('')); // '7,9,9,5,1,2,5,7,8,9,6'
document.querySelector('a').setAttribute('href', `tel:+${number2}`); // номер автоматически подставился в href
// \s - позволяет найти все пробельные символы
// \w - ищет буквы латинского алфавита - цифры или _ \s\w\w\w\w\s - найти слово из 4 букв и пробел в начале и в конце
// \d\s\w 4
// \D - любой символ кроме чисел on 0-9
// \u - работа с символами
// \S - всё кроме пробелов
// \W - всё кроме букв
// \b - граница слова те слово из 3 букв \b...\ или  \b\w\w\w\b - слова из 3 букв
// \B - все кроме не границ

console.log(/^Hello/.test('Hello World')); // true
console.log(/^Hello1/.test('Hello World')); // false
console.log(/World$/.test('Hello World')); // false

// en\s - найти все слова заканчив на en

let regexp = /^\d\d:\d\d$/; // формат времени 22:10
// .rest() - проверка на соответствие

// Квантификация - упрощает повторение символов
// \b\w{3}\b
// n{4} - искать символ n подряд 4 раза
// n{4,6} - искать символ n от 4 вхождений до 6
// * от 0 и выше
// + от 1 и выше
// ? нуль или один раз

let str3 = `1. Первая строка
2. Вторая строка
3. Третья\n 4.строка`;

console.log(str3.match(/^\d/gm)); // ['1', '2', '3', '4'] - начало строки - число - все совпадения - многострочный режим
console.log(str3.match(/\D$/gm)); // ['а', 'а', 'я', 'а'] - любой символ не явл числом в конце строки - все совпадения многострочн режим

let str4 = '4444 3333 5555 1231';
console.log(str4.match(/\d{4}\s\d{4}\s\d{4}\s\d{4}/));

console.log('Hello World'.match(/\bWorld\b/)); // ['World', index: 6, input: 'Hello World', groups: undefined]
console.log('Hello MuWorld'.match(/\bWorld\b/)); // null
console.log('Hello 44 22 555 777'.match(/\b\d\d\b/g)); // ['44', '22']
console.log('6.2'.match(/\d.\d/)); // ['6.2', index: 0, input: '6.2', groups: undefined]
console.log('62'.match(/\d.\d/)); // null
console.log('/'.match(/\//)); // ['/', index: 0, input: '/', groups: undefined]
console.log('16 56 46 76'.match(/[15]6/g)); // ['16', '56']
// [^ayb] любой символ кроме a,y или b
// [^0-9] любой символ кроме цифр от 0-9 тоже что и \D
console.log('email@yandex.ru'.match(/[^\d\sA-Z]/gi)); // ['@', '.']
console.log('0 5 17.254 952,54'.match(/\d+[.,]\d+/g)); // ['17.254', '952,54']
console.log('Привет. Привет.. Привет...Привет....'.match(/\.{3,}/g)); // ['...', '....']

// some practice
//i - не чувствительность к регистру - мы хотим выполнить поиск который не зависит от регистра
console.log(/love/i.test('i love you')); // true - i; // i - поиск который не зависит от регистра
console.log(/LOVE/i.test('i love you')); // true
console.log(/LOVE/.test('i love you')); // false
//g - глобальность - глобальный поиск - ищем все совпадения а не только первое
console.log('i love love you'.match(/love/g)); // ['love', 'love']
console.log('i love love you'.match(/love/)); // ['love', index: 2, input: 'i love love you', groups: undefined]
//m - мультистрочный поиск -  позволяет включить многострочный режим
let str5 = `1 котенок
2 котенок
3 котенок
`;
console.log(str5.match(/^\d/)); // ['1', index: 0, input: '1 котенок\n2 котенок\n3 котенок\n', groups: undefined]
console.log(str5.match(/^\d/gm)); // ['1', '2', '3']

// 3 . Методы
// str.match(regexp)
console.log('i love you'.match(/love/)); // ['love', index: 2, input: 'i love you', groups: undefined] - ПРОПЕРТИС
console.log('i love you'.match(/love/g)); // ['love']
console.log('i love love you'.match(/love/g)); // ['love', 'love']
console.log('i love love you'.match(/like/g)); // null
// str.replace(regexp, '')
console.log('i love you'.replace(/love/, 'like')); // 'i like you'
//str.test()
console.log(/love/.test('i love you')); // true
console.log(/love/.test('i like you')); // false

// 4. Буквенные классы
// \d - любая цифра
// \w - латинская буква - цифра или _
// \s - пробел
// \D - любой символ но не цифра (\d)
// \W - любой символ кроме \w
// \S - любой символ но не пробел (\s)
// . - абсолюнто любой символ кроме \n (перенос строки)
console.log(/\d\d/.test('22 January')); // регулярка на 2 цифры подряд // true
console.log(/\d\d\d/.test('22 January')); // false
console.log(/\d/.test('22 January')); // true - тк есть хотя бы 1 цифра
console.log(/\w/.test('22 January')); // true - тк есть хотя бы 1 латин буква
console.log(/./.test('\n')); // false тк именно есть перенос строки

// 5. Якоря
// ^ - начало строки
// $ - конец
// \b - граница слова
console.log(/^\d\d/.test('22 January')); // true - идет начало с двух цифр
console.log(/^\d\d$/.test('22 January')); // false - идет начало с двух цифр и конец с двух цифр
console.log(/^\d\d$/.test('22')); // true- идет начало с двух цифр и конец с двух цифр
console.log(/\d\d$/.test('test 22')); // true- идет конец с двух цифр
console.log(/\bJava\b/i.test('Javascript')); // false - тк нет границы слова
console.log(/\bJava\b/i.test('Java!')); // true - тк есть границы слова (пробел - воскл знак итд)

// 6. Пропуск специальных символов - \
// [ \ ^ $ ( ) . | ? * + /
// console.log(/[/i.test('Java!'));  SyntaxError
// console.log(/*/i.test('Java!')); SyntaxError
console.log(/\^\$\./.test('^$.')); // true - экранируем такие спец символы
// НО!
const str6 = new RegExp('\\^\\$\\.', 'i');
console.log(str6.test('^$.')); // true

// 7. Наборы и диапазоны
// [sdr] - нам нужно совпадение любого символа из скобок
console.log(/[sfr]/.test('ggggg')); // false
console.log(/[sfr]/.test('gggggr')); // true
// [0-9] - различные диапазоны цифр \d
// [A-Z] или [a-z]
// [0-9A-Za-z]
// киррилица [а-яё] кроме ё
console.log(/[а-я0-9]/.test('fsfsfsф')); // true
// добавления исключения в диапазон
//[^a-n] - галочка в начале диапазона - ЛЮБОЕ КРОМЕ a-n
// 1. . + () - пишутся без экранирования в []
// 2. - не экранир вначале [-]
// 3. ^ экран в начале []
// 4. ] -доллжно экранир в []

// 7. Квантификаторы
