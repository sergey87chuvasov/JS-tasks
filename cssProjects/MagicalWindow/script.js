const windowEl = document.getElementById('window');
const dawn = document.getElementById('dawn');
const day = document.getElementById('day');
const sunset = document.getElementById('sunset');
const night = document.getElementById('night');

dawn.addEventListener('click', () => {
  windowEl.style.backgroundColor = '#718EC4';
});

day.addEventListener('click', () => {
  windowEl.style.backgroundColor = '#87CEEB';
});

sunset.addEventListener('click', () => {
  windowEl.style.backgroundColor = '#FC6A38';
});

night.addEventListener('click', () => {
  windowEl.style.backgroundColor = '#08183A';
});
