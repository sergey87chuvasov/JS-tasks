const CURRENT_YEAR = 2023;
const CORRECT_ANSWER = 'Ответ правильный';
const ERROR_ANSWER = 'Ответ НЕ правильный';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
  // базовая проверка
  const inputValue = input.value;
  if (!inputValue) return;

  const answer = Number(input.value);
  let output = CORRECT_ANSWER;

  if (answer !== CURRENT_YEAR) {
    output = ERROR_ANSWER;
  }

  result.innerHTML = output;
});
