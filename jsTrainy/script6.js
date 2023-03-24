'use strict';

// таймеры это не фича js,  это api к которым мы имеем доступ работая в браузере
// таймеры отклыдывают выполнение чего - нибудь

setTimeout(() => {
  console.log('Doom!');
}, 2000);

// доп аргумент
setTimeout(
  (message) => {
    console.log(message);
  },
  2000,
  'Дополнительное сообщение'
);

// больше аргументов

setTimeout(
  (message1, message2, message3) => {
    console.log(message1);
    console.log(message2);
    console.log(message3);
  },
  2000,
  'test1',
  'test2',
  'test3'
);

// порядок воспроизведения кода
console.log(1);

setTimeout(
  (message) => {
    console.log(2);
  },
  1000,
  'Дополнительное сообщение'
);

console.log(3); // 1 3 2

// отмена таймера
console.log(1);
const timerX = setTimeout(
  (message1, message2) => {
    console.log(2);
  },
  1000,
  'Дополнительное сообщение',
  'test2'
);
clearTimeout(timerX);

console.log(3); // 1 3

// perfomance
// console.log(performance.now()); // 38.333800077438354 - число в милисек с начало запуска нашего приложения

const mark1 = performance.now();
setTimeout(() => {
  // console.log(performance.now()); // 1042.220999956131
  const mark2 = performance.now();
  console.log(mark2 - mark1); // > 1000
}, 1000);

// работа с интервалами - gjdnjhz.obtcz cj,snbz
const interval = setInterval(() => {
  console.log(new Date()); // новая дата через секунду
}, 1000);

setTimeout(() => {
  clearInterval(interval); // 5 раз и прекратилось
}, 5000);

// упражнение - таймер пиццы

function pizzaTimer(ms) {
  const end = new Date().getTime() + ms;
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat('ru-RU', {
        minute: 'numeric',
        second: 'numeric',
      }).format(end + 100 - new Date())
    );
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    console.log('pizza ready');
  }, ms);
}

pizzaTimer(5000); // 09:26 pizza ready

/*

00:04
00:03
00:02
00:01
pizza ready

 */
