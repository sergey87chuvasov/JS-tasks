update();

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

    // для появления уыедомлений в списке
    update();
  });

// очистка списка уведомлений
document
  .querySelector('.notification__list > button')
  .addEventListener('click', function () {
    if (localStorage.length && confirm('Очистить список уведомлений?')) {
      localStorage.clear();
      //
      update();
      document.querySelector('.notification__list').hidden = true;
    } else if (!localStorage.length) {
      alert('Уведомлений нет!');
    }
  });

// функция для обновления всей программы в целом
function update() {
  if (!localStorage.length) {
    document.querySelector('.notification__list').hidden = true;
  } else {
    document.querySelector('.notification__list').hidden = false;
  }

  // очистка контейнера с уведомлениями
  document.querySelector('.notification__list > div').innerHTML = '';
  // сбросим сообщение с информацией - если оно вдруг было установлено
  document.querySelector('.notification__info').textContent = '';

  // добавим все уведомления в локальном хранилище в список
  for (let key of Object.keys(localStorage)) {
    document.querySelector('.notification__list > div').insertAdjacentHTML(
      'beforeend',
      `
      <div class="notification__item">
        <div>${key} - ${localStorage.getItem(key)}</div>
        <button data-time="${key}">&times</button>
      </div>
      `
    );
  }
  // добавим сброс значений полей ввода
  document.querySelector('.notification__form input').value = '';
  document.querySelector('.notification__form textarea').value = '';

  // проверка звукового уведомления
  if (document.querySelector('.audioAlert')) {
    document.querySelector('.audioAlert').remove();
  }
}

// удален уведомлен нажат на крестик
document
  .querySelector('.notification__list')
  .addEventListener('click', function (e) {
    if (!e.target.dataset.time) {
      return;
    }
    // если же это наша кнопка с крестиком
    localStorage.removeItem(e.target.dataset.time);
    update();
  });

// настройка срабатывания уведомлений
setInterval(() => {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  if (currentHour < 10) {
    currentHour = '0' + currentHour;
  }

  let currentMinute = currentDate.getMinutes();
  if (currentMinute < 10) {
    currentMinute = '0' + currentMinute;
  }

  let currentTime = `${currentHour}: ${currentMinute}`;
  for (let key of Object.keys(localStorage)) {
    let keyHour = key.split(':')[0];
    let keyMinute = key.split(':')[1];

    // сверка для наставки момента уведомления
    if (
      key == currentTime ||
      (keyHour == currentHour && keyMinute < currentMinute)
    ) {
      document
        .querySelector(`button[data-time="${key}"]`)
        .closest('.notification__item')
        .classList.add('notification__warning');
      if (!document.querySelector('.audioAlert')) {
        document
          .querySelector('body')
          .insertAdjacentHTML(
            'afterbegin',
            '<audio loop class="audioAlert"><source src="./source/alert.mp3" type="audio/mpeg"></audio>'
          );
        document.querySelector('.audioAlert').play();
      }
    }
  }
}, 1000);
