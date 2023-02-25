import Ball from './Ball.js';

const ball = new Ball(document.getElementById('ball'));

let lastTime;

function update(time) {
  // console.log(time);
  if (lastTime != null) {
    const delta = time - lastTime;
    // console.log(delta);
    ball.update(delta);
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
