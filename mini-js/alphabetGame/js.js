'use strict';

const letters = document.querySelectorAll('.boxes__box');
const audioClick = new Audio('./audio/Mountain Audio - Menu Click.mp3');
const audioWin = new Audio('./audio/huge win.wav');
let newLetters;

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener('click', function () {
    //  возвращает Element элемент стоящий перед применяемым
    // before() метод вставляет узел перед элементом в дереве DOM.

    if (letters[i].previousElementSibling !== null) {
      letters[i].previousElementSibling.before(letters[i]);
      audioClick.play();
      newLetters = document.querySelectorAll('.boxes__box');
      console.log(newLetters);
    } else if (letters[i].nextElementSibling !== null) {
      letters[i].nextElementSibling.after(letters[i]);
      audioClick.play();
      newLetters = document.querySelectorAll('.boxes__box');
      console.log(newLetters);
    }

    if (
      newLetters[0].classList.contains('box_a') &&
      newLetters[1].classList.contains('box_b') &&
      newLetters[2].classList.contains('box_c') &&
      newLetters[3].classList.contains('box_d') &&
      newLetters[4].classList.contains('box_e') &&
      newLetters[5].classList.contains('box_f')
    ) {
      audioWin.play();
    }
  });
}
