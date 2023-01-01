let btn = slider.querySelector('.slider__btn');

// отменяем выделение для браузера - мышка нажата
btn.onmousedown = function (e) {
  e.preventDefault();

  //  получ коорд позиции движения нашей кнопки
  let shiftX = e.clientX - btn.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  // когда мы двигаем мышкой
  function onMouseMove(e) {
    // нов позиция для нашей кнопки
    let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;
    let rightEdge = slider.offsetWidth - btn.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;

    btn.style.left = newLeft + 'px';
  }

  // когда мы отпускаем мышку
  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

// событие js при перетаскивании элемента
btn.ondragstart = function () {
  // отмен стандартн поведение для перетаскивания слайдера
  return false;
};
