import {
  openPopup,
  closePopup
} from "./modal.js";

import {
  cardList,
  imagePopup,
  placeImage,
  placeText,
  cardNameInput,
  cardLinkInput,
  cardAddSubmitButton,
  config,
  cardAddPopup,
  renderLoading
} from "./utils.js";

import{
  getUserData,
  getInitialCards,
  addCard,
  likeCard,
  deleteCardData,
  disLikeCard,
} from './api.js'

import {
  cleanPopupSpanErrors,
} from "./validate.js";

// // Открытие попапа карточки
export function openCardPopup(){
  cardNameInput.value = '';
  cardLinkInput.value = '';
  cleanPopupSpanErrors(cardAddPopup, [cardNameInput, cardLinkInput], cardAddSubmitButton, config);
  openPopup(cardAddPopup);
}

// Создаём карточку
export function createCard (item, userId) {
  const cardName = item.name;
  const cardLink = item.link;
  const cardId = item._id;
  const cardOwnerId = item.owner._id;
  const likes = item.likes
  const cardTemplate = document.querySelector('#template-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardDeleteButton = cardElement.querySelector('.element__remove-btn');
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardElement.dataset.cardId = cardId;
  cardElement.querySelector('.element__name').textContent = cardName;
  cardElement.querySelector('.element__button').addEventListener('click', likeCardHandler);
  cardDeleteButton.addEventListener('click', deleteCardUser);
  disableCardDelete(userId, cardOwnerId, cardDeleteButton);
  if(likes.length !== 0) {
    cardElement.querySelector('.element__likes-count').textContent = likes.length;
    const cardLiked = likes.find(like => like._id === userId ? true : false);
    if (cardLiked){
      cardElement.querySelector('.element__button').classList.toggle('element__button_active');
    };
  }
  cardImage.addEventListener('click', function() {
    placeImage.src = cardImage.src;
    placeImage.alt = cardImage.alt;
    placeText.textContent = cardImage.alt;
    openPopup(imagePopup);
  });
  return cardElement;
}

getUserData()
.then(data => {
  return data;
})
.then(userData => {
  getInitialCards()
    .then(cardsData => {
    cardsData.forEach(function (item) {
      cardList.append(createCard(item, userData._id));
    });
    return cardsData;
    })
  .catch((err) => {
      console.log(err);
  })
})
.catch((err) => {
  console.log(err);
})

export function likeCardHandler(evt) {
  const target = evt.target;
  const cardElement = target.closest('.element');
  const cardId = cardElement.dataset.cardId;
  getInitialCards()
    .then(cardsData => {
      let cardObject = cardsData.find(item => {
        return item._id == cardId;
      });
      let cardObjectLikes = cardObject.likes;
      getUserData()
        .then(userData => {
          if (!cardObjectLikes.some(item => {
            return item.name == userData.name && item.about == userData.about;
          })) {
            likeCard(cardObject._id)
              .then(cardInfo => {
                target.classList.add('element__button_active');
                target.closest('.element').querySelector('.element__likes-count').textContent = cardInfo.likes.length;
              });
          } else {
            disLikeCard(cardObject._id)
            .then(cardInfo => {
              target.classList.remove('element__button_active');
              target.closest('.element').querySelector('.element__likes-count').textContent = cardInfo.likes.length;
            });
          }
        })
        .catch((err) => {
          console.log(err);
          });
    })
}

export function disableCardDelete(userId, OwnerId, button) {
  if(userId != OwnerId) {
    button.classList.add('element__remove-btn_inactive');
  }
}

// Карточка вручную
export function addCardHandler (evt) {
  evt.preventDefault();
  renderLoading(true, cardAddSubmitButton, 'Создать');
  getUserData()
    .then(user => {
    return user._id;
    })
    .then(id => {
      addCard(cardNameInput.value, cardLinkInput.value)
      .then(res => {
        cardList.prepend(createCard(res, id));
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
    console.log(err);
    })
    .finally(() => {
      renderLoading(false, cardAddSubmitButton, 'Создать');
      closePopup(cardAddPopup);
    })
}

export function deleteCardUser(evt) {
  const target = evt.target;
  const card = target.closest('.element');
  deleteCardData(card.dataset.cardId)
    .then(() => {
      card.remove();
    })
    .catch((err) => {
    console.log(err);
    });
}

