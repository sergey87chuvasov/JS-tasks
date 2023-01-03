// функ для обновления времени
function update() {
  let date = new Date();

  // разделим дату на компоненты - часы минуты секунды
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // проверки
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  // вывод
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(update, 1000);
