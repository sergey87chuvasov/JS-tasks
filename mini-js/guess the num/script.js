'use strict';
let secretNum = Math.ceil(Math.random() * 10);
console.log(secretNum);
let tries = 0;

let res = document.querySelector('.result');

function guessNum(num) {
  if (num === secretNum) {
    res.innerHTML = 'You Win';
    return;
  }

  if (num !== secretNum) {
    tries += 1;
  }

  if (tries >= 5) {
    return (res.innerHTML = 'You Lose');
  }

  console.log('curr ', tries);
}

console.log('cur343r ', tries);
