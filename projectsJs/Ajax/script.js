const apiURL = 'https://jsonplaceholder.typicode.com';
const usersListEl = document.querySelector('.users-list');
const userInfoEl = document.querySelector('.user-info');

// dom events
usersListEl.addEventListener('click', onUserClickHandler);

function onUserClickHandler(e) {
  e.preventDefault();

  if (e.target.dataset.userId) {
    // console.log(e.target.dataset.userId);
    getUserInfoHTTP(e.target.dataset.userId, onGetUserInfoCallback);
  }
}

// implement a get users request
function getUsersHTTP(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiURL}/users`);

  xhr.addEventListener('load', () => {
    // console.log(xhr.responseText);
    if (xhr.status !== 200) {
      console.log('error', xhr.status);
      return;
    }

    const res = JSON.parse(xhr.responseText);
    cb(res);
  });
  xhr.send();
}

function getUserInfoHTTP(id, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiURL}/users/${id}`);

  xhr.addEventListener('load', () => {
    // console.log(xhr.responseText);
    if (xhr.status !== 200) {
      console.log('error', xhr.status);
      return;
    }

    const res = JSON.parse(xhr.responseText);
    cb(res);
  });
  xhr.send();
}

function onGetUserInfoCallback(user) {
  // console.log(user);
  if (!user.id) {
    console.log('user not found');
    return;
  }
  renderUserInfo(user);
}

// implement a response handler from the server
function onGetUsersCallback(users) {
  // console.log(users); // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

  if (!users.length) {
    return;
  }

  renderUsersList(users);
}

// user list render
function renderUsersList(users) {
  const fragment = users.reduce(
    (acc, user) => acc + userListItemTemplate(user),
    ''
  );
  // console.log(fragment);

  usersListEl.insertAdjacentHTML('afterbegin', fragment);
}

function renderUserInfo(user) {
  userInfoEl.innerHTML = '';
  const template = userInfoTemplate(user);
  userInfoEl.insertAdjacentHTML('afterbegin', template);
}

// return one user
function userListItemTemplate(user) {
  return `
    <button type='button' class="list-group-item list-group-item-action" data-user-id="${user.id}">${user.name}</button>
  `;
}

function userInfoTemplate(user) {
  return `
    <div class="card border-dark mb-3">
      <div class="card-header">${user.name}</div>
      <div class="card-body text-dark">
        <h5 class="card-title">${user.email}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">nickname - ${user.username}</li>
          <li class="list-group-item">website - ${user.website}</li>
          <li class="list-group-item">company - ${user.company.name}</li>
          <li class="list-group-item">city - ${user.address.city}</li>
        </ul>
      </div>
      <div class="card-footer bg-transparent border-dark"> phone- ${user.phone}</div>
    </div>

  `;
}

// init app
getUsersHTTP(onGetUsersCallback); // get response all users
