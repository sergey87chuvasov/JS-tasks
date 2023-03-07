let body = document.querySelector('body');

let images = [
  'url("image01.png")',
  'url("image02.png")',
  'url("image03.png")',
  'url("image04.png")',
  'url("image05.png")',
  'url("image06.png")',
  'url("image07.png")',
  'url("image08.png")',
  'url("image09.png")',
  'url("image10.png")',
  'url("image11.png")',
  'url("image12.png")',
  'url("image13.png")',
  'url("image14.png")',
  'url("image15.png")',
  'url("image16.png")',
];

body.onclick = function (e) {
  let x = e.pageX - e.target.offsetLeft;
  let y = e.pageY - e.target.offsetTop;

  let splash = document.createElement('span');
  splash.style.left = x + 'px';
  splash.style.top = y + 'px';

  let bg = images[Math.floor(Math.random() * images.length)];
  splash.style.backgroundImage = bg;

  this.appendChild(splash);

  setTimeout(() => {
    splash.remove();
  }, 4000);
};
