let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

// scrollY —  Возвращает число пикселей, на которое документ пролистали в данный момент по вертикали.

// Событие onscroll происходит при прокручивании содержимого веб-страницы. window.onscroll="<функция>"

// HTMLElement.offsetTop - возвращает расстояние текущего элемента по отношению к верхней части

// HTMLElement.offsetHeight - высота элемента с учётом вертикальных полей и границ в пикселях

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top > offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};
