let form = document.forms.calculator;

form.money.oninput = calculate;
form.month.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
  // нач знач суммы
  let initial = +form.money.value;
  if (!initial) return;

  // процент ставка
  let interest = form.interest.value * 0.01;
  if (!interest) return;

  // срок вклада в годах /12
  let year = form.month.value / 12;
  if (!year) return;

  //округление
  let result = Math.round(initial * (1 + interest * year));

  // вывод в виде столбцов
  let height = (result / form.money.value) * 100 + 'px';
  document.getElementById('height-after').style.height = height;
  document.getElementById('money-before').innerHTML = form.money.value;
  document.getElementById('money-after').innerHTML = result;
}

// 1 раз вызываем самостоятельно
calculate();
