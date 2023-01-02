// main func
// elem - css selector
// js month 0-11
function createCalendar(elem, year, month) {
  elem = document.querySelector(elem);
  let mon = month - 1;
  let d = new Date(year, mon);

  // созд тб
  let table = `
  <table>
    <caption>${month}.${year}</caption>
    <tr>
      <th>пн</th>
      <th>вт</th>
      <th>ср</th>
      <th>чт</th>
      <th>пт</th>
      <th>сб</th>
      <th>вс</th>
    </tr>
    <tr>
  `;

  // реализация пустых пробелов ДО
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // генератор всех дней
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';
    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }
    d.setDate(d.getDate() + 1);
  }

  // реализация пустых пробелов после
  if (getDay(d) != 0) {
    // это проверка что не понедельник
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  // for close table
  table += '</tr></table>';
  elem.innerHTML = table;
}

createCalendar('body', 2023, 1);

// функц для получения дня недели не стандартного а тот который нужен нам
// date = new Date()
// getDate() - Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
function getDay(date) {
  let day = date.getDay();
  // восрк по умолчанию в js == 0
  if (day == 0) day = 7;
  return day - 1; // 7-1 = 6 ( у нас будут возвр числа от 0 - 6 те 0 понед а 6 - воскр)
}
