let btns = document.querySelectorAll('.slider__item');
console.log(btns); // NodeList(7) [button.slider__item.active, button.slider__item, button.slider__item, button.slider__item, button.slider__item, button.slider__item, button.slider__item]

for (let btn of btns) {
  btn.onclick = function () {
    // arr fun dont have this
    // console.log(this.innerHTML); // 1 2 3 4 5 6 7
    document
      .querySelector('.slider__breadcrumbs .active')
      .classList.remove('active');

    // this элемент на котор сделан клик
    this.classList.add('active');

    // изменим путь кратинки
    document
      .querySelector('.slider__image img')
      .setAttribute('src', `./img/${this.innerHTML}.jpg`);
  };
}
