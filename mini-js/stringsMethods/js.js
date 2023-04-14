'use strict';

document.querySelector('.btn').addEventListener('click', () => {
  const text = document.querySelector('.text').value;
  let output = [];
  // console.log(text);

  const rows = text.split('\n');
  // console.log(rows);

  for (let row of rows) {
    const [first, second] = row.trim().toLowerCase().split('_');
    // console.log(first);
    // console.log(second);

    output.push(`
    ${first}${second.replace(second[0], second[0].toUpperCase())}
    `);
    // console.log(output);
  }

  document.querySelector('.output').innerText = output.join('\n');
});
