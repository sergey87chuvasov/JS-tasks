const dropdownItems = document.querySelectorAll('.dropdown-item');
// console.log(dropdownItems); // NodeList(2) [li.dropdown-item, li.dropdown-item]

// В данной переменной мы будем хранить текущее открытое меню
let currentOpenedMenu = null;

function toggleDropdownMenu(event) {
  // получаем блок меню внутри .dropdown-item
  const menu = event.currentTarget.querySelector('.dropdown-menu');
  console.log(menu);

  // метод toggle возвращает булевое значение, если клас удален то вернет false а если добавлен то true. Это значение мы сохраняем в переменную
  const isAdded = menu.classList.toggle('d-none');
  console.log(isAdded);
  // если в currentOpenedMenu уже есть блок и он не равен текущем menu то мы его скрываем
  if (currentOpenedMenu && currentOpenedMenu !== menu) {
    currentOpenedMenu.classList.add('d-none');
  }
  // Если класс d-none был удален то значит меню видимо и мы его сохраняем в переменную currentOpenedMenu
  if (!isAdded) {
    currentOpenedMenu = menu;
  }
}

dropdownItems.forEach((dropdownItem) =>
  dropdownItem.addEventListener('click', toggleDropdownMenu)
);
