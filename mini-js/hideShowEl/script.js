// 1 part

// document.querySelector('.btn').onclick = function (event) {
//   document.querySelector('p').hidden = !document.querySelector('p').hidden;
// };

// 2 part
// save collection
let items = document.querySelectorAll('.item');
console.log(items); // NodeList(3) [div.item, div.item, div.item]

for (let item of items) {
  // console.log(item); // <div class='item'>...</div>
  // ишем в карточке
  // Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd), а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.
  // опорный элемент.insertAdjacentHTML(способ вставки, код для вставки)
  item
    .querySelector('.item-title')
    .insertAdjacentHTML('beforeend', '<button class="close">&times;</button>');
  item.querySelector('.close').onclick = () => item.remove();
}
