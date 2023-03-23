'use strict';
// созд - текущее время
const now = new Date();
console.log(now); // Thu Mar 23 2023 22:54:28

// даты определенного значения - ы виде строки
console.log(new Date('01-01-2023')); // Sun Jan 01 2023 00:00:00
console.log(new Date('02/01/2023')); // Wed Feb 01 2023 00:00:00
console.log(new Date('2023/01/02')); // Mon Jan 02 2023 00:00:00
console.log(new Date('10 Jan 2023')); // Tue Jan 10 2023 00:00:00

// в виде чисел - месяц с нуля
console.log(new Date(2024, 10, 20)); // Wed Nov 20 2024 00:00:00
// можно и так
console.log(new Date(2024, 88, 44)); // Fri Jun 13 2031 00:00:00

// можем передать и часы
console.log(new Date(2024, 10, 20, 10, 5, 15)); // Wed Nov 20 2024 10:05:15

// начальное время
console.log(new Date(0)); // Thu Jan 01 1970 03:00:00
console.log(new Date(1 * 24 * 60 * 60 * 1000)); // Fri Jan 02 1970 03:00:00

// получить тайм стем- милисек с начального юникс времени
console.log(Date.now()); // 1679602444671

// методы - для получения нашей даты
console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // 2 - март
console.log(now.getDate()); // 23
console.log(now.getDay()); // 4 - тк четверг
console.log(now.getHours()); // 22 часа
console.log(now.getMinutes()); // 54 минуты
// наш тайм степ
console.log(now.getTime()); //  1679601268535 - метод позволяет получить число милисекунд от 1 января 1970 года до указанной даты?

// можем модифицировать (например вперед в будущее)
console.log(now.setFullYear(2030)); // 1900526068535
console.log(new Date(now.setFullYear(2030))); // Sat Mar 23 2030 22:54:28

// установить
console.log(new Date(now.setMonth(10))); // Sat Nov 23 2030 22:54:28

// Метод setTime() устанавливает время объекта Date в значение, представляемое количеством миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC.

// ОПЕРАЦИИ С ДАТАМИ
const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
console.log(Number(date1)); // 1731618000000 - получаем наш таймстамп (англ. timestamp).
console.log(Number(date2)); // 1734210000000
console.log(date2 - date1); // 2592000000

// напишем функцию которая считает число дней прошедшими между двумя датами
// нам нужно конвертац милисек в сек - мин - счасы - дни
function getDaysBetweenDates(dateFirst, dateSecond) {
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(date1, date2)); // 30 дней прошло

// СРАВНЕНИЕ ДАТ
const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 3);

console.log(first > second); // true - те идет сравнение под капотом тайм стемпов
// по сути
console.log(first.getTime() > second.getTime()); // true - те идет сравнение под капотом тайм стемпов

// сравним даты
const first1 = new Date(2024, 10, 4);
const second1 = new Date(2024, 10, 4);
console.log(first1 === second1); // false сравниваются конкретно ссылки на объект
console.log(first1 == second1); // false
// выход один - сравнить таймстемпы
console.log(first1.getTime() === second1.getTime()); // true - тк идет числовое сравнение
console.log(first1.getTime() == second1.getTime()); // true
// или
console.log(Number(first1) === Number(second1)); // true

// ПРАКТИКА - сделать функцию проверки дня рождения
const user99 = {
  name: 'Serge',
  //   birth: '03/23/2023', - true
  birth: '03/21/2023',
};

function isBirth(user) {
  const birthDate = new Date(user.birth);
  console.log(birthDate); // Fri Dec 23 2022

  // now месяц
  const now = new Date();
  if (birthDate.getMonth() !== now.getMonth()) {
    return false;
  }

  // день
  if (birthDate.getDate() !== now.getDate()) {
    return false;
  }

  return true;
}

console.log(isBirth(user99)); // false
