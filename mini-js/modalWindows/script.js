'use strict';
const btnOpenModal = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let value of btnOpenModal) {
  value.addEventListener('click', function () {
    overlay.classList.toggle('hidden');
    modalWindow.classList.toggle('hidden');
  });
}

btnCloseModal.addEventListener('click', function () {
  overlay.classList.toggle('hidden');
  modalWindow.classList.toggle('hidden');
});

overlay.addEventListener('click', function () {
  overlay.classList.toggle('hidden');
  modalWindow.classList.toggle('hidden');
});

document.addEventListener('keydown', function (event) {
  // event - объект событие
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    overlay.classList.toggle('hidden');
    modalWindow.classList.toggle('hidden');
  }
});
