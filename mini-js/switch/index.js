document.addEventListener('click', function (e) {
  let id = e.target.dataset.toggleId;
  if (!id) return; // проверка если нет этого атрибута data-toggle-id то выход

  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden; // инверсия
});
