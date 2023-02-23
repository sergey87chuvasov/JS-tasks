const innerText = document.getElementById('latin-text');
const outerText = document.getElementById('latin-result');
const btnEl = document.getElementById('btn');

btnEl.addEventListener('click', () => {
  let text = innerText.value.trim();
  if (text === '') return;

  // template string based solution, writing angle brackets is not a good idea
  const templates =
    '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()_+-={}[]?.,;:\'"\\/ ';

  let out = '';
  for (let i = 0; i < text.length; i++) {
    // angle brackets
    if (text[i] === '>') {
      out += '&#x3E;';
    } else if (text[i] === '<') {
      out += '&#x3C;';
    }
    // for symbols
    else if (text[i] === '\n') {
      out += '<br>';
    } else if (templates.indexOf(text[i]) === -1) {
      out += '<mark>' + text[i] + '</mark>';
    } else {
      out += text[i];
    }
  }
  console.log(out);
  outerText.innerHTML = out;
});
