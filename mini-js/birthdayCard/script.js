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

const monthIp = [
  '',
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
];

people.forEach((item) => {
  let fio = `${item['name']['f']} ${item['name']['i']} ${item['name']['o']}`;
  // проверка на присутствие даты
  let date = item['date']
    ? `${item['date']['d']} ${month[+item['date']['m']]} ${item['date']['y']}`
    : ``;
  let element = document.createElement('p');
  element.innerHTML = fio + ' ' + date;
  // созд карточки для самих месяцев где есть др
  for (let i = 1; i < 12; i++) {
    if (item['date']['m'] == i) {
      // еще проверка на уже сущ карточку с таким месяцем
      if (document.querySelector(`.item > div .item${i}`) == null) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
          <h4>${monthIp[i]}</h4>
          <div class="item${i}"></div>
        `;
        document.querySelector('.items').append(div);
      }
      document.querySelector(`.items > div .item${i}`).append(element);
    }
  }
});
