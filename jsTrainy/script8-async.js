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
  method: 'GET' /* or POST/PUT/PATCH/DELETE */,
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