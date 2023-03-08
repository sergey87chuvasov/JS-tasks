let menuToggle = document.querySelector('.menuToggle');
let tab = document.querySelector('.tab');

menuToggle.addEventListener('click', () => {
  tab.classList.toggle('active');
});
