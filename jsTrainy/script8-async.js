/* 

// Асинхронная операция - передача операции для выполнения на стороне (web api)
console.log(1);

// идет в web api а потом в stack
setTimeout(() => {
  console.log(2);
});

console.log(3); // 1 3 2

// Запросы на сервер
// AJAX - асинхронное взаимодействие с удаленным сервером для получ и отправки данных

// fetch - протокол - хост - путь
fetch('https://dummyjson.com/products', {
  method: 'GET' /* or POST/PUT/PATCH/DELETE ,
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// пример с insomnia

// json - формат описания объектов в js obj notation - хорошая читаемость но не сильно оптимален
// он состоит из ключа (строка) - строго двойные ковычки - и значения (разного)
{
  "id": 1,
  "title": 'test',
  "price": true
}

// xml http request - знать нужно хоть и старый
const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products/1');
request.send();

request.addEventListener('load', function() {
  // console.log(this.responseText)
  console.log(JSON.parse(this.responseText)); // {id: 1, title: 'iPhone 9', description: 'An apple mobile which is nothing like apple', price: 549, discountPercentage: 12.96, …}

  const data = JSON.parse(this.responseText);
  console.log(data)
})

console.log('end'); // снчала end а потом запрос

// ПРАКТИКА - Получить среднюю цены 30 товаров из API
const request2 = new XMLHttpRequest();
request2.open('GET', 'https://dummyjson.com/products');
request2.send();
// далее мы подписываемся на приход данных
request2.addEventListener('load', function() {
  const data2 = JSON.parse(this.responseText);
  console.log(data2) // {products: Array(30), total: 100, skip: 0, limit: 30}

  // или сделаем деструктур и получим products те его массив
  const { products } = JSON.parse(this.responseText);
  console.log(products) // (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

  // получим ценну
  const sum = products.reduce((acc, p) => acc += p.price, 0);
  console.log(sum) // 11190
  
  // получим среднее
  const averSum = sum / products.length;
  console.log(averSum) // 373
})


// послед выполн запросов - callbackHell

// Promise - это контейнер для значения, которое вренеться в будущем
// состояния - Pending - Settled - [Fulfield, Rejected]


const res = fetch('https://dummyjson.com/products/1')
console.log(res) // Promise { <pending> }

// Обработка Promise
fetch('https://dummyjson.com/products').then((response) => {
  console.log(response)
  // мы получ json - он возвр promise
  // console.log(response.json())
  return response.json()
}).then((data) => {
  console.log(data)
})

// short way
const res3 = fetch('https://dummyjson.com/products/1').then((response) => response.json()).then((data) => data);
console.log(res3)

// Цепочка Promise
fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then(({ products }) => {
  console.log(products)
  // делаем ещё один запрос за ним
  return fetch('https://dummyjson.com/products/' + products[0].id)
})
.then(response => response.json())
.then(data => {
  console.log(data) // {id: 1, title: 'iPhone 9', description: 'An apple mobile which is nothing like apple', price: 549, discountPercentage: 12.96, …}
})

// Обработка reject
// сделаем ошибку в запросе
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(({ products }) => {
  console.log(products)
  // делаем ещё один запрос за ним
  return fetch('https://dummyjson.com/products/' + products[0].id)
})
.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch(error = console.log(error))
.finally(() => {
  console.log('Finally')
})

*/

// ПРАКТИКА - ПОЛУЧИТЬ СПИСОК КАТЕГОРИЙ

function createSelect(array) {
  const el = document.querySelector('.filter');
  el.innerHTML = `<select>
    ${array.map((arrEl) => `<option value=${arrEl}>${arrEl}</option>`)}
  </select>`;
}

function getCategories() {
  fetch('https://dummyjson.com/products/categories')
    .then((response) => response.json())
    .then((data) => createSelect(data))
    .catch((error) => console.error(`Error: ${error}`));
}

// getCategories();

// ручное создание ошибок - сделаем ошибку в fetch запросе
/* 
fetch('https://dummyjson.com/productss')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`is erorr ${response.status}`);
    }
    return response.json();
  })
  .then(({ products }) => {
    console.log(products);
    // делаем ещё один запрос за ним
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    const el = document.querySelector('.filter2');
    el.innerHTML = error.message;
  });
  
*/

// УПРАЖНЕНИЕ  - ФУНКЦИЯ ЗАПРОСОВ

function getData(url, errorMessage, method = 'GET') {
  return fetch(url, {
    method,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
  });
}

getData('https://dummyjson.com/products', 'Can not get products')
  .then(({ products }) => {
    console.log(products);
    return getData('https://dummyjson.com/products/' + products[0].id);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    const el = document.querySelector('.filter2');
    el.innerHTML = error.message;
  });

// Что будет выведено в консоль?

let promise = new Promise((resolve, reject) => {
  resolve('Resolved');
});
promise
  .then((value) => {
    console.log(value);
    return 'Then Returned';
  })
  .finally(() => {
    console.log('Finally Executed');
  })
  .then((value) => {
    console.log(value);
  }); // Resolve - Finally Executed - Then Returned

// event loop - Promise
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve(3).then((res) => console.log(res));

console.log(4); // 1 4 3 2

// блокировка операции
for (let i = 0; i < 1000000000; i++) {}

// создание promise
const prom = new Promise((resolve, reject) => {
  resolve('Success');
});

prom.then((data) => console.log(data)); // Success

// 2
const prom2 = new Promise((resolve, reject) => {
  if (new Date() < new Date('01/01/2024')) {
    reject(new Error('error'));
  }
  resolve('Success');
});

prom2.then((data) => console.log(data)).catch((error) => console.log(error)); // error

// 3
function timeout3(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
}

timeout3(1)
  .then(() => {
    console.log(1);
    return timeout3(1);
  })
  .then(() => {
    console.log(1);
  }); // 1 1

// СТАТИЧЕСКИЕ МЕТОДЫ promise
// мгновенный ответ
Promise.resolve('Instant').then((data) => console.log(data)); // Instant
const prom4 = new Promise((resolve) => {
  console.log('Constructor');
  setTimeout(() => {
    resolve('Timer');
  }, 1000);
});
prom4.then((data) => console.log(data));
Promise.reject(new Error('Error')).catch((error) => console.error(error));

/*
Constructor
Instant
Error: Error
Timer
 */

// УПРАЖНЕНИЕ СОЗДАНИЕ fetch
// Сделать функцию myFetch c XMLHttpRequest

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function () {
      if (this.status > 400) {
        reject(new Error(this.status));
      }
      resolve(this.responseText);
    });

    request.addEventListener('error', function () {
      reject(new Error(this.status));
    });

    request.addEventListener('timeout', function () {
      reject(new Error('Timeout'));
    });
  });
}

myFetch('https://dummyjson.com/products')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// ASYNC AWAIT - ИСПОЛЬЗУЕТСЯ В БОЛЬШИНСТВЕ СЛУЧАЕВ НА ПРАКТИКЕ

console.log('start');
function getProducts() {
  fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => console.log(data));
}
getProducts();
console.log('end');

// перепишем на async await
// как только функция асинхронна она по умолчанию возвращает Promise
console.log('start2');
async function getProducts2() {
  // подожди пока await отработает и запихни результат в res
  const productsResponse = await fetch('https://dummyjson.com/products');
  const { products } = await productsResponse.json();
  console.log(products);

  // если несколько запросов- например мы уже стучимся до конкретного продукта
  const productResponse = await fetch(
    'https://dummyjson.com/products/' + products[0].id
  );
  const product = await productResponse.json();
  console.log(product);
}
getProducts2(); // мы получили id конкретного продукта {id: 1, title: 'iPhone 9', description: 'An apple mobile which is nothing like apple', price: 549, discountPercentage: 12.96, …}
console.log('end2');

// TRY CATCH - отлов ошибок в случае их появления

console.log('start3');
async function getProducts3() {
  try {
    const productsResponse = await fetch('https://dummyjson.com/productss');
    // работа со статус кодом
    if (!productsResponse.ok) {
      throw new Error(productsResponse.status);
    }
    const { products } = await productsResponse.json();
    console.log(products);

    const productResponse = await fetch(
      'https://dummyjson.com/products/' + products[0].id
    );
    const product = await productResponse.json();
    console.log(product);
  } catch (e) {
    console.error(e);
  } finally {
    console.log('Finnaly');
  }
}
getProducts3();
console.log('end3');

// УПРАЖНЕНИЕ МОЙ ГОРОД
// ПОЛУЧИТЬ геолок исп getCurrPosit() web api

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ latitude: coords.latitude, longitude: coords.longitude });
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function getMycity() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}00`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    console.log(data.city);
  } catch (e) {
    console.error(e);
  }
}
getMycity(); // нажимае разрешить и получаем данные в консоле лог об моей геолокации
