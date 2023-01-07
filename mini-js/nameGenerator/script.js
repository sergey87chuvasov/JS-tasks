let countries = [
  'Canada',
  'USA',
  'France',
  'Italy',
  'Belarus',
  'Poland',
  'Camerun',
  'Germany',
  'Ukraine',
];
let names = [
  'Serge',
  'Anna',
  'Bred',
  'Tom',
  'Helen',
  'Alena',
  'Mary',
  'Anton',
  'Gleb',
];

function allRandomNames(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(`${arr1[i]} ${arr2[j]}`);
    }
  }
  return result;
}

let allNames = allRandomNames(countries, names);
// console.log(allNames);

// выведем все на стр
// for (let i = 0; i < allNames.length; i++) {
//   let item = document.createElement('div');
//   item.classList.add('menu_link');
//   item.textContent = allNames[i];
//   document.body.append(item);
// }

let item = document.createElement('div');
item.classList.add('menu_link');

// создадим интервал
setInterval(() => {
  item.textContent = allNames[Math.floor(Math.random() * allNames.length)];
  document.body.append(item);
}, 2000);
