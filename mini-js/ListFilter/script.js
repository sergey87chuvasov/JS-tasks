const onSearch = () => {
  const input = document.getElementById('search').value.toUpperCase();
  const list = document.querySelectorAll('#menu-section li');

  list.forEach((el) => {
    const text = el.textContent.toUpperCase();
    text.indexOf(input) > -1
      ? (el.style.display = '')
      : (el.style.display = 'none');
  });
};

const input = document.getElementById('search');
input.addEventListener('click', () => {
  input.classList.add('select-click');
});
