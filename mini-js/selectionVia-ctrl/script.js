list.onclick = function (e) {
  // выход из функции если не по Li click
  if (e.target.tagName != 'LI') return;

  if (e.ctrlKey || e.metaKey) {
    toggleSelect(e.target);
  } else {
    singleSelect(e.target);
  }
};

// текст не будет выделяться при двойном клике
list.onmousedown = function () {
  return false;
};

function toggleSelect(li) {
  li.classList.toggle('bgc');
}

function singleSelect(li) {
  for (let elem of list.querySelectorAll('.bgc')) {
    elem.classList.remove('bgc');
  }
  li.classList.add('bgc');
}
