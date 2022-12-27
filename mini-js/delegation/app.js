let currentId;
table.onclick = function (e) {
  let td = e.target.closest('td');
  if (!td) return;
  if (!table.contains(td)) return;
  hover(td);
};

function hover(td) {
  if (currentId) {
    currentId.classList.remove('bgc');
  }
  currentId = td;
  currentId.classList.add('bgc');
}
