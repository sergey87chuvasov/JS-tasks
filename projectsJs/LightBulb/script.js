let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio = document.getElementById('audio');

btn.addEventListener('click', function () {
  body.classList.toggle('on');
  audio.play();
});
