const month = [
  '',
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const people = [
  {
    room: '8',
    name: {
      f: 'Иванов',
      i: 'Геша',
      o: 'Петрович',
    },
    date: {
      d: 17,
      m: 5,
      y: 1997,
    },
    number: ['8945678911, 2303486923'],
  },
  {
    room: '13',
    name: {
      f: 'Петров',
      i: 'Коля',
      o: 'Ильич',
    },
    date: {
      d: 14,
      m: 2,
      y: 1991,
    },
    number: ['9945678911'],
  },
  {
    room: '85',
    name: {
      f: 'Смирнов',
      i: 'Коля',
      o: 'Михайлович',
    },
    date: {
      d: 25,
      m: 11,
      y: 1971,
    },
    number: ['1145678911'],
  },
  {
    room: '99',
    name: {
      f: 'Прохоров',
      i: 'Марк',
      o: 'Алексеевич',
    },
    date: {
      d: 01,
      m: 12,
      y: 1914,
    },
    number: ['55945678911'],
  },
];

function createCards(selector, array) {
  for (let i = 0; i < array.length; i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
    ФИО: ${array[i]['name']['f']} ${array[i]['name']['i']} ${
      array[i]['name']['o']
    }<br>
    Номера телефона: ${array[i]['number'].join(', ')}<br>
    День Рождения: ${array[i]['date']['d']} ${month[+array[i]['date']['m']]} 
    ${array[i]['date']['y']}
  <br>
    Комната: ${array[i]['room']}<br>
  `;
    document.querySelector(selector).append(item);
  }
}

createCards('.items', people);
