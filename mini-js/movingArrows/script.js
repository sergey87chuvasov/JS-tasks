// Атрибут tabindex устанавливает порядок получения фокуса при переходе между элементами с помощью клавиши Tab
image.tabIndex = 0;

// метод getBoundingClientRect() возвращает объект DOMRect, который содержит размеры элемента и его положение относительно видимой области просмотра. Метод getBoundingClientRect() не принимает аргументов.Возвращаемый объект DOMRect содержит свойства left, right, top и bottom. Свойства left и top возвращают координаты X и Y верхнего левого угла элемента, а свойства right и bottom возвращают координаты правого нижнего угла элемента.
image.onclick = function () {
  // получ коорд этого элем сверху- слева
  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';
  this.style.position = 'fixed';
};

// Событие keydown срабатывает, когда клавиша была нажата.

image.onkeydown = function (e) {
  // проверяем какая кнопка нажата
  switch (e.key) {
    case 'ArrowLeft':
      // для конвертац в целое число parseInt - минус значение ширины этого элемента
      this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
      return false;
    case 'ArrowRight':
      this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
      return false;
    case 'ArrowUp':
      this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
      return false;
    case 'ArrowDown':
      this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
      return false;
  }
};
