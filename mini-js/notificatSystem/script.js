// при нажатии на кнопку мы должны получить время и сообщение
document
  .querySelector('.notification__form button')
  .addEventListener('click', function () {
    let time = document.querySelector('.notification__form input').value;
    let message = document.querySelector('.notification__form textarea').value;

    let info = document.querySelector('.notification__info');

    if (!time || !message) {
      info.textContent = 'Укажите время и сообщение';
      info.style.opacity = 1;

      // потом скроем сообщение
      setTimeout(() => {
        info.style.opacity = 0;
      }, 2000);

      // уберем потом текст
      setTimeout(() => {
        info.textContent = '';
      }, 3000);
      return;
    }

    // если всё ок - то запишем в локальное хранилище уведомление
    localStorage.setItem(time, message);
  });
