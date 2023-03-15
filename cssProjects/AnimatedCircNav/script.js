const toggleEl = document.querySelector('.toggle');
const menuEl = document.querySelector('.menu');

toggleEl.addEventListener('click', () => {
  menuEl.classList.toggle('active');
});
