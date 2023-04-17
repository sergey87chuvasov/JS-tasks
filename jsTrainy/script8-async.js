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
