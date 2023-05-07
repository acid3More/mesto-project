const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-23',
  headers: {
    authorization: '232e374d-f2a2-4827-a26d-97bdbf695bfb',
    'Content-Type': 'application/json'
  }
}

// Запрашиваем данные с сервера
export function getUserData(){
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkRes);
}

// Вносим изменения профиля на сервер
export function editUserInfo(name, job){
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: `${name}`,
      about: `${job}`,
    }),
    headers: config.headers
  })
    .then(checkRes);
}

// Вносим изменения аватарки на сервер
export function editUserImage(link){
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    body: JSON.stringify({
      avatar: `${link}`
    }),
    headers: config.headers
  })
    .then(checkRes);
}

// Запрашиваем карточки с сервера
export function getInitialCards(){
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkRes);
}

// Вручкую добавляем карточки на сервер
export function addCard(name, link){
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`,
    }),
    headers: config.headers
  })
    .then(checkRes);
}

// Удаляем карточку с сервера
export const deleteCardData = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkRes);
}

// Лайк
export function likeCard(cardId){
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(checkRes);
}

// Дизлайк
export function disLikeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
  }).then(checkRes);
}

// Общая
function checkRes(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}