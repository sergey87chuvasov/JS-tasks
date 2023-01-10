let data = {
  Овощи: {
    огурцы: 5,
    помидоры: 3,
  },
  Фрукты: {
    красные: {
      клубника: 2,
      малина: 4,
    },
    зеленые: {
      яблоко: 6,
      лайм: 2,
    },
  },
};

// созд функц для созд списка ul
function createUl(obj) {
  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');
  // for in для обхода по объектам
  for (let key in obj) {
    let li = document.createElement('li');
    // проверка значения на число - Функция isNaN проверяет, является ли переданный параметр числом или нет. Вернет true, если параметр не является числом и false, если является.
    if (!isNaN(obj[key])) li.textContent = key + ' ' + obj[key];
    else li.textContent = key;
    // рекурсия
    let childrenUl = createUl(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }
  return ul;
}

// функция для вывода
function createTree(container, obj) {
  document.querySelector(container).append(createUl(obj));
}

createTree('body', data);
