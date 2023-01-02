function generateCss() {
  let inset = document.getElementById('inset').checked;
  // конверт значение checked из тру и фалс в строку или значение текса ' inset'
  inset = inset ? ' inset' : '';

  // значения ползунков
  let offsetX = document.getElementById('offsetX').value;
  let offsetY = document.getElementById('offsetY').value;
  let blur = document.getElementById('blur').value;
  let stretch = document.getElementById('stretch').value;

  // код в 16 hex формате  # красн 00 - зелен 00  - синий 00
  let color = document.getElementById('color').value; // '#000000'

  // конверт в 10 систему
  // Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
  let red = parseInt(color.slice(1, 3), 16);
  let green = parseInt(color.slice(3, 5), 16);
  let blue = parseInt(color.slice(5, 7), 16);

  // созд прозрачность
  let opacity = document.getElementById('opacity').value;

  // result
  let result = document.getElementById('result');
  let textarea = document.getElementById('cssCode');

  //main
  let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${red}, ${green}, ${blue}, ${opacity})`;

  textarea.value = 'box-shadow:' + str;
  result.style.boxShadow = str;
}

// добавим всем input обработчик
for (let item of document.querySelectorAll('input')) {
  item.addEventListener('input', generateCss);
}

// вызываем функцию еще раз что бы видеть результ в textarea для начальных значений
generateCss();
