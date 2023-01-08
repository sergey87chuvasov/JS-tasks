const journals = [
  ['1', 'Описание журнала', 'yes'],
  ['2', 'Описание журнала', 'no'],
  ['3', 'Описание журнала', 'no'],
  ['4', 'Описание журнала', 'yes'],
];

journals.forEach((el) => {
  let row = document.createElement('tr');
  row.innerHTML = `
    <td>${el[0]}</td>
    <td>${el[1]}</td>
    <td>${
      el[2] == 'yes'
        ? '<span style="color: #05da00">&#9745;</span>'
        : el[2] == 'no'
        ? '<span style="color: red">&#9746;</span>'
        : el[2]
    }</td>
  `;
  document.querySelector('table').append(row);
});
