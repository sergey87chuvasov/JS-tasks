const PNONE_NUMBER = {
  'Группа номеров 1': [
    ['Номер 1', '2745935'],
    ['Номер 2', '2185930'],
    ['Номер 3', '2445785'],
  ],
  'Группа номеров 2': [['Номер 1', '2555977']],
  'Группа номеров 3': [
    ['Номер 1', '274593, 348753'],
    ['Номер 2', '444593, 778753'],
  ],
};

for (let key in PNONE_NUMBER) {
  // созд тег row - и получаем наши заголовки в табл
  let row = document.createElement('tr');
  row.innerHTML = `
    <th colspan="2">${key}</th>
  `;
  document.querySelector('table').append(row);

  // проходим по номерам по отдельности
  for (let i = 0; i < PNONE_NUMBER[key].length; i++) {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${PNONE_NUMBER[key][i][0]}</td>
      <td>${PNONE_NUMBER[key][i][1]}</td>
    `;
    document.querySelector('table').append(row);
  }
}
