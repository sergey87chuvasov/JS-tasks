// const table = document.getElementById('table');
// console.log(table);
table.onclick = function (e) {
  // только по клику на заголовок должна срабатывать сортировка, если на другие то сортировка выполняться не будет
  if (e.target.tagName != 'TH') return;
  let th = e.target;

  // метод (индекс столбца либо 0 или 1, и параметр data-type="" )
  // cellIndex свойство возвращает коллекцию положение клеточной линии клетки.(определяет индекс ячейки)
  sortTable(th.cellIndex, th.dataset.type);
};

function sortTable(colNum, type) {
  let tbody = table.querySelector('tbody'); // наш тег с данными
  // из строк нашего тега tbody мы создаем массив
  let rowsArray = Array.from(tbody.rows);
  // функция сравнения в зависимости от передоваемого типа
  let compare;
  switch (type) {
    case 'number':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }
  rowsArray.sort(compare);

  // добавляем осортир строки - те они сами заменятся в нужном порядке
  tbody.append(...rowsArray);
}
