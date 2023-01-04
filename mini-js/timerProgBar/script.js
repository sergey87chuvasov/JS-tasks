function myTimer(seconds) {
  let startDate = new Date();
  let endDate = new Date();
  endDate = endDate.setSeconds(endDate.getSeconds() + seconds);

  let interval = setInterval(() => {
    let currentDate = new Date();
    let leftPercent = Math.trunc(
      ((endDate - currentDate) / (endDate - startDate)) * 100
    );
    // сколько процентов прошло в прогресс баре
    let passedPercent = +(100 - leftPercent);

    document.querySelector('.timer-progressbar__fill').textContent =
      passedPercent + '%';
    document.querySelector('.timer-progressbar__fill').style.width =
      passedPercent + '%';

    // empty
    document.querySelector('.timer-progressbar__empty').textContent =
      leftPercent + '%';
    document.querySelector('.timer-progressbar__empty').style.width =
      leftPercent + '%';

    if (leftPercent == 0) {
      clearInterval(interval);
      document.querySelector('.timer-progressbar__empty').style.display =
        'none';
    }
  }, 1000);
}

myTimer(9);
