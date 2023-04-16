// import { Column } from './column.js';

const canvas = document.getElementById('canvas');

// 2d - аргумент, сохраняем ссылку на контекст
const context = canvas.getContext('2d');

// зададим размер канвас в пикселях - для пропорц изобр
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;

// заполним экран столбцами
const columns = [];
// узнаем количество необходимых столбцов
const columnsCount = canvas.width / FONT_SIZE;

for (let i = 0; i < columnsCount; i++) {
  columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context));
}

// укажем шрифт
context.font = `bold ${FONT_SIZE}px monospace`;

// переменная для изменения положения символа по вертикали
// let y = 0;

const column = new Column(100, FONT_SIZE, canvas.height, context);

// созд анимацию падающего символа
function animate() {
  // сделаем стирание символа через полупрозрачн прямоуг размером с канвас для перекрытия символа
  context.fillStyle = 'rgba(0, 0, 0, 0.1)';
  // большой прямоуг на весь канвас
  context.fillRect(0, 0, canvas.width, canvas.height);

  // укажем зеленый цвет для шрифта
  context.fillStyle = 'green';

  // нарисуем букву M на позиции
  // context.fillText('M', 100, y);

  // после каждой отрисовки символа увеличиваем y на размер шрифта
  // y += FONT_SIZE;
  // + отступ по высоте
  // context.fillText('M', 100, 100 + FONT_SIZE);

  columns.forEach((column) => column.drawSymbol());

  // для созд ангимац вызыв функц кажд 50 мили сек
  setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();
