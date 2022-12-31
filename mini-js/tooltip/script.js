let tooltipElem;

// при наведении мыши на элемент срабатывает событие
document.onmouseover = function (e) {
  let target = e.target;

  // устанавл значение из атрибута (наш текст подсказки)
  let tooltipHtml = target.dataset.tooltip;

  // проверка на не существоавание
  if (!tooltipHtml) return;

  // созд html el с подсказкой
  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  // помещаем текст подсказки
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // установим позицию - получим координаты
  let coords = target.getBoundingClientRect();
  // console.log(coords);

  // созд коорд слева (и получ середину этого элемента)
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) top = coords.top + target.offsetHeight + 5;

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

// убирание подсказки когда мышка покидает элемент
document.onmouseout = function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};
