// input.oninput = function () {
//   console.log(input.value);
// };

// input.onchange = function () {
//   console.log(input.value);
// };

// input.oncut =
//   input.oncopy =
//   input.onpaste =
//     function (e) {
//       console.log(e.type + ' - ' + e.clipboardData.getData('text/plain'));
//       return false;
//     };

let form = document.forms[0];
form.onsubmit = function (e) {
  console.log('Отправка формы');
  e.preventDefault();
};
